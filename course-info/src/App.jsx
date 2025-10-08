import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  let x = "reagen";
  const y = [1, -1, 3];
  // console.log(x);

  y.push(5);
  // console.log(y);
  // console.log(y.length);
  // y.forEach((value) => {
  //   console.log(value);
  // });
  // const y2 = y.concat(4);
  // console.log(y2);
  // console.log(y);

  const m1 = y.map((value) => value * 2);
  console.log(m1);

  return (
    <>
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
