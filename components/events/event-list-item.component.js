// next
import Link from "next/link";

// css
import styles from './event-list-item.styles.module.css'

export default function EventListItem(props) {
  const {title, image, date, location, id} = props;

  const displayDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const displayAddress = location.replace(', ', '\n');

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt="event image"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>
            {title}
          </h2>
          <div className={styles.date}>
            <time>
              {displayDate}
            </time>
          </div>
          <div className={styles.address}>
            <address>
              {displayAddress}
            </address>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href={`/events/${id}`}>
          Explore
        </Link>
      </div>
    </li>
  );
}