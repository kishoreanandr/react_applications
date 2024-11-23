
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

// import { Bmicalculator } from "./components/bmi_calculator";

// import { Weather } from "./components/weather";

// import { Advice } from "./components/advice";
//import { Regform } from "./components/usestate_form";

// import { StrongPassword } from "./components/strongPassword";

// import { Faq } from "./components/faq.jsx";
import { Filter } from "./components/Filter.jsx";

function App() {
    const data=[
        {
            id:1,question:"What is React?",answer:"React is a front end JavaScript library for building user interfaces or UI componenets."
        },
        {
            id:2,question:"What are the benefits of React?",answer:"Some of the benfits of react are:it is fast,scalable,modular,easy to debug,and supports server-side rendering."
        },
        {
            id:3,question:"What are the main concepts of React?",answer:"Some of the main concepts of React are: components,props,state,hooks,lifecycle methos and JSX"
        },
    ]
    return (<>

        <div className="App">
            {/* <Card/> 

             <Cart/>
            <User_details/> 
            <UpdateText/>
            <Regform/>
            <Advice/>
            <Weather/>
         <Bmicalculator/>
            
            <Qrcode/>
            <StrongPassword/>
            
            <Faq data={data}/> 
            */}
            <Filter/>
            
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
