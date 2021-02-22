# Rocket.Chat.Custom

## RocketChat build

$ yarn
$ npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle
$ cd android
$ ./gradlew assembleOfficialFossRelease

## APK
app/build/outputs/apk/officialFoss/release/app-official-foss-release.apk