const Joke = require("../models/jokes.model");


module.exports = {

  findAllJokes : (req, res) => {
    Joke.find()
      .then( allMyJokes => res.json({ jokes: allMyJokes }))
      .catch( err => res.json({ message: "Something went wrong", error: err}))
  },

  findOneSingleJoke : (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then( oneSingleJoke => res.json({ joke: oneSingleJoke }))
      .catch( err => res.json({ message: "Something went wrong", error: err}))
  },

  randomJoke : (req, res) => {
    Joke.find()
      .then(allMyJokes => {
        var randNum = Math.floor(Math.random() * (allMyJokes.length - 1))
        res.json({ joke: allMyJokes[randNum] })
      })
      .catch(err => res.json({ message: "Something went wrong", error: err }))
  },

  createNewJoke : (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  updateExistingJoke : (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedJoke => res.json({ joke: updatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  deleteExistingJoke : (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  }

}



// This is the code I refactored:

// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allMyJokes => res.json({ jokes: allMyJokes }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.randomJoke = (req, res) => {
//   Joke.findOneRandom({ $sample: req.{ size: 1 } })
//   .then(oneRandomJoke => res.json({ joke: oneRandomJoke }) )
//   .catch(err => res.json({ message: "Something went wrong", error: err }));
// }

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => res.json({ joke: updatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };