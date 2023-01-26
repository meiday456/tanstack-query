import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import "./main.css"
import Management from "./Management";
import PostList from "./PostList";
import PostInfo from "./PostInfo";

const PostIndex = () => {
    return (
        <section className={"root"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<>
                        <Management/>
                        <PostList/>
                    </>}/>
                    <Route path={"/info"} element={<PostInfo/>}/>
                </Routes>

            </BrowserRouter>

        </section>
    )
}

export default PostIndex