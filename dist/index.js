"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const checklist_1 = require("./resolvers/checklist");
const PORT = process.env.PORT || 8000;
const main = async () => {
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [checklist_1.ChecklistResolver],
            validate: false
        }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`server started on localhost:${PORT}`);
    });
};
main().catch(error => {
    console.log('error message: ' + error.message);
});
//# sourceMappingURL=index.js.map