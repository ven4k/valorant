import styles from './Header.module.css';
import logo from '../assets/svg/logo.svg';
import loginAvatar from '../assets/svg/akali.svg';
import riotLogo from '../assets/svg/riotLogo.svg';
import Polygon from '../assets/svg/Polygon.svg';

export const Header = () => {

    //т.к это просто вёрстка без функциона, потенциальные селекты, я заменил svg, чтобы не заморачиваться со стилями.
    return (
        <header>
            <div className={styles.logo1}>
             <img src={riotLogo} alt='logo'/>
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
                    <img className={styles.polygon} src={Polygon} alt='Polygon'/>
                </div>
                <div className={styles.headerListPatchNotes}>PATCH NOTES</div>
                <div className={styles.headerListDiscover}>
                    <label for={styles.selectHeaderListDiscover}>DISCOVER</label>
                    <img src={Polygon} className={styles.polygon} alt='Polygon'/>
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
                    UNEPICKID
                </div>
                <div>
                    <img className={styles.polygon} src={Polygon} alt='Polygon'/>
                </div>
            </div>
        </header>
    )
}