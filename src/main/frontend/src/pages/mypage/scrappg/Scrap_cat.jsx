import Card2 from "../../../components/Card2/Card2";
import img1 from "../../../assets/CardImage/1.jpg"
import img2 from "../../../assets/CardImage/2.jpg"
import img3 from "../../../assets/CardImage/3.jpg"
import img4 from "../../../assets/CardImage/4.jpg"
import styles from "../MyPage.module.css";

const Scrap_cat = ({gridArea} )=> {

    return (
        <div className={styles.content}
        style={{gridArea : gridArea}}>
            <Card2 imageFile={img1}></Card2>
            <Card2 imageFile={img2}></Card2>
            <Card2 imageFile={img3}></Card2>
            <Card2 imageFile={img4}></Card2>
        </div>
    )
}

export default Scrap_cat;