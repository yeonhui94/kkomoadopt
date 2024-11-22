import centerintrosty from '../CenterIntro.module.css';

const Screen2 = () => {

    return (
        <div>
            <div/>
            <div className={centerintrosty.centint_medium_text}>
            매년 전국적으로 10만 마리 이상의<br/>유기 동물들이 보호소로 구조되고 있습니다.
            </div>
            <div className={centerintrosty.centint_medium_graytext}>
            안타깝게도 이 중 절반에 가까운 동물들은 <br/>
            다시 가족을 만나지 못하고<br/>안락사 되거나 자연사 하고 있습니다.
            </div>
        </div>
    )

}

export default Screen2;