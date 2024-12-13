import { useEffect, useState } from "react";
import wtstyles from "../CommunityWt.module.css";
import Adopt_reviewPost from "./Adopt_reviewPost";
import { useParams } from "react-router-dom";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostDetail } from "../../../stores/CommunityPostStore2/action";

function Adopt_reviewPostPage({ text = "입양 후기", gridArea}) {


    const {state : communityState, actions : communityActions } = useStore();

    
    const { postUid  } = useParams();


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
                <Adopt_reviewPost postDetail={communityState.communityPostDetail} />
            </div>
        </div>
    );
};


export default Adopt_reviewPostPage;