// data
import { getAllEvents } from "../../data";

// components
import EventList from "../../components/events/event-list.component";

export default function EventIndexPage () {
  const events = getAllEvents();
  return <EventList events={events} />
}