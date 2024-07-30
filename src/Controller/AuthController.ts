import { AuthService } from "@/Service/AuthService/AuthService";


export class AuthController {
    async login(user_code: string) {
        const authService = new AuthService()
        return await authService.login(user_code)
    }
}