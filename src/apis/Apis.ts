import axios from "axios/index";
import {Post, User} from "../interface/queryTypes";


export const getUser = async (userId: number): Promise<User> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return data
}

export const getUserList = async (): Promise<User[]> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    return data
}


export const getPost = async (): Promise<Post[]> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return data
}

export const getPostInfo = async (id: number): Promise<Post> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
}