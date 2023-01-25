import axios from "axios/index";
import {User} from "../interface/queryTypes";


export const getUser = async (userId: number): Promise<User> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return data
}

export const getUserList = async (): Promise<User[]> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return data
}
