import { InstanceStore } from '../Store/instance.store';
import { COMPONENT_STORE } from '../Store/component.store';
export function Component(componentConfig) {
    return function (target) {
        var strict = false;
        var localInstanceStore = new InstanceStore();
        if (componentConfig) {
            strict = !!componentConfig.restrict;
            localInstanceStore.add(componentConfig.provider || []);
        }
        var theConfig = { priority: 1, restrict: strict, instanceStore: localInstanceStore };
        COMPONENT_STORE.register(target, theConfig);
        return target;
    };
}
//# sourceMappingURL=component.js.map