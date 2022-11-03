const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
const cors = require("koa-cors");
const Multiparty = require("multiparty");

const path = require("path");

const app = new Koa();
const router = new Router();

router.post("/upload", async (ctx) => {
  const form = new Multiparty.Form({
    uploadDir: path.join(__dirname, "/temp"),
  });
  form.parse(ctx.req);
  form.on("file", () => {
    console.log("upload success");
  });

  ctx.response.body = "上传成功";
});

app
  .use(cors())
  .use(router.routes())
  .use(static(path.join(__dirname, "./")));

app.listen(3000, () => {
  console.log("server listen at port 3000");
});
