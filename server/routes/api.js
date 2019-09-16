const express = require('express');
const router = express.Router();
var path = require('path');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;


//encryption
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;


// declare axios for making http requests 
var clientId = 'f8RPlGzg5EFIEZs7QvxiYQ';
var clientSecret = 'dDxuUC2xwvwl3-ORaGmMUUI-PJNQ7mqJ6VC8f0ifP78';
var attribute;
var searchValue;

//get token url
var tokenUrl = 'https://memdb.tech/apps/rest/v1/company/token?clientid=' + clientId + '&clientsecret=' + clientSecret;

//get all account url
var getAccountUrl = 'https://memdb.tech/crm/rest/v1/master/account?request={"cdomain":"scccidemo","userName":"admin"}&token=';

// get all events url
var getEventUrl = 'https://memdb.tech/crm/rest/v1/master/externalevent?request={"cdomain":"scccidemo","userName":"admin"}&token=';

// save External Event
var saveEvent = 'https://memdb.tech/crm/rest/v1/master/externalevent?token=';

// get participant details
var getParticipant = 'https://memdb.tech/crm/rest/v1/master/participant?request={"cdomain": "scccidemo","userName": "admin"} &token=';

//save participant
var postParticipant = 'https://memdb.tech/crm/rest/v1/master/participant?token=';

//get participant by email
var getAccountbyEmail1 = 'https://memdb.tech/crm/rest/v1/master/participant?request={"cdomain":"scccidemo","userName":"admin","searchjson":{"email":"'
var getAccountbyEmail2 = '"}}&token='

//get account by email
var getAccountValidate1 = 'https://memdb.tech/crm/rest/v1/master/account?request={"cdomain":"scccidemo","userName":"admin","searchjson":{"email":"';

//register account
var postAccount = 'https://memdb.tech/crm/rest/v1/master/account?token='



// Connect to MongoDB
var db;
MongoClient.connect('mongodb://louiy:qweasd098@ds259367.mlab.com:59367/tawebdb',
    { useNewUrlParser: true }, { useUnifiedTopology: true }, (err, database) => {
        if (err) return console.log(err)
        db = database.db('tawebdb');
    });


/** Articles API endpoints */


// Read articles
router.get('/articles', (req, res) => {
    db.collection('articles').find().toArray((err, results) => {
        if (err) throw err;
        res.send(results)
    });
});

router.get('/getArticlebyId/:header', (req, res) => {
    db.collection('articles').find({ 'header': req.params.header }).toArray((err, results) => {
        res.send(results.data)

    });
});



// Create article
router.post('/articles/add', (req, res) => {
    const { header, text, tag, image, availability, date } = req.body;

    if (header && text && tag && image && availability && date) {

        const article = {
            header,
            text,
            tag,
            image,
            availability,
            date

        };

        db.collection("articles").insertOne(article, (err, results) => {
            res.send(results);
            console.log('Posted article');
        });
    }
    else {
        res.send('please put in all parameters');
    }

});

// Update Article
router.route('/articles/update/:id').put(function (req, res) {
    var data = req.body;
    const myquery = { _id: ObjectId(req.params.id) };
    console.log(' header: ' + data.header + " id: " + data.id);
    console.log(' Text: ' + data.text + " tag: " + data.tag)

    db.collection("articles").updateOne(myquery, {
        $set: {
            "tag": data.tag,
            "header": data.header,
            "text": data.text,
        }
    }, (err, results) => {
        res.status(200).json({ status: "ok" })
    }
    );
});

// Delete article 
router.delete('/articles/delete/:id', (req, res) => {
    console.log(req.params.id);

    const myquery = { _id: ObjectId(req.params.id) };
    db.collection("articles").deleteOne(myquery, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});



/** End of Articles API endpoints */

/** Start on Event/Participant API endpoints */

// get all events
router.get('/events', function (req, res) {
    axios.get(tokenUrl).then(function (response1) {
        accessToken = response1.data.token
         console.log(accessToken)
        axios.get(getEventUrl + this.accessToken).then(function (response2) {
            res.status(200).json(response2.data.data);
            // console.log('response2 '+ response2.data.data)
        }).catch(function (error) {
            res.status(500).send(error)
        })
    }).catch(function (error) {
        res.status(500).send(error)
    })

})
// get event by Id
router.get('/getEventbyId/:eventid', function (req, res) {

    axios.get(tokenUrl)
        .then(function (response1) {
            // handle success

            accessToken = response1.data.token;

            }).then(() => {
            axios.get(getEventUrl + this.accessToken).then(function (response2) {


                res.status(200).json(response2.data.data);


            }).catch(function (error) {
                // handle error
                res.status(500).send(error)
            })


        })
        .catch(function (error) {
            // handle error
            res.status(500).send(error)
        })
        .finally(function () {
            // always executed
        });


})

// get participant details
router.get('/participants', function (req, res) {
    axios.get(tokenUrl).then(function (response1) {
        accessToken = response1.data.token
        // console.log(accessToken)
        axios.get(getParticipant + this.accessToken).then(function (response2) {
            res.status(200).json(response2.data.data);
            // console.log('response2 '+ response2.data.data)
        }).catch(function (error) {
            res.status(500).send(error)
        })
    }).catch(function (error) {
        res.status(500).send(error)
    })

})

/** End of Event/Participant API endpoints */


/** Start on Account API endpoints */


//get token get all account
router.get('/account', function (req, res) {

    axios.get(tokenUrl)
        .then(function (response1) {
            // handle success

            accessToken = response1.data.token;
            // console.log('accessToken: ' + accessToken);

            // }).then(() => {
            // console.log('resquest2: ' + getAccountUrl + this.accessToken);
            axios.get(getAccountUrl + this.accessToken).then(function (response2) {

                // console.log('response2: ' + JSON.stringify(response2.data));
                res.status(200).json(response2.data.data);



            }).catch(function (error) {
                // handle error
                res.status(500).send(error)
            })

        })
        .catch(function (error) {
            // handle error
            res.status(500).send(error)
        })
        .finally(function () {
            // always executed
        });


})


//Auth User 
router.get('/validateUser/:inputEmail/:inputPassword', (req, res) => {
    var inputEmail = req.params.inputEmail;
    var inputPassword = req.params.inputPassword;

    axios.get(tokenUrl)
        .then(function (response1) {
            // handle success

            accessToken = response1.data.token;
            // console.log('accessToken: ' + accessToken);

            // }).then(() => {
            // console.log('resquest2: ' + getAccountUrl + this.accessToken);
            axios.get(getAccountValidate1 + req.params.inputEmail + getAccountbyEmail2 + this.accessToken).then(function (response2) {
                if (response2.data.totalCount == 0) {

                    console.log(" respons null ")
                    res.status(200).send(null)
                }
                if (response2.data.totalCount != 0) {
                    console.log(" respons YES ")
                    res.status(200).json(response2.data.data);
                }



            }).catch(function (error) {
                // handle error
                res.status(500).send(error)
            })

        })
        .catch(function (error) {
            // handle error
            res.status(500).send(error)
        })
        .finally(function () {
            // always executed
        });


})


// Register account

router.post('/regAccount/', (req, res) => {
    console.log('started: ');
    axios.get(tokenUrl)
        .then(function (response1) {
            // handle success
            accessToken = response1.data.token;
            // console.log('accessToken: ' + accessToken);

            // }).then(() => {
             console.log('resquest2: ' + getAccountUrl + this.accessToken);
            var data = req.body;
            axios.post(postAccount + this.accessToken, {
            "cdomain": "scccidemo",
                "userName": "admin",
                "data": [{
                    "accountname": data.name,
                    "email": data.email,
                    "Custom_companyemail": data.companyEmail,
                    "Custom_password": data.password,
                    "Custom_company": data.company,
                    "Custom_preference": data.preference
                 }]
                
            }).then(res => {

                console.log('response2:post success! :' + postAccount + this.accessToken + ' data: ' + data.name + ' ' + data.email);
                res.status(200)
            }).catch(function (error) {
                // handle error
                console.log("res2 error")
                res.status(500).send(error)
            })

        })
        .catch(function (error) {
            // handle error
            console.log("res1 error")
            res.status(500).send(error)
        })
        .finally(function () {
            // always executed
        });


})




// get token get account by email
router.get('/accountUser/:email', function (req, res) {

    axios.get(tokenUrl)
        .then(function (response1) {
            // handle success

            accessToken = response1.data.token;
            // console.log('accessToken: ' + accessToken);

            // }).then(() => {
            // console.log('resquest2: ' + getAccountUrl + this.accessToken);
            axios.get(getAccountbyEmail1 + req.params.email + getAccountbyEmail2 + this.accessToken).then(function (response2) {



                // console.log('response2: ' + JSON.stringify(response2.data));
                res.status(200).json(response2.data.data);


            }).catch(function (error) {
                // handle error
                res.status(500).send(error)
            })


        })
        .catch(function (error) {
            // handle error
            res.status(500).send(error)
        })
        .finally(function () {
            // always executed
        });


})




/** Start of About API endpoints */

// Read about
router.get('/about', (req, res) => {
    db.collection('about').find().toArray((err, results) => {
        if (err) throw err;
        res.send(results)
    });
});

// router.get('/getAboutbyId/:header', (req, res) => {
//     db.collection('about').find({ 'header': req.params.header }).toArray((err, results) => {
//         res.send(results.data)
//     });
// });


// Update about
router.route('/about/update/:id').put(function (req, res) {
    var data = req.body;
    const myquery = { _id: ObjectId(req.params.id) };

    db.collection("about").updateOne(myquery, {
        $set: {
            "header": data.header,
            "prefaceh3": data.prefaceh3,
            "prefacep": data.prefacep,
            "blockQuoteh3": data.blockQuoteh3,
            "blockQuotep": data.blockQuotep,
            "mainQuote": data.mainQuote,
            "highlightHeader": data.highlightHeader,
            "subheader": data.subheader,
            "title1": data.title1,
            "title2": data.title2,
            "title3": data.title3,
            "p1": data.p1,
            "p2": data.p2,
            "p3": data.p3


        }
    }, (err, results) => {
        res.status(200).json({ status: "ok" })
    }
    );
});




/** End of About API endpoints */




/**
 * start of services API endpoints
 */

// Read services collection from mlab 
router.get('/services', (req, res) => {
    db.collection('services').find().toArray((err, results) => {
        if (err) throw err;
       res.send(results)
    });
});



// Update services 
router.route('/services/update/:id').put(function (req, res) {
    var data = req.body;
    const myquery = { _id: ObjectId(req.params.id) };

    db.collection("services").updateOne(myquery, {
        $set: {
            "header": data.header,
            "subheader1": data.subheader1,
            "subheader2": data.subheader2,
            "subheader3": data.subheader3,
            "p1": data.p1,
            "p2": data.p2,
            "p3": data.p3
        }
    }, (err, results) => {
        res.status(200).json({ status: "ok"})
    });
});


/**
 * end of services API endpoints
 */




module.exports = router;


