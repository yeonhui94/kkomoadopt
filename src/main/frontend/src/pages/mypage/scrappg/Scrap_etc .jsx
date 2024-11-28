import React from "react";
import Card2 from "../../../components/Card2/Card2";
import img3 from "../../../assets/CardImage/3.jpg";
import styles from "../MyPage.module.css";

const Scrap_etc = () => {
    const otherItems = [
        { img: img3, title: "기타동물 아이템 1", description: "기타동물" }
    ];

    return (
        <div className={styles.cardContainer}>
            {otherItems.map((item, index) => (
                <Card2 key={index} imageFile={item.img} title={item.title} description={item.description} />
            ))}
        </div>
    );
};

export default Scrap_etc;
