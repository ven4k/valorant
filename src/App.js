import {Header} from './Header/Header';
import styles from './App.module.css';
import {MainPage} from "./MainPage/MainPage";

function App() {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.bigRedRadius}></div>
            <div className={styles.smallRedRadius}></div>
            <div className={styles.mediumWhiteRadius}></div>
            <div className={styles.bigWhiteRadius}></div>
            <div className={styles.smallGreyRadius}></div>
            <div className={styles.bigGreyRadius}></div>
            <div className={styles.mediumGreyRadius}></div>
            <Header/>
            <MainPage/>
        </div>
    )
}

export default App;
