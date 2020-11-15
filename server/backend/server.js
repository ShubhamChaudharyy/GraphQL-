const express = require('express')
const app = express();
const { graphqlHTTP } =require('express-graphql')
const port = require('./port')
const schema = require('./graphql_schema/gql_schema')
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql:true
    })
)
app.listen(port,()=>{
    console.log("server running");
})
