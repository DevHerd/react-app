import Card from '../Card/Card';
import styles from './Grid.module.scss';

const Grid = (props) => {
  const { children } = props;

  return (
    <section className={styles.section}>
      <Card className={styles.grid}>{children}</Card>
    </section>
  );
};

export default Grid;
