const Total = (props) => {
  console.log(props);

  return <p>All {props.good + props.neutral + props.bad}</p>;
};
export default Total;
