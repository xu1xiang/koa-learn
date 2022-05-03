import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

router.get("/api", (ctx) => {
  ctx.body = "/api";
});

app.use(router.routes());

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
