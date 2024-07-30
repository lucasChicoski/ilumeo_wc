
import { Provider } from "mobx-react"
// import StyleStore from '../global/store/StyleStore.ts'
import UserStore from "../global/store/UserStore.ts"
import AuthStore from "../global/store/LoginStore.ts"
//importações css

import "../../public/css/login.css"
import "../../public/css/global.css"
import "../../public/css/pointClock.css"
import "../../public/css/components/button_submit/button_submit.css"
import "../../public/css/components/item_list/item_list.css"
import "../../public/css/components/warning.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider
            userStore={UserStore}
            loginStore={AuthStore}
        >
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <Component {...pageProps} />
        </Provider>
    )

}