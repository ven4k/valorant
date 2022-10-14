import styles from './MainPage.module.css';
import jett from '../assets/png/jett.png';
import phoenix from '../assets/png/phoenix.png';
import sova from '../assets/png/sova.png';
import sage from '../assets/png/sage.png';

export const MainPage = () => {
    return(
        <main>
            <div className={styles.agents}>AGENTS</div>
            <div className={styles.phoenix}>
                <span className={styles.phoenixCountry}>United Kingdom</span>
                <h2 className={styles.phoenixName}>PHOENIX</h2>
                <img src={phoenix} alt="phoenix"/>
                <div className={styles.characterSpells}>
                    2
                </div>
            </div>
            <div className={styles.jett}>
                <span className={styles.jettCountry}>South Korea</span>
                <h2 className={styles.jettName}>JETT</h2>
                <img src={jett} alt="jett" />
                <div className={styles.characterSpells}>
                    3
                </div>
            </div>
            <div className={styles.sova}>
                <span className={styles.sovaCountry}>Russia</span>
                <h2 className={styles.sovaName}>SOVA</h2>
                <img src={sova} alt="sova" />
                <div className={styles.characterSpells}>
                    4
                </div>
            </div>
            <div className={styles.sage}>
                <span className={styles.sageCountry}>China</span>
                <h2 className={styles.sageName}>SAGE</h2>
                <img src={sage} alt="sage" />
                <div className={styles.sageSpells}>
                    1
                </div>
            </div>
            <div className={styles.spellClass}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </main>
    )
}