import fs from 'fs/promises'
const path = require('path')

// components
import EventList from "../../components/events/event-list.component";
import EventSearch from "../../components/events/event-search.component";

async function getData () {
  const dataPath = path.join(process.cwd(), 'dummy-data.json')
  const JSONdata = await fs.readFile(dataPath);
  const data = JSON.parse(JSONdata)
  return data
}

function EventIndexPage ({ events }) {
  
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

export async function getStaticProps () {
  const data = await getData()

  const events = data.events

  return {
    props: {
      events
    }
  }
}

export default EventIndexPage