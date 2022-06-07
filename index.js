const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/form-submit', (req, res) => {
  axios
    .post(
      'https://hooks.slack.com/services/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',
      {
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Vehicle ID: *${req.body.name}*\n\n Labour Code: *${req.body.labourCode}* \n\n Issue Area: *${req.body.issue}* `
            }
          }
        ]
      }
    )
    .then(() => {
      res.send('Form submitted!');
    })
    .catch(() => {
      res.send('Form submission failed!');
    });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
