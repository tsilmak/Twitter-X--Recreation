# EC2 Configuration Instructions

## 1. Create a EC2 Instance then:
Add a name on Name and tags 
![image](https://github.com/user-attachments/assets/fec3d966-eae9-47bc-9cb5-002854ca4202)
associate to a Key Pair on Key pair (login) 
![image](https://github.com/user-attachments/assets/9d0e6073-d88f-479c-8dd1-b976f7394aa9)
alllow HTTP and HTTPS on Network settings (allowing any traffic from the internet)
![image](https://github.com/user-attachments/assets/5adf5826-f39c-48bd-a9ad-8001fcd25730)

## 2. Click Edit on Network settings and associate it to the public Subnet, enable Auto-assign public IP & change ec2 security group name 

![image](https://github.com/user-attachments/assets/9ed3638d-7765-4502-acc1-1bae8fa7db83)


# Connect to the Ec2 Instance and configure the Spring Boot Server
- Enter as root: `sudo su -`
- Update dependencies: `yum update`
- Install git: `yum install git -y`
- Clone the repo: `git clone https://github.com/tsilmak/Twitter-X--Recreation.git`
- Navigate to repo: `cd Twitter-X--Recreation`
- Remove all files except server: `ls` (e.g., `rm -rf client`)
- Install Corretto 21: `sudo yum install -y java-21-amazon-corretto-devel`
- Verify Java: `java --version`
- Import Corretto key and repo:  
  `sudo rpm --import https://yum.corretto.aws/corretto.key`  
  `sudo curl -o /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo`  
  `sudo yum install -y java-21-amazon-corretto-devel`
- Build the project:  
  Inside server folder:  
  `chmod +x gradlew`  
  `./gradlew clean build -x test`
  
# Configure your .env
- [Backend Configuration](../server/README.md)

# Then configure the database using RDS and put the credentials inside the .env
- [RDS DATABASE CONFIGURATION](./rds.md)

#Configure the port

then run 
./gradlew bootRun


