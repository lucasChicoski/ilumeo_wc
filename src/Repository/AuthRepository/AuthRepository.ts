import axios from "axios";


export class AuthRepository {
    baseUrlAPI?: string

    constructor() {
        this.baseUrlAPI = process.env.NEXT_PUBLIC_URL_API
    }
    async loginRepository(user_code: string) {
        const result = await axios.post(`${this.baseUrlAPI}/auth-user`, { user_code })
        return result
    }

}