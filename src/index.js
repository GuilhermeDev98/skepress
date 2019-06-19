require("../start/index");
const express = require("express");
// const socket = require("socket.io");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./router"));

app.listen(port, () => {
  console.log(`App Rodando na porta ${port}`);
});
