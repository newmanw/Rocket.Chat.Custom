# Rocket.Chat.Custom


## RocketChat build

$ yarn
$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
$ cd android
$ ./gradlew assembleOfficialFossRelease

## APK
app/build/outputs/apk/officialFoss/release/app-official-foss-release.apk

## TODO Need script to copy over colors
app/constants.colors.js

## TODO ic_launcher, need to create all icons, throw in dir, and then copy over at build time

## TODO ic_notication, need to create all icons, throw in dir, and then copy over at build time

## TODO app.json, set server, app group, and store id
