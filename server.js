// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;


// LISTENING PORT
app.listen(PORT, () => {
    console.log(`Adnan you are live on ${PORT}`)
})