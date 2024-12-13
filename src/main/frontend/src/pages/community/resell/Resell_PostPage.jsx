import { useEffect, useState } from "react";
import wtstyles from "../CommunityWt.module.css";
import { useParams } from "react-router-dom";
import Resell_Post from "./Resell_Post";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostDetail } from "../../../stores/CommunityPostStore2/action";

function Resell_PostPage({ text = "사고팝니다", gridArea }) {

        const {state : communityState, actions : communityActions } = useStore();

    // // 파라미터로 받은 id로 게시글 찾기
    const { postUid } = useParams();
    // console.log(typeof alqlPosts);

    const [ postDetail, setPostDetail ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);



        useEffect(()=>{
            const fetchData = async () => {
                try {
                   communityActions.readCommunityPostDetail(postUid);
                } catch (error) {
                    console.error("Error fetching post detail:", error);
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchData();
        },[]);

        
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error loading post : {error.message} </p>;


    return (
        <div className="commwrapper"
            style={{ gridArea: gridArea }}>
            <div className={wtstyles.mainContainer}>
                <h1 style={{ textAlign: "center" }}>{text}</h1>
                <Resell_Post postDetail={communityState.communityPostDetail} />
            </div>
        </div>
    );
};


export default Resell_PostPage;