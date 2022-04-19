const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let dbconnect = require('./dbconnect.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/hook", async (req, res) => {
  // console.log(req.body);

    var email = req.body.email;
    var emails = email.toString();
    var list_id = req.body.list_id;
    var list_ids = list_id.toString();

    // console.log(emails, list_ids);

    let result = await dbconnect.poolConnect({
    id: req.body.id == null ? -1 : req.body.id,
    event: req.body.event == null ? '' : req.body.event,
    email: emails == null ? '' : emails,
    key: req.body.key == null ? '' : req.body.key,
    list_id: list_ids == null ? '' : list_ids,
    date: req.body.date == null ? '' : req.body.date,
    ts: req.body.ts == null ? -1 : req.body.ts
  });

  // console.log(result);

  res.status(200).end();
})

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
