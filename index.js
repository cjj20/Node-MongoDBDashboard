const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://clairejoseph101:blade101@dashboardatlascluster.utuz9gg.mongodb.net/?retryWrites=true&w=majority"; 

const client = new MongoClient(uri, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict:true,
    deprecationError: true,
  }
});

async function run() {
  try{

    await client.connect();

    await client.db("admin").command({ping: 1});
    console.log("Pinged your deployment. You successfully connected to MongoDB");
  } finally {

    await client.close();
  }
}
run().catch(console.dir);

/*

    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(' - ${db.name}'));

};
*/
