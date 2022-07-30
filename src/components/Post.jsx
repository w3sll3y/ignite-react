import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/w3sll3y.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Wesley Fernandes</strong>
            <span>Web Develop</span>
          </div>
        </div>

        <time title='11 de maio as 11:11h' dateTime='2022-05-11 06:11:11'>Publicado ha 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '} <a href="#"> jane.design/doctorcare</a></p>
        <p> <a href="#">#novoprojeto </a> {' '}
          <a href="#">#nlw </a>{' '}
          <a href="#">#rocketseat</a> </p>
      </div>
    </article>
  )
}