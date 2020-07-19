const { Router } = require("express");

const routes = Router();

let items = [];

routes.get("/", (request, response) => {
  return response.render("home");
});

routes.get("/items", (request, response) => {
  const page = Number(request.query.page);
  const limit = Number(request.query.limit);

  const startPage = (page - 1) * limit;
  const endPage = page * limit;

  const results = {};

  results.next = {
    page: page + 1,
  };

  results.previous = {
    page: page - 1,
  };

  results.currentPage = page;
  results.endPage = Math.ceil(items.length / limit);

  results.items = items.slice(startPage, endPage);

  return response.render("items", { results });
});

routes.post("/add-item", (request, response) => {
  const { quantity, letter } = request.body;

  const arrayItems = [];

  for (let i = 1; i <= Number(quantity); i++) {
    arrayItems.push({
      quantity: i,
      letter,
    });
  }

  items = arrayItems;
});

module.exports = routes;
