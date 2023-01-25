

const Management = ()=>{
    return (
        // 입력이 가능한 섹션
        <section className={"management area"}>
            <div className={"input_area"}>
                <span>ID : </span><input className={"inp"} type="text" readOnly={true} value={"고정 ID 값"}/>
                <span>Title : </span><input className={"inp"} type="text" placeholder={"제목을 입력하세요"}/>
                <span>Body : </span><input className={"inp"} type="text" placeholder={"내용을 입력하세요"}/>
                <input className={"btn"} type="submit" value="등록"/>
            </div>
        {/*    아래는 현재 mutation 상태를 표출*/}
            <div className={"mutation-state"}>
                <div>
                    <span>Mutation Status : </span>
                    <p>상태 메세지</p>
                </div>
            </div>

        </section>
    )
}
export default Management