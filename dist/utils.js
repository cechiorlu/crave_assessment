"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchById = void 0;
const searchById = (id, list) => {
    const found = list.find((item) => item.id === id);
    return found;
};
exports.searchById = searchById;
//# sourceMappingURL=utils.js.map