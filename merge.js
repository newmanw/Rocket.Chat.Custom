const { exception } = require('console');
const fs = require('fs-extra');
const path = require('path');

const appPath = '../Rocket.Chat.ReactNative';

// app.json
const appJsonPath = path.join(appPath, 'app.json');
const appJson = require(appJsonPath);
appJson.server = 'https://rocketchat.gs.mil';
appJson.appGroup = 'mil.nga.comms';
appJson.appStoreID = '9999';
fs.writeFileSync(appJsonPath, JSON.stringify(appJson));

// colors.js
// TODO need to validate if this file changed
const colorsSrc = path.join('Rocket.Chat.ReactNative', 'app', 'constants', 'colors.js');
const colorsDest = path.join(appPath, 'app', 'constants', 'color.js');
fs.copyFileSync(colorsSrc, colorsDest);

// Android resources
const resSrc = path.join('Rocket.Chat.ReactNative', 'android');
const resDest = path.join(appPath, 'android');
fs.copySync(resSrc, resDest);


