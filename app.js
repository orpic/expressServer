const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// set a global confiration value
app.set("view engine", "pug");

// set auto views to custom folder
// in our case views is same named so not required
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log(__dirname);
  // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
  res.status(404).render("404", { pageTitle: "404 Page Not Found" });
});

app.listen(3000);
