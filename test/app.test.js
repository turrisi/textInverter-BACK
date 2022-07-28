const chai = require('chai');

const chaiHTTP = require('chai-http');

const server = require('../src/app.js');

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;

const PATH = '/iecho';
const METHOD_GET = 'GET';

chai.use(chaiHTTP);

const expect = chai.expect;
