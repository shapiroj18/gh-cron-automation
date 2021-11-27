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
}))
    .then(response => response.json())
    .then(function(data) {
        console.log(data)
    });

// /api/alt-fuel-stations/v1.json?api_key=DEMO_KEY&fuel_type=E85,ELEC&state=CA&limit=2
// /api/alt-fuel-stations/v1.json?api_key=DEMO_KEY&fuel_type=E85%2CELEC&state=CA&limit=2