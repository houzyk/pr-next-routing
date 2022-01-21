// next
import Link from "next/link";

// css
import styles from './main-header.styles.module.css'

function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Next Events
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events">
              See All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;