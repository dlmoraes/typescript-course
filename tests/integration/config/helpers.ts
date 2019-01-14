import * as mocha from 'mocha'
import * as Chai from 'chai'
import * as td from 'testdouble'
import App from '../../../server/api/api'

const app = App
const request = require('supertest')
const expect = Chai.expect
const testDouble = td

export { app, expect, request, testDouble }