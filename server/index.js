const express = require('express');
const cors = require('cors');
const client = require('./models/index');
const router = require('./router');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async function bootstrap() {
  try {
    await client.connect();
    console.log('Connected to MongoDB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  } catch (error) {
    console.log(error);
  }
})();