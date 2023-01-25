const PostInfo =()=>{
    return (
        <section className={"area info"}>
            <h2>Post 정보</h2>
            <div className={"line"}>
                <div>Id</div>
                <input type="text"/>
            </div>
            <div className={"line"}>
                <div>Title</div>
                <input type="text"/>
            </div>
            <div className={"line"}>
                <div>Body</div>
                <input type="text"/>
            </div>
            <button className={"btn"}>목록</button>
        </section>
    )
}

export default PostInfo