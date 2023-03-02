import styles from './ShadowBox.module.css';
export const ShadowBox = ({stylesBox, children}) => {

    return (
        <div style={stylesBox} className={styles.shadowBox}>{children}</div>
    )
}