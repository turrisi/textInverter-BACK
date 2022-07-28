import { Router } from 'express'
import { flip } from '../../controllers/text/text.js'

const router = Router()

//we will add our routes here for the text controller
//each route will have a specific url
//the url will be the base url (stablished in app.js) + the specific url
// each route will have a specific method to call the controller
// the method will be the specific url + the method

router.get('/', flip)

export default router
