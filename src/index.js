const express = require("express");
var cors = require('cors')
const morgan = require("morgan");
const path = require("path");
const app = express();

//asignar puerto
app.set("port", process.env.PORT || 8000);

//peticiones o middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
  next();
});

//rutas


app.use("/asesorescomerciales", cors() ,require("./routes/api/AsesoresComerciales"));
app.use("/comisiones", cors(), require("./routes/api/Comisiones"));


//public
app.use(express.static(path.join(__dirname, "public")));

// inicia servidor
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});