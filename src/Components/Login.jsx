import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Oy Kullanma Sistemine Hoşgeldin.</h1>
            <button className="login-button" onClick = {props.connectWallet}>Metamask'e giriş yap</button>
        </div>
    )
}

export default Login;