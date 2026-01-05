import { Router } from "express"
import * as db from "../db.js"


const router = Router()

export default router

router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM sales')
  res.send(rows)
})

router.get('/revenue', async (req, res) => {
  const { rows } = await db.query('SELECT SUM(total_amount) as total_revenue FROM sales')
  res.send(rows[0])
})

router.get('/:saleId', async(req, res) => {
  const { saleId } = req.params
  const { rows } = await db.query('SELECT * FROM sale_items WHERE sale_id = $1', [saleId])
  res.send(rows)
})




