import { instanize } from "../Core/Core";
import { INJECTABLE_STORE } from "./injectable.store";
var InstanceStore = /** @class */ (function () {
    function InstanceStore() {
        this.map = new Map();
    }
    InstanceStore.prototype.add = function (injectableClassList) {
        var _this = this;
        var newMap = this.construct(injectableClassList);
        newMap.forEach(function (val, key) {
            _this.map.set(key, val);
        });
        return this;
    };
    InstanceStore.prototype.assign = function (instanceStore) {
        var innerMap = this.map;
        var outterMap = instanceStore.getMap();
        var newMap = new Map();
        var newInstanceStore = new InstanceStore();
        innerMap.forEach(function (val, key) {
            newMap.set(key, val);
        });
        outterMap.forEach(function (val, key) {
            newMap.set(key, val);
        });
        newInstanceStore.setMap(newMap);
        return newInstanceStore;
    };
    InstanceStore.prototype.has = function (token) {
        return this.map.has(token);
    };
    InstanceStore.prototype.get = function (token) {
        return this.map.get(token);
    };
    InstanceStore.prototype.setMap = function (map) { this.map = map; };
    InstanceStore.prototype.getMap = function () { return this.map; };
    InstanceStore.prototype.construct = function (injectableClassList) {
        var _this = this;
        var map = new Map();
        if (injectableClassList) {
            var list = this.reSort(injectableClassList);
            list.forEach(function (item) {
                var value;
                if (INJECTABLE_STORE.has(item.provider) === false) {
                    throw new Error('未能找到可注入类，请用@Injectable()修饰');
                }
                if (item.useClass) {
                    value = instanize(item.useClass);
                }
                else if (item.useValue) {
                    value = item.useValue;
                }
                else if (item.useExistInstance) {
                    value = _this.map.get(item.provider);
                }
                map.set(item.provider, value);
            });
        }
        return map;
    };
    InstanceStore.prototype.reSort = function (injectableClassList) {
        var normal = [];
        var useVal = [];
        var useClass = [];
        var useExist = [];
        if (injectableClassList === undefined || injectableClassList.length === 0) {
            return [];
        }
        injectableClassList.forEach(function (item) {
            if (typeof item === 'function') {
                normal.push({ provider: item, useClass: item });
            }
            else if (typeof item === 'object') {
                if (item.useClass) {
                    useClass.push(item);
                }
                else if (item.useValue) {
                    useVal.push(item);
                }
                else if (item.useExistInstance) {
                    useExist.push(item);
                }
                else {
                    console.warn(JSON.stringify(item) + "\u672A\u80FD\u6210\u529F\u914D\u7F6E\uFF0C\u8BF7\u4F20\u5165ProviderConfig\u7C7B\u578B");
                }
            }
            else {
                throw new Error(item.toString() + "\u4E0D\u662F\u5408\u6CD5\u7684\u7C7B\u578B\uFF0C\u8BF7\u4F20\u5165Function\u6216\u8005ProviderConfig\u7C7B\u578B");
            }
        });
        return normal.concat(useClass, useVal, useExist);
    };
    return InstanceStore;
}());
export { InstanceStore };
export var INSTANCE_STORE = new InstanceStore();
/**
 * Instance Store
 * Data Structure
 *  [
 *      <Provider, instance>,
 *      <Provider, instance>,
 *      <Provider, instance>
 *      ...
 *  ]
 */ 
//# sourceMappingURL=instance.store.js.map