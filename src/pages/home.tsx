import ItemList from "@/Presentation/components/iten_list"
import { GlobalFunctions } from "@/global/GlobalFunctions/GlobalFunctions"
import userStore from "@/global/store/UserStore"
import loginStore from "@/global/store/LoginStore"
import { observer } from "mobx-react"
import { useEffect, useState } from "react"
import Warning from "@/Presentation/components/warning"

const Home = observer(() => {

    useEffect(() => {
        async function fetchData() {
            const x = process.env.NEXT_PUBLIC_URL
            debugger
            const cookieCode = GlobalFunctions.getCookie('user_code')
            const cookieName = GlobalFunctions.getCookie('user_name')

            if (cookieCode != null && cookieCode.length > 0 && cookieName != null && cookieName.length > 0) {
                loginStore.setCodeUser(cookieCode)
                loginStore.setUserName(cookieName)

                await userStore.getList(cookieCode!)
            } else {
                window.location.href = process?.env?.NEXT_PUBLIC_URL_WEBCLIENT ?? ''
            }
        }
        fetchData()
    }, [])

    return (
        <div className="MainFrameHome">
            <div className="userArea" >
                <div className="avatar" ></div>
                <span>{loginStore.userName}</span>
                <span># {loginStore.codeUser}</span>
            </div>
            <div className="reportArea" >
                <div className="actionReportArea" >
                    <div className="firs-inf" >
                        <button style={{ width: "100%" }} onClick={() => { userStore.submmit(userStore.getInf()) }} className="buttonSubmit">{userStore.label}</button>
                        <div style={{ marginTop: "15px" }} />
                        <div className="infHour" >
                            <span style={{ fontSize: "20px" }} > {userStore.totalHours == 0 ? '00' : userStore.totalHours}h</span>
                            {"\n"}
                            <span style={{ fontSize: "20px" }} >{userStore.totalMinutes == 0 ? '00' : userStore.totalMinutes}m</span>
                        </div>
                        <div style={{ marginTop: "15px" }} />
                        <span>Horas de hoje</span>

                    </div>
                </div>
                <div className="listBeforeDays" >
                    <div className="containerList" >
                        {userStore.listBeforeDays?.length > 0 ? userStore.listBeforeDays.map((element) => <ItemList dia={element.date} hour={element.totalHours} />) : <Warning />}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Home