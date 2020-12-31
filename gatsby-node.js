/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require("fs");
const yaml = require("js-yaml");

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    const productsDoc = yaml.safeLoad(fs.readFileSync("./content/products.yaml", "utf-8"));
    productsDoc.forEach(element => {
        createPage({
            path: element.product.path,
            component: require.resolve("./src/templates/product.js"),
            context: {
                sku: element.product.sku,
            },
        })
    });

    const categorieesDoc = yaml.safeLoad(fs.readFileSync("./content/products.yaml", "utf-8"));
    categorieesDoc.forEach(element => {
        createPage({
            path: element.product.type,
            component: require.resolve("./src/templates/category.js"),
            context: {
                type: element.product.type,
                category: element.product.category,
            },
        })
    });
}