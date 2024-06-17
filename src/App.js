
// import './App.css';
// import { ChildComponent } from './components/childComponent.jsx';
// import {Navbaar} from './components/header.jsx';
// import { Student } from './components/student_details.jsx';
// import {Array} from './components/arraysList.jsx';
// import { OneOfSample } from './components/OneOfSample.jsx';
// import {MultiSample} from './components/MultipleSample.jsx';
// import { Function } from './components/Function.jsx';
// import { Card } from './components/card.jsx';
// import { Cart } from './components/cart.jsx';
// import { Qrcode } from './components/qrCode.jsx';
// import { UpdateText } from './components/updateText.jsx';
// import { User_details } from './components/userDetails.jsx';

import { Weather } from "./components/weather.jsx";

// import { Advice } from "./components/advice";
//import { Regform } from "./components/usestate_form";


function App() {

  return ( <>
  
        <div className="App">
            {/* <Card/> 
            <Qrcode/>
             <Cart/>
            <User_details/> 
            <UpdateText/>
            <Regform/>
            <Advice/>*/}
            <Weather/>
            
        </div>
    </>)


}
//   const items=[
//   {id:1,name:"item1"},
//   {id:2,name:"item2"},
//   {id:3,name:"item3"}];


//   const handleEvent=()=>
//     {
//       alert("Button Clicked");
//     }

//   return (
//     <div className="App">
//       <Navbaar/>
//       <Student  name="Kishore" rollNo={110} department="ECE" pass={true}/>

//       <Student  name="Kavin Raj"  department="ECE" pass={false}/>

//       <ChildComponent>
//         This content is passing asa an array.
//         This is passing in app.js.
//       </ChildComponent>

//       <Array items={items}></Array>

//       <OneOfSample color="green"/>

//       <MultiSample value="Hello"/>
//       <MultiSample value={10}/>
//       <MultiSample value={true}/>

//       <div>
//         <h2>Parent Component:</h2>
//       <Function handleEvent={handleEvent}/>
//       </div>
//     </div>
//   );
// }

export default App;
