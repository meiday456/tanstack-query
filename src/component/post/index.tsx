import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./main.css"
import Management from "./Management";
import PostList from "./PostList";
import PostInfo from "./PostInfo";

//리스트를 그리고 그 리스틑 업데이트 , 삭제 , 수정 하는것을 만들면됨
//리스트는 10개까지만 보여지게 하고


const PostIndex = () => {
    return (
        <section className={"root"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<>
                        <Management/>
                        <PostList/>
                    </>}/>
                    <Route path={"/info"} element={<>
                        <PostInfo/>
                    </>}/>
                </Routes>

            </BrowserRouter>

        </section>
    )
}

export default PostIndex