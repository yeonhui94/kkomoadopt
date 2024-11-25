import centerintrosty from '../CenterIntro.module.css';

const Screen8 = () => {

    return (
        <div className={centerintrosty.centint_screen6}>
            <p className={`${centerintrosty.centint_big_text} ${centerintrosty.centint_sc6_title}`}>
            오시는 길
            </p>
            <div className={`${centerintrosty.centint_small_text} ${centerintrosty.centint_sc6_texts}`}>
                <div className={`${centerintrosty.centint_sc6_text1_ad}`}>
                    <p className={`${centerintrosty.centint_sc6_text1_ad1 }`}>
                        주소
                    </p>
                    <p className={`${centerintrosty.centint_sc6_text1_ad2 }`}>
                        서울시 금천구 가산디지털2로 101<br/>한라원앤원 타워 3층
                    </p>
                </div>
                <div className={`${centerintrosty.centint_sc6_text2_num}`}>
                <p className={`${centerintrosty.centint_sc6_text2_num1 }`}>
                        번호
                    </p>
                    <p className={`${centerintrosty.centint_sc6_text2_num2 }`}>
                        010-1234-5678
                    </p>
                </div>
                <div className={`${centerintrosty.centint_sc6_text3_email}`}>
                    <p className={`${centerintrosty.centint_sc6_text3_email1 }`}>
                        이메일
                    </p>
                    <p className={`${centerintrosty.centint_sc6_text3_email2 }`}>
                        abcd@kkomo.com
                    </p>
                </div>
            </div>
            <div className={`${centerintrosty.centint_img4} ${centerintrosty.centint_imgs}`}/>
        </div>
    )

}

export default Screen8;