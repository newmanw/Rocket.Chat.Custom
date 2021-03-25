require "xcodeproj"

project_path = "#{ARGV[0]}/ios/RocketChatRN.xcodeproj"
project = Xcodeproj::Project.open(project_path)

group = project.main_group
file = group.new_file("GoogleService-Info.plist")

project.targets.each do |target|
  target.add_file_references([file])
end

project.save