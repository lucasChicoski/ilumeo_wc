import { ManagementTimeModel } from "@/Domain/Model/UserModel"
import { UserService } from "@/Service/UserService/UserService"



export class UserController {

    async getList(userCode: string) {
        const userService: UserService = new UserService()
        const result = await userService.getList(userCode)
        return result
    }

    async setTime(value: ManagementTimeModel) {
        const userService: UserService = new UserService()
        const result = await userService.setTime(value)
        return result
    }
}