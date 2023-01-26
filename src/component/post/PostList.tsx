import PostItem from "./PostItem";
import {usePostQuery} from "../../hooks/queries/postQueries";
import {Post} from "../../interface/queryTypes";
import {useQueryClient} from "@tanstack/react-query";
import QueryKeys from "../../hooks/keys/queryKeys";

const PostList = () => {

    const queryClient = useQueryClient();
    const {isLoading, isFetching, isError, error, data} = usePostQuery()


    const renderPostItem = () => {
        return data?.map((post) => {
            return <PostItem key={post.id} info={post}/>
        })
    }

    const reloadHandle = async()=>{
        await queryClient.refetchQueries(QueryKeys.post.query.lists())
    }


    return (
        // body를 출력하는 섹션
        <>
            <div className={"block"} style={{textAlign: "end"}}>
                <button className={"btn reload"}
                        onClick={reloadHandle}
                >목록 새로고침</button>
            </div>
            <section className={"area list"}>

                {
                    isLoading
                        ? <div>Loading</div>
                        : isFetching
                            ? <div>Fetching</div>
                            : isError
                                ? <div>Error :{(error as Error).message} </div>
                                : data
                                    ? renderPostItem()
                                    : null
                }
            </section>
        </>

    )
}

export default PostList