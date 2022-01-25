const path = require('path')
import fs from 'fs/promises'

// component
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";

async function getData () {
  const dataPath = path.join(process.cwd(), 'dummy-data.json')
  const dataJSON = await fs.readFile(dataPath)
  const data = await JSON.parse(dataJSON)
  return data
}

function EventShowPage ({ event }) {
  
  if (!event) return <p>No Event Found</p>

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

export async function getStaticProps (context) {

  const eventID = context.params.eventId;
  
  const data = await getData()
  
  const event = data.events.find(e => e.id === eventID);

  return {
    props: {
      event
    }
  }
}

export async function getStaticPaths() {

  const data = await getData()
  const paths = [];

  data.events.forEach(data => paths.push({params: {eventId: `${data.id}`}}));

  return {
    paths,
    fallback: false
  }
}

export default EventShowPage;