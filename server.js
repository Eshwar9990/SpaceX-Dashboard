const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema  = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Tool that we can use as a client that makes requests to server
  }),
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname__, 'public', 'index.html'))
})

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));