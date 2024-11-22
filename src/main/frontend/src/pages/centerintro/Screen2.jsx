import centerintrosty from '../CenterIntro.module.css';

const Screen2 = () => {

    return (
        <div className={centerintrosty.centint_screen2}>
            <div className={centerintrosty.centint_sc2_textbox}>
                <p className={`${centerintrosty.centint_medium_text} ${centerintrosty.centint_sr2_text1}`}>
                매년 전국적으로 <span className={centerintrosty.centint_blacktextshadow}>10만 마리</span> 이상의<br/>유기 동물들이 보호소로 구조되고 있습니다.
                </p>
                <p className={`${centerintrosty.centint_medium_graytext} ${centerintrosty.centint_sr2_text2}`}>
                안타깝게도 이 중 절반에 가까운 동물들은 <br/>
                다시 가족을 만나지 못하고<br/>안락사 되거나 자연사 하고 있습니다.
                </p>
                <div className={`${centerintrosty.centint_img1}`}/>
            </div>
            {/* <div className={`${centerintrosty.centint_img1}`}/> */}
        </div>
    )

}

export default Screen2;