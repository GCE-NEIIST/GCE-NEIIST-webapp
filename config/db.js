if (!process.env.DB_DEVELOPMENT)    {
    DB_DEV = 'mongodb://localhost:27017/gce_base';
}   else {
    DB_DEV = process.env.DB_DEVELOPMENT;
}




module.exports = {
    DB_SECRET : process.env.DB_SECRET,
    DB_PRODUCTION : process.env.DB_PRODUCTION,
    urls : {
        //using remote BD example

        production : process.env.DB_PRODUCTION,
        development : DB_DEV
          //LOCAL: 'mongodb://localhost:27017/gce_base'
        //production : 'mongodb://user:pass@host.net:port/project_name',
        //Using a local BD: mongodb://admin:admin@ds145183.mlab.com:45183/tests
        //development : 'mongodb://admin:admin@ds145183.mlab.com:45183/tests'
    }

};