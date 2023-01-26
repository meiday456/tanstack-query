import axios from "axios";
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

export const registerPostInfo = async (info:Post) : Promise<Post>=>{
    return await axios.post("https://jsonplaceholder.typicode.com/posts",{
        ...info
    })
}

export const putPostInfo = async (post:Post):Promise<Post>=>{

    console.debug('api에 받은 post 값', post)

    const {data} = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
        ...post
    })
    return data
}

export const deletePostInfo = async (id:number):Promise<{}>=>{
    const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
}