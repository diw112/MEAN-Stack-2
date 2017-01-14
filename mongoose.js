const mongoose = require('mongoose');
const uri = 'mongodb://localhost/test2db';

module.exports = function(){
    const db = mongoose.connect(uri);
    
    return db;
};