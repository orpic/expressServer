const Product = require("./../models/product");

exports.getAddProduct = (req, res, next) => {
  console.log("add product");
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add products",
    path: "/admin/add-product",
    formCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "admin/products",
    });
  });
};