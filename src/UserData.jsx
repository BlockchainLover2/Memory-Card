function DataContainer({highScore,score}){
    return (
        <>
            <div className={"user-data-container"}>
                <h2>Don't Click The Same Image More Than Once!!</h2>
                <Data headerText={"Current Score"} value={score}></Data>
                <Data  headerText={"Best Score"} value={highScore}></Data>
            </div>
        </>
    );
}


function Data({headerText,value}){
    return (
        <>
            <div className={"label-group"}>
                <h1 className={"header"}>{headerText}</h1>
                <p key={value} className={"value"}>{value}</p>
            </div>
        </>

    )
}


export default DataContainer