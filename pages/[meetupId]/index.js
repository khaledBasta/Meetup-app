import { MongoClient } from "mongodb";
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

export async function getStaticPaths() {
  // Fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb://admin:12345@ac-ymz2wuj-shard-00-00.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-01.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-02.asbztbi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9tlr9e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const client = await MongoClient.connect(
    "mongodb://admin:12345@ac-ymz2wuj-shard-00-00.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-01.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-02.asbztbi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9tlr9e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Address",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
