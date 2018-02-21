const request = require('request');
const yargs = require('yargs');

var args = yargs.options({
    a:{
        string : true,
        alias : 'address',
        declare : true
        }
}).help().argv;

var encodedAddress = encodeURIComponent(args.a);


request({
    url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBULEwJ8S-puiQ7IHPcJZPsWGKC8ueM5uk`,
    json: true
}, (error, resonse, body)=>{
    // console.log(body);
    if(error){
        console.log("Cann't connect to Server");
    }else if(body.status === "ZERO_RESULTS"){
        console.log("address wrong");
    }else if (body.status === "OK"){
        console.log(body.results[0].formatted_address);
    console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
    }
    
});

