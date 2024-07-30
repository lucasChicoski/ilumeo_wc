
import { ManagementTimeDTO } from "@/Domain/DTO/UserDTO"

export class ManagementTimeModel {
    userCode: string
    hashTime: string
    time: Date
    status: string

    constructor(value: ManagementTimeDTO) {
        this.userCode = value.userCode,
            this.hashTime = value.hashTime,
            this.time = value.time,
            this.status = value.status
        return this
    }
}