import styles from './MainPage.module.css';
import jett from '../assets/png/jett.png';
import phoenix from '../assets/png/phoenix.png';
import sova from '../assets/png/sova.png';
import sage from '../assets/png/sage.png';
import firstPhoenixAbility from '../assets/svg/firstPhoenixAbility.svg'
import secondPhoenixAbility from '../assets/svg/secondPhoenixAbility.svg'
import thirdPhoenixAbility from '../assets/svg/thirdPhoenixAbility.svg'
import fourthPhoenixAbility from '../assets/svg/fourthPhoenixAbility.svg'
import firstJettAbility from '../assets/svg/firstJettAbility.svg'
import secondJettAbility from '../assets/svg/secondJettAbility.svg'
import thirdJettAbility from '../assets/svg/thirdJettAbility.svg'
import fourthJettAbility from '../assets/svg/fourthJettAbility.svg'
import firstSovaAbility from '../assets/svg/firstSovaAbility.svg'
import secondSovaAbility from '../assets/svg/secondSovaAbility.svg'
import thirdSovaAbility from '../assets/svg/thirdSovaAbility.svg'
import fourthSovaAbility from '../assets/svg/fourthSovaAbility.svg'
import firstSageAbility from '../assets/svg/firstSageAbility.svg'
import secondSageAbility from '../assets/svg/secondSageAbility.svg'
import thirdSageAbility from '../assets/svg/thirdSageAbility.svg'
import fourthSageAbility from '../assets/svg/fourthSageAbility.svg'
import basic from '../assets/svg/basic.svg';
import signature from '../assets/svg/signature.svg';
import ultimate from '../assets/svg/ultimate.svg';
import { AgentItem } from '../AgentItem/AgentItem';
import { SpellItem } from '../SpellItem/SpellItem';
import { ShadowBoxLayer } from '../ShadowBoxLayer/ShadowBoxLayer';


export const MainPage = () => {
    return (
        <main>
            <ShadowBoxLayer />
            <section className={styles.firstMainSection}>
                <div className={styles.agents}>AGENTS</div>
                <AgentItem agent='phoenix' agentBlock={styles.phoenix} agentName={styles.phoenixName} agentCountry={styles.phoenixCountry} agentCountryName='United Kingdom'
                    agentImage={phoenix} agentSpells={styles.characterSpells} agentFirstSpell={firstPhoenixAbility} agentSecondSpell={secondPhoenixAbility}
                    agentThirdSpell={thirdPhoenixAbility} agentFourthSpell={fourthPhoenixAbility} agentImageBlock={styles.agentImageBlock}
                />
                <AgentItem agent='jett' agentBlock={styles.jett} agentName={styles.jettName} agentCountry={styles.jettCountry} agentCountryName='South Korea'
                    agentImage={jett} agentSpells={styles.characterSpells} agentFirstSpell={firstJettAbility} agentSecondSpell={secondJettAbility}
                    agentThirdSpell={thirdJettAbility} agentFourthSpell={fourthJettAbility}  agentImageBlock={styles.agentImageBlock}
                />
                <AgentItem agent='sova' agentBlock={styles.sova} agentName={styles.sovaName} agentCountry={styles.sovaCountry} agentCountryName='Russia'
                    agentImage={sova} agentSpells={styles.characterSpells} agentFirstSpell={firstSovaAbility} agentSecondSpell={secondSovaAbility}
                    agentThirdSpell={thirdSovaAbility} agentFourthSpell={fourthSovaAbility}  agentImageBlock={styles.agentImageBlock}
                />
                <AgentItem agent='sage' agentBlock={styles.sage} agentName={styles.sageName} agentCountry={styles.sageCountry} agentCountryName='China'
                    agentImage={sage} agentSpells={styles.characterSpells} agentFirstSpell={firstSageAbility} agentSecondSpell={secondSageAbility}
                    agentThirdSpell={thirdSageAbility} agentFourthSpell={fourthSageAbility} sageSpells={styles.sageSpells} sage sageBlock={styles.sageImageBlock}  agentImageBlock={styles.agentImageBlock}
                />
            </section>
            <section className={styles.secondMainSection}>
                <div className={styles.spellClass}>
                    <div className={styles.corner}></div>
                    <SpellItem spellClassBlock={styles.basic} spellClass={'BASIC'} spellName={'Slow Orb'}
                        desciption={'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.'}
                        spellIco={basic} icoAlt={'basic'} redBox={styles.redBox}
                    />
                    <div className={styles.body}></div>
                    <SpellItem spellClassBlock={styles.signature} spellClass={'SIGNATURE'} spellName={'Healing Orb'}
                        desciption={'Heal an ally or yourself to full health over a few seconds.'}
                        spellIco={signature} icoAlt={'signature'} redBox={styles.redBox}
                    />
                    <SpellItem spellClassBlock={styles.ultimate} spellClass={'ULTIMATE'} spellName={'Resurrection'}
                        desciption={'Target a friendly corpse. After a short delay, revive them with full health.'}
                        spellIco={ultimate} icoAlt={'ultimate'} redBox={styles.redBox}
                    />
                    <div className={styles.whiteBox}></div>
                </div>
                <div className={styles.whiteLine}></div>
            </section>

        </main>
    )
}