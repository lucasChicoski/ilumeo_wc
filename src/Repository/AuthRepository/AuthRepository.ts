import axios from "axios";


export class AuthRepository {

    async loginRepository(user_code: string) {
        const result = await axios.post('http://localhost:3001/auth-user', { user_code })
        return result
    }

}