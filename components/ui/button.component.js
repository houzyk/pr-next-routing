// next
import Link from "next/link";

// css
import styles from './button.styles.module.css'

function Button({ children, link, onClick }) {

  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>
          {children}
        </a>
      </Link>
    );
  }  
  return (
    <button 
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;