const express = require('express');
const app = express();
const port = 8080;

// asegúrate de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./server/routes/api.routes');
apiRoutes(app);

app.listen(port, () => console.log(`We are listening in the port: ${port}. how cool is that!`));

