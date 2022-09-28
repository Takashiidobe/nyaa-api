const { si } = require('nyaapi');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  // grab the query params
  let { q, p } = req.query;
  // query by anything?
  let ans = await si.searchPage(q || ' ', p)
    .then((data) => (data))
    .catch((err) => console.log(err));
  res.json(ans);
});

app.listen(port, console.log(`running on port ${port}`));
