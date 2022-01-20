// components
import EventListItem from "./event-list-item.component";

// css
import styles from './event-list.styles.module.css';

export default function EventList(props) {
  const { events } = props;

  return (
    <ul className={styles.list}>
      {events.map(({id, ...otherProps}) => <EventListItem key={id} id={id} {...otherProps}/>) }
    </ul>
  );
}