import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./main.css"
import Management from "./Management";
import PostList from "./PostList";
import PostInfo from "./PostInfo";

import NotFound from "./NotFound"
import {useState} from "react";
import QueryKeys from "../../hooks/keys/queryKeys";
import {useQueryClient} from "@tanstack/react-query";

const PostIndex = () => {
    const queryClient = useQueryClient();
    const [showList , isShowList] = useState(false)
    const reloadHandle = async()=>{
        //refetch 하는 경우에 캐쉬를 무시하고 값을다시 가져오는건가?
        await queryClient.refetchQueries(QueryKeys.post.query.lists())
    }
    return (
        <section className={"root"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<>
                        <Management/>
                        <div className={"block"} style={{textAlign: "end"}}>
                            {/*컴포넌트가 보이는 여부에 따른 query의 상태도 변경되며
                                캐쉬 여부를 확인*/}
                            <button className={"btn"}
                                    onClick={()=>{isShowList(prev=>!prev)}}
                            >목록 {showList ? '숨기기':'보이기'}</button>
                            &nbsp;
                            <button className={"btn"}
                                    onClick={reloadHandle}
                            >목록 새로고침</button>
                        </div>
                        {
                            showList &&
                            <PostList/>
                        }

                    </>}/>
                    <Route path={"/info"} element={<PostInfo/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>

            </BrowserRouter>

        </section>
    )
}

export default PostIndex