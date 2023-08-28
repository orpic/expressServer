const fs = require("fs");
const path = require("path");

const pathDir = require("./../path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    console.log(pathDir);
    const p = path.join(pathDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return [];
  }
};
