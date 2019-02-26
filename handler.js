'use strict';

var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello other new world!';
  },
};

module.exports.hello = async (event, context) => {
  // Run the GraphQL query '{ hello }' and print out the response
  return graphql(schema, '{ hello }', root).then((response) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: response
      }),
    };
    //console.log(response);
  });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};






