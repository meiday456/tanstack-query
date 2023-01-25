import React, {useEffect} from 'react';
import './App.css';
import {useQuery} from "@tanstack/react-query";
import axios from "axios"
import {Post, User} from "./interface/queryTypes";

function App() {


    const {isLoading: isUserLoading, error: userError, data: userData} = useQuery<User>({
        queryKey: ['getUser'],
        queryFn: async () => {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            return data
        }
    })

    //react query로 만드는 경우 일정 시간마다 fetch를 실시한다.
    const {isLoading, error, data} = useQuery<Post[]>({
        queryKey: ['repoData'],
        queryFn: async () => {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return data
        },
        // enabled : true,
        // retry: 2,        //default 3  이 retry의 경우 error 혹은 문제가 발생했을때의 retry 수이다.
        // staleTime: 3,
    })

    //useEffect 코드가 아래의 코드보다 밑에 있으면 에러가 발생한다.
    useEffect(() => {
        console.log('mount')
        console.log(data)
    }, [data]);

    //이렇게 작성된 코드 때문에 useEffect hook이 사용이 불가한거같다.
    const nowLoading = isUserLoading && isLoading
    if (nowLoading) return <h1>Loading</h1>

    const nowError = error && userError
    if (nowError) return <h1>An error has occurred : {(error as Error).message}</h1>


    return (
        <div className="App">
            {
                userData &&
                (
                    <div>
                        <p>name : {userData.name}</p>
                        <p>address : {userData.address.street}</p>
                    </div>
                )

            }
            <hr/>
            {
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
        </div>

    );
}

export default App;
