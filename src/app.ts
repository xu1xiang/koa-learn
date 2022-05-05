import Koa from 'koa'
import views from 'koa-views'
import path from 'path'
import userRouter from './routes/user'
import logger from 'koa-logger'
// @ts-ignore
import onerror from 'koa-onerror'

const app = new Koa()

onerror(app)

const render = views(path.resolve(__dirname, 'views'), {
  extension: 'ejs',
})
app.use(render)
app.use(logger())
app.use(userRouter.routes())

export default app
