"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistResolver = void 0;
const CheckList_1 = require("../entities/CheckList");
const type_graphql_1 = require("type-graphql");
const store_1 = require("../store");
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let Response = class Response {
};
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], Response.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => CheckList_1.CheckList, { nullable: true }),
    __metadata("design:type", Object)
], Response.prototype, "listItem", void 0);
Response = __decorate([
    (0, type_graphql_1.ObjectType)()
], Response);
let ChecklistResolver = class ChecklistResolver {
    getListItems() {
        if (!store_1.CheckListsStore.length) {
            return null;
        }
        return store_1.CheckListsStore;
    }
    toggleCompleted(id) {
        const itemIdx = store_1.CheckListsStore.findIndex((item) => item.id === id);
        if (itemIdx === -1) {
            return {
                errors: [
                    {
                        message: 'list item not found'
                    }
                ]
            };
        }
        store_1.CheckListsStore[itemIdx].isChecked = !store_1.CheckListsStore[itemIdx].isChecked;
        const listItem = store_1.CheckListsStore[itemIdx];
        return {
            listItem
        };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [CheckList_1.CheckList], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChecklistResolver.prototype, "getListItems", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Response),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Response)
], ChecklistResolver.prototype, "toggleCompleted", null);
ChecklistResolver = __decorate([
    (0, type_graphql_1.Resolver)(of => CheckList_1.CheckList)
], ChecklistResolver);
exports.ChecklistResolver = ChecklistResolver;
//# sourceMappingURL=checklist.js.map