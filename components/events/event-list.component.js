// components
import EventListItem from "./event-list-item.component";

export default function EventList(props) {
  const { events } = this.props;

  return (
    <ul>
      {events.map(event => <EventListItem />)}
    </ul>
  );
}