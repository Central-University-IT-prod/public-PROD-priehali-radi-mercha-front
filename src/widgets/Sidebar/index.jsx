import styles from './index.module.scss'
import Logotype from '#assets/logotype.svg?react'
import {
  NavLink,
} from 'react-router-dom'
import UserCard from './UserCard'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded'
import JoinInnerRoundedIcon from '@mui/icons-material/JoinInnerRounded'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={[styles.container, styles.logotype].join(' ')}>
        <Logotype alt='Logotype' width='100%' height='100%' />
      </div>
      <div className={styles.container}>
        <nav>
          <NavLink to='/'>
            <JoinInnerRoundedIcon />
            <span>Главная</span>
          </NavLink>
          <NavLink to='/teams/0'>
            <PeopleOutlineRoundedIcon />
            <span>Моя команда</span>
          </NavLink>
        </nav>
      </div>
      <footer className={styles.container}>
        <nav>
          <NavLink to='/settings'>
            <SettingsRoundedIcon />
            <span>Настройки</span>
          </NavLink>
          <UserCard />
        </nav>
      </footer>
    </aside>
  )
}

export default Sidebar
