
//Dejamos aparte el planteamiento resolviendo la promesa con async/await (sin require en index)

const { default: mongoose } = require("mongoose")
const Recipe = require("./models/Recipe.model")

async function theRecipes() {
    try{
        await mongoose.connect(MONGODB_URI)
        await Recipe.deleteMany()
            console.log(`Connected to the database:"${x.connection.name}"`);
        
        //Iteración 2:

        let ourNewRecipe = await Recipe.create({
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
                creator: "Juan y Eva"
            })
            console.log(ourNewRecipe.title)
        
        //Iteración 3:

        let moreRecipes = await Recipe.insertMany(data)
        moreRecipes.forEach((eachRecipe)=> {
            console.log(eachRecipe.title)
        })

        //Iteración 4:

        await Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }, { new: true })
        console.log("¡Actualizado exitosamente!¡Yuhu!")

        //Iteración 5:

        await Recipe.findOneAndDelete({ title: "Carrot Cake" })
        console.log("¡Borrado con éxito! ¡Bieeen!")

        //Iteración 6:

        await mongoose.connection.close()
        console.log("Desconectado :)")
    }

    catch (error) {
        console.log("Error connecting to the database", error)
    }
}

//Invocamos la función: 

theRecipes()