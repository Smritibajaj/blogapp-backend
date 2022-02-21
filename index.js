const port = require('./configs/app.config')
//initilize database
require('./configs/db.config');
require('./schemas/index');
const app = require('./server');
app.listen(port.SERVER_PORT,() => console.log(`service is running ${port.SERVER_PORT}`))