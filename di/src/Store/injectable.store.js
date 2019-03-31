var InjectableStore = /** @class */ (function () {
    function InjectableStore() {
        this.set = new Set();
    }
    InjectableStore.prototype.register = function (fn) {
        this.set.add(fn);
    };
    InjectableStore.prototype.has = function (fn) {
        return this.set.has(fn);
    };
    return InjectableStore;
}());
export { InjectableStore };
export var INJECTABLE_STORE = new InjectableStore();
/**
 * Injectable Store
 * Data Structure
 *      [  ...providers  ]
 */ 
//# sourceMappingURL=injectable.store.js.map