
const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('<div><h3>Enter to address line  "/something" to get echo answer</h3></div>');
})
app.get('/:echoAnswer', (req, res) => {
    return res.send(`${req.params.echoAnswer}`)
})


app.listen(port,()=>{
    console.log('Server started on port: ',port);
})