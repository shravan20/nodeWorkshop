const mongoose = require('mongoose');


const connectToDB = async (url) => {

    await mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true })
                .then(data => console.log('Connected to DB'))
                .catch(err => console.log(err));

};


module.exports = {
    connectToDB
};