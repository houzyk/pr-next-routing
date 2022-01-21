// next
import Link from "next/link";

// css
import styles from './button.styles.module.css'

function Button({ children, link }) {
  return (
    <Link href={link}>
      <a className={styles.btn}>
        {children}
      </a>
    </Link>
  );
}

export default Button;