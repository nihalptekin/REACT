import React from 'react'

const Msg = ({isim, telefon}) => {
    
  return (
    <div>
        <h1>Merhaba ben {isim}</h1>
        <h4>Benim telefon numaram {telefon}</h4>
    </div>
  )
}

export default Msg