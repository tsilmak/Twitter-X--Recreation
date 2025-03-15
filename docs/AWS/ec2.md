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


## 3. Connect to the ec2 and transfer the .jar to the ecs
run `gradlew bootJar`
inside cd build\libs get the jar   |  
transfer the jar to the ec2
![image](https://github.com/user-attachments/assets/4945ebb5-4c5a-4d56-b42a-51b8ff19df87)

# Connect to the Ec2 Instance and configure the Spring Boot Server
- Install java: `sudo yum install java-21`
- Verify java: `java --version`

  
# Configure your .env
- [Backend Configuration](../server/README.md)

# Then configure the database using RDS and put the credentials inside the .env
- [RDS DATABASE CONFIGURATION](./rds.md)

#Configure the port to (PORT=80) inside .env


- Run with the .env settings:
  java -jar twitter-X-0.0.1-SNAPSHOT.jar \
  --server.port=80 \
  --spring.datasource.url=jdbc:postgresql://localhost:5432/Twitter-X-Recreation-DB \
  --spring.datasource.username=user\
  --spring.datasource.password=password\
  --spring.jpa.hibernate.ddl-auto=create \
  --origin.baseurl=http://localhost:3001/ \
  --my.email.address=email@gmail.com  




