import styles from './Header.module.scss';
import logo from './logo.svg';

function Header() {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <img alt="logo" className={styles.appLogo} src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Header;
