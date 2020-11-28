const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const port = 4000;

app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`App listening on port ${port}!`))