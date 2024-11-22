import { motion } from 'framer-motion';
import centerintrosty from '../CenterIntro.module.css';


const Screen1 = () => {

    return (
        <motion.div className={`${centerintrosty.centint_big_text} 
        ${centerintrosty.centint_screen1}
       `}>
           <p className={`${centerintrosty.centint_sc1_text}`}> 
            KKOMO 보호센터는 <br/>사지 않고 <span className={centerintrosty.centint_highlight}>입양</span>하는 
            문화를 만듭니다.</p>
        </motion.div>
    )

}

export default Screen1;

