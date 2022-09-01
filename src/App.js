import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import "./index.css";
// import React, { useState } from "react";

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

function App() {
  return (
    <section className="form-control">
      <form>
        <input type="text" placeHolder="Enter your Name" />
        <input type="email" placeHolder="Enter your Email" />
        <input type="number" placeHolder="Enter your Phone" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;
