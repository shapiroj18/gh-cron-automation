#!/usr/bin/env node

const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://www.j-archive.com/showgame.php?game_id=7259'

rp(url)
    .then(function (response) {
        const $ = cheerio.load(response)
        console.log($('#jeopardy_round').html())
    })
    .catch(function (err) {
        console.log(err);
    })