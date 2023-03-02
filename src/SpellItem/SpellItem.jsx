export const SpellItem = ({
    spellClassBlock,
    spellClass,
    spellName,
    desciption,
    spellIco,
    icoAlt,
    redBox,
    
}) => {
    return (
        <div className={spellClassBlock}>
            <h3>{spellClass}</h3>
            <h4>{spellName}</h4>
            <p>{desciption}</p>
            <img src={spellIco} alt={icoAlt} />
            <div className={redBox}></div>
        </div>
    )
}