import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { Post } from "./components/post"

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>  
    </>
  )
}

export default App