

const PostItem = ()=>{
    return (
        <div className={"post-item"}>
            <div className={"box id"}>id</div>
            <div className={"contents"}>
                <div className={"box"} >
                    <div>title :</div>
                    <input type={"text"} value={"제목 부분"}/></div>
                <div className={"box"} >
                    <div>body :</div>
                    <input type={"text"} value={"내용 부분"}/></div>
            </div>
            <div>
                <button className={"btn"}>수정</button>
                <button className={"btn"}>삭제</button>
            </div>

        </div>
    )
}

export default PostItem