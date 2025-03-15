# Create RDS Database
- Chose the free tier
- Configure the Credentials Settings and note the password for the master user
  ![image](https://github.com/user-attachments/assets/18332152-4c5a-49f4-8039-7bd4f32a84c0)

- Disable Auto Scale
 ![image](https://github.com/user-attachments/assets/fcfe75de-d7c9-4df7-9cb4-149260289ff4)

- Create and name the security group for rds
  ![image](https://github.com/user-attachments/assets/ceb104f4-99e7-49e5-a255-5c43b54c360a)

- Disable Performance Insights
  ![image](https://github.com/user-attachments/assets/b5481864-ebde-4500-bfdb-4667673b9da4)

- Associate a name to the database and disable backups and Encryption
  ![image](https://github.com/user-attachments/assets/0d6b443e-10cd-4397-8332-c4c5a71cad54)

# Edit the security group associated to the RDS
- Add rule and associate the ec2 security group to the RDS
  ![image](https://github.com/user-attachments/assets/0479bace-5b63-4549-a0f3-6752e69a8bb3)

- Edit the OUTBOUND rules from the security group ec2 and assocaite the rds security group
  ![image](https://github.com/user-attachments/assets/4be3a166-c40d-4dc1-a92e-8d4e90d744d2)

# Get the RDS Url and then alter in the .env
SPRING_DATASOURCE_URL=postgresql://masterusername:masterpassword@EndpointRDS:5432/DBname
SPRING.DATASOURCE_USERNAME=master username
SPRING_DATASOURCE_PASSWORD=master password



