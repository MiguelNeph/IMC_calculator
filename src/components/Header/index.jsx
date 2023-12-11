import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>IMC Calculator</h1>
            <h2>Know if you are on the ideal balance</h2>
        </header>
    );
};

export default Header;