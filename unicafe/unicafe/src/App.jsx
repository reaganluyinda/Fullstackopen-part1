import { useState } from "react";
import Button from "./Components/Button.jsx";
import Header from "./Components/Header.jsx";
import Display from "./Components/Display.jsx";
function App() {
  const title = "Give Feedback";
  const subTitle = "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title={title} />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header subTitle={subTitle} />
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
