// data
import { getEventById } from "../../data";

// next
import { useRouter } from "next/router";

// component
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

export default function EventShowPage () {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return (
      <p>No Event Found</p>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics 
        date={event.date} 
        address={event.location} 
        image={event.image} 
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}