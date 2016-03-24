var configValues = require('./config')
// add decrypter here

module.exports = { 
    getDbConnectionString: function(){ // you can pass option, development or production
        return 'mongodb://' + configValues.uname + ":" + configValues.pwd + '@ds053419.mlab.com:53419/nodetodolearn'
    }
}