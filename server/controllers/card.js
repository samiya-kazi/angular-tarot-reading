const cardModel = require("../models/card");

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


module.exports = { getAllCards, getOneCard }