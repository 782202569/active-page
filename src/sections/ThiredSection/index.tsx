import { FC } from "react";
import title1Image from '../../assets/title1.jpg'
import title2Image from '../../assets/title2.jpg'
import commentImage from '../../assets/comment.jpg'
import styles from './styles.module.scss'

const ThiredSection: FC = () => {
  return (
    <div className={styles.thiredSection}>
      <img src={title1Image} alt="title1"></img>
      <img className={styles.commont} src={commentImage} alt="comment"></img>
      <img src={title2Image} alt="title2"></img>
      <img className={styles.commont} src={commentImage} alt="comment"></img>
    </div>
  )
}

export default ThiredSection