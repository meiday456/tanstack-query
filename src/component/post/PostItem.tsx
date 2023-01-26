import {Post} from "../../interface/queryTypes";
import {usePostDeleteMutation, usePostUpdateMutation} from "../../hooks/mutations/postMutations";
import {ChangeEvent, useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import queryKeys from "../../hooks/keys/queryKeys";

interface Props {
    info: Post
}

const PostItem = ({info}: Props) => {

    const [title, setTitle] = useState(info.title);
    const [body, setBody] = useState(info.body);

    const queryClient = useQueryClient()

    const updateMutation = usePostUpdateMutation({}, async () => {
        window.alert("수정요청을 하였으나 placeholder API 를 사용한 예제로 실데이터는 변하지않습니다.")
        await queryClient.refetchQueries(queryKeys.post.allQuery())
    })

    const updateHandle = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (window.confirm("정말 수정하시겠습니까?")) {
            updateMutation.mutate({...info, title, body})
        }
    }

    const deleteMutation = usePostDeleteMutation({}, async () => {
        window.alert("삭제요청을 하였으나 placeholder API 를 사용한 예제로 실데이터는 변하지않습니다.")
        await queryClient.refetchQueries(queryKeys.post.query.lists())
    })

    const deleteHandle = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        if (window.confirm("정말 삭제하기겠습니까?")) {
            deleteMutation.mutate(info.id)
        }
    }

    const moveDetail = ()=>{
        window.location.href = `/info?id=${info.id}`
    }

    return (
        <div className={"post-item"} onClick={moveDetail}>
            <div className={"box id"}>{info.id}</div>
            <div className={"contents"}>
                <div className={"box"}>
                    <div>title :</div>
                    <input type={"text"} defaultValue={title}
                           onClick={event=>event.stopPropagation()}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               setTitle(event.target.value)
                           }}
                    /></div>
                <div className={"box"}>
                    <div>body :</div>
                    <input type={"text"} defaultValue={body}
                           onClick={event=>event.stopPropagation()}
                           onChange={(event: ChangeEvent<HTMLInputElement>) => {
                               setBody(event.target.value)
                           }}
                    /></div>
            </div>
            <div>
                <button className={"btn"} onClick={(event)=>updateHandle(event)}>수정</button>
                <button className={"btn"} onClick={(event)=>deleteHandle(event)}>삭제</button>
            </div>

        </div>
    )
}

export default PostItem