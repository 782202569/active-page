import { FC, useEffect, useRef, useState } from "react";
import cartoon from '../../assets/cartoon.jpg';
import food from '../../assets/food.jpg'
import movie from '../../assets/movie.png'
import life from '../../assets/life.jpg'
import wrapper from '../../assets/logo.png'
import styles from './styles.module.scss'
import classNames from 'classnames'
import throttle from '../../libs/index'
const tabs = [
  {
    key: 'cartoon',
    title: '动画',
    name: cartoon,
  },
  {
    key: 'food',
    title: '美食',
    name: food,
  },
  {
    key: 'movie',
    title: '电影',
    name: movie,
  },
  {
    key: 'life',
    title: '生活',
    name: life,
  },
]
const TAB_HEIGHT = 56;
const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon')
  const [isFixed, setIsFixed] = useState<boolean>(false)
  const activate = (key: string) => {

    const tabContentEl = document.querySelector(`[data-id=${key}]`)
    if (tabContentEl) {
      tabContentEl.scrollIntoView({ behavior: 'smooth' })
    }
    throttle(() => {
      setActiveTab(key)
    }, 0)
  }
  const secondSectionRef = useRef<HTMLDivElement>(null)
  const onScroll = () => {
    console.log(123)
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0)
      const sectionNodes = secondSectionRef.current.querySelectorAll('section');

      Array.from(sectionNodes).forEach(sectionEl => {
        const { top } = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute('data-id') || '';

        if (top <= TAB_HEIGHT) {
          setActiveTab(key);
        }
      })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })
  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {
          tabs.map(tab => (
            <li key={tab.key} onClick={() => activate(tab.key)}>
              <span>{tab.title}</span>
              {activeTab === tab.key && <span className={styles.line} />}
            </li>
          ))
        }
      </ul>

      <div>
        {
          tabs.map(tab => (
            <section key={tab.key} data-id={tab.key}>
              <h2>{tab.title}</h2>
              <img src={tab.name} alt={tab.key}></img>
            </section>
          ))
        }
      </div>

      {/* 吸底按钮 */}
      <div className={classNames(styles.btnWrapper, { [styles.visvible]: isFixed })}>
        <img src={wrapper} alt='wrapper'></img>
        <a href="https://www.bilibili.com/">
          <button>App 内打开</button>
        </a>
      </div>
    </div>
  )
}

export default SecondSection