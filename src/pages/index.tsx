import loginStore from "../global/store/LoginStore"

export default function MyHome() {


    return (
        <div className="mainFrame">
            <div className="ContainerCenter" >
                <p style={{ color: "white" }} >Ponto <span style={{ fontWeight: "bolder" }} className="titleLoginSpan" >Ilumeo</span> </p>
                <div className="intpuTextContainer">
                    <input onChange={(e) => { loginStore.setCodeUser(e.target.value) }} placeholder="Usuário" className="intpuText" type="text" />
                </div>
                <div style={{ marginTop: "5px", marginBottom: "5px" }} />
                <div className="buttonSubmitContainer" >
                    <button onClick={() => { loginStore.login(loginStore.codeUser) }} className="buttonSubmit">Confirmar</button>
                </div>
            </div>
        </div>
    )
}