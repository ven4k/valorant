import styles from './Header.module.css';
import logo from '../assets/png/Logo.png';
import loginAvatar from '../assets/svg/akali.svg';

export const Header = () => {
    return (
        <header>
            <div className={styles.logo1}>
                <h2>RIOT</h2>
                <p>GAMES</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.logo2}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={styles.headerList}>
                <div className={styles.headerListGame}>GAME</div>
                <div className={styles.headerListChampions}>CHAMPIONS</div>
                <div className={styles.headerListNews}>
                    <label for={styles.selectHeaderListNews}>NEWS</label>
                    <select id={styles.selectHeaderListNews}>
                        <option></option>
                    </select>
                </div>
                <div className={styles.headerListPatchNotes}>PATCH NOTES</div>
                <div className={styles.headerListDiscover}>
                    <label for={styles.selectHeaderListDiscover}>DISCOVER</label>
                    <select id={styles.selectHeaderListDiscover}>
                        <option></option>
                    </select>
                </div>
                <div className={styles.headerListEsports}>ESPORTS</div>
                <div className={styles.headerListShop}>SHOP</div>
                <div className={styles.headerListSupport}>SUPPORT</div>
            </div>
            <div className={styles.login}>
                <div className={styles.loginAvatar}>
                    <img src={loginAvatar} alt="loginAvatar"/>
                </div>
                <div className={styles.loginName}>
                    ven4k
                </div>
                <div>
                    <select id={styles.selectLoginName}>
                        <option></option>
                    </select>
                </div>
            </div>
        </header>
    )
}