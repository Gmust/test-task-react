import axios from "axios";

let instance = axios.create({
    baseURL: 'https://6245b0906b7ecf057c22fce6.mockapi.io/',
  /*  headers:{
        'Authorization': 'Bearer' +  process.env.REACT_APP_BEARER
    }*/
})

export const userApi = {
             async getUsers(){
                const {data} = await  instance.get("users")
                 return data;
            },
            async getUser(id: string | undefined){
                 const {data} = await instance.get("users/" + id)
                return data
            }
}