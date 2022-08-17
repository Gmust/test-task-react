import axios from "axios";
import {delayAdapterEnhancer} from "axios-delay";
const token = process.env.REACT_APP_BEARER


let instance = axios.create({
    // @ts-ignore
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
    baseURL: 'http://opn-interview-service.nn.r.appspot.com/',
    delay: 200,
    headers: {
        Authorization: 'Bearer ' + token
    }
})

export const testApi ={
    async  getList (){
        try {
            const {data} = await instance.get('list' )
            return data
        }catch (e){

        }
    },
    async getUser(id: string | null | undefined){
        return  instance.get('get/' + id)
            .then(response =>{
                return response.data;
            }).catch(function (error) {
                if (error.response) {
                    } else if (error.request) {
                    alert('never leave never get')
                } else {
                    alert('another')
                }
            });

    }
}
