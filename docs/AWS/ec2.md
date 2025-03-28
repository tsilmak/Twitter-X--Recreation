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
run `gradlew bootJar` (inside server folder)
inside (build\libs) get the jar   |  
transfer the jar to the ec2
![image](https://github.com/user-attachments/assets/4945ebb5-4c5a-4d56-b42a-51b8ff19df87)

# Connect to the Ec2 Instance and configure the Spring Boot Server
- Install java: `sudo yum install java-21`
- Verify java: `java --version`

  
# Configure your .env application propreties settings using .env
- [Backend Configuration](../server/README.md)

# Then configure the database using RDS and put the credentials inside the .env
- [RDS DATABASE CONFIGURATION](./rds.md)

#Configure the port to (PORT=80) inside .env

# Spring Boot Server Service Configuration

This `systemd` service file configures a Spring Boot application to run with the `prod` profile settings on an EC2 instance.

## Service File: `/etc/systemd/system/java-server.service`

```ini
[Unit]
Description=Spring Boot Server
After=network.target

[Service]
ExecStart=/usr/bin/java -jar /home/ec2-user/twitter-X-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
User=ec2-user
WorkingDirectory=/home/ec2-user
Restart=on-failure
RestartSec=5s
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
```

## Steps to Run the Service

### 1. Create the Service File

Use an editor like `nano` to create or edit the file:

```bash
sudo nano /etc/systemd/system/java-server.service
```

Paste the service configuration above, save (`Ctrl+O`, then `Enter`), and exit (`Ctrl+X`).

### 2. Reload `systemd` Configuration

Refresh the `systemd` daemon to recognize the new or updated service file:

```bash
sudo systemctl daemon-reload
```

### 3. Start the Service

Launch the service immediately:

```bash
sudo systemctl start java-server
```

### 4. Enable the Service on Boot (Optional)

Ensure the service starts automatically on system reboot:

```bash
sudo systemctl enable java-server
```

### 5. Check the Service Status

Verify the service is running:

```bash
systemctl status java-server
```

### 6. View Real-Time Logs

Monitor the service logs for troubleshooting:

```bash
journalctl -u java-server.service -f
```

## Notes

- Ensure the JAR file exists at `/home/ec2-user/twitter-X-0.0.1-SNAPSHOT.jar` and is executable (`chmod +x` if needed).
- The `prod` profile must be defined in `application-prod.properties` or an equivalent configuration file.
- If the service fails, check logs with `journalctl -u java-server.service` for detailed errors.


