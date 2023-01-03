import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title={"First meeting"}
      header={"First Meeting"}
      address={"Some Address"}
      description={"The meetup description"}
    />
  );
};

export default MeetupDetails;
