const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

//asignar puerto
app.set("port", process.env.PORT || 8000);

//peticiones o middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
  next();
});

//rutas


app.use("/asesorescomerciales", require("./routes/api/AsesoresComerciales"));
app.use("/comisiones", require("./routes/api/Comisiones"));


//public
app.use(express.static(path.join(__dirname, "public")));

// inicia servidor
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});