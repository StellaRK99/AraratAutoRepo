import React from 'react'

function CreateCar() {
  const [user_id, setUser_id] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock_num, setStock_Num] = useState("")
  
  return (
    <div className="create-car-card">
 
    <label for className='user_id'>UserID</label>
        <input className='user_id' onChange={event => setUser_id(event.target.value)}></input>
      <br></br>
      
      <label for className='title'>Vehicle</label>
        <input className='title' onChange={event => setTitle(event.target.value)}></input>
      <br></br>

      <label for className='description'>Specs</label>
        <input className= 'descritpion' onChange={event => setDescription(event.target.value)}></input>
      <br></br>

      <label for className='price'>Price</label>
        <input className='price' onChange={event => setPrice(event.target.value)}></input>
      <br></br>

      <label for className='stock_num'>Stock Number</label>
        <input className='stock_num' onChange = {event => setStock_Num(event.target.value)}></input>
        <br></br>

        <button type='submit' onClick={event => postCar(user_id,title,description,price,stock_num)}>Submit</button>

    </div>
  )
}

export default CreateCar