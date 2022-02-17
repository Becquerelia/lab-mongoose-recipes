const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })

  //Iteración 2: 

  .then(() => {
    return Recipe.create({
      title: "La receta más rica de todas",
      level: "Amateur Chef",
      ingredients: [
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
      ],
      cuisine: "Canaria",
      dishType: "main_course",
      image: "",
      duration: 50,
      creator: "Juan y Eva",
    });
  })
  .then((response) => {
    console.log(response.title)
  })

  //Iteración 3:

  .then((response) => {
    return Recipe.insertMany(data);
  })
  .then((response)=> {
    response.forEach((elem) => {
      console.log(elem.title)
    })
  })

//Iteración 4:

  .then((response)=>{  
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    );
  })
  .then((response) => {
    console.log(response.duration);
  })

  //Iteración 5:

  .then((response) => {
    return Recipe.findOneAndDelete({ title: "Carrot Cake" });
  })
  .then((response) => {
    console.log("Borrado con éxito!");
  })

//Iteración 6:

  .then(() => {
    mongoose.connection.close();
  })
  .then((response) => {
    console.log("Desconectado :)");
  })

  //!LAS ITERACIONES PROBADAS CON ASYNC/AWAIT ESTÁN EN OTRO ARCHIVO LLAMADO asyncawait.js  

  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
