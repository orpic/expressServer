const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

app.set("view engine", "ejs");
// app.set("view engine", "hbs");
// set a global confiration value
// app.set("view engine", "pug");
// set auto views to custom folder
// in our case views is same named so not required
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log(__dirname);
  // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
  res.status(404).render("404", { pageTitle: "404 Not Found" });
});

app.listen(3000);
