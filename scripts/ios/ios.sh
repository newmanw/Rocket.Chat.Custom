#!/bin/bash
ruby scripts/ios/add_google_plist.rb $1

cd $1

echo "Update RocketChatRN/Info.plist"
/usr/libexec/PlistBuddy -c "Set :AppGroup group.mil.dod.nga.rocketchat" ios/RocketChatRN/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Rocket.Chat" ios/RocketChatRN/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier mil.dod.nga.rocketchat" ios/RocketChatRN/Info.plist

echo "Update ShareRocketChatRN/Info.plist"
/usr/libexec/PlistBuddy -c "Set :AppGroup group.mil.dod.nga.rocketchat" ios/ShareRocketChatRN/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Rocket.Chat Extension" ios/ShareRocketChatRN/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier mil.dod.nga.rocketchat.ShareExtension" ios/ShareRocketChatRN/Info.plist

echo "Update NotificationService/Info.plist"
/usr/libexec/PlistBuddy -c "Set :AppGroup group.mil.dod.nga.rocketchat" ios/NotificationService/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Rocket.Chat NotificationService" ios/NotificationService/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier mil.dod.nga.rocketchat.NotificationService" ios/NotificationService/Info.plist

echo "Update RocketChatRN/RocketChatRN.entitlements"
/usr/libexec/PlistBuddy -c "Set :com.apple.security.application-groups:0 group.mil.dod.nga.rocketchat" ios/RocketChatRN/RocketChatRN.entitlements
/usr/libexec/PlistBuddy -c "Remove :com.apple.developer.applesignin" ios/RocketChatRN/RocketChatRN.entitlements

echo "Update RocketChatRN/RocketChatRN.entitlements"
/usr/libexec/PlistBuddy -c "Set :com.apple.security.application-groups:0 group.mil.dod.nga.rocketchat" ios/ShareRocketChatRN/ShareRocketChatRN.entitlements

echo "Update RocketChatRN/RocketChatRN.entitlements"
/usr/libexec/PlistBuddy -c "Set :com.apple.security.application-groups:0 group.mil.dod.nga.rocketchat" ios/NotificationService/NotificationService.entitlements
