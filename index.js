var dotenv = require('dotenv').config({path: '/home/pi/dash/.env'});
 
var dash_button = require('node-dash-button');  
var dash = dash_button(process.env.DASH_MAC_ADDRESS);

var lifxObj = require('lifx-api');  
var lifx = new lifxObj(process.env.LIFX_API_TOKEN);

var light_label = process.env.LIFX_LIGHT_LABEL;
   
console.log("Waiting for Dash press for " + light_label + "...");
dash.on("detected", function (){  
    console.log("Dash press detected for " + light_label);
    lifx.listLights('label:' + light_label, function(res) {
        var jsonRes = JSON.parse(res);
        console.log(jsonRes);
        var id = jsonRes.id; //using LIFX bulb ID

        lifx.togglePower(id, function(res) {
            console.log(res);
        });
    });
});
