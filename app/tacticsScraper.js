const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

axios.get('https://www.tactics.com/skateboard-decks')
  .then((response) => {
    let $ = cheerio.load(response.data);
    let boards = [];

    $('#browse-grid div' ).each((index, element) => {

      console.log($(element).find('a').attr('href'));
    }
  )})
  .catch((error) => {
    console.log(error);
  });
