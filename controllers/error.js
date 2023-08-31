exports.get404 = (req, res, next) => {
  console.log(__dirname);
  // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
  res.status(404).render("404", { pageTitle: "404 Not Found", path: "/404" });
};
