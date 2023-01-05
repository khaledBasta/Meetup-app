// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://admin:12345@ac-ymz2wuj-shard-00-00.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-01.asbztbi.mongodb.net:27017,ac-ymz2wuj-shard-00-02.asbztbi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9tlr9e-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
