import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {Post} from "../../interface/queryTypes";
import {deletePostInfo, putPostInfo} from "../../apis/Apis";
import {AxiosError} from "axios/index";
import queryKeys from "../keys/queryKeys";


export const usePostUpdateMutation = (options: UseMutationOptions<Post, AxiosError, Post> = {}, onSuccess: () => void = () => {
}) =>
    useMutation({
        ...options,
        mutationKey: [queryKeys.post.mutation.update],
        mutationFn: (param) => putPostInfo(param),
        onSuccess
    })


export const usePostDeleteMutation = (options:UseMutationOptions<{},AxiosError,number>={}, onSuccess:()=>void= ()=>{} )=>
    useMutation({
        ...options,
        mutationKey : [queryKeys.post.mutation.delete],
        mutationFn : (id)=>deletePostInfo(id),
        onSuccess
    })



