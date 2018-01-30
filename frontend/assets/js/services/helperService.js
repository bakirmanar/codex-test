angular.module('serialsAppModule').service('helperService', function () {
    var self = this;
/*
    /!**
     * Check if string exists in array and make unique one if yes
     * @param {string} str
     * @param {Array} array
     * @param {string} property
     * @return {string}
     *!/
    self.getUniqString = function (str, array, property) {
        var isExists;
        var res = str;
        for (var i = 1; i <= array.length + 1; i++) {
            isExists = array.some(function (item) {
                return (property ? item[property] : item) === res;
            });

            if (isExists) {
                res = str + i;
            } else {
                break;
            }
        }

        return res;
    };

    /!**
     * Check if param not exists in array
     * @param {Array} array
     * @param {string|number} param
     * @return {boolean}
     *!/
    self.isUniq = function (array, param) {
        return array.indexOf(param) === -1;
    };

    /!**
     * Deeply compare two objects and returns new object containing all properties of second (new) object,
     * that not match first's object properties
     * @param {object} obj
     * @param {object} newObj
     * @returns {object}
     * *!/
    self.difference = function (obj, newObj) {
        return _.transform(newObj, function (result, value, key) {
            if (typeof newObj[key] === 'object') {
                var item = self.difference(obj[key], newObj[key]);
                if (!_.isEmpty(item)) {
                    result[key] = item;
                }
            } else if (newObj[key] !== obj[key]) {
                result[key] = value;
            }
        }, {});
    };

    self.scrollTo = function (id) {
        var elem = document.getElementById(id);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start', });
        }
    };

    /!**
     * Shows dialog configured using passed options, fires confirm function if confirm button was pressed
     * and declare if canceled
     * @param {object} options
     * @param {string} options.event - event type caused the warning (delete, changeState, lowBalance)
     * @param {string} options.page - name of state which opens dialog
     * @param {boolean} options.hideNo  - if declare button should be hidden
     * @param {boolean} options.additionalContent  - any additional dynamic content
     * @param {function} confirm
     * @param {function} declare
     * *!/
    self.showWarning = function (options, confirm, declare) {
        $mdDialog.show({
            controller: 'warningController',
            templateUrl: '/components/warning/warning.html',
            clickOutsideToClose: true,
            locals: {
                options: options,
            },
        })
            .then(function () {
                if (confirm) {
                    confirm();
                }
            }, function () {
                if (declare) {
                    declare();
                }
            });
    };

    self.canCreateRoute = function () {
        return cacheService.user.balance > ROUTE_COST;
    };

    self.getCountryNameByCode = function (code, list) {
        var country = _.find(list, function (c) {
            return c.code === code;
        });

        if (country) {
            return country.name;
        }

        return null;
    };

    self.openYayFonWeb = function (routeId) {
        var settings = 'height=570,' +
            'width=340,' +
            'status=no,' +
            'toolbar=no,' +
            'menubar=no,' +
            'location=no,' +
            'scrollbars=no,' +
            'resizable=no';
        $window.open('https://yayfon.com/YayFonWeb/?route_id=' + routeId, '_blank', settings);
    };

    self.getCountryCodeByIP = function () {
        return $http.get('https://ipinfo.io', function (response) {
            return response;
        }, 'jsonp');
    };

    /!**
     * Reset form error objects
     * ng-messages can't clear it itself
     * @param {object} formObj - Angular form object
     *!/
    self.resetFormErrors = function (formObj) {
        // Each control (input, select, textarea, etc) gets added as a property of the form.
        // The form has other built-in properties as well. However it's easy to filter those out,
        // because the Angular team has chosen to prefix each one with a dollar sign.
        // So, we just avoid those properties that begin with a dollar sign.
        var controlNames = Object.keys(formObj).filter(function (key) {
            return key.indexOf('$') !== 0;
        });

        // Set each control back to undefined. This is the only way to clear validation messages.
        // Calling `form.$setPristine()` won't do it (even though you wish it would).
        controlNames.forEach(function (name) {
            var control = formObj[name];
            control.$error = {};
        });

        formObj.$setPristine();
        formObj.$setUntouched();
    };

    /!**
     * Returns item of array with passed id
     * @param {array} arr - array of objects
     * @param {id} id
     * @return {string}
     *!/
    self.getById = function (arr, id) {
        return self.getByProp(arr, id, 'id');
    };

    /!**
     * Returns item in array with passed param
     * @param {array} arr - array of objects
     * @param {*} value
     * @param {string} prop
     * @return {string}
     *!/
    self.getByProp = function (arr, value, prop) {
        return _.find(arr, function (item) {
            return item[prop] === value;
        });
    };

    /!**
     * Returns item in array with passed value
     * @param {array} arr - array of objects
     * @param {*} value
     * @return {string}
     *!/
    self.getByValue = function (arr, value) {
        return _.find(arr, function (item) {
            return item === value;
        });
    };*/
});
