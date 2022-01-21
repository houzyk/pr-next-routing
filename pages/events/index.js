// data
import { getAllEvents } from "../../data";

// components
import EventList from "../../components/events/event-list.component";
import EventSearch from "../../components/events/event-search.component";

export default function EventIndexPage () {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}