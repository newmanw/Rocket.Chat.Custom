#!/bin/bash
cd $1

echo "Update RocketChatRN/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms" ios/RocketChatRN/Info.plist

echo "Update ShareRocketChatRN/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms Extension" ios/ShareRocketChatRN/Info.plist

echo "Update NotificationService/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName Comms NotificationService" ios/NotificationService/Info.plist