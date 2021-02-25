const fs = require('fs-extra');
const path = require('path');

appPath = process.argv.slice(2)[0];

// app.json
const appJsonPath = `${appPath}${path.sep}app.json`

// TODO validate against gold copy
const appJson = require(appJsonPath);
appJson.server = 'https://rocketchat.gs.mil';
appJson.appGroup = 'mil.nga.comms';
appJson.appStoreID = '9999';
fs.writeFileSync(appJsonPath, JSON.stringify(appJson));

// colors.js
// TODO validate against gold copy
const colorsSrc = path.join('Rocket.Chat.ReactNative', 'app', 'constants', 'colors.js');
const colorsDest = path.join(appPath, 'app', 'constants', 'color.js');
fs.copyFileSync(colorsSrc, colorsDest);

// Android resources
const resSrc = path.join('Rocket.Chat.ReactNative', 'android');
const resDest = path.join(appPath, 'android');
fs.copySync(resSrc, resDest);

// iOS
  // ios/RocketChatRN/Info.plist
	// <key>CFBundleDisplayName</key>
	// <string>Comms</string>
  // /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms" RocketChatRN/Info.plist

  // ios/ShareRocketChatRN/Info.plist
	// <key>CFBundleDisplayName</key>
	// <string>Comms Extension</string>
  // /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms Extension" ShareRocketChatRN/Info.plist


  // ios/NotificationService/Info.plist
	// <key>CFBundleDisplayName</key>
	// <string>Comms NotificationService</string>
  // /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms NotificationService" NotificationService/Info.plist
