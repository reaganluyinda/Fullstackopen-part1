import Header from "./Header";
import StatisticLine from "./StatisticLine";

const Statistics = ({ subTitle, good, neutral, bad }) => {
  const Total = good + neutral + bad;
  const average = Total ? (good - bad) / Total : 0;
  const positive = Total ? (good / Total) * 100 : 0;

  return (
    <div>
      <Header subTitle={subTitle} />
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={Total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positive} %`} />
        </div>
      )}
    </div>
  );
};

export default Statistics;
