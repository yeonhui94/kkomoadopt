import Button from "../../Button/Button";
import Logo from "../../logo/Logo";
import styles from "./Profile.module.css"



function Profile({name, text1, btnName1, btnName2, hori1, hori2, btnLink1,}){
    return(
        <div className={styles['profile-container']}>
            <div className={styles['profile-contents']}>
                <div className={styles.smallWrapper}>
                <div className={styles['profile-img']}> 
                    <Logo className={styles['profile-logo']}/>
                </div>
                <div className={styles['profile-text1']}>
                    <p className={styles['profile-name']}>{name} 님</p>
                    <p className={styles['profile-text2']}>{text1}</p>
                </div>
                </div>
                <div className={styles['profile-btns']}>
                <Button
                        text={btnName1}
                        horizontalPadding={hori1}
                        to={btnLink1} // Pass the link prop
                    />
                    <Button text={btnName2} horizontalPadding={hori2}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;