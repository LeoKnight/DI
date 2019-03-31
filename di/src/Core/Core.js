/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
import 'reflect-metadata';
import { INJECTABLE_STORE } from '../Store/injectable.store';
import { INSTANCE_STORE } from '../Store/instance.store';
import { COMPONENT_STORE } from '../Store/component.store';
export function instanize(Fn) {
    var args = Reflect.getMetadata('design:paramtypes', Fn) || [];
    args = args.map(function (paramType) {
        if (INJECTABLE_STORE.has(paramType)) {
            return instanize(paramType);
        }
        else {
            throw new Error(paramType.name + " is not an injectable class, please add @Injectable() to register class");
        }
    });
    // let instance = Object.create(Fn.prototype);
    // Fn.apply(instance, args);
    var instance = new (Fn.bind.apply(Fn, [void 0].concat(args)))();
    return instance;
}
export function construct(Fn) {
    var args = Reflect.getMetadata('design:paramtypes', Fn) || [];
    var config = COMPONENT_STORE.get(Fn);
    if (config === undefined) {
        throw new Error("Cannot construct " + Fn.name + ", please add @Component decorator");
    }
    args = args.map(function (paramType) {
        // @Inject
        if (config.priority === 2) {
            var instance = COMPONENT_STORE.getInstanceByType(Fn, paramType);
            if (instance === undefined && config.restrict) {
                throw new Error("Cannot instanize " + paramType.name + " for " + Fn.name + ", please add " + paramType.name + " to the provider list.");
            }
            else if (instance === undefined && !config.restrict) {
                return null;
            }
            else {
                return instance;
            }
        }
        // @Component
        if (config.priority === 1) {
            var localInstance = COMPONENT_STORE.getInstanceByType(Fn, paramType);
            var globalInstance = INSTANCE_STORE.get(paramType);
            var instance = localInstance || globalInstance;
            if (instance === undefined && config.restrict) {
                throw new Error("Cannot instanize " + paramType.name + " for " + Fn.name + ", please add " + paramType.name + " to the provider list.");
            }
            else if (instance === undefined && !config.restrict) {
                return null;
            }
            else {
                return instance;
            }
        }
        // Other
        if (isNaN(config.priority) || config.priority < 1 || config.priority > 2) {
            throw new Error("Incorrect config for " + Fn.name);
        }
    });
    // let componentInstance = Object.create(Fn.prototype);
    // Fn.apply(componentInstance, args);
    var componentInstance = new (Fn.bind.apply(Fn, [void 0].concat(args)))();
    return componentInstance;
}
export function bootstrap(config) {
    INSTANCE_STORE.add(config.provider);
}
//# sourceMappingURL=Core.js.map