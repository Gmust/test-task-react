import axios from "axios";
import {delayAdapterEnhancer} from "axios-delay";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjMiLCJpZGVudGl0eSI6IjEyMzQifQ.yOIx1ZozHSMy_ZndEEMXIH0YeGUkHH3idl_2WTI12gs"


let instance = axios.create({
    // @ts-ignore
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
    baseURL: 'http://opn-interview-service.nn.r.appspot.com/',
    delay: 200,
    headers: {
        Authorization: 'Bearer ' + token
    }
})

export const testApi = {
    async getList() {
        const {data} = await instance.get('list')
        return data

    },
    async getUser(id: string | null | undefined) {
        const {data} = await instance.get('get/' + id)
        return data

    }
}
