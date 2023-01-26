import {ChangeEvent, useState} from "react";
import {usePostRegisterMutation} from "../../hooks/mutations/postMutations";


const Management = () => {

    const [id, setId] = useState(1);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const registerMutation = usePostRegisterMutation({},()=>{
        alert("등록요청을 하였으나 placeholder API 를 사용한 예제로 실데이터는 변하지않습니다.")
    })

    const registerHandle = () => {

        if (title && body) {
            setId(prev => prev + 1)
            registerMutation.mutate({userId:100 , id , title , body})
            setTitle('')
            setBody('')
        }else {
            alert("값을 입력하십시오")
        }

    }


    return (
        // 입력이 가능한 섹션
        <section className={"management area"}>
            <div className={"input_area"}>
                <span>ID : </span><input className={"inp"} type="text" readOnly={true} value={id}
                                         style={{textAlign: "center"}}/>
                <span>Title : </span>
                <input className={"inp"} type="text" placeholder={"제목을 입력하세요"}
                       value = {title}
                onChange={(event:ChangeEvent<HTMLInputElement>)=> {setTitle(event.target.value)}}/>
                <span>Body : </span>
                <input className={"inp"} type="text" placeholder={"내용을 입력하세요"}
                       value={body}
                       onChange={(event:ChangeEvent<HTMLInputElement>)=> {setBody(event.target.value)}}/>
                <input className={"btn"} type="submit" value="등록" onClick={registerHandle}/>
            </div>
            {/*    아래는 현재 mutation 상태를 표출*/}
            <div className={"mutation-state"}>
                <div>
                    <span>Mutation Status : </span>
                    <p>{registerMutation.status}</p>
                </div>
            </div>

        </section>
    )
}
export default Management