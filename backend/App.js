const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


//////////////GETALL///////////////////
app.get("/cars", async (req, res) => {
    try{
    const cars = await database.getCars()
    res.send(cars)
    }catch(error){
        console.error(error)
        res.sendStatus(500)
    }
})

//////////////GETBYID///////////////////
app.get("/cars/:id", async (req, res) => {
    const id = req.params.id
    try{
        const car = await database.getCar(id)
        res.send(car)
    }catch(error){
        console.error(error)
        res.sendStatus(500)
    }
})

//MUST BE AUTHENTICATED TO DO THIS/////
//////////////POSTCAR///////////////////
app.post("/cars", async (req, res) => {
    const data = req.body
    try{
        await database.postCar(data)
        console.log('POSTED!!!! ******')
        res.sendStatus(200)
    }catch(error){
        console.error(error)
        res.sendStatus(500)
    }
})
//MUST BE AUTHENTICATED TO DO THIS/////
//////////////PATCHCAR/////////////////////
app.patch("/cars/:id", async (req, res) => {
    const id = req.params.id
    const data = req.body
    try{
        await database.editCar(id, data)
        res.sendStatus(200)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
})
//MUST BE AUTHENTICATED TO DO THIS/////
//////////////DELETECAR/////////////////////
app.delete("/cars/:id", async (req, res) => {
    const id = req.params.id
    try{
        await database.deleteCar(id)
        res.sendStatus(200)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
})








const port = 8080
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})