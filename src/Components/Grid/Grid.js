import styles from './Grid.module.scss';

const Grid = (props) => {
  const { children } = props;

  return (
    <div className={styles.section}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default Grid;
