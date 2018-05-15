# Startpilot - TYPO3 provider extension with some basics


## How to use:

You can use the `start.sh` script to clone `startpilot` as extension with any name. Simply use the following shell command in the root of your project where your composer.json file is located. Replace "myext" at the end of the line with the name of the extension you want to create. 

```
Develop
curl https://raw.githubusercontent.com/Startpiloten/startpilot/master/start.sh > start.sh && sh start.sh --extname startpilot --branch master --vendor Startpiloten --package Startpilot

```
This script is tested on MAC OSX.

System environment:
* node 10
* npm 5.3.0 | 6.0.1

#### Thanks
* To Benjamin Kott and his Bootstrap Package 
	*  https://github.com/benjaminkott/bootstrap_package
* To Georg Ringer for the start.sh script
    * https://github.com/georgringer/modernpackage
