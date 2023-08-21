const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://communitycoder3:hKMASIoylKzHWZOO@cluster0.pn4wuwk.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: 'true',
    useUnifiedTopology: 'true',
  },
);

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
