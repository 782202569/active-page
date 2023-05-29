import { FC } from "react";
import Banner from '../../assets/banner.jpg'
import styles from './styles.module.scss'

const FirstSection: FC = () => {
  return (
    <div className={styles.firstSection}>
      <img src={Banner} alt="Banner"></img>
    </div>
  )
}

export default FirstSection