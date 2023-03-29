const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/eshopping';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
.then(() => {console.log("Connected to MongoDB")})
.catch((err) => console.log(err));