// useSate hook with function base component

// import React, {useState} from "react";

// function App() {
// const [count , setCount] =useState(0)

// const increment =()=>{
//   setCount(count + 1);
// }
// const decrement =()=>{
//   setCount(count - 1);
// }
//   return (
//     <>
//     <h1>Usestate</h1>
//     <p>The count is {count}</p>
//     <button onClick={decrement}>decrement</button>
//     <button onClick={increment}>incriment</button>
//     </>
//   );
// }

// export default App;


// State without hooks in classs component

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

// increment =()=>{
//   this.setState( {
//     count: this.state.count + 1,
//   });
// }
// decrement =()=>{
//     this.setState( {
//       count: this.state.count - 1,
//     });
//   }

//   render() {
//     return (
//      <>
//        <h1>Usestate</h1>
//        <p>The count is {this.state.count}</p>
//        <button onClick={this.decrement}>-</button>
//        <button onClick={this.increment}>+</button>
       
//      </>
//      );
//   }
// }

// Useeffect hook with function component

// import {React, useEffect, useState} from 'react'

// function App() {
//   const [windowWidth, setwindowWidth] = useState(window.innerWidth);
//   const [name, setname] = useState("");

//   // on every render
//   useEffect(() => {
//     console.log("I re-rendered");
//   });

//   // on first render/Mount only - componentDidMount Alternative
//   useEffect(() => {
//     console.log("The component mounted");
//   }, []);


//   // on first render + whenever dependency changes! - componentDidUpdated Alternative
//   useEffect(() => {
//     console.log(`the name changed : ${name}`)
//   }, [name])
  

//   //   Follows the smae rule + this handles the unmounting/cleanup on a component -ComponentWillUnmount Alternative 
//   useEffect(() => {
//     console.log("attach listner")
//     window.addEventListener("resize", updateWindowWidth)
  
//     return () => {
//         console.log("detach listener")
//       window.removeEventListener("resize", updateWindowWidth)
//     }
//   }, [])

//   const updateWindowWidth = () =>{
//     setwindowWidth(window.innerWidth)
//   }
  

//   return <div>

//     <center>
//         <h1>The UseEffect Hook</h1>
//         <h2>The window width is: {windowWidth}</h2>

//         <input
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter a name" 
//         />

        
//     </center>
//   </div>;
// }

// export default App


// class component without useEfffect hooks

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             windowWidth: window.innerWidth,
//         };
//     }


//     componentDidMount(){
//         // lifecycle func - when components mount/loads
//         console.log("The app componet mounted")
//     }

//     componentDidUpdate(prevProps){
//         // lifecycle function when component props change
//     }

//     componentWillUnmount(){
//         //  lifecycle functio when component unmount/cleanup function
//     }
//   render() {
//     return (
//       <div>
//         <center>
//           <h1>The useEffect hook </h1>
//           <h2>The window width is: {this.state.windowWidth} </h2>
//         </center>
//       </div>
//     );
//   }
// }
