const mongoose = require('mongoose');

// wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/aggregateDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export connection 
module.exports = mongoose.connection;
