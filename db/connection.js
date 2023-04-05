const mongoose = require('mongoose')
const mongoURI =
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : 'mongodb+srv://danianise:danianise@cluster0.vg6ym.mongodb.net/test?authSource=admin&replicaSet=atlas-g3vm8g-shard-0&readPreference=primary&ssl=true';

mongoose.connect(mongoURI,
    // {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // }
)
    .then((instance) =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;

