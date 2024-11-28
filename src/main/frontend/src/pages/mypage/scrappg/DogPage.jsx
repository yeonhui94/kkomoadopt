import React from "react";
import Card2 from "../../../components/Card2/Card2";
import img1 from "../../../assets/CardImage/1.jpg";
import img4 from "../../../assets/CardImage/4.jpg";
// import styles from "../MyPage.module.css";

const DogPage = () => {
    const dogItems = [
        { img: img1, title: "강아지 아이템 1", description: "강아지" },
        { img: img4, title: "강아지 아이템 4", description: "강아지" }
    ];

    return (
        <div>
            {dogItems.map((item, index) => (
                <Card2 
                    key={index} 
                    imageFile={item.img} 
                    title={item.title} 
                    description={item.description} 
                />
            ))}
        </div>
    );
};

export default DogPage;
