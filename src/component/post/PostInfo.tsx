import {usePostInfoQuery} from "../../hooks/queries/postQueries";

const PostInfo = () => {

    const moveList = () => {
        window.location.href = "/"
    }
    const findId = Number(new URLSearchParams(window.location.search).get("id"))
    const {isLoading, isError, isFetching, data, error, status} = usePostInfoQuery({}, findId || 1)


    return (
        <section className={"area info"}>
            <h2>Query 상태 : {status}</h2>
            {
                isLoading
                    ? <div>Loading</div>
                    : isFetching
                        ? <div>Fetching</div>
                        : isError
                            ? <div>Error</div>
                            : data
                                ? <>
                                    <div className={"line"}>
                                        <div>Id</div>
                                        <input type="text" disabled={false} readOnly={true} value={data?.id || ''}/>
                                    </div>
                                    <div className={"line"}>
                                        <div>Title</div>
                                        <input type="text" disabled={false} readOnly={true} value={data?.title || ''}/>
                                    </div>
                                    <div className={"line"}>
                                        <div>Body</div>
                                        <input type="text" disabled={false} readOnly={true} value={data?.body || ''}/>
                                    </div>
                                </>
                                : <></>
            }

            <button className={"btn"} onClick={moveList}>목록</button>
        </section>
    )
}

export default PostInfo