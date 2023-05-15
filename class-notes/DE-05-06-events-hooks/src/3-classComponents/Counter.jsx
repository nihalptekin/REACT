
//* ====================== CLASS COMPONENTS AND STATE ======================
//* React taki Class-Components  ES6 class yapısını temel alır.
//* çok fazla boilerplate code a sahipler.
//* fakat, state lere sahip olabilirler
//*  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
//* ne zaman değişse component re-render olur.
//* this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =========================================================================
import React, {Component} from 'react'


class Counter extends Component{
    constructor(props){
        super(props); 
            this.state = { count: props.count || 0} //her zaman state yazmak zorundayiz.
    }
   
arttir()
 {
    this.setState({count: this.state.count+1})  //her zaman setState yazilir.  
 }

 //! arrow funktion ile kullandik asagida bind(this) yazmadik. 
 azalt=()=>
 {
    this.setState({count: this.state.count-1})
 }

 render() {

    return(
        <div className="counter text-center mt-4">
        <h1>COUNT: {this.state.count}</h1>
        <button className='btn btn-primary' onClick={this.arttir.bind(this)}>ARTTIR</button>
        <button className='btn btn-danger' onClick={this.azalt}>AZALT</button>  
        </div>
    )
 }

}
export default Counter