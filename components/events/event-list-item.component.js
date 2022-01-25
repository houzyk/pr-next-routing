import Image from "next/image";

// components
import Button from "../ui/button.component";
// icon components
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

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
      <Image src={`/${image}`} alt="event image" width={250} height={160}/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>
            {title}
          </h2>
          <div className={styles.date}>
            <time>
              <DateIcon />
              {displayDate}
            </time>
          </div>
          <div className={styles.address}>
            <address>
              <AddressIcon />
              {displayAddress}
            </address>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button link={`/events/${id}`}>
          <span className={styles.icon}>
            <ArrowRightIcon />
          </span>
          Explore
        </Button>
      </div>
    </li>
  );
}