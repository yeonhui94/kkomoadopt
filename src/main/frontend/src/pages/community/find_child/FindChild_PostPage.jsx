import { useEffect, useState } from "react";
import img1 from './missingdog.jpg';
import wtstyles from "../CommunityWt.module.css";
import FindChild_Post from "./FindChild_Post";
import { useParams } from "react-router-dom";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostDetail } from "../../../stores/CommunityPostStore2/action";

function FindChild_PostPage({ text = "아이를 찾습니다", gridArea }) {


        const {state : communityState, actions : communityActions } = useStore();


    const { postUid } = useParams();
    // console.log(typeof alqlPosts);

    const [ postDetail, setPostDetail] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                communityActions.readCommunityPostDetail(postUid);
            } catch(error){
                console.error("error fetching post detail", error);
                setError(error);
            }finally{
                setLoading(false)
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
                <FindChild_Post postDetail={communityState.communityPostDetail} />
            </div>
        </div>
    );
};


export default FindChild_PostPage;