const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

app.get('/', (req, res) => {
  return res.send('<div><h3>Enter to address line  "/something" to get echo answer </br> or "/encode/:password" to encode password</br> or "/decode/:password" to decode password </h3></div>');
})
app.get('/:echoAnswer', (req, res) => {
  return res.send(`${req.params.echoAnswer}`)
})
app.get('/encode/:password', (req, res) => {
  const password = req.params.password;
  const encoded = Vigenere.Cipher('password').crypt(password)
  return res.send(`Password encoded! password: ${encoded}`)
})
app.get('/decode/:password', (req, res) => {
  const password = req.params.password;
  const decoded = Vigenere.Decipher('password').crypt(password)
  return res.send(`Password decoded! password: ${decoded}`)
})

app.listen(port, () => {
  console.log('Server started on port: ', port);
})