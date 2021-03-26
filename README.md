# Rocket.Chat.Custom

### Build

xcodebuild -workspace RocketChatRN.xcworkspace -scheme RocketChatRN -sdk iphoneos -configuration Release archive DEVELOPMENT_TEAM="N82SRQKGHU" PROVISIONING_PROFILE_SPECIFIER="RocketChat (Development)" PRODUCT_BUNDLE_IDENTIFIER="mil.dod.nga.rocketchat" CODE_SIGN_IDENTITY="Apple Development" -archivePath RocketChat.xcarchive archive
