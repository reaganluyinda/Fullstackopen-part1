const Average = ({ good, neutral, bad }) => {
  console.log(good, neutral, bad);
  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0;
  const positive = all ? (good / all) * 100 : 0;

  return (
    <div>
      <p>Average {average}</p>
      <p>Positve {positive} %</p>
    </div>
  );
};

export default Average;
