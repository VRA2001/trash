import React, { useState } from 'react';
import Clock from './components/Clock';
//function Welcome(props) {
    //const [value, setValue] = useState();
    //return <>
           //<br/> {props.name} {value ? value.target.value : ''}
        //<input type={'text'} onChange={setValue} />
    //</>;
//}
//function App() {
    //return (
        //<div>
            //<Welcome name="ФИО:" /> <br/>
            //<Welcome name="Номер телефона:" /><br />
            //<Welcome name="E-mail:" /><br />
            // <Welcome name="Дата рождения:" /><br />
            // <Welcome name="Биографические сведения:" /><br />
        //</div>   
    //);
//}
//export default Welcome; 
//const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  //const timer = function() {
  // {new Date().toDateString()}
  // {new Date().toLocaleDateString()}
  //return 
  //};

    return 
    <Clock date={new Date()}/>
    <Clock date={new Date()}/>
    <Clock date={new Date()}/>
    <Clock date={new Date()}/>
    <Clock date={new Date()}/>
}

export default App;


//import React, {useState} from 'react';

//function App(){

  // let a = 1;
  // let b = 9;
  // let c = a+b;
  // b +=a + b;
  // console.log(c);

  //const [value, setValue] = useState();

//console.log(value);

   //return <>
      //<p> 
        //{value ? value.target.value : ""}
      //</p>

      //<input/ type={"text"} onChange={setValue}/>
   //</>;
//}

//export default App;