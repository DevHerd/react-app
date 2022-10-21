import { useState } from 'react';

import styles from './Toggle.module.scss';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => setToggle(!toggle);

  return (
    <div>
      <h2>Toggle</h2>
      <div>{`Toggle Status: ${toggle.toString()}`}</div>
      {toggle && <h2>Showing</h2>}
      <div className={styles.buttonWrapper}>
        <button
          className={styles.toggleButton}
          onClick={onClickHandler}
          type='button'
        >
          Toggle Button
        </button>
      </div>
    </div>
  );
};

export default Toggle;
