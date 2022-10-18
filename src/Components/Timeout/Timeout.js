import { useEffect, useState } from 'react';

import styles from './Timeout.module.scss';

const Timeout = () => {
  const [intervalValue, setIntervalValue] = useState(0);
  const [timeoutValue, setTimeoutValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  const timeIntervalHandler = () => setToggle(!toggle);
  const resetTimeHandler = () => {
    if (timeoutValue > 1) {
      setTimeoutValue(0);
    }

    if (intervalValue > 1) {
      setIntervalValue(0);
    }
  };

  useEffect(() => {
    setTimeout(setTimeoutValue(timeoutValue + 1), 1000);
  }, []);

  useEffect(() => {
    let timeInterval;

    if (toggle) {
      timeInterval = setInterval(() => {
        setIntervalValue(intervalValue + 1);
      }, 1000);
    }

    return () => clearTimeout(timeInterval);
  }, [intervalValue, toggle]);

  return (
    <section>
      <h1>
        Interval Value
        {intervalValue}
      </h1>
      <h1>
        Timeout Value
        {timeoutValue}
      </h1>
      <div className={styles.buttonWrapper}>
        <button
          onClick={timeIntervalHandler}
          type="button"
        >
          {toggle ? 'Pause' : 'Start'}
          Time
        </button>
        <button
          onClick={resetTimeHandler}
          type="button"
        >
          Reset Time
        </button>
      </div>
    </section>
  );
};

export default Timeout;
