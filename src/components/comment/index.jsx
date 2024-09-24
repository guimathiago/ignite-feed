import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../avatar'

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guimathiago.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Guima</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11" >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muto bom!</p>
        </div>  

        <footer>
          <button>
            <ThumbsUp size={18} />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}