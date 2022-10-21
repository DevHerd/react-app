import { useState } from 'react';

import styles from './Counter.module.scss';

const Counter = () => {
  const [clickCount, setClickCount] = useState(0);
  const onClickCounterHandler = () => setClickCount(clickCount + 1);
  const onClickResetHandler = () => setClickCount(0);
  const onClickDecreaseCounterHandler = () => setClickCount(clickCount - 1);

  return (
    <div>
      <h2>Counter</h2>
      <div>{`I was clicked: ${clickCount}`}</div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.counterButton}
          onClick={onClickCounterHandler}
          type='button'
        >
          {clickCount > 0 ? 'Increase' : 'Counter'}
        </button>
        {clickCount > 0 && (
          <>
            <button
              className={styles.counterButton}
              onClick={onClickDecreaseCounterHandler}
              type='button'
            >
              Decrease
            </button>
            <button
              className={styles.counterButton}
              onClick={onClickResetHandler}
              type='button'
            >
              Reset
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Counter;
