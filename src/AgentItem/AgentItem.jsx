

export const AgentItem = ({
    agent,
    agentBlock,
    agentName,
    agentCountry,
    agentCountryName,
    agentImage,
    agentSpells,
    agentFirstSpell,
    agentSecondSpell,
    agentThirdSpell,
    agentFourthSpell,
    sage,
    sageSpells,
}) => {
    return (
        <div className={agentBlock}>
            <span className={agentCountry}>{agentCountryName}</span>
            <h2 className={agentName}>{agent.toUpperCase()}</h2>
            <img src={agentImage} alt={agent} />
            <div className={agentSpells} id={sage && sageSpells}>
                <div><img src={agentFirstSpell} alt={`${agent}firstSpell`} /></div>
                <div><img src={agentSecondSpell} alt={`${agent}secondSpell`}/></div>
                <div><img src={agentThirdSpell} alt={`${agent}thirdSpell`} /></div>
                <div><img src={agentFourthSpell} alt={`${agent}fourthSpell`} /></div>
            </div>
        </div>
    )
}