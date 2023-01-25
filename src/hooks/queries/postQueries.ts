import {useQuery, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import queryKeys from "../keys/queryKeys"
import {getPost, getPostInfo} from "../../apis/Apis";
import {Post} from "../../interface/queryTypes";
import {AxiosError} from "axios";

const usePostQuery = (options: UseQueryOptions<Post[], AxiosError>)
    : UseQueryResult<Post[], AxiosError> => {
    return useQuery({
        queryKey: [queryKeys.post.list_fetch],
        queryFn: () => getPost(),
        ...options
    })
}

const usePostInfoQuery = (options: UseQueryOptions<Post, AxiosError>, id: number)
    : UseQueryResult<Post, AxiosError> => {
    return useQuery({
        queryKey: [queryKeys.post.info_fetch],
        queryFn: () => getPostInfo(id),
        ...options
    })
}


export {usePostQuery}