"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instance_store_1 = require("../Store/instance.store");
var component_store_1 = require("../Store/component.store");
function Component(componentConfig) {
    return function (target) {
        var strict = false;
        var localInstanceStore = new instance_store_1.InstanceStore();
        if (componentConfig) {
            strict = !!componentConfig.restrict;
            localInstanceStore.add(componentConfig.provider || []);
        }
        var theConfig = { priority: 1, restrict: strict, instanceStore: localInstanceStore };
        component_store_1.COMPONENT_STORE.register(target, theConfig);
        return target;
    };
}
exports.Component = Component;
//# sourceMappingURL=component.js.map