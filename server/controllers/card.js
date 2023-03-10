const cardModel = require("../models/card");
const path = require('path');

async function getAllCards (req, res) {
  try {
    const cards = await cardModel.getAll();
    res.status(200);
    res.send(cards);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getOneCard (req, res) {
  try {
    const { id } = req.params
    const card = await cardModel.getOne(id);
    res.status(200);
    res.send(card);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getCardImage (req, res) {
  try {
    const { img } = req.params;
    const imgPath = './lib/card-images/' + img;
    const options = {
      root: path.join(__dirname, '../'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
    res.status(200);
    res.setHeader('content-type', 'image/jpeg');
    res.sendFile(imgPath, options);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = { getAllCards, getOneCard, getCardImage }