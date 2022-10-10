import React from "react";
// import UserProfileCard from "./components/UserProfileCard";
import "./index.css";
// import React, { useEffect, useState } from "react";
import Header  from "./components/Header";
import Practice from "./Practice";
import PracticeContext from "./PracticeContext";

// function App() {
//   return <section>
//       <UserProfileCard />
//   </section>
// // }

// function App() {
//   const users = [
//     {
//       name: "John Doe",
//       bio: "I am a developer",
//       avatar: "https://www.w3schools.com/howto/img_avatar.png",
//     },
//     {
//       name: "Jane Doe",
//       bio: "I am a developer",
//       avatar: "https://www.w3schools.com/howto/img_avatar.png",
//     },
//   ];

//   const usersList = users.map((user) => {
//     return (
//       <div>
//         <img src={user.avatar} alt="avatar" style={{ width: 100 }} />
//         <h3>{user.name}</h3>
//         <p>{user.bio}</p>
//       </div>
//     );
//   });

//   return <section>{usersList}</section>;
// }

//Click Event

// function App() {
//state
// const [counter, setCounnter] = useState(0);

//Handle increament
// const handleIncrement = (event) => {
// event.preventDefault();
// setCounnter(prev => prev + 1);
// console.log(counter);
// };

//Handle decrement
// const handleDecrement = (event) => {
// event.preventDefault();
// setCounnter(prev => prev - 1);

// console.log(counter);
// };

//   return (
//     <section className="counter-container">
//       <div className="counter-label">{counter}</div>
//       <button className="action-btn" onClick={handleIncrement}>
//         Increament
//       </button>
//       <button className="action-btn" onClick={handleDecrement}>
//         Decreament
//       </button>
//     </section>
//   );
// }

//Form Event

// function App() {
// Handle Change
// const handleChange = (event) => {
// event.preventDefault();
// console.log(event.target.value);
// };

// return (
// <section className="form-control">
// <form
// onSubmit={(event) => {
// event.preventDefault();
// const {name, email, tel} = event.target.elements;
// alert(`Hello ${name.value}! Your email is ${email.value} and your phone number is ${tel.value}`);
// console.log(elements);
// console.log("Form submitted!");
// }}
// >
// <input
// onChange={handleChange}
// type="text"
// placeholder="Enter your Name" name="name"
// />
// <input type="email" placeholder="Enter your Email" name="email"/>
// <input type="tel" placeholder="Enter your Phone" name="tel" />
// <button type="submit">Submit</button>
// </form>
// </section>
// );
// }

//MouseOver Event
// function App() {
//   const [state, setState] = useState("Magic is here");

//   //Handle mouse over event
//   const handleMouseOver = (event) => {
//     setState("Welcome to the jungle");
//     setTimeout(() => {
//       setState("Magic Is Here");
//     }, 1000);
//   };
//   return (
//     <section className="main-container">
//       <h1 onMouseOver={handleMouseOver} className="hover-me">
//         {state}
//       </h1>
//     </section>
//   );
// }

//React Props

//Car component method 1

// function Car({ data }) {
//   // console.log(props);98908
//   const {brand, color, year} = data;
//   return <div className="car">{` ${year} ${color}, ${brand}`}</div>;
// }

// function App() {
//   return (
//     <section className="main-container">
//       <Car data={{
//         brand: "Ford",
//         color: "Red",
//         year: "2020",
//       }} />
//     </section>
//   );
// }

//Method 2

// function Car({ brand, color, year }) {
//   // console.log(props);98908
//   return <div className="car">{`${brand} ${color}, ${year}`}</div>;
// }

// function App() {
//   const data = {
//     brand: "Ford",
//     color:"Red",
//     year: "2020",
//   };

//   return (
//     <section className="main-container">
//       <Car {...data} />
//     </section>
//   );
// }

//Loader component
// function Loader() {
//   return <div className="loader">Loading......</div>;
// }

// //Content component
// function Content() {
//   return (
//     <div className="content">
//       <p>
//         React is a JavaScript library for building user interfaces. It is a
//         community of individual developers and comapnies. React can be used as a
//         base in the development of single-page or mobile application. However,
//         React components are most often used in the content of a more
//         traditional web application, as it allows to render a virtual DOM on the
//         server side then diff it and apply the changes to the UI in JavaScript,
//         without ever touching the DOM.
//       </p>
//     </div>
//   );
// }
// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   setTimeout(() => {
//     setIsLoading(false);
//   }, 5000);
//   return (
//     <section className="main-container">
//       {isLoading ? <Loader /> : <Content />}
//     </section>
//   );
// }

//React Hooks using the useState

// function App (){
//   const [count, setCount] = useState(8);
//   // const [name, setName] = useState("");

//   return <section className="main-container">
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count + 1)}>Increment</button>;
//   </section>
// }

// function App() {
//   //Define use effect hook

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count > 0){
//       console.log("Count:", count);
//     }
//   }, [count]);

//   //Define our click handler
//   const handleClick = (event) =>{
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <section className="main-container">
//       <Practice></Practice>
//       <PracticeContext></PracticeContext>
//       <h1>Hello World!</h1>
//       <button onClick={handleClick}>Click Me!</button>
//     </section>
//   );
// }
function App() {
  return (
    <div className="container">
      <Header/>
    </div>
  )
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello From a Class</h1>
//   }
// }
export default App;
