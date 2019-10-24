// Define a custome databse

var security = require("./security.js");
const fs = require('fs');       // opening files
var HashMap = require('hashmap');
var Heap = require('heap');

// storing users in hashmap where key is unique email
var __users = new HashMap()

// store ride objects in R tree for spacial lookup
const __rides = new RBush();

// custom comparator for the R tree datastructure
__rides.remove(itemCopy, (a, b) => {
    return a.Ride.RideID === b.Ride.RideID;
});

// queue of rides ordered by departure time
// this is used to hangle dynamic updates
var __rideQueue = new Heap(function(a, b) {
    return a.depart - b.depart;
}

// user object that will be stored in ran 
function User(fName, lName, username, password, email, DOB){
    this.username = username;
    this.password = security.encryptPasword(password)
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.DOB = DOB;
    this.rides = [];
    
    //new users start unvarified
    this.userStatus = {
        verified: false    
    }

    __users.set(username, this)
}

// ride object
function Rides(username, origin, destination, seats, time){
    this.rideID = RideID();
    this.origin = origin;
    this.destination = destination;
    this.maxSeats = seats;
    this.departTime = time;

    return this
}

// create unique rideID
function RideID(username, time){
    console.log("generate new unique rideID")
    var date = new Date();
    var day = date.getDate()
    return (username + time + day)
}

// add ride to rideQueue
// ride in sorted order
function addRide(ride){
    __rideQueue.push({rideID: ride.rideID, depart: ride.departTime})
    if (ride.departTime < nextDeparture){
        nextDeparture = ride.departTime
    }
}

// remove rides who's departure time has passed
function updateQueue(){
    var date = new Date()
    var time = date.getTime()

    rideRef = __rideQueue.pop()
    
    // departure time passed
    if (rideRef.depart < time){
        rideID = rideRef.rideID
        // delete from tree
    }
    else {
        __rideQueue.push(rideRef)
    }
}

// find user in __users
function findUser(username){
    try{ return __users.get(username)}
    catch(e){
        console.log(e)
        return e
    }
}

// every time a new user signs up, write to file
function write_to_file(user_obj){
    json_obj = JSON.stringify(user_obj)

    fs.readFile('backup.json', 'utf-8', function(err, data) {
        if (err) throw err

        var backup = JSON.parse(data)
        backup.users.push(user_obj)

        fs.writeFile("backup.json", JSON.stringify(backup), function(err){
            if (err) throw err;
        });

        //console.log(backup)
    })
}

// read users from file
function readBackup(username, status){
    console.log("usage: Reading __users from disk")
    
    var text = fs.readFileSync('backup.json')
    var file = JSON.parse(text)

    for (var i=0; i<file['users'].length; i++){
        
        // seach for single user
        if (status >= 0){ 
            if (file['users'][i]['username'] == username){
                console.log("found user")
                return file['users'][i]
            }
        }
        // transfer entire backup file to __users array
        else{
            __users.set(username, file['users'][i])
            return
        }
    }
}

// public functions availiable to index.js
module.exports = {

    newUser: function(fName, lName, username, password, email, DOB){
        console.log("creating new user")

        if (__users.has(username)){
            throw Error ('username in use')
        }

        var user = new User(fName, lName, username, password, email, DOB)

        // writing user to backup immediately for now
        console.log(user)
        write_to_file(user)

        return user
    },

    getUser: function(username){
        
        // if db crashed, read from file
        if (__users.size == 0){
            readBackup(username, -1)
            user = findUser(username)
            console.log(user)
            return user
        }
        else{
            user = findUser(username)
            //console.log(user)
            return user
        }
    },

    updateUser: function(username, field, oldP, newP){
        console.log("updating user")
        try{
            user = module.exports.getUser(username)
            if (field == "password"){
                security.updatePassword(username, oldP, newP)
            }
            user[field] = newP
            __users.set(username, user)
            console.log(__users.get(username))
        }
        catch(e){
            console.log("was not able to update userID", userID)
        }
    },

    deleteUser: function(username){
        console.log("removing user from database")

        if (__users.has(username)){
            __users.delete(username)
            console.log("user deleted successfuly")
        }
        else{
            console.log("could not delete user because email was not found")
        }
    },

    postRide: function(username, origin, destination, seats, time){
        console.log("post a ride from x to y at time t")
        var ride = new Rides(username, origin, destination, seats, time)

        // add ride to queue of rides
        addRide(ride)

        const node = {
            minX: origin.x,
            minY: origin.y,
            maxX: origin.x*1.05,
            maxY: origin.y*1.05,
            Ride: ride
        }

        __rides.insert(node);
    },

    deleteRide: function(username, rideID){
        try{
            __rides.remove(rideID)
        }
        else{
            throw Error ("could not remove", rideID, "from database")
        }
    },

    updateRide: function(username, rideID, field, oldP, newP){
        try{
          node = __rides.remove(rideID) 
          node.Ride.field = newP
          __rides.insert(node) 
        }
        else{
            throw Error ("could not update", rideID, "from database")
        }
    },

    findRide: function(username, location, time){
        var rides = []

        var iter = 0
        var bufferx = (location.x * 1.01)
        var buffery = (location.y * 1.01)

        while (rides.length < 10 || iter < 5){
            rides.push(tree.search({
                minX: location.x,
                minY: location.y,
                maxX: (location.x + buffer)
                maxY: (location.y + buffer)
            }));

            bufferx += bufferx
            buffery += buffery
        }

        return rides
    },

    testBackup: function(username){
        console.log("size of database before backup read", __users.size)
        readBackup(username, -1)
        console.log("size after backup read", __users.size)
    },

    hash: function(password){
        return security.encryptPasword(password)
    },
}










