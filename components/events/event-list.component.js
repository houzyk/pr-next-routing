// components
import EventListItem from "./event-list-item.component";

export default function EventList(props) {
  const { events } = props;

  return (
    <ul>
      {events.map(({id, ...otherProps}) => <EventListItem key={id} id={id} {...otherProps}/>) }
    </ul>
  );
}