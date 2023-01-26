import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "../keys/queryKeys"
import {getPost, getPostInfo} from "../../apis/Apis";
import {Post} from "../../interface/queryTypes";
import {AxiosError} from "axios";

const usePostQuery = (options: UseQueryOptions<Post[], AxiosError> = {},
                      onSuccess : ()=>void = ()=>{})
    : UseQueryResult<Post[], AxiosError> => {
    return useQuery({
        queryKey: queryKeys.post.query.lists(),
        queryFn: () => getPost(),
        ...options,
        onSuccess
    })
}

const usePostInfoQuery = (options: UseQueryOptions<Post, AxiosError> = {}, id: number = 0)
    : UseQueryResult<Post, AxiosError> => {
    return useQuery({
        queryKey: [queryKeys.post.query.detail(id)],
        queryFn: () => getPostInfo(id),
        ...options
    })
}


export {usePostQuery, usePostInfoQuery}