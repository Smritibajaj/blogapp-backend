const port = 8080;
//initilize database
require('./configs/db.config');
require('./schemas/index');
const app = require('./server');
app.listen(port,() => console.log(`service is running ${port}`))