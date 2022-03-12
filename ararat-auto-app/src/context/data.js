import axios from "axios"

export const getCars = async() =>{
    try{
    const res = await axios.get("http://localhost:8080/cars")
    const carData = res.data
    return carData
    }
    catch(error){
        console.log(error)
    }
}

export const getCarById =async(id) => {
    try{
        id = id.substring(1)
        //make id dynamic
        const res = await axios.get(`http://localhost:8080/cars/${id}`)
        const singleCar = res.data
        return singleCar
    }
    catch(error){
        console.log(error)
    }
}

export const postCar = async(user_id,title,description,price,stock_num ) => {
    const dataObj = {
        user_id: user_id,
        title: title,
        description: description,
        price: price,
        stock_num: stock_num
    }
    try{
        // axios({
        //     method: 'post',
        //     url: "http://localhost:8080/cars",
        //     data: dataObj,
        //     config: { headers: {'Content-Type': 'multipart/form-data' }}
        // })
        await axios.post("http://localhost:8080/cars", dataObj)
    
    }catch(error){
        console.log(error)
    }
}

export const deleteCar = async(id) => {
    id = id.substring(1)
    try{
        await axios.delete(`http://localhost:8080/cars/${id}`)
    }catch(error){
        console.log(error)
    }
}

// export const editCar = async(user_id,title,description,price,stock_num) => {
//     const dataObj = {
//         user_id: id,
//         title: title,
//         description: description,
//         price: price,
//         stock_num: stock_num
//     }
//     id = id.substring(1)
//     try{
//         await axios.patch(`http://localhost:8080/cars/${id}`, dataObj)
//     }catch(error){
//         console.log(error)
//     }
// }