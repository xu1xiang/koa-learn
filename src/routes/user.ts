import { createReadStream } from 'fs'
import Router from 'koa-router'

const router = new Router()

router.prefix('/user')

router.get('/', async (ctx) => {
  await ctx.render('user', {
    title: 'hello',
  })
})

export default router
