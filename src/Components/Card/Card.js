import clsx from 'clsx';

import styles from './Card.module.scss';

const Card = (props) => {
  const { children, className } = props;

  return <div className={clsx(styles.card, className)}>{children}</div>;
};

export default Card;
