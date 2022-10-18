import { useState } from "react";
import styles from './Modal.module.scss';

const Modal = () => {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => setToggle(!toggle);
  const closeClickHandler = () => setToggle(false);
  return (
    <section>
        <h2>Modal</h2>
        <div className={styles.buttonWrapper}>
            <button onClick={onClickHandler} type="button">{toggle ? 'Hide' : 'Show'} Modal</button>
        </div>

        {toggle && (
            <div className={styles.modal}>
                Im showing the Modal right now!
                <button className={styles.modalClose} onClick={closeClickHandler} type="button">Close</button>
            </div>
        )}
    </section>
  )
}

export default Modal;