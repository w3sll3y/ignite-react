import styles from './Sidebar.module.css';
import { LinkedinLogo } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/w3sll3y.png"
        />

        <strong>Wesley Fernandes</strong>
        <span>QA and Web develop</span>
      </div>

      <footer>
        <a href="#">
          <LinkedinLogo size={20} />
          Linkedin
        </a>
      </footer>
    </aside>
  )
}