import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">MetaMask'e Bağlı Durumdasın.</h1>
            <p className="connected-account">Metamask Hesabın: {props.account}</p>
            <p className="connected-account"> </p>
            { props.showButton ? (
                <p className="connected-account">Oyunu Zaten Kullandın.</p>
            ) : (
                <div>
                    <input type="number" placeholder="Aday Numarasını giriniz." value={props.number} onChange={props.handleNumberChange}></input>
            <br />
            <button className="login-button" onClick={props.voteFunction}>Oy Ver</button>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Aday İsmi</th>
                    <th>Aday Oy Sayısı</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;