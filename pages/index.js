import fs from 'fs/promises'
const path = require('path')

// component
import EventList from "../components/events/event-list.component";

function HomePage ({ featuredEvents }) {
  return (
    <EventList events={featuredEvents} />
  )
}

export async function getStaticProps () {

  const dataPath = path.join(process.cwd(), 'dummy-data.json')
  const dataJSON = await fs.readFile(dataPath)
  const data = await JSON.parse(dataJSON)

  const featuredEvents = data.events.filter(e => e.isFeatured);
  
  return ({
    props: {
      featuredEvents
    }
  })
}

export default HomePage;