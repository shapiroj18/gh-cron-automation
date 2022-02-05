#!/usr/bin/env node

const rp = require('request-promise');
const url = 'https://www.j-archive.com/showgame.php?game_id=7259'

rp(url)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    })