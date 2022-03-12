const mysql = require('mysql2')

const pool = mysql
.createPool({
    host: "localhost",
    user: "ararat_autoAdminUser",
    password: "MyPassword1!",
    database: "ararat_autoDB",
})
.promise()

async function getCars(){
    let query = `SELECT * FROM cars`
    const [rows] = await pool.query(query)
    return rows
}
exports.getCars = getCars

async function getCar(id){
    let query = `SELECT * FROM cars WHERE id = ?`
    const [rows] = await pool.query(query, [id])
    return rows[0]
}
exports.getCar = getCar

async function postCar(data){
    console.log(data)
    let query = `INSERT INTO cars (user_id, title, description, price, stock_num) VALUES (?,?,?,?,?)`
    await pool.query(query, [data.user_id, data.title, data.description, data.price, data.stock_num])
}
exports.postCar = postCar

async function editCar(id, data){
    let query = `UPDATE cars SET user_id=?, title=?, description=?, price=?, stock_num=?`
    await pool.query(query, [data.user_id, data.title, data.description, data.price, data.stock_num, id])
}
exports.editCar = editCar

async function deleteCar(id){
    let query = `DELETE FROM cars WHERE id = ?`
    await pool.query(query,[id])
}
exports.deleteCar = deleteCar