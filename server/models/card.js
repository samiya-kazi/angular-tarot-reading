const { ObjectId } = require('mongodb');
require('dotenv').config();
const collection = require('./index').db(process.env.DB_NAME).collection('cards');

async function getAll () {
  try {
    const projection = { name: 1, number: 1, img: 1 };
    const cards = await collection.find({}).project(projection).toArray();
    return cards;
  } catch (error) {
    console.log(error);
  }
}


async function getOne (id) {
  try {
    const card = await collection.findOne({_id: ObjectId(id)});
    return card;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAll, getOne };