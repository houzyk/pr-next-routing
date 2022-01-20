// next
import Link from "next/link";

export default function EventListItem(props) {
  const {title, image, date, location, id} = props;

  const displayDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const displayAddress = location.replace(', ', '\n');

  return (
    <li>
      <img src={`/${image}`} alt="event image"/>
      <div>
        <h2>
          {title}
        </h2>
        <div>
          <time>
            {displayDate}
          </time>
        </div>
        <div>
          <address>
            {displayAddress}
          </address>
        </div>
      </div>
      <div>
        <Link href={`/events/${id}`}>
          Explore
        </Link>
      </div>
    </li>
  );
}