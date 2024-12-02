import Divider from '../../../components/Divider';
import comstyle from '../CommunityWt.module.css';


const Report_Post = () => {

    return (
        <div>
            <div>
                <h3>체리콕</h3>
            </div>
            <div className={comstyle.lin}>
                <Divider height={"1px"} width={"100%"} backgroundColor={"var(--line-color)"} />
            </div>
        </div>
    )
}

export default Report_Post;