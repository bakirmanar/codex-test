exports.inviteUser = function(req, res) {
    var invitationBody = req.body;
    var shopId = req.params.shopId;
    var authUrl = "https://url.to.auth.system.com/invitation";
    superagent
        .post(authUrl)
        .send(invitationBody)
        .end(function(err, invitationResponse) {
            // Error handler is expected here
            if (invitationResponse.status === 201) {
                User.findOneAndUpdate({
                    authId: invitationResponse.body.authId
                }, {
                    authId: invitationResponse.body.authId,
                    email: invitationBody.email
                }, {
                    upsert: true,
                    new: true
                }, function(err, createdUser) {
                    // Error handler is expected here
                    Shop.findById(shopId).exec(function(err, shop) {
                        if (err || !shop) {
                            // status 404 is expected I guess
                            return res.status(500).send(err || { message: 'No shop found' });
                        }
                        // comparing '=== -1' are missing here
                        // It is better to use .includes() function or underscore _.contains() function
                        if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
                            shop.invitations.push(invitationResponse.body.invitationId);
                        }
                        // It is better to use .includes() function or underscore _.contains() function
                        if (shop.users.indexOf(createdUser._id) === -1) {
                            // It seems like createdUser._id is expected to push
                            shop.users.push(createdUser);
                        }
                        // There is no callback for save() with error handler and res.status(200)
                        shop.save();
                    });
                });
            } else if (invitationResponse.status === 200) {
                res.status(400).json({
                    error: true,
                    message: 'User already invited to this shop'
                });
                return;
            }
            res.json(invitationResponse);
        });
};
