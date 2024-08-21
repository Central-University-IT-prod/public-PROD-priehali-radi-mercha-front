import styles from './App.module.scss'
import Index from './routes/index'
import {
  Routes,
  Route,
} from 'react-router-dom'
import User from './routes/user'
import Team from './routes/team'
import Sidebar from './widgets/Sidebar'
import Header from './widgets/Header'
import Settings from './routes/settings'

const App = () => {
  return (
    <>
      <Sidebar />
      <main className={styles.container}>
        <Header />
        <div className={styles.contents}>
          <Routes path='/'>
            <Route index element={<Index />} />
            <Route path='settings' element={<Settings />} />
            <Route path='users/:userId' element={<User />} />
            <Route path='teams/:teamId' element={<Team />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
