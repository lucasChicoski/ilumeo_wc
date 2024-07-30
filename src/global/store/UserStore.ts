import { UserController } from "@/Controller/UserController"
import { ManagementTimeModel } from "@/Domain/Model/UserModel"
import { makeAutoObservable } from "mobx"
import { GlobalFunctions } from "../GlobalFunctions/GlobalFunctions"

const userController: UserController = new UserController()

class UserStore {

    label: string = "Hora de Entrada"
    statusUser: boolean = false

    totalMinutes: number = 0
    totalHours: number = 0

    listBeforeDays: Array<any> = []
    currentDayWorkTime: any //somaHours e somaMinutes

    constructor() {
        makeAutoObservable(this)
    }

    async getList(userCode: string) {
        const result = await userController.getList(userCode)

        this.statusUser = result?.is_working
        this.listBeforeDays = result?.list_before_days

        this.totalHours = result?.current_day_work_time?.somaHours ?? 0
        this.totalMinutes = Math.round(result?.current_day_work_time?.somaMinutes ?? 0)


        this.label = !this.statusUser ? "Hora de entrada" : "Hora de saída"

    }
    async submmit(value: ManagementTimeModel) {
        const result = await userController.setTime(value)
        await this.getList('4SXXFMF')

    }


    getInf(): ManagementTimeModel {
        const userCode = "4SXXFMF"
        const hashTime = GlobalFunctions.hashMD5(GlobalFunctions.getCurrentDateFill())
        const time = GlobalFunctions.getCurrentDate()
        const status = !this.statusUser ? 'working' : 'not_working'

        const managementTimeModel = new ManagementTimeModel({ hashTime, status, time, userCode })

        return managementTimeModel
    }
}


export default new UserStore