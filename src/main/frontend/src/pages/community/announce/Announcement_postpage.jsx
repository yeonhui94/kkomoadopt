// import Footer from "../../container/Footer";
import Divider from "../../../components/Divider";
import wtstyles from "../CommunityWt.module.css";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Announcement_Post from "./Announcement_Post";
import { useStore } from "../../../stores/CommunityPostStore2/useStore";
import { readCommunityPostDetail } from "../../../stores/CommunityPostStore2/action";
// import { useStore as CommentStore2 } from "../../../stores/CommentStore2/useStore";
import { useStore as CommunityPostStore2 } from "../../../stores/CommunityPostStore2/useStore";


const Announcement_postpage = ({ text = "공지사항"  , gridArea}) => {


    const {state : communityState, actions : communityActions } = useStore();

    const { postUid } = useParams();

    const [ postDetail, setPostDetail ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              await communityActions.readCommunityPostDetail(postUid);
              // await commentActions.readComments(postUid);
            } catch (error) {
                console.error("Error fetching post detail:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[]);

  
  return (
    <div className="commwrapper"
    style={{gridArea : gridArea }}>
      <div className={wtstyles.mainContainer}>
        <h1 style={{textAlign :"center"}}>{text}</h1>
        <Announcement_Post postDetail={communityState.communityPostDetail}  />
      </div>
    </div>
  );
};
export default  Announcement_postpage ;