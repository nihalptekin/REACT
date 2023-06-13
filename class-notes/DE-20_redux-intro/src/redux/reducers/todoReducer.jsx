
const initial={gorevler:[{id:0, yazi:"Work on Redux"}, {id:1, yazi:"köpekleri gezdir"}]}


const todoReducer = (state=initial,action



) => {
    switch (action.type) {
        case "TEMIZLE":

        // return {gorevler:[]} liste tamamen silinir.
        return initial;
            
       case "EKLE":
        return {gorevler:[...state.gorevler,{id:state.gorevler.lenght+1, yazi:action.payload}]}
    
        default:
            return state;
    }
 

}

export default todoReducer