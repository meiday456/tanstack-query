import PostItem from "./PostItem";
import {usePostQuery} from "../../hooks/queries/postQueries";

const PostList = () => {

    const {isLoading, isFetching, isError, error, data} = usePostQuery({
        refetchOnWindowFocus : false
    },()=>{
        // isShowList(true)
    })

    const renderPostItem = () => {
        return data?.map((post) => {
            return <PostItem key={post.id} info={post}/>
        })
    }

    return (
        // body를 출력하는 섹션
        <>

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