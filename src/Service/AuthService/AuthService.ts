import { AuthRepository } from "@/Repository/AuthRepository/AuthRepository";


export class AuthService {
    async login(user_code: string) {
        const authRepository = new AuthRepository()
        return await authRepository.loginRepository(user_code)
    }
}