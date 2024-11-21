import Mypageimg from '../logo/mypageimg.svg';
import styles from '../components/Header.module.css';

function Mypageicon (){
    
    return(
        <a href="https://rummikub-apps.com/">
            <img src={Mypageimg} alt=""
            style={{marginLeft :'90PX',
                marginRight:"20px"
            }}
            />
        </a>
    )
}

export default Mypageicon

// 버튼이랑 20px