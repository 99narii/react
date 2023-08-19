const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(['/test'],{
        target: "http://localhost:4000/",
        changeOrigin: true,
      })
  );
   app.use(
     createProxyMiddleware(['/login'],{
         //PROD 실행시
         target: "http://localhost:4000/",
         changeOrigin: true,
       })
   );  
};