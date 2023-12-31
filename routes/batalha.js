import express from 'express'
import { postHeroi, postVilao, postHeroiVilao } from '../controllers/batalha.js'

const router = express.Router()

router.post('/heroi', postHeroi)
router.post('/vilao', postVilao)
router.post('/batalha', postHeroiVilao)

export {router} 