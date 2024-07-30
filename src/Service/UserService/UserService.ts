import { ManagementTimeModel } from "@/Domain/Model/UserModel"
import { UserRepository } from "@/Repository/UserRepository/UserRepository"

export class UserService {
    async getList(userCode: string) {
        const userRepository: UserRepository = new UserRepository()
        const result = await userRepository.getList(userCode)

        return result
    }

    async setTime(value: ManagementTimeModel) {
        const userRepository: UserRepository = new UserRepository()
        const result = await userRepository.setTime(value)

        return result
    }
}