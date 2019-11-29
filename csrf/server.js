const express = require('express');

const app = express();

app.use('/', express.static(__dirname));

app.listen(7000, () => console.log('Server running on http://localhost:7000/'));
