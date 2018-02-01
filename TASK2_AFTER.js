const _ = require('underscore');

exports.inviteUser = function (req, res) {
    let invitationBody = req.body;
    let authUrl = 'https://url.to.auth.system.com/invitation';

    superagent
        .post(authUrl)
        .send(invitationBody)
        .end((err, invitationResponse) => {
            if (err) return errorHandler(err, res);

            if (invitationResponse.status === 201) {
                findUserAndUpdate(req, res);
            } else if (invitationResponse.status === 200) {
                return errorHandler({ code: 400, message: 'User already invited to this shop', });
            }
            res.json(invitationResponse);
        });
};

function findUserAndUpdate(req, res) {
    User.findOneAndUpdate({
        authId: invitationResponse.body.authId,
    }, {
        authId: invitationResponse.body.authId,
        email: invitationBody.email,
    }, {
        upsert: true,
        new: true,
    }, (err, createdUser) => {
        if (err) return errorHandler(err, res);

        updateShop(req, res, createdUser);
    });
}

function updateShop(req, res, createdUser) {
    let shopId = req.params.shopId;

    Shop.findById(shopId).exec((err, shop) => {
        if (err || !shop) {
            let errorObj = err || { message: 'No shop found', code: 404, };
            return errorHandler(errorObj, res);
        }

        let invitationId = invitationResponse.body.invitationId;
        let createdUserId = createdUser._id;

        if (_.contains(shop.invitations, invitationId)) {
            shop.invitations.push(invitationId);
        }
        if (_.contains(shop.users, createdUserId)) {
            shop.users.push(createdUserId);
        }
        shop.save((err) => {
            if (err) return errorHandler(err, res);

            res.status(200).send('saved');
        });

    });
}

function errorHandler(err, res) {
    let message = err.message || 'Server error.';
    let code = err.code || 500;

    res.status(code).json({ error: message, });
}
