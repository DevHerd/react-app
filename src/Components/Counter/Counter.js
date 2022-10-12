import { useState } from "react";
import styles from './Counter.module.scss';

const Counter = () => {
  const [clickCount, setClickCount] = useState(0);
  const onClickCounterHandler = () => setClickCount(clickCount + 1);
  const onClickResetHandler = () => setClickCount(0);
  const onClickDecreaseCounterHandler = () => setClickCount(clickCount - 1);
  
  return (
    <section>
        <h2>Counter</h2>
        <div>How many times i was clicked: {clickCount}</div>
        <div className={styles.buttonWrapper}>
          <button type="button" className={styles.counterButton} onClick={onClickCounterHandler}>{clickCount > 0 && 'Increase'} Counter Clicker</button>
          {clickCount > 0 && (
            <>
              <button type="button" className={styles.counterButton} onClick={onClickDecreaseCounterHandler}>Decrease Counter Clicker</button>
              <button type="button" className={styles.counterButton} onClick={onClickResetHandler}>Reset Clicker</button>
            </>
          )}
        </div>
    </section>
  );
}

export default Counter;