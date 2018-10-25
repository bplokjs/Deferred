# Deferred
`npm install --save bplokjs-deferred`

## Useage

```
import Deferred from 'bplokjs-deferred'

const defer = Deferred();

defer.resolve();// defer.reject();

const promise = defer.promise;

```