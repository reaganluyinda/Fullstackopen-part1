import Header from "./Header";
import StatisticLine from "./StatisticLine";

const Statistics = ({ subTitle, good, neutral, bad }) => {
  const Total = good + neutral + bad;
  const average = Total ? (good - bad) / Total : 0;
  const positive = Total ? (good / Total) * 100 : 0;

  return (
    <div>
      <Header subTitle={subTitle} />
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={Total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positive} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
