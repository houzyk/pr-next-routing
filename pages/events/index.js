// nezt
import { useRouter } from "next/router";

// data
import { getAllEvents } from "../../data";

// components
import EventList from "../../components/events/event-list.component";
import EventSearch from "../../components/events/event-search.component";

export default function EventIndexPage () {
  const router = useRouter();
  const events = getAllEvents();
  
  function findEventHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler}/>
      <EventList events={events} />
    </>
  );
}