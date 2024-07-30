

import md5 from "md5"

export class GlobalFunctions {

    static hashMD5(value: string): string {
        return md5(value)
    }

    static getCurrentDate() {
        const offset = -3 * 60;
        const date = new Date();
        const currentDate = new Date(date.getTime() + (offset * 60000));

        return currentDate
    }

    static getCurrentDateFill() {
        const offset = -3 * 60;
        const date = new Date();
        const currentDate = new Date(date.getTime() + (offset * 60000));
        const fillDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1}-${currentDate.getDate()}`
        return fillDate
    }

    static getCookie(nome: string) {
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(nome
                + '=')) {
                return cookie.substring(nome.length + 1);
            }
        }

        return null; // Retorna null se o cookie não for encontrado
    }
}