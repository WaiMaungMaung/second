import MeetupList from "../components/meetups/MeetupList";
import { useState } from "react";
const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  fetch(
    "https://react-base-7a7c4-default-rtdb.asia-southeast1.firebasedatabase.app/"
  )
    .then((response) => {
      return response.json;
    })
    .then((data) => {
      setIsLoading(false);
    });

  if (isLoading) {
    return <section></section>;
  }
  return (
    <div>
      <h1>All Meet Up Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}
export default AllMeetupsPage;
