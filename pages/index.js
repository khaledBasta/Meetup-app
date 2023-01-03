import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "Programming Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "random Address",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Art Meetup",
    image:
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?cs=srgb&dl=pexels-ezra-comeau-2387418.jpg&fm=jpg",
    address: "random Address",
    description: "This is a Second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_LIST} />;
};

export default HomePage;
