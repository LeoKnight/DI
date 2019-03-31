"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injectable_store_1 = require("../Store/injectable.store");
function Injectable() {
    return function (target) {
        injectable_store_1.INJECTABLE_STORE.register(target);
        return target;
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=injectable.js.map