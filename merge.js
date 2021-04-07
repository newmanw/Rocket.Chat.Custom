const fs = require('fs-extra');
const path = require('path');

appPath = process.argv.slice(2)[0];

// app.json
const appJsonPath = `${appPath}${path.sep}app.json`

// TODO validate against gold copy
const appJson = require(appJsonPath);
appJson.server = 'https://rocketchat.stage.geointservices.io';
appJson.appGroup = 'group.mil.dod.nga.rocketchat';
appJson.appStoreID = '9999';
fs.writeFileSync(appJsonPath, JSON.stringify(appJson));

// colors.js
// TODO validate against gold copy
const colorsSrc = path.join('Rocket.Chat.ReactNative', 'app', 'constants', 'colors.js');
const colorsDest = path.join(appPath, 'app', 'constants', 'colors.js');
fs.copyFileSync(colorsSrc, colorsDest);

// Android resources
const androidSrc = path.join('Rocket.Chat.ReactNative', 'android');
const androidDest = path.join(appPath, 'android');
fs.copySync(androidSrc, androidDest);

// iOS resources
const iosSrc = path.join('Rocket.Chat.ReactNative', 'ios',);
const iosDest = path.join(appPath, 'ios');
fs.copySync(iosSrc, iosDest);
