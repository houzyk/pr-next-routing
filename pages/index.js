// data
import { getFeaturedEvents } from "../data";

// component
import EventList from "../components/events/event-list.component";

export default function HomePage () {
  const featuredEvents = getFeaturedEvents();

  return (
    <EventList events={featuredEvents} />
  );
}
