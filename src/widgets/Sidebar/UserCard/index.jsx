import styles from './index.module.scss'
import {
  NavLink,
} from 'react-router-dom'

const UserCard = () => {
  return (
    <NavLink className={styles.profileCard} to='/users/0'>
      <div className={styles.picture}></div>
      <span>Мой профиль</span>
    </NavLink>
  )
}

export default UserCard
