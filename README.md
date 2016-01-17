# LIFX Dash Button

#### Information
This is an update of the original [Amazon Dash + LIFX](http://steventso.com/amazon-dash-lifx/) to include refactoring out the
hard coded values using the dotenv package and creating scripts to run it as a service on Linux.

#### Installation Instructions
Install NPM packages
``` sh
$ npm install
```

Copy .env.sample to .env and update the DASH\_MAC\_ADDRESS, LIFX\_API\_TOKEN, and LIFX\_LIGHT\_LABEL to match your environment.

Run program (sudo usually needed due to pcap)
``` sh
$ sudo node index.js
```

#### Run as a Linux Service
Install the forever package
``` sh
$ npm install forever -g
```
Create the forever support directory
``` sh
$ sudo mkdir /var/forever
```
Copy the application to /opt/LIFX-Dash-Button

Copy etc/init.d/LIFX-Dash-Button to /etc/init.d
``` sh
$ sudo cp /opt/LIFX-Dash-Button/etc/init.d/LIFX-Dash-Button /etc/init.d/LIFX-Dash-Button
```
Change the permissions on the script
``` sh
$ sudo chmod +x /etc/init.d/LIFX-Dash-Button
```
Register the service to run at boot
``` sh
$ sudo update-rc.d LIFX-Dash-Button defaults
```
Start the service
``` sh
$ sudo service LIFX-Dash-Button start
```
Check to see if the service is running using forever
``` sh
$ sudo forever list
```
The log file is located at /var/forever/LIFX-Dash-Button.log
``` sh
$ sudo tail -f /var/forever/LIFX-Dash-Button.log
```
* Stop the service
``` sh
$ sudo service LIFX-Dash-Button stop
```

#### License
See license attached.
