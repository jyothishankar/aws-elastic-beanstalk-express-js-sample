const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I am here to become Devops Engineer, and will earn in crores! I am working smart and hard for it'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
