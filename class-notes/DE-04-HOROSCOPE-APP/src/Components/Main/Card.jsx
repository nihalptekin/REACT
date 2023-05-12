import React from 'react'

const Card = (data) => {
  return (
    <div className='cards'>

         <div className='title'>
        <h1>{data.title}</h1>
    </div>
  
    <div className='date'>
        <h1>{data.date}</h1>
    </div>
    <div>
        <img src={data.image} className='image' alt=""></img>
    </div>
    <div className="card-over">
                <p>
                    {data.desc}
                </p>
            </div>



    </div>
  )
}

export default Card