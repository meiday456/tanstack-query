import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {Post} from "../interface/queryTypes";
import axios from "axios";
import React, {useCallback, useState} from "react";


interface PostParam {
    userId?: number
    title: string,
    body: string
}

const MutationTest = () => {
    const [userId, setUserId] = useState(1)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const queryClient = useQueryClient()


    const {isLoading, error, data, isFetching} = useQuery<Post[]>({
        queryKey: ['getPostList'],
        queryFn: async () => {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return data
        },
        enabled: true,
        refetchOnWindowFocus: false
    })

    const postCreateMutation = useMutation({
        mutationFn: async ({title, body}: PostParam) => {
            return await axios.post("https://jsonplaceholder.typicode.com/posts", {userId, title, body})
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(["getPostList"])
        }
    })

    const submitHandle = () => {

        if (title && body) {
            postCreateMutation.mutate({title, body})
        }
        setUserId(id => id + 1)
    }

    return (
        <>
            <div>
                <input type="text" placeholder={"title"} onChange={event => {
                    setTitle(event.target.value)
                }}/>
                <input type="text" placeholder={"body"} onChange={event => {
                    setBody(event.target.value)
                }}/>
                <input type="submit" value="등록" onClick={submitHandle}/>
            </div>
            <br/>
            {
                postCreateMutation.isLoading
                    ? <div>Mutation Loading</div>
                    :
                    postCreateMutation.isError
                        ? <div>Mutation Fail : {(postCreateMutation.error as Error).message}</div>
                        : postCreateMutation.isSuccess
                            ? <div>Mutation is Success</div>
                            : postCreateMutation.isIdle //데이터가 없고 비었을때
                                ? <div>Mutation is idle</div>
                                : null
            }
            <hr/>
            <p>post 목록</p>
            {
                isFetching ? <div>Fetching Data</div>
                    :
                    data?.map((post) => {
                        return (
                            <div key={post.id}>
                                <span>post id : {post.id}</span> &nbsp;
                                <span>user id : {post.userId}</span>
                                <div>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}


export default MutationTest