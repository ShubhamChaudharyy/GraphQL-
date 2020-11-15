const graphql=require('graphql')
const _ = require('lodash')
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
 } = graphql

const books=[
    {name:'Sherlock Holmes',genre:'Mystery Thriller',id:'1'},
    {name:'Alchemist',genre:'Fiction',id:'2'},
    {name:'The Long Earth',genre:'Science Fiction',id:'3'}
]
const authors=[
    {name:'Patrick Rothfuss',age:44,id:'1'},
    {name:'Jimmy Neesham',age:23,id:'2'},
    {name:'Jonty Rhodes',age:14,id:'3'}
]
const SchemaProvider = () => {
    return new GraphQLObjectType({
        
    })
} 
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:{
        id:{ type:GraphQLID },
        name:{ type: GraphQLString },
        genre:{ type:GraphQLString }
    }
})
const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:{
        id:{ type:GraphQLID },
        name:{ type: GraphQLString },
        age:{ type:GraphQLInt }
    }
})
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{ id:{ type:GraphQLID } },
            resolve(parent,args){
                return _.find(books,{ id: args.id })
            }
        },
        author:{
            type:AuthorType,
            args:{id: { type:GraphQLID } },
            resolve(parent,args){
                return _.find(authors,{ id:args.id })
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query:RootQuery
})