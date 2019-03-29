"use strict";
/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var injectable_store_1 = require("../Store/injectable.store");
var instance_store_1 = require("../Store/instance.store");
var component_store_1 = require("../Store/component.store");
function instanize(Fn) {
    var args = Reflect.getMetadata('design:paramtypes', Fn) || [];
    args = args.map(function (paramType) {
        if (injectable_store_1.INJECTABLE_STORE.has(paramType)) {
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
exports.instanize = instanize;
function construct(Fn) {
    var args = Reflect.getMetadata('design:paramtypes', Fn) || [];
    var config = component_store_1.COMPONENT_STORE.get(Fn);
    if (config === undefined) {
        throw new Error("Cannot construct " + Fn.name + ", please add @Component decorator");
    }
    args = args.map(function (paramType) {
        // @Inject
        if (config.priority === 2) {
            var instance = component_store_1.COMPONENT_STORE.getInstanceByType(Fn, paramType);
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
            var localInstance = component_store_1.COMPONENT_STORE.getInstanceByType(Fn, paramType);
            var globalInstance = instance_store_1.INSTANCE_STORE.get(paramType);
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
exports.construct = construct;
function bootstrap(config) {
    instance_store_1.INSTANCE_STORE.add(config.provider);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=Core.js.map