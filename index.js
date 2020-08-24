"use strict";
const express = require('express');

const app = express();
app.use(express.static("./Public", {index: `index.html`}));

app.listen(3000, () => {
  console.log('Zoom Server Booted');
  console.log('This is a Public Server. All Content is protected under the GNU General Public License 3.0')
});
