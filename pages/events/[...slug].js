// next
import { useRouter } from "next/router";

// data
import { getFilteredEvents } from "../../data";

export default function FilteredEventIndexPage() {
  const router = useRouter();

  const filter = router.query.slug;

  if (!filter) return <p> loading... </p>;

  const [year, month] = filter;

  if (isNaN(+year) || 
      isNaN(+month) || 
      +year > 2030 || 
      +year < 2021 || 
      +month < 1 || 
      + month > 1) {
    return <p>404</p>;
  }

  const filteredEvents = getFilteredEvents({year: +year, month: +month});

  if (!filteredEvents || filteredEvents.length === 0 ) return <p>No Events Found</p>;

  return (
    <EventList events={filteredEvents} />
  );
}