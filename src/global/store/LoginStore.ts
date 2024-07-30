import { AuthController } from "@/Controller/AuthController";
import { makeAutoObservable } from "mobx";

const authController: AuthController = new AuthController()

class LoginStore {

    userName: string = ''
    codeUser: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setCodeUser(value: string) {
        this.codeUser = value
    }

    setUserName(value: string) {
        this.userName = value
    }

    async login(code_user: string) {

        if (this.codeUser.length > 3) {
            const result = (await authController.login(code_user)).data


            if (result?.name && result?.code_user) {

                document.cookie = `user_name=${result.name}; expires=; path=/`
                document.cookie = `user_code=${result.code_user}; expires=; path=/`

                this.userName = result.name
                this.codeUser = result.code_user

                window.location.href = '/home'
                
                return
            }

            alert('Algo deu errado, contatar o adm')


        } else {
            alert('Favor digitar pelo menos 4 caracteres')
        }

    }
}


export default new LoginStore()