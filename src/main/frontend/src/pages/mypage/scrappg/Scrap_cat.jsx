import React from "react";
import Card2 from "../../../components/Card2/Card2";
import img2 from "../../../assets/CardImage/5.jpg";
import styles from "../MyPage.module.css";

const Scrap_cat = () => {
    const catItems = [
        { img: img2, title: "고양이 아이템 1", description: "고양이" }
    ];

    return (
        <div>
            {catItems.map((item, index) => (
                <Card2 key={index} imageFile={item.img} title={item.title} description={item.description} />
            ))}
        </div>
    );
};

export default Scrap_cat;