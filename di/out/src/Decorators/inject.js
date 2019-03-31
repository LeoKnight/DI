"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instance_store_1 = require("../Store/instance.store");
var component_store_1 = require("../Store/component.store");
function Inject() {
    var providers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        providers[_i] = arguments[_i];
    }
    return function (target) {
        var localInstanceStore = new instance_store_1.InstanceStore().add(providers || []);
        var componentConfig = { priority: 2, restrict: true, instanceStore: localInstanceStore };
        component_store_1.COMPONENT_STORE.register(target, componentConfig);
        return target;
    };
}
exports.Inject = Inject;
//# sourceMappingURL=inject.js.map