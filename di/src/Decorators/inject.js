import { InstanceStore } from "../Store/instance.store";
import { COMPONENT_STORE } from '../Store/component.store';
export function Inject() {
    var providers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        providers[_i] = arguments[_i];
    }
    return function (target) {
        var localInstanceStore = new InstanceStore().add(providers || []);
        var componentConfig = { priority: 2, restrict: true, instanceStore: localInstanceStore };
        COMPONENT_STORE.register(target, componentConfig);
        return target;
    };
}
//# sourceMappingURL=inject.js.map