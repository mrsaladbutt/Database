const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


const checkAuth = (req, res, next) => {
   
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
       
        req.isAuthenticated = true;
    } else {
        
        req.isAuthenticated = false;
    }

    next();
};

server.use(middlewares);

server.use(checkAuth);
server.use(router);

server.listen(port, () => {
  console.log(JSON Server is running on port ${port});
});
