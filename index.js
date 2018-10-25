
module.exports = function () {
    var resolve, reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });

    var deferred = {
        get resolve() {
            return resolve;
        },
        get reject() {
            return reject;
        },
        get promise() {
            return promise;
        },
        get then() {
            return function (onResolve, onRejected) {
                return promise.then(onResolve, onRejected);
            }
        },
        get catch() {
            return function (onRejected) {
                return promise.catch(onRejected);
            }
        },
        get finally() {
            return function (onFinally) {
                return promise.then(
                    function onResolve(value) {
                        return Promise.resolve(onFinally()).then(function () {
                            return value;
                        });
                    },
                    function onRejected(reason) {
                        return Promise.resolve(onFinally()).then(function () {
                            throw reason
                        });
                    }
                );
            };
        }
    };

    return deferred;
}