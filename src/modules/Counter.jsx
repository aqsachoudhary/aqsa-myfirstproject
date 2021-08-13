import { useState, useEffect } from "react";
const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  useEffect(() => {
    if (counter === 10 || counter === -10) {
      console.log("you are reached at 10 ");
      setText("you are reached at 10");
      setCounter(0);
    } else if (counter === 10 || counter === 0) {
      console.log("you are reached at 10 ");
      setText("you are reached at 10");
    } else {
      console.log("");
      setText("");
    }
  }, [counter]);
 // useEffect(() => {
  //   console.log("component did mount called");
  // }, []); ///this will work as component did mount

  // // useEffect(() => {
  // //   console.log("component did update called");
  // // }); ///this will work as component did update and call every time when state will update

  // useEffect(() => {
  //   if (counter === 10) {
  //     console.log("You reached at 10");
  //     setLabel("You reached at 10");
  //   }
  //   console.log("component did update called", counter);
  // }, [counter, title]); //this will work as component did update dependent on the parameter we pass in array
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <h3 style={{margin:0,padding:0}}>{props.title}</h3>
        <h2>{props.subtitle}</h2>
      <h1>{counter}</h1>
      
      <button
        style={{
          width: "150px",
          height: "30px",
          backgroundColor: "gold",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        style={{
          width: "150px",
          height: "30px",
          backgroundColor: "tomato",
          marginTop: "10px",
        }}
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
      <h3>{text}</h3>
    </div>
  );
};
export default Counter;