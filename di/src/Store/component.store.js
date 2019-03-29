import { InstanceStore } from "./instance.store";
var ComponentStore = /** @class */ (function () {
    function ComponentStore() {
        this.map = new Map();
    }
    ComponentStore.prototype.has = function (component) {
        return this.map.has(component);
    };
    ComponentStore.prototype.add = function (component, config) {
        var componentStoreConfig = { priority: 0, restrict: true, instanceStore: new InstanceStore() };
        this.map.set(component, config || componentStoreConfig);
        return this;
    };
    ComponentStore.prototype.get = function (component) {
        return this.map.get(component);
    };
    ComponentStore.prototype.getInstanceByType = function (component, paramType) {
        if (this.map.has(component)) {
            var config = this.map.get(component);
            return config.instanceStore.get(paramType);
        }
        else {
            return null;
        }
    };
    ComponentStore.prototype.register = function (componnet, config) {
        var componentStoreConfig = { priority: 0, restrict: true, instanceStore: new InstanceStore() };
        this.map.set(componnet, config || componentStoreConfig);
    };
    ComponentStore.prototype.update = function (component, config) {
        this.map.set(component, config);
    };
    ComponentStore.prototype.getLocalInstanceStore = function (component) {
        if (this.map.has(component) && this.map.get(component).instanceStore) {
            return this.map.get(component).instanceStore;
        }
        else {
            return null;
        }
    };
    return ComponentStore;
}());
export { ComponentStore };
export var COMPONENT_STORE = new ComponentStore();
/**
 * Component Store
 * Data Structure
 *  [
 *      <Component, { priority, localInjector }>,
 *      <Component, { priority, localInjector }>,
 *      ...
 *  ]
 */ 
//# sourceMappingURL=component.store.js.map