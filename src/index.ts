import "reflect-metadata";
import express from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ChecklistResolver } from "./resolvers/checklist";

const PORT = process.env.PORT || 8000

const main = async () => {

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ChecklistResolver],
            validate: false
        }),
    });


    await apolloServer.start()

    apolloServer.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`server started on localhost:${PORT}`);
    });
}



main().catch(error => {
    console.log('error message: ' + error.message);
})