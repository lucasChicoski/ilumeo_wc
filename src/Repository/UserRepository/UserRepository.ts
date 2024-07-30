import { ManagementTimeModel } from "@/Domain/Model/UserModel";
import axios from "axios";



export class UserRepository {

    async getList(userCode: string) {

        const result = await axios.post("http://localhost:3001/get-list-time", { code_user: userCode })
        return result.data
    }

    async setTime(value: ManagementTimeModel) {
        const result = await axios.post('http://localhost:3001/set-time', { code_user: value.userCode, hash_time: value.hashTime, status: value.status, time: value.time })
        return result.data
    }
}