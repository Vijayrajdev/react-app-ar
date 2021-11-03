import React, { useState, useEffect } from "react";

const User = (props) => {
  // Value
  // The function to update the state
  const [planet, setPlanet] = useState("Earth");

  // Component Did Mount
  useEffect(() => {
    console.log("Component Mounting");
  }, []);

  // component did update
  useEffect(() => {
    console.log("planet changes");
  }, [planet]);

  console.log(planet);

  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("Pluto")}>Change Planet!!</button>
      <h4>{planet}</h4>
    </div>
  );
};

export default User;

//* Class components

// class User extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       planet: "Earth",
//     };
//     console.log("Hey I'm from constructor");
//   }

//   componentDidMount() {
//     this.setState({ planet: "Jupiter" });
//     console.log("Hey I'm from componentDidMount");
//   }

//   shouldComponentUpdate(nextProp, nextState) {
//     console.log("Hey I'm from shouldComponentUpdate");
//     console.log({ nextState, nextProp });
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProp, prevState) {
//     console.log("Hey I'm from getSnapshotbeforeUpdate");
//     console.log({ prevState, prevProp });
//     return true;
//   }

//   componentDidUpdate() {
//     console.log(this.state);
//   }

//   render() {
//     console.log("Hey I'm from rendered");
//     return (
//       <div>
//         <h2>{this.props.name}</h2>
//         <p>{this.props.description}</p>
//         <h4>{this.state.planet}</h4>
//       </div>
//     );
//   }
// }

// export default User;
