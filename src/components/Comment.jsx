import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/w3sll3y.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Wesley Fernandes</strong>
              <time title='11 de maio as 11:11h' dateTime='2022-05-11 06:11:11'>Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, dasdasd</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}