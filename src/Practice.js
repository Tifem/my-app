import { useState } from "react";

function Practice() {
  const [count, setCounnt] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    //Increment the count...
    // setCounnt(count + 1); method 1
    setCounnt((prevCount) => prevCount + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();

    //Decrement the count....
    setCounnt((prevCount) => prevCount - 1);

  };

  return (
    <section className="main-conatiner">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </section>
  );
}
export default Practice;
