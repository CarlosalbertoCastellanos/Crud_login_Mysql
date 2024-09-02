import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import links from "./routes/links.js"; 
import auth from "./routes/auth.js";
import { engine } from "express-handlebars";
import helpers from "./lib/handlebars.js";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
import pass from "./lib/passport.js"; 

// Configuración de Express
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Configuración del motor de plantillas Handlebars
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: helpers, 
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de express-session
app.use(
  session({
    secret: "your-secret-key", 
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

// Usa el enrutador importado
app.use("/", router);
app.use("/auth", auth);
app.use("/links", links);

// Sirve archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Inicia el servidor
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
