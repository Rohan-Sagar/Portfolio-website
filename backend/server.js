const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connected to MongoDB!:'));

const VotesSchema = new mongoose.Schema(
  {
    fighterName: {
      type: String,
    },
    color: {
      type: Boolean,
    }
  }, { timestamps: true, versionKey: false }
);

const Votes = mongoose.model('votes', VotesSchema);

app.use(bodyParser.json());

app.post('/post-votes', async (req, res) => {
  try {
    const newVote = new Votes({
      fighterName: req.body.fighterName,
    });
    const savedVote = await newVote.save();
    res.send(newVote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving votes');
  }
});

app.get('/get-votes', async (req, res) => {
    try {
      const votes = await Votes.find({});
      res.send(votes);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving votes');
    }
});

cron.schedule('0 0 * * 0', async () => {
  await Votes.deleteMany({});
  console.log('Collection cleared');
});
  

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
