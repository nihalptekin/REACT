
import "./Main.scss"; 

import {data} from "../../helpers/data"; 
import Card from "./Card"; 

const Main= () => {

    return(
        <div className="card-container">
        {/* //! ...item data.js dosyasinin icinde ne varsa hepsini getir.  */}
            {data.map((item, id)=> <Card {...item} key={id}/>)}
        </div>
    )
    
    
}

export default Main;