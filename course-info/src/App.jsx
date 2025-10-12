import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises1: 10 };

  const part2 = { name: "Using props to pass data", exercises2: 7 };

  const part3 = { name: "State of a component", exercises3: 14 };

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises1}
      </p>
      <p>
        {part2.name} {part2.exercises2}
      </p>
      <p>
        {part3.name} {part3.exercises3}
      </p>
      <p>Total = {part1.exercises1 + part2.exercises2 + part3.exercises3} </p>
    </div>
  );
};

export default App;
