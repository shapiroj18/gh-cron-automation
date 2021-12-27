#!/usr/bin/env node
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { URLSearchParams } from 'url';
dotenv.config()
global.URLSearchParams = URLSearchParams

const baseURL = 'https://api.nasa.gov/';
const endpoint = 'planetary/apod?';
const apiKey = process.env.API_KEY;

fetch(baseURL + endpoint + new URLSearchParams({
    'api_key': apiKey,
    'date': '2019-08-11'
}))
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
    });