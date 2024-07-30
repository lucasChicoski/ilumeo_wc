import { ManagementTimeModel } from "@/Domain/Model/UserModel";
import axios from "axios";



export class UserRepository {
    baseUrlAPI?: string

    constructor() {
        this.baseUrlAPI = process.env.NEXT_PUBLIC_URL_API
    }


    async getList(userCode: string) {
        const result = await axios.post(`${this.baseUrlAPI}/get-list-time`, { code_user: userCode })
        return result.data
    }

    async setTime(value: ManagementTimeModel) {
        const result = await axios.post(`${this.baseUrlAPI}/set-time`, { code_user: value.userCode, hash_time: value.hashTime, status: value.status, time: value.time })
        return result.data
    }
}