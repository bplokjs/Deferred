
var Deferred = require('../index');

var defer = Deferred();

defer.finally((a) => { console.log('finally', a) })
    .catch((e) => {
        console.log(e)
    }).then((a) => {
        console.log('s2', a)
    })
defer.catch((a) => { console.log('err', a) })

defer.then((a) => { console.log('resolve', a) })

defer.resolve(1);

console.log(defer.promise)