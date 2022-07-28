import { Router } from 'express'
import text from './text/index.js'

// Create a new express Router
const router = Router()

// in this area we will add our routes, in case we want to add more routes later
// we will add them here
// stablish the base url for any routes

router.use('/', text)

export default router
