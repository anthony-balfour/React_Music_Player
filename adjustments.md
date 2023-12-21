#Asynchronous handling of playing song

#Error message if song preview is not available

# Functionality related to playing music immediately, vs hitting next always starting a song

# Mobile responsiveness

# Hosting on app

 ### Connecting

 ssh -i "E:/Engineering/Spring Boot/student-system/CRUDFullStack.pem" ec2-user@ec2-3-14-251-109.us-east-2.compute.amazonaws.com


 ### Moving music player to EC2 Instance

 scp -i "E:/Engineering/Spring Boot/student-system/CRUDFullStack.pem" -r musicplayer ec2-user@ec2-3-14-251-109.us-east-2.compute.amazonaws.com:/home/ec2-user/musicplayer

 rsync -av --exclude='node_modules' ./ ec2-user@ec2-3-14-251-109.us-east-2.compute.amazonaws.com:/home/ec2-user/

 # Docker image pushing

 docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname