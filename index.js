const express = require('express');
const app = express();
const port = process.env.NODE_ENV == 'production' ? 80 : 3000;

