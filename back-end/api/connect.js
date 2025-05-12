import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://matheuscastelobm:rqleeWpq2bcxRJB2@cluster0.vwxbcxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

const db = client.db("spotifyAula");

export { db };

//const songCollection = await db.collection("songs").find({}).toArray();

 //console.log(songCollection);



