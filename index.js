const koaStatic = require('koa-static');
const path = require('path');
const fs = require('fs');

module.exports = app => {
  const srcStaticDir = path.join(process.cwd(), 'static');
  if (!fs.existsSync(srcStaticDir)) fs.mkdirSync(srcStaticDir);
  const srcSwaggerDir = path.join(srcStaticDir, 'swagger');
  if (!fs.existsSync(srcSwaggerDir)) fs.mkdirSync(srcSwaggerDir);
  const swaggerJson = path.join(srcSwaggerDir, 'swagger.json');
  if (!fs.existsSync(swaggerJson)) fs.writeFileSync(swaggerJson, '{}', 'utf8');
  app.use(koaStatic(path.join(__dirname, 'static')));
  app.use(koaStatic(path.join(process.cwd(), 'static/swagger')));
};
