import {useQuery, useQueryClient, QueryClient} from "@tanstack/react-query";
import {Post, User} from "../interface/queryTypes";
import axios from "axios";
import React, {useEffect} from "react";
import {getUser} from "../apis/Apis";


const ReFetch = () => {

    const queryClient = useQueryClient()
    useEffect(() => {
        console.log(queryClient)
    }, [queryClient]);


    const {isLoading, isFetching, isError, error, data, refetch} = useQuery<Post[]>({
        queryKey: [ 'ref', 'getPost'],
        queryFn: async () => {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return data
        },
        enabled: true
        // retry: 2,        //default 3  이 retry의 경우 error 혹은 문제가 발생했을때의 retry 수이다.
        // staleTime: 3,
    })

    const {isFetching: isUserFetching, isError: isUserError, data: userData, refetch: userRefetch} = useQuery<User>({
        queryKey: ['ref','getUser' ],
        queryFn: async () => {
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            return data
        },
        enabled: true
        // retry: 2,        //default 3  이 retry의 경우 error 혹은 문제가 발생했을때의 retry 수이다.
        // staleTime: 3,
    })

    if (isFetching) {
        return <h4>Fetching</h4>
    }

    //enabled를 false 해주더라도 laoding 상태가 true 이기때문에 원하는 refetch 테스트를 진행할수 없다.
    // if (isLoading){
    //     return <h4>Loading</h4>
    // }

    if (isError) {
        return <h3>Error : {(error as Error)?.message}</h3>
    }


    //enabled 가 false인 query에 대해서는 refetch가 이루어지지않는다.
    //queryKey의 경우 해당 값이 있으면 전부 하는것 아니라 앞에서 부터 찾는거 같다, 맨처음에 일치하는값이 없다면 실행하지않는다.
    //queryKey: [ 'ref', 'getPost'], refetch
    //queryKey: [ 'getPost','ref' ], not working
    const handleRefetch = async () => {
        await queryClient.refetchQueries({queryKey: ['ref']})
    }



    return (
        <>
            <button onClick={handleRefetch}>전체 다시 불러오기</button>
            <button onClick={()=>refetch()}>목록 다시 불러오기</button>
            <button onClick={()=>userRefetch()}>유저 다시 불러오기</button>
            {
                userData &&
                (
                    <div>
                        <p>name : {userData.name}</p>
                        <p>address : {userData.address.street}</p>
                    </div>
                )
            }
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

        </>

    )
}

export default ReFetch