const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.get("/api/jokes/random/random", JokeController.randomJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteExistingJoke);
};