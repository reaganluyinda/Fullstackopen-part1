import Header from "./Header";
import Display from "./Display";
import Total from "./Total";
import Average from "./Average";

const Statistics = ({ subTitle, good, neutral, bad }) => {
  return (
    <div>
      <Header subTitle={subTitle} />
      <Display good={good} neutral={neutral} bad={bad} />
      <Total good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default Statistics;
