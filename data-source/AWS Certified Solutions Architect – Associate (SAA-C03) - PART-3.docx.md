**Question 401**

A company hosts a multi-tier web application on Amazon Linux Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company observes that the Auto Scaling group launches more On-Demand Instances when the application's end users access high volumes of static web content. The company wants to optimize cost.

What should a solutions architect do to redesign the application MOST cost-effectively?

A. Update the Auto Scaling group to use Reserved Instances instead of On-Demand Instances.  
B. Update the Auto Scaling group to scale by launching Spot Instances instead of On-Demand Instances.  
**C. Create an Amazon CloudFront distribution to host the static web contents from an Amazon S3 bucket. ✅**  
D. Create an AWS Lambda function behind an Amazon API Gateway API to host the static website contents.

**Question 402**

A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data science team wants to securely share selective data from its accounts with the company's engineering team for analytical purposes.

Which solution will meet these requirements with the LEAST operational overhead?

A. Copy the required data to a common account. Create an IAM access role in that account. Grant access by specifying a permission policy that includes users from the engineering team accounts as trusted entities.  
B. Use the Lake Formation permissions Grant command in each account where the data is stored to allow the required engineering team users to access the data.  
C. Use AWS Data Exchange to privately publish the required data to the required engineering team accounts.  
**D. Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the required data to the engineering team accounts. ✅**

**Question 403**

A company wants to host a scalable web application on AWS. The application will be accessed by users from different geographic regions of the world. Application users will be able to download and upload unique data up to gigabytes in size. The development team wants a cost-effective solution to minimize upload and download latency and maximize performance.

What should a solutions architect do to accomplish this?

**A. Use Amazon S3 with Transfer Acceleration to host the application. ✅**  
B. Use Amazon S3 with CacheControl headers to host the application.  
C. Use Amazon EC2 with Auto Scaling and Amazon CloudFront to host the application.  
D. Use Amazon EC2 with Auto Scaling and Amazon ElastiCache to host the application.

**Question 404**

A company has hired a solutions architect to design a reliable architecture for its application. The application consists of one Amazon RDS DB instance and two manually provisioned Amazon EC2 instances that run web servers. The EC2 instances are located in a single Availability Zone.

An employee recently deleted the DB instance, and the application was unavailable for 24 hours as a result. The company is concerned with the overall reliability of its environment.

What should the solutions architect do to maximize reliability of the application's infrastructure?

A. Delete one EC2 instance and enable termination protection on the other EC2 instance. Update the DB instance to be Multi-AZ, and enable deletion protection.  
**B. Update the DB instance to be Multi-AZ, and enable deletion protection. Place the EC2 instances behind an Application Load Balancer, and run them in an EC2 Auto Scaling group across multiple Availability Zones. ✅**  
C. Create an additional DB instance along with an Amazon API Gateway and an AWS Lambda function. Configure the application to invoke the Lambda function through API Gateway. Have the Lambda function write the data to the two DB instances.  
D. Place the EC2 instances in an EC2 Auto Scaling group that has multiple subnets located in multiple Availability Zones. Use Spot Instances instead of On-Demand Instances. Set up Amazon CloudWatch alarms to monitor the health of the instances Update the DB instance to be Multi-AZ, and enable deletion protection.

**Question 405**

A company is storing 700 terabytes of data on a large network-attached storage (NAS) system in its corporate data center. The company has a hybrid environment with a 10 Gbps AWS Direct Connect connection.

After an audit from a regulator, the company has 90 days to move the data to the cloud. The company needs to move the data efficiently and without disruption. The company still needs to be able to access and update the data during the transfer window.

Which solution will meet these requirements?

**A. Create an AWS DataSync agent in the corporate data center. Create a data transfer task Start the transfer to an Amazon S3 bucket. ✅**  
B. Back up the data to AWS Snowball Edge Storage Optimized devices. Ship the devices to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.  
C. Use rsync to copy the data directly from local storage to a designated Amazon S3 bucket over the Direct Connect connection.  
D. Back up the data on tapes. Ship the tapes to an AWS data center. Mount a target Amazon S3 bucket on the on-premises file system.

**Question 406**

A company stores data in PDF format in an Amazon S3 bucket. The company must follow a legal requirement to retain all new and existing data in Amazon S3 for 7 years.

Which solution will meet these requirements with the LEAST operational overhead?

A. Turn on the S3 Versioning feature for the S3 bucket. Configure S3 Lifecycle to delete the data after 7 years. Configure multi-factor authentication (MFA) delete for all S3 objects.  
B. Turn on S3 Object Lock with governance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.  
C. Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Recopy all existing objects to bring the existing data into compliance.  
**D. Turn on S3 Object Lock with compliance retention mode for the S3 bucket. Set the retention period to expire after 7 years. Use S3 Batch Operations to bring the existing data into compliance. ✅**

**Question 407**

A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API Gateway. The company wants to deploy the application across multiple AWS Regions to provide Regional failover capabilities.

What should a solutions architect do to route traffic to multiple Regions?

**A. Create Amazon Route 53 health checks for each Region. Use an active-active failover configuration. ✅**  
B. Create an Amazon CloudFront distribution with an origin for each Region. Use CloudFront health checks to route traffic.  
C. Create a transit gateway. Attach the transit gateway to the API Gateway endpoint in each Region. Configure the transit gateway to route requests.  
D. Create an Application Load Balancer in the primary Region. Set the target group to point to the API Gateway endpoint hostnames in each Region.

**Question 408**

A company has two VPCs named Management and Production. The Management VPC uses VPNs through a customer gateway to connect to a single device in the data center. The Production VPC uses a virtual private gateway with two attached AWS Direct Connect connections. The Management and Production VPCs both use a single VPC peering connection to allow communication between the applications.

What should a solutions architect do to mitigate any single point of failure in this architecture?

A. Add a set of VPNs between the Management and Production VPCs.  
B. Add a second virtual private gateway and attach it to the Management VPC.  
**C. Add a second set of VPNs to the Management VPC from a second customer gateway device. ✅**  
D. Add a second VPC peering connection between the Management VPC and the Production VPC.

**Question 409**

A company runs its application on an Oracle database. The company plans to quickly migrate to AWS because of limited resources for the database, backup administration, and data center maintenance. The application uses third-party database features that require privileged access.

Which solution will help the company migrate the database to AWS MOST cost-effectively?

A. Migrate the database to Amazon RDS for Oracle. Replace third-party features with cloud services.  
**B. Migrate the database to Amazon RDS Custom for Oracle. Customize the database settings to support third-party features. ✅**  
C. Migrate the database to an Amazon EC2 Amazon Machine Image (AMI) for Oracle. Customize the database settings to support third-party features.  
D. Migrate the database to Amazon RDS for PostgreSQL by rewriting the application code to remove dependency on Oracle APEX.

**Question 410**

A company has a data ingestion workflow that consists of the following:

• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries  
• An AWS Lambda function to process the data and record metadata

The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.

Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)

A. Deploy the Lambda function in multiple Availability Zones.  
**B. Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic. ✅**  
C. Increase the CPU and memory that are allocated to the Lambda function.  
D. Increase provisioned throughput for the Lambda function.  
**E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue. ✅**

**Question 411**

A company has a three-tier web application that is in a single server. The company wants to migrate the application to the AWS Cloud. The company also wants the application to align with the AWS Well-Architected Framework and to be consistent with AWS recommended best practices for security, scalability, and resiliency.

Which combination of solutions will meet these requirements? (Choose three.)

A. Create a VPC across two Availability Zones with the application's existing architecture. Host the application with existing architecture on an Amazon EC2 instance in a private subnet in each Availability Zone with EC2 Auto Scaling groups. Secure the EC2 instance with security groups and network access control lists (network ACLs).  
B. Set up security groups and network access control lists (network ACLs) to control access to the database layer. Set up a single Amazon RDS database in a private subnet.  
**C. Create a VPC across two Availability Zones. Refactor the application to host the web tier, application tier, and database tier. Host each tier on its own private subnet with Auto Scaling groups for the web tier and application tier. ✅**  
D. Use a single Amazon RDS database. Allow database access only from the application tier security group.  
**E. Use Elastic Load Balancers in front of the web tier. Control access by using security groups containing references to each layer's security groups. ✅**  
**F. Use an Amazon RDS database Multi-AZ cluster deployment in private subnets. Allow database access only from application tier security groups. ✅**

**Question 412**

A company is migrating its applications and databases to the AWS Cloud. The company will use Amazon Elastic Container Service (Amazon ECS), AWS Direct Connect, and Amazon RDS.

Which activities will be managed by the company's operational team? (Choose three.)

A. Management of the Amazon RDS infrastructure layer, operating system, and platforms  
**B. Creation of an Amazon RDS DB instance and configuring the scheduled maintenance window. ✅**  
**C. Configuration of additional software components on Amazon ECS for monitoring, patch management, log management, and host intrusion detection. ✅**  
D. Installation of patches for all minor and major database versions for Amazon RDS  
E. Ensure the physical security of the Amazon RDS infrastructure in the data center  
**F. Encryption of the data that moves in transit through Direct Connect. ✅**

**Question 413**

A company runs a Java-based job on an Amazon EC2 instance. The job runs every hour and takes 10 seconds to run. The job runs on a scheduled interval and consumes 1 GB of memory. The CPU utilization of the instance is low except for short surges during which the job uses the maximum CPU available. The company wants to optimize the costs to run the job.

Which solution will meet these requirements?

A. Use AWS App2Container (A2C) to containerize the job. Run the job as an Amazon Elastic Container Service (Amazon ECS) task on AWS Fargate with 0.5 virtual CPU (vCPU) and 1 GB of memory.  
**B. Copy the code into an AWS Lambda function that has 1 GB of memory. Create an Amazon EventBridge scheduled rule to run the code each hour. ✅**  
C. Use AWS App2Container (A2C) to containerize the job. Install the container in the existing Amazon Machine Image (AMI). Ensure that the schedule stops the container when the task finishes.  
D. Configure the existing schedule to stop the EC2 instance at the completion of the job and restart the EC2 instance when the next job starts.

**Question 414**

A company wants to implement a backup strategy for Amazon EC2 data and multiple Amazon S3 buckets. Because of regulatory requirements, the company must retain backup files for a specific time period. The company must not alter the files for the duration of the retention period.

Which solution will meet these requirements?

A. Use AWS Backup to create a backup vault that has a vault lock in governance mode. Create the required backup plan.  
B. Use Amazon Data Lifecycle Manager to create the required automated snapshot policy.  
C. Use Amazon S3 File Gateway to create the backup. Configure the appropriate S3 Lifecycle management.  
**D. Use AWS Backup to create a backup vault that has a vault lock in compliance mode. Create the required backup plan. ✅**

**Question 415**

A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details about the resources inventory. The solutions architect needs to build and map the relationship details of the various workloads across all accounts.

Which solution will meet these requirements in the MOST operationally efficient way?

A. Use AWS Systems Manager Inventory to generate a map view from the detailed view report.  
B. Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually.  
**C. Use Workload Discovery on AWS to generate architecture diagrams of the workloads. ✅**  
D. Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships.

---

**Question 416**

A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on AWS accounts when the allocated budget threshold is met during a specific period.

Which combination of solutions will meet these requirements? (Choose three.)

A. Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of the required AWS accounts.

B. Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required AWS accounts.

C. Create an IAM user for AWS Budgets to run budget actions with the required permissions.

**D. Create an IAM role for AWS Budgets to run budget actions with the required permissions. ✅**

E. Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate config rule to prevent provisioning of additional resources.

**F. Add an alert to notify the company when each account meets its budget threshold. Add a budget action that selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of additional resources. ✅**

---

**Question 417**

A company runs applications on Amazon EC2 instances in one AWS Region. The company wants to back up the EC2 instances to a second Region. The company also wants to provision EC2 resources in the second Region and manage the EC2 instances centrally from one AWS account.

Which solution will meet these requirements MOST cost-effectively?

A. Create a disaster recovery (DR) plan that has a similar number of EC2 instances in the second Region. Configure data replication.

B. Create point-in-time Amazon Elastic Block Store (Amazon EBS) snapshots of the EC2 instances. Copy the snapshots to the second Region periodically.

**C. Create a backup plan by using AWS Backup. Configure cross-Region backup to the second Region for the EC2 instances. ✅**

D. Deploy a similar number of EC2 instances in the second Region. Use AWS DataSync to transfer the data from the source Region to the second Region.

---

**Question 418**

A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the application to transfer data. The company must use Applicability Statement 2 (AS2) protocol.

Which solution will meet these requirements?

A. Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication.

B. Use Amazon AppFlow flows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS) task for IdP authentication.

**C. Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication. ✅**

D. Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP authentication.

---

**Question 419**

A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application requires 1 GB of memory and 2 GB of storage for its computation resources. The application will require that the data is in a relational format.

Which additional combination ofAWS services will meet these requirements with the LEAST administrative effort? (Choose two.)

A. Amazon EC2

**B. AWS Lambda ✅**

**C. Amazon RDS ✅**

D. Amazon DynamoDB

E. Amazon Elastic Kubernetes Services (Amazon EKS)

---

**Question 420**

A company uses AWS Organizations to run workloads within multiple AWS accounts. A tagging policy adds department tags to AWS resources when the company creates tags.

An accounting team needs to determine spending on Amazon EC2 consumption. The accounting team must determine which departments are responsible for the costs regardless ofAWS account. The accounting team has access to AWS Cost Explorer for all AWS accounts within the organization and needs to access all reports from Cost Explorer.

Which solution meets these requirements in the MOST operationally efficient way?

**A. From the Organizations management account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2. ✅**

B. From the Organizations management account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

C. From the Organizations member account billing console, activate a user-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by the tag name, and filter by EC2.

D. From the Organizations member account billing console, activate an AWS-defined cost allocation tag named department. Create one cost report in Cost Explorer grouping by tag name, and filter by EC2.

---

**Question 421**

A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.

Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.

What should a solutions architect do to meet these requirements with the LEAST development effort?

A. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.

**B. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII. ✅**

C. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.

D. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.

---

**Question 422**

A company wants to securely exchange data between its software as a service (SaaS) application Salesforce account and Amazon S3. The company must encrypt the data at rest by using AWS Key Management Service (AWS KMS) customer managed keys (CMKs). The company must also encrypt the data in transit. The company has enabled API access for the Salesforce account.

A. Create AWS Lambda functions to transfer the data securely from Salesforce to Amazon S3.

B. Create an AWS Step Functions workflow. Define the task to transfer the data securely from Salesforce to Amazon S3.

**C. Create Amazon AppFlow flows to transfer the data securely from Salesforce to Amazon S3. ✅**

D. Create a custom connector for Salesforce to transfer the data securely from Salesforce to Amazon S3.

---

**Question 423**

A company is developing a mobile gaming app in a single AWS Region. The app runs on multiple Amazon EC2 instances in an Auto Scaling group. The company stores the app data in Amazon DynamoDB. The app communicates by using TCP traffic and UDP traffic between the users and the servers. The application will be used globally. The company wants to ensure the lowest possible latency for all users.

Which solution will meet these requirements?

A. Use AWS Global Accelerator to create an accelerator. Create an Application Load Balancer (ALB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB.

**B. Use AWS Global Accelerator to create an accelerator. Create a Network Load Balancer (NLB) behind an accelerator endpoint that uses Global Accelerator integration and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB. ✅**

C. Create an Amazon CloudFront content delivery network (CDN) endpoint. Create a Network Load Balancer (NLB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the NLB. Update CloudFront to use the NLB as the origin.

D. Create an Amazon CloudFront content delivery network (CDN) endpoint. Create an Application Load Balancer (ALB) behind the endpoint and listening on the TCP and UDP ports. Update the Auto Scaling group to register instances on the ALB. Update CloudFront to use the ALB as the origin.

---

**Question 424**

A company has an application that processes customer orders. The company hosts the application on an Amazon EC2 instance that saves the orders to an Amazon Aurora database. Occasionally when traffic is high the workload does not process orders fast enough.

What should a solutions architect do to write the orders reliably to the database as quickly as possible?

A. Increase the instance size of the EC2 instance when traffic is high. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic.

**B. Write orders to an Amazon Simple Queue Service (Amazon SQS) queue. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database. ✅**

C. Write orders to Amazon Simple Notification Service (Amazon SNS). Subscribe the database endpoint to the SNS topic. Use EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SNS topic.

D. Write orders to an Amazon Simple Queue Service (Amazon SQS) queue when the EC2 instance reaches CPU threshold limits. Use scheduled scaling of EC2 instances in an Auto Scaling group behind an Application Load Balancer to read from the SQS queue and process orders into the database.

---

**Question 425**

An IoT company is releasing a mattress that has sensors to collect data about a user’s sleep. The sensors will send data to an Amazon S3 bucket. The sensors collect approximately 2 MB of data every night for each mattress. The company must process and summarize the data for each mattress. The results need to be available as soon as possible. Data processing will require 1 GB of memory and will finish within 30 seconds.

Which solution will meet these requirements MOST cost-effectively?

A. Use AWS Glue with a Scala job

B. Use Amazon EMR with an Apache Spark script

**C. Use AWS Lambda with a Python script ✅**

D. Use AWS Glue with a PySpark job

---

**Question 426**

A company hosts an online shopping application that stores all orders in an Amazon RDS for PostgreSQL Single-AZ DB instance. Management wants to eliminate single points of failure and has asked a solutions architect to recommend an approach to minimize database downtime without requiring any changes to the application code.

Which solution meets these requirements?

**A. Convert the existing database instance to a Multi-AZ deployment by modifying the database instance and specifying the Multi-AZ option. ✅**

B. Create a new RDS Multi-AZ deployment. Take a snapshot of the current RDS instance and restore the new Multi-AZ deployment with the snapshot.

C. Create a read-only replica of the PostgreSQL database in another Availability Zone. Use Amazon Route 53 weighted record sets to distribute requests across the databases.

D. Place the RDS for PostgreSQL database in an Amazon EC2 Auto Scaling group with a minimum group size of two. Use Amazon Route 53 weighted record sets to distribute requests across instances.

---

**Question 427**

A company is developing an application to support customer demands. The company wants to deploy the application on multiple Amazon EC2 Nitro-based instances within the same Availability Zone. The company also wants to give the application the ability to write to multiple block storage volumes in multiple EC2 Nitro-based instances simultaneously to achieve higher application availability.

Which solution will meet these requirements?

A. Use General Purpose SSD (gp3) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

B. Use Throughput Optimized HDD (st1) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

**C. Use Provisioned IOPS SSD (io2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach. ✅**

D. Use General Purpose SSD (gp2) EBS volumes with Amazon Elastic Block Store (Amazon EBS) Multi-Attach

---

**Question 428**

A company designed a stateless two-tier application that uses Amazon EC2 in a single Availability Zone and an Amazon RDS Multi-AZ DB instance. New company management wants to ensure the application is highly available.

What should a solutions architect do to meet this requirement?

**A. Configure the application to use Multi-AZ EC2 Auto Scaling and create an Application Load Balancer. ✅**

B. Configure the application to take snapshots of the EC2 instances and send them to a different AWS Region.

C. Configure the application to use Amazon Route 53 latency-based routing to feed requests to the application.

D. Configure Amazon Route 53 rules to handle incoming requests and create a Multi-AZ Application Load Balancer

---

**Question 429**

A company uses AWS Organizations. A member account has purchased a Compute Savings Plan. Because of changes in the workloads inside the member account, the account no longer receives the full benefit of the Compute Savings Plan commitment. The company uses less than 50% of its purchased compute power.

A. Turn on discount sharing from the Billing Preferences section of the account console in the member account that purchased the Compute Savings Plan.

**B. Turn on discount sharing from the Billing Preferences section of the account console in the company's Organizations management account. ✅**

C. Migrate additional compute workloads from another AWS account to the account that has the Compute Savings Plan.

D. Sell the excess Savings Plan commitment in the Reserved Instance Marketplace.

---

**Question 430**

A company is developing a microservices application that will provide a search catalog for customers. The company must use REST APIs to present the frontend of the application to users. The REST APIs must access the backend services that the company hosts in containers in private VPC subnets.

Which solution will meet these requirements?

A. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS.

**B. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a private VPC link for API Gateway to access Amazon ECS. ✅**

C. Design a WebSocket API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.

D. Design a REST API by using Amazon API Gateway. Host the application in Amazon Elastic Container Service (Amazon ECS) in a private subnet. Create a security group for API Gateway to access Amazon ECS.

---

**Question 431**

A company stores raw collected data in an Amazon S3 bucket. The data is used for several types of analytics on behalf of the company's customers. The type of analytics requested determines the access pattern on the S3 objects.

The company cannot predict or control the access pattern. The company wants to reduce its S3 costs.

Which solution will meet these requirements?

A. Use S3 replication to transition infrequently accessed objects to S3 Standard-Infrequent Access (S3 Standard-IA)

B. Use S3 Lifecycle rules to transition objects from S3 Standard to Standard-Infrequent Access (S3 Standard-IA)

**C. Use S3 Lifecycle rules to transition objects from S3 Standard to S3 Intelligent-Tiering. ✅**

D. Use S3 Inventory to identify and transition objects that have not been accessed from S3 Standard to S3 Intelligent-Tiering

---

**Question 432**

A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.

What should the company do to guarantee the EC2 capacity?

A. Purchase Reserved Instances that specify the Region needed.

B. Create an On-Demand Capacity Reservation that specifies the Region needed.

C. Purchase Reserved Instances that specify the Region and three Availability Zones needed.

**D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed. ✅**

---

**Question 433**

A company has applications hosted on Amazon EC2 instances with IPv6 addresses. The applications must initiate communications with other external applications using the internet. However the company’s security policy states that any external service cannot initiate a connection to the EC2 instances.

What should a solutions architect recommend to resolve this issue?

A. Create a NAT gateway and make it the destination of the subnet's route table

B. Create an internet gateway and make it the destination of the subnet's route table

C. Create a virtual private gateway and make it the destination of the subnet's route table

**D. Create an egress-only internet gateway and make it the destination of the subnet's route table. ✅**

---

**Question 434**

A company is creating an application that runs on containers in a VPC. The application stores and accesses data in an Amazon S3 bucket. During the development phase, the application will store and access 1 TB of data in Amazon S3 each day. The company wants to minimize costs and wants to prevent traffic from traversing the internet whenever possible.

Which solution will meet these requirements?

A. Enable S3 Intelligent-Tiering for the S3 bucket

B. Enable S3 Transfer Acceleration for the S3 bucket

**C. Create a gateway VPC endpoint for Amazon S3. Associate this endpoint with all route tables in the VPC. ✅**

D. Create an interface endpoint for Amazon S3 in the VPC. Associate this endpoint with all route tables in the VPC

---

**Question 435**

A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes.

Which method should the solutions architect select?

**A. Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint. ✅**

B. Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas.

C. Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint.

D. Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB.

---

**Question 436**

A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing, and the company is concerned about a potential increase in cost.

**A. Create an Amazon CloudFront distribution to cache state files at edge locations ✅**  
B. Create an Amazon ElastiCache cluster. Connect the ALB to the ElastiCache cluster to serve cached files  
C. Create an AWS WAF web ACL and associate it with the ALB. Add a rule to the web ACL to cache static files  
D. Create a second ALB in an alternative AWS Region. Route user traffic to the closest Region to minimize data transfer costs

**Question 437**

A company has multiple VPCs across AWS Regions to support and run workloads that are isolated from workloads in other Regions. Because of a recent application launch requirement, the company’s VPCs must communicate with all other VPCs across all Regions.

Which solution will meet these requirements with the LEAST amount of administrative effort?

A. Use VPC peering to manage VPC communication in a single Region. Use VPC peering across Regions to manage VPC communications.  
B. Use AWS Direct Connect gateways across all Regions to connect VPCs across regions and manage VPC communications.  
**C. Use AWS Transit Gateway to manage VPC communication in a single Region and Transit Gateway peering across Regions to manage VPC communications. ✅**  
D. Use AWS PrivateLink across all Regions to connect VPCs across Regions and manage VPC communications

**Question 438**

A company is designing a containerized application that will use Amazon Elastic Container Service (Amazon ECS). The application needs to access a shared file system that is highly durable and can recover data to another AWS Region with a recovery point objective (RPO) of 8 hours. The file system needs to provide a mount target m each Availability Zone within a Region.

A solutions architect wants to use AWS Backup to manage the replication to another Region.

Which solution will meet these requirements?

A. Amazon FSx for Windows File Server with a Multi-AZ deployment  
B. Amazon FSx for NetApp ONTAP with a Multi-AZ deployment  
**C. Amazon Elastic File System (Amazon EFS) with the Standard storage class ✅**  
D. Amazon FSx for OpenZFS

**Question 439**

A company is expecting rapid growth in the near future. A solutions architect needs to configure existing users and grant permissions to new users on AWS. The solutions architect has decided to create IAM groups. The solutions architect will add the new users to IAM groups based on department.

Which additional action is the MOST secure way to grant permissions to the new users?

A. Apply service control policies (SCPs) to manage access permissions  
B. Create IAM roles that have least privilege permission. Attach the roles to the IAM groups  
**C. Create an IAM policy that grants least privilege permission. Attach the policy to the IAM groups ✅**  
D. Create IAM roles. Associate the roles with a permissions boundary that defines the maximum permissions

**Question 441**

A law firm needs to share information with the public. The information includes hundreds of files that must be publicly readable. Modifications or deletions of the files by anyone before a designated future date are prohibited.

Which solution will meet these requirements in the MOST secure way?

A. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant read-only IAM permissions to any AWS principals that access the S3 bucket until the designated date.  
**B. Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects. ✅**  
C. Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run an AWS Lambda function in case of object modification or deletion. Configure the Lambda function to replace the objects with the original versions from a private S3 bucket.  
D. Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the folder that contains the files. Use S3 Object Lock with a retention period in accordance with the designated date. Grant read-only IAM permissions to any AWS principals that access the S3 bucket.

**Question 442**

A company is making a prototype of the infrastructure for its new website by manually provisioning the necessary infrastructure. This infrastructure includes an Auto Scaling group, an Application Load Balancer and an Amazon RDS database. After the configuration has been thoroughly validated, the company wants the capability to immediately deploy the infrastructure for development and production use in two Availability Zones in an automated fashion.

What should a solutions architect recommend to meet these requirements?

A. Use AWS Systems Manager to replicate and provision the prototype infrastructure in two Availability Zones  
**B. Define the infrastructure as a template by using the prototype infrastructure as a guide. Deploy the infrastructure with AWS CloudFormation. ✅**  
C. Use AWS Config to record the inventory of resources that are used in the prototype infrastructure. Use AWS Config to deploy the prototype infrastructure into two Availability Zones.  
D. Use AWS Elastic Beanstalk and configure it to use an automated reference to the prototype infrastructure to automatically deploy new environments in two Availability Zones.

**Question 443**

A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.

What should a solutions architect do to meet these requirements?

A. Move the catalog to Amazon ElastiCache for Redis.  
B. Deploy a larger EC2 instance with a larger instance store.  
C. Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.  
**D. Move the catalog to an Amazon Elastic File System (Amazon EFS) file system. ✅**

**Question 444**

A business application is hosted on Amazon EC2 and uses Amazon S3 for encrypted object storage. The chief information security officer has directed that no application traffic between the two services should traverse the public internet.

Which capability should the solutions architect use to meet the compliance requirements?

A. AWS Key Management Service (AWS KMS)  
**B. VPC endpoint ✅**  
C. Private subnet  
D. Virtual private gateway

**Question 445**

A company hosts a three-tier web application in the AWS Cloud. A Multi-AZAmazon RDS for MySQL server forms the database layer Amazon ElastiCache forms the cache layer. The company wants a caching strategy that adds or updates data in the cache when a customer adds an item to the database. The data in the cache must always match the data in the database.

Which solution will meet these requirements?

A. Implement the lazy loading caching strategy  
**B. Implement the write-through caching strategy ✅**  
C. Implement the adding TTL caching strategy  
D. Implement the AWS AppConfig caching strategy

**Question 446**

A company wants to migrate 100 GB of historical data from an on-premises location to an Amazon S3 bucket. The company has a 100 megabits per second (Mbps) internet connection on premises. The company needs to encrypt the data in transit to the S3 bucket. The company will store new data directly in Amazon S3.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use the s3 sync command in the AWS CLI to move the data directly to an S3 bucket  
**B. Use AWS DataSync to migrate the data from the on-premises location to an S3 bucket ✅**  
C. Use AWS Snowball to move the data to an S3 bucket  
D. Set up an IPsec VPN from the on-premises location to AWS. Use the s3 cp command in the AWS CLI to move the data directly to an S3 bucket

**Question 447**

A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company wants to run this job in the AWS Cloud. The job runs every 10 minutes. The job’s runtime varies between 1 minute and 3 minutes.

Which solution will meet these requirements MOST cost-effectively?

A. Create an AWS Lambda function based on the container image of the job. Configure Amazon EventBridge to invoke the function every 10 minutes.  
B. Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling to run every 10 minutes.  
**C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a scheduled task based on the container image of the job to run every 10 minutes. ✅**  
D. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a standalone task based on the container image of the job. Use Windows task scheduler to run the job every 10 minutes.

**Question 448**

A company wants to move from many standalone AWS accounts to a consolidated, multi-account architecture. The company plans to create many new AWS accounts for different business units. The company needs to authenticate access to these AWS accounts by using a centralized corporate directory service.

Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)

**A. Create a new organization in AWS Organizations with all features turned on. Create the new AWS accounts in the organization. ✅**  
B. Set up an Amazon Cognito identity pool. Configure AWS IAM Identity Center (AWS Single Sign-On) to accept Amazon Cognito authentication.  
C. Configure a service control policy (SCP) to manage the AWS accounts. Add AWS IAM Identity Center (AWS Single Sign-On) to AWS Directory Service.  
D. Create a new organization in AWS Organizations. Configure the organization's authentication mechanism to use AWS Directory Service directly.  
**E. Set up AWS IAM Identity Center (AWS Single Sign-On) in the organization. Configure IAM Identity Center, and integrate it with the company's corporate directory service. ✅**

**Question 449**

A company is looking for a solution that can store video archives in AWS from old news footage. The company needs to minimize costs and will rarely need to restore these files. When the files are needed, they must be available in a maximum of five minutes.

What is the MOST cost-effective solution?

**A. Store the video archives in Amazon S3 Glacier and use Expedited retrievals. ✅**  
B. Store the video archives in Amazon S3 Glacier and use Standard retrievals.  
C. Store the video archives in Amazon S3 Standard-Infrequent Access (S3 Standard-IA).  
D. Store the video archives in Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA).

**Question 450**

A company is building a three-tier application on AWS. The presentation tier will serve a static website The logic tier is a containerized application. This application will store data in a relational database. The company wants to simplify deployment and to reduce operational costs.

Which solution will meet these requirements?

**A. Use Amazon S3 to host static content. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database. ✅**  
B. Use Amazon CloudFront to host static content. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.  
C. Use Amazon S3 to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute power. Use a managed Amazon RDS cluster for the database.  
D. Use Amazon EC2 Reserved Instances to host static content. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 for compute power. Use a managed Amazon RDS cluster for the database.

**Question 451**

A company seeks a storage solution for its application. The solution must be highly available and scalable. The solution also must function as a file system be mountable by multiple Linux instances in AWS and on premises through native protocols, and have no minimum size requirements. The company has set up a Site-to-Site VPN for access from its on-premises network to its VPC.

Which storage solution meets these requirements?

A. Amazon FSx Multi-AZ deployments  
B. Amazon Elastic Block Store (Amazon EBS) Multi-Attach volumes  
**C. Amazon Elastic File System (Amazon EFS) with multiple mount targets ✅**  
D. Amazon Elastic File System (Amazon EFS) with a single mount target and multiple access points

**Question 452**

A 4-year-old media company is using the AWS Organizations all features feature set to organize its AWS accounts. According to the company's finance team, the billing information on the member accounts must not be accessible to anyone, including the root user of the member accounts.

Which solution will meet these requirements?

A. Add all finance team users to an IAM group. Attach an AWS managed policy named Billing to the group.  
B. Attach an identity-based policy to deny access to the billing information to all users, including the root user.  
**C. Create a service control policy (SCP) to deny access to the billing information. Attach the SCP to the root organizational unit (OU). ✅**  
D. Convert from the Organizations all features feature set to the Organizations consolidated billing feature set.

**Question 453**

An ecommerce company runs an application in the AWS Cloud that is integrated with an on-premises warehouse solution. The company uses Amazon Simple Notification Service (Amazon SNS) to send order messages to an on-premises HTTPS endpoint so the warehouse application can process the orders. The local data center team has detected that some of the order messages were not received.

A solutions architect needs to retain messages that are not delivered and analyze the messages for up to 14 days.

Which solution will meet these requirements with the LEAST development effort?

A. Configure an Amazon SNS dead letter queue that has an Amazon Kinesis Data Stream target with a retention period of 14 days.  
B. Add an Amazon Simple Queue Service (Amazon SQS) queue with a retention period of 14 days between the application and Amazon SNS.  
**C. Configure an Amazon SNS dead letter queue that has an Amazon Simple Queue Service (Amazon SQS) target with a retention period of 14 days. ✅**  
D. Configure an Amazon SNS dead letter queue that has an Amazon DynamoDB target with a TTL attribute set for a retention period of 14 days.

**Question 454**

A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.

Which solution will meet these requirements MOST cost-effectively?

A. Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.  
B. Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.  
**C. Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3. ✅**  
D. Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.

**Question 455**

A gaming company uses Amazon DynamoDB to store user information such as geographic location, player data, and leaderboards. The company needs to configure continuous backups to an Amazon S3 bucket with a minimal amount of coding. The backups must not affect availability of the application and must not affect the read capacity units (RCUs) that are defined for the table.

Which solution meets these requirements?

A. Use an Amazon EMR cluster. Create an Apache Hive job to back up the data to Amazon S3.  
**B. Export the data directly from DynamoDB to Amazon S3 with continuous backups. Turn on point-in-time recovery for the table. ✅**  
C. Configure Amazon DynamoDB Streams. Create an AWS Lambda function to consume the stream and export the data to an Amazon S3 bucket.  
D. Create an AWS Lambda function to export the data from the database tables to Amazon S3 on a regular basis. Turn on point-in-time recovery for the table.

---

**Question 456**

A solutions architect is designing an asynchronous application to process credit card data validation requests for a bank. The application must be secure and be able to process each request at least once.

Which solution will meet these requirements MOST cost-effectively?

**A. Use AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS Key Management Service (SSE-KMS) for encryption. Add the kms:Decrypt permission for the Lambda execution role. ✅**  
B. Use AWS Lambda event source mapping. Use Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use SQS managed encryption keys (SSE-SQS) for encryption. Add the encryption key invocation permission for the Lambda function.  
C. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) FIFO queues as the event source. Use AWS KMS keys (SSE-KMS). Add the kms:Decrypt permission for the Lambda execution role.  
D. Use the AWS Lambda event source mapping. Set Amazon Simple Queue Service (Amazon SQS) standard queues as the event source. Use AWS KMS keys (SSE-KMS) for encryption. Add the encryption key invocation permission for the Lambda function.

**Question 457**

A company has multiple AWS accounts for development work. Some staff consistently use oversized Amazon EC2 instances, which causes the company to exceed the yearly budget for the development accounts. The company wants to centrally restrict the creation of AWS resources in these accounts.

Which solution will meet these requirements with the LEAST development effort?

A. Develop AWS Systems Manager templates that use an approved EC2 creation process. Use the approved Systems Manager templates to provision EC2 instances.  
**B. Use AWS Organizations to organize the accounts into organizational units (OUs). Define and attach a service control policy (SCP) to the OUs to control the usage of EC2 instance types. ✅**  
C. Configure an Amazon EventBridge rule that invokes an AWS Lambda function when an EC2 instance is created. Stop disallowed EC2 instance types.  
D. Set up AWS Service Catalog products for the staff to create the allowed EC2 instance types. Ensure that staff can deploy EC2 instances only by using the Service Catalog products.

**Question 458**

A company wants to use artificial intelligence (AI) to determine the quality of its customer service calls. The company currently manages calls in four different languages, including English. The company will offer new languages in the future. The company does not have the resources to regularly maintain machine learning (ML) models.

The company needs to create written sentiment analysis reports from the customer service call recordings. The customer service call recording text must be translated into English.

Which combination of steps will meet these requirements? (Choose three.)

A. Use Amazon Comprehend to translate the audio recordings into English.  
B. Use Amazon Lex to create the written sentiment analysis reports.  
C. Use Amazon Polly to convert the audio recordings into text.  
**D. Use Amazon Transcribe to convert the audio recordings in any language into text. ✅**  
**E. Use Amazon Translate to translate text in any language to English. ✅**  
**F. Use Amazon Comprehend to create the sentiment analysis reports. ✅**

---

**Question 459**

A company uses Amazon EC2 instances to host its internal systems. As part of a deployment operation, an administrator tries to use the AWS CLI to terminate an EC2 instance. However, the administrator receives a 403 (Access Denied) error message.

The administrator is using an IAM role that has the following IAM policy attached:

![Question][image1]

What is the cause of the unsuccessful request?

A. The EC2 instance has a resource-based policy with a Deny statement.

B. The principal has not been specified in the policy statement.

C. The "Action" field does not grant the actions that are required to terminate the EC2 instance.

**D. The request to terminate the EC2 instance does not originate from the CIDR blocks 192.0.2.0/24 or 203.0.113.0/24. ✅**

---

**Question 460**

A company is conducting an internal audit. The company wants to ensure that the data in an Amazon S3 bucket that is associated with the company’s AWS Lake Formation data lake does not contain sensitive customer or employee data. The company wants to discover personally identifiable information (PII) or financial information, including passport numbers and credit card numbers.

Which solution will meet these requirements?

A. Configure AWS Audit Manager on the account. Select the Payment Card Industry Data Security Standards (PCI DSS) for auditing.

B. Configure Amazon S3 Inventory on the S3 bucket Configure Amazon Athena to query the inventory.

**C. Configure Amazon Macie to run a data discovery job that uses managed identifiers for the required data types. ✅**

D. Use Amazon S3 Select to run a report across the S3 bucket.

---

**Question 461**

A company uses on-premises servers to host its applications. The company is running out of storage capacity. The applications use both block storage and NFS storage. The company needs a high-performing solution that supports local caching without re-architecting its existing applications.

Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

A. Mount Amazon S3 as a file system to the on-premises servers.  
**B. Deploy an AWS Storage Gateway file gateway to replace NFS storage. ✅**  
C. Deploy AWS Snowball Edge to provision NFS mounts to on-premises servers.  
**D. Deploy an AWS Storage Gateway volume gateway to replace the block storage. ✅**  
E. Deploy Amazon Elastic File System (Amazon EFS) volumes and mount them to on-premises servers.

**Question 462**

A company has a service that reads and writes large amounts of data from an Amazon S3 bucket in the same AWS Region. The service is deployed on Amazon EC2 instances within the private subnet of a VPC. The service communicates with Amazon S3 over a NAT gateway in the public subnet. However, the company wants a solution that will reduce the data output costs.

Which solution will meet these requirements MOST cost-effectively?

A. Provision a dedicated EC2 NAT instance in the public subnet. Configure the route table for the private subnet to use the elastic network interface of this instance as the destination for all S3 traffic.  
B. Provision a dedicated EC2 NAT instance in the private subnet. Configure the route table for the public subnet to use the elastic network interface of this instance as the destination for all S3 traffic.  
**C. Provision a VPC gateway endpoint. Configure the route table for the private subnet to use the gateway endpoint as the route for all S3 traffic. ✅**  
D. Provision a second NAT gateway. Configure the route table for the private subnet to use this NAT gateway as the destination for all S3 traffic.

**Question 463**

A company uses Amazon S3 to store high-resolution pictures in an S3 bucket. To minimize application changes, the company stores the pictures as the latest version of an S3 object. The company needs to retain only the two most recent versions of the pictures.

The company wants to reduce costs. The company has identified the S3 bucket as a large expense.

Which solution will reduce the S3 costs with the LEAST operational overhead?

**A. Use S3 Lifecycle to delete expired object versions and retain the two most recent versions. ✅**  
B. Use an AWS Lambda function to check for older versions and delete all but the two most recent versions.  
C. Use S3 Batch Operations to delete noncurrent object versions and retain only the two most recent versions.  
D. Deactivate versioning on the S3 bucket and retain the two most recent versions.

**Question 464**

A company needs to minimize the cost of its 1 Gbps AWS Direct Connect connection. The company's average connection utilization is less than 10%. A solutions architect must recommend a solution that will reduce the cost without compromising security.

Which solution will meet these requirements?

A. Set up a new 1 Gbps Direct Connect connection. Share the connection with another AWS account.  
B. Set up a new 200 Mbps Direct Connect connection in the AWS Management Console.  
C. Contact an AWS Direct Connect Partner to order a 1 Gbps connection. Share the connection with another AWS account.  
**D. Contact an AWS Direct Connect Partner to order a 200 Mbps hosted connection for an existing AWS account. ✅**

**Question 465**

A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.

What should a solutions architect propose to ensure users see all of their documents at once?

A. Copy the data so both EBS volumes contain all the documents  
B. Configure the Application Load Balancer to direct a user to the server with the documents  
**C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS. ✅**  
D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server

**Question 466**

A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.

What should a solutions architect do to meet these requirements?

A. Create an AWS Lambda function to apply the patch to all EC2 instances.  
B. Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.  
C. Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.  
**D. Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances. ✅**

**Question 467**

A company has multiple Windows file servers on premises. The company wants to migrate and consolidate its files into an Amazon FSx for Windows File Server file system. File permissions must be preserved to ensure that access rights do not change.

Which solutions will meet these requirements? (Choose two.)

**A. Deploy AWS DataSync agents on premises. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system. ✅**  
B. Copy the shares on each file server into Amazon S3 buckets by using the AWS CLI. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.  
C. Remove the drives from each file server. Ship the drives to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.  
**D. Order an AWS Snowcone device. Connect the device to the on-premises network. Launch AWS DataSync agents on the device. Schedule DataSync tasks to transfer the data to the FSx for Windows File Server file system. ✅**  
E. Order an AWS Snowball Edge Storage Optimized device. Connect the device to the on-premises network. Copy data to the device by using the AWS CLI. Ship the device back to AWS for import into Amazon S3. Schedule AWS DataSync tasks to transfer the data to the FSx for Windows File Server file system.

**Question 468**

A company wants to ingest customer payment data into the company's data lake in Amazon S3. The company receives payment data every minute on average. The company wants to analyze the payment data in real time. Then the company wants to ingest the data into the data lake.

Which solution will meet these requirements with the MOST operational efficiency?

A. Use Amazon Kinesis Data Streams to ingest data. Use AWS Lambda to analyze the data in real time.  
B. Use AWS Glue to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time.  
**C. Use Amazon Kinesis Data Firehose to ingest data. Use Amazon Kinesis Data Analytics to analyze the data in real time. ✅**  
D. Use Amazon API Gateway to ingest data. Use AWS Lambda to analyze the data in real time.

**Question 469**

A company runs a website that uses a content management system (CMS) on Amazon EC2. The CMS runs on a single EC2 instance and uses an Amazon Aurora MySQL Multi-AZ DB instance for the data tier. Website images are stored on an Amazon Elastic Block Store (Amazon EBS) volume that is mounted inside the EC2 instance.

Which combination of actions should a solutions architect take to improve the performance and resilience of the website? (Choose two.)

A. Move the website images into an Amazon S3 bucket that is mounted on every EC2 instance  
B. Share the website images by using an NFS share from the primary EC2 instance. Mount this share on the other EC2 instances.  
**C. Move the website images onto an Amazon Elastic File System (Amazon EFS) file system that is mounted on every EC2 instance. ✅**  
D. Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling group to maintain a minimum of two instances. Configure an accelerator in AWS Global Accelerator for the website  
**E. Create an Amazon Machine Image (AMI) from the existing EC2 instance. Use the AMI to provision new instances behind an Application Load Balancer as part of an Auto Scaling group. Configure the Auto Scaling group to maintain a minimum of two instances. Configure an Amazon CloudFront distribution for the website. ✅**

**Question 470**

A company runs an infrastructure monitoring service. The company is building a new feature that will enable the service to monitor data in customer AWS accounts. The new feature will call AWS APIs in customer accounts to describe Amazon EC2 instances and read Amazon CloudWatch metrics.

What should the company do to obtain access to customer accounts in the MOST secure way?

**A. Ensure that the customers create an IAM role in their account with read-only EC2 and CloudWatch permissions and a trust policy to the company’s account. ✅**  
B. Create a serverless API that implements a token vending machine to provide temporary AWS credentials for a role with read-only EC2 and CloudWatch permissions.  
C. Ensure that the customers create an IAM user in their account with read-only EC2 and CloudWatch permissions. Encrypt and store customer access and secret keys in a secrets management system.  
D. Ensure that the customers create an Amazon Cognito user in their account to use an IAM role with read-only EC2 and CloudWatch permissions. Encrypt and store the Amazon Cognito user and password in a secrets management system.

---

**Question 471**

A company needs to connect several VPCs in the us-east-1 Region that span hundreds of AWS accounts. The company's networking team has its own AWS account to manage the cloud network.

What is the MOST operationally efficient solution to connect the VPCs?

A. Set up VPC peering connections between each VPC. Update each associated subnet’s route table

B. Configure a NAT gateway and an internet gateway in each VPC to connect each VPC through the internet

**C. Create an AWS Transit Gateway in the networking team’s AWS account. Configure static routes from each VPC. ✅**

D. Deploy VPN gateways in each VPC. Create a transit VPC in the networking team’s AWS account to connect to each VPC.

**Question 472**

A company has Amazon EC2 instances that run nightly batch jobs to process data. The EC2 instances run in an Auto Scaling group that uses On-Demand billing. If a job fails on one instance, another instance will reprocess the job. The batch jobs run between 12:00 AM and 06:00 AM local time every day.

Which solution will provide EC2 instances to meet these requirements MOST cost-effectively?

A. Purchase a 1-year Savings Plan for Amazon EC2 that covers the instance family of the Auto Scaling group that the batch job uses.

B. Purchase a 1-year Reserved Instance for the specific instance type and operating system of the instances in the Auto Scaling group that the batch job uses.

**C. Create a new launch template for the Auto Scaling group. Set the instances to Spot Instances. Set a policy to scale out based on CPU usage. ✅**

D. Create a new launch template for the Auto Scaling group. Increase the instance size. Set a policy to scale out based on CPU usage.

**Question 473**

A social media company is building a feature for its website. The feature will give users the ability to upload photos. The company expects significant increases in demand during large events and must ensure that the website can handle the upload traffic from users.

Which solution meets these requirements with the MOST scalability?

A. Upload files from the user's browser to the application servers. Transfer the files to an Amazon S3 bucket.

B. Provision an AWS Storage Gateway file gateway. Upload files directly from the user's browser to the file gateway.

**C. Generate Amazon S3 presigned URLs in the application. Upload files directly from the user's browser into an S3 bucket. ✅**

D. Provision an Amazon Elastic File System (Amazon EFS) file system. Upload files directly from the user's browser to the file system.

**Question 474**

A company has a web application for travel ticketing. The application is based on a database that runs in a single data center in North America. The company wants to expand the application to serve a global user base. The company needs to deploy the application to multiple AWS Regions. Average latency must be less than 1 second on updates to the reservation database.

The company wants to have separate deployments of its web platform across multiple Regions. However, the company must maintain a single primary reservation database that is globally consistent.

Which solution should a solutions architect recommend to meet these requirements?

**A. Convert the application to use Amazon DynamoDB. Use a global table for the center reservation table. Use the correct Regional endpoint in each Regional deployment. ✅**

B. Migrate the database to an Amazon Aurora MySQL database. Deploy Aurora Read Replicas in each Region. Use the correct Regional endpoint in each Regional deployment for access to the database.

C. Migrate the database to an Amazon RDS for MySQL database. Deploy MySQL read replicas in each Region. Use the correct Regional endpoint in each Regional deployment for access to the database.

D. Migrate the application to an Amazon Aurora Serverless database. Deploy instances of the database to each Region. Use the correct Regional endpoint in each Regional deployment to access the database. Use AWS Lambda functions to process event streams in each Region to synchronize the databases.

**Question 475**

A company has migrated multiple Microsoft Windows Server workloads to Amazon EC2 instances that run in the us-west-1 Region. The company manually backs up the workloads to create an image as needed.

In the event of a natural disaster in the us-west-1 Region, the company wants to recover workloads quickly in the us-west-2 Region. The company wants no more than 24 hours of data loss on the EC2 instances. The company also wants to automate any backups of the EC2 instances.

Which solutions will meet these requirements with the LEAST administrative effort? (Choose two.)

A. Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Copy the image on demand.

**B. Create an Amazon EC2-backed Amazon Machine Image (AMI) lifecycle policy to create a backup based on tags. Schedule the backup to run twice daily. Configure the copy to the us-west-2 Region. ✅**

C. Create backup vaults in us-west-1 and in us-west-2 by using AWS Backup. Create a backup plan for the EC2 instances based on tag values. Create an AWS Lambda function to run as a scheduled job to copy the backup data to us-west-2.

**D. Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Define the destination for the copy as us-west-2. Specify the backup schedule to run twice daily. ✅**

E. Create a backup vault by using AWS Backup. Use AWS Backup to create a backup plan for the EC2 instances based on tag values. Specify the backup schedule to run twice daily. Copy on demand to us-west-2.

**Question 476**

A company operates a two-tier application for image processing. The application uses two Availability Zones, each with one public subnet and one private subnet. An Application Load Balancer (ALB) for the web tier uses the public subnets. Amazon EC2 instances for the application tier use the private subnets.

Users report that the application is running more slowly than expected. A security audit of the web server log files shows that the application is receiving millions of illegitimate requests from a small number of IP addresses. A solutions architect needs to resolve the immediate performance problem while the company investigates a more permanent solution.

What should the solutions architect recommend to meet this requirement?

A. Modify the inbound security group for the web tier. Add a deny rule for the IP addresses that are consuming resources.

**B. Modify the network ACL for the web tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources. ✅**

C. Modify the inbound security group for the application tier. Add a deny rule for the IP addresses that are consuming resources.

D. Modify the network ACL for the application tier subnets. Add an inbound deny rule for the IP addresses that are consuming resources.

**Question 477**

A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Configure the application to send the data to Amazon Kinesis Data Firehose.

B. Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.

C. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.

**D. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data. ✅**

**E. Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email. ✅**

**Question 478**

A global marketing company has applications that run in the ap-southeast-2 Region and the eu-west-1 Region. Applications that run in a VPC in eu-west-1 need to communicate securely with databases that run in a VPC in ap-southeast-2.

Which network design will meet these requirements?

A. Create a VPC peering connection between the eu-west-1 VPC and the ap-southeast-2 VPC. Create an inbound rule in the eu-west-1 application security group that allows traffic from the database server IP addresses in the ap-southeast-2 security group.

**B. Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. Update the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that references the security group ID of the application servers in eu-west-1. ✅**

C. Configure a VPC peering connection between the ap-southeast-2 VPC and the eu-west-1 VPC. Update the subnet route tables. Create an inbound rule in the ap-southeast-2 database security group that allows traffic from the eu-west-1 application server IP addresses.

D. Create a transit gateway with a peering attachment between the eu-west-1 VPC and the ap-southeast-2 VPC. After the transit gateways are properly peered and routing is configured, create an inbound rule in the database security group that references the security group ID of the application servers in eu-west-1.

**Question 479**

A company is developing software that uses a PostgreSQL database schema. The company needs to configure multiple development environments and databases for the company's developers. On average, each development environment is used for half of the 8-hour workday.

Which solution will meet these requirements MOST cost-effectively?

A. Configure each development environment with its own Amazon Aurora PostgreSQL database

**B. Configure each development environment with its own Amazon RDS for PostgreSQL Single-AZ DB instances. ✅**

C. Configure each development environment with its own Amazon Aurora On-Demand PostgreSQL-Compatible database

D. Configure each development environment with its own Amazon S3 bucket by using Amazon S3 Object Select

**Question 480**

A company uses AWS Organizations with resources tagged by account. The company also uses AWS Backup to back up its AWS infrastructure resources. The company needs to back up all AWS resources.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Use AWS Config to identify all untagged resources. Tag the identified resources programmatically. Use tags in the backup plan. ✅**

B. Use AWS Config to identify all resources that are not running. Add those resources to the backup vault.

C. Require all AWS account owners to review their resources to identify the resources that need to be backed up.

D. Use Amazon Inspector to identify all noncompliant resources.

**Question 481**

A social media company wants to allow its users to upload images in an application that is hosted in the AWS Cloud. The company needs a solution that automatically resizes the images so that the images can be displayed on multiple device types. The application experiences unpredictable traffic patterns throughout the day. The company is seeking a highly available solution that maximizes scalability.

**A. Create a static website hosted in Amazon S3 that invokes AWS Lambda functions to resize the images and store the images in an Amazon S3 bucket. ✅**

B. Create a static website hosted in Amazon CloudFront that invokes AWS Step Functions to resize the images and store the images in an Amazon RDS database.

C. Create a dynamic website hosted on a web server that runs on an Amazon EC2 instance. Configure a process that runs on the EC2 instance to resize the images and store the images in an Amazon S3 bucket.

D. Create a dynamic website hosted on an automatically scaling Amazon Elastic Container Service (Amazon ECS) cluster that creates a resize job in Amazon Simple Queue Service (Amazon SQS). Set up an image-resizing program that runs on an Amazon EC2 instance to process the resize jobs.

**Question 482**

A company is running a microservices application on Amazon EC2 instances. The company wants to migrate the application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for scalability. The company must configure the Amazon EKS control plane with endpoint private access set to true and endpoint public access set to false to maintain security compliance. The company must also put the data plane in private subnets. However, the company has received error notifications because the node cannot join the cluster.

Which solution will allow the node to join the cluster?

A. Grant the required permission in AWS Identity and Access Management (IAM) to the AmazonEKSNodeRole IAM role.

**B. Create interface VPC endpoints to allow nodes to access the control plane. ✅**

C. Recreate nodes in the public subnet. Restrict security groups for EC2 nodes.

D. Allow outbound traffic in the security group of the nodes.

**Question 483**

A company is migrating an on-premises application to AWS. The company wants to use Amazon Redshift as a solution.

Which use cases are suitable for Amazon Redshift in this scenario? (Choose three.)

**A. Supporting data APIs to access data with traditional, containerized, and event-driven applications. ✅**

**B. Supporting client-side and server-side encryption. ✅**

**C. Building analytics workloads during specified hours and when the application is not active. ✅**

D. Caching data to reduce the pressure on the backend database

E. Scaling globally to support petabytes of data and tens of millions of requests per minute

F. Creating a secondary replica of the cluster by using the AWS Management Console

**Question 484**

A company provides an API interface to customers so the customers can retrieve their financial information. Еhe company expects a larger number of requests during peak usage times of the year.

The company requires the API to respond consistently with low latency to ensure customer satisfaction. The company needs to provide a compute host for the API.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Application Load Balancer and Amazon Elastic Container Service (Amazon ECS).

**B. Use Amazon API Gateway and AWS Lambda functions with provisioned concurrency. ✅**

C. Use an Application Load Balancer and an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.

D. Use Amazon API Gateway and AWS Lambda functions with reserved concurrency.

**Question 485**

A company wants to send all AWS Systems Manager Session Manager logs to an Amazon S3 bucket for archival purposes.

Which solution will meet this requirement with the MOST operational efficiency?

A. Enable S3 logging in the Systems Manager console. Choose an S3 bucket to send the session data to.

B. Install the Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Export the logs to an S3 bucket from the group for archival purposes.

C. Create a Systems Manager document to upload all server logs to a central S3 bucket. Use Amazon EventBridge to run the Systems Manager document against all servers that are in the account daily.

**D. Install an Amazon CloudWatch agent. Push all logs to a CloudWatch log group. Create a CloudWatch logs subscription that pushes any incoming log events to an Amazon Kinesis Data Firehose delivery stream. Set Amazon S3 as the destination. ✅**

**Question 486**

An application uses an Amazon RDS MySQL DB instance. The RDS database is becoming low on disk space. A solutions architect wants to increase the disk space without downtime.

Which solution meets these requirements with the LEAST amount of effort?

**A. Enable storage autoscaling in RDS. ✅**

B. Increase the RDS database instance size

C. Change the RDS database instance storage type to Provisioned IOPS

D. Back up the RDS database, increase the storage capacity, restore the database, and stop the previous instance

**Question 487**

A consulting company provides professional services to customers worldwide. The company provides solutions and tools for customers to expedite gathering and analyzing data on AWS. The company needs to centrally manage and deploy a common set of solutions and tools for customers to use for self-service purposes.

Which solution will meet these requirements?

A. Create AWS CloudFormation templates for the customers.

**B. Create AWS Service Catalog products for the customers. ✅**

C. Create AWS Systems Manager templates for the customers.

D. Create AWS Config items for the customers.

**Question 488**

A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically, is highly available, and requires minimum operational overhead.

A. Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.

B. Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.

**C. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage. ✅**

D. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.

**Question 489**

A company is designing a new web application that will run on Amazon EC2 Instances. The application will use Amazon DynamoDB for backend data storage. The application traffic will be unpredictable. The company expects that the application read and write throughput to the database will be moderate to high. The company needs to scale in response to application traffic.

Which DynamoDB table configuration will meet these requirements MOST cost-effectively?

A. Configure DynamoDB with provisioned read and write by using the DynamoDB Standard table class. Set DynamoDB auto scaling to a maximum defined capacity.

**B. Configure DynamoDB in on-demand mode by using the DynamoDB Standard table class. ✅**

C. Configure DynamoDB with provisioned read and write by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class. Set DynamoDB auto scaling to a maximum defined capacity.

D. Configure DynamoDB in on-demand mode by using the DynamoDB Standard Infrequent Access (DynamoDB Standard-IA) table class.

**Question 490**

A retail company has several businesses. The IT team for each business manages its own AWS account. Each team account is part of an organization in AWS Organizations. Each team monitors its product inventory levels in an Amazon DynamoDB table in the team's own AWS account.

The company is deploying a central inventory reporting application into a shared AWS account. The application must be able to read items from all the teams' DynamoDB tables.

Which authentication option will meet these requirements MOST securely?

A. Integrate DynamoDB with AWS Secrets Manager in the inventory application account. Configure the application to use the correct secret from Secrets Manager to authenticate and read the DynamoDB table. Schedule secret rotation for every 30 days.

B. In every business account, create an IAM user that has programmatic access. Configure the application to use the correct IAM user access key ID and secret access key to authenticate and read the DynamoDB table. Manually rotate IAM access keys every 30 days.

**C. In every business account, create an IAM role named BU\_ROLE with a policy that gives the role access to the DynamoDB table and a trust policy to trust a specific role in the inventory application account. In the inventory account, create a role named APP\_ROLE that allows access to the STS AssumeRole API operation. Configure the application to use APP\_ROLE and assume the cross-account role BU\_ROLE to read the DynamoDB table. ✅**

D. Integrate DynamoDB with AWS Certificate Manager (ACM). Generate identity certificates to authenticate DynamoDB. Configure the application to use the correct certificate to authenticate and read the DynamoDB table.

**Question 491**

A company runs container applications by using Amazon Elastic Kubernetes Service (Amazon EKS). The company's workload is not consistent throughout the day. The company wants Amazon EKS to scale in and out according to the workload.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use an AWS Lambda function to resize the EKS cluster.

**B. Use the Kubernetes Metrics Server to activate horizontal pod autoscaling. ✅**

**C. Use the Kubernetes Cluster Autoscaler to manage the number of nodes in the cluster. ✅**

D. Use Amazon API Gateway and connect it to Amazon EKS.

E. Use AWS App Mesh to observe network activity.

**Question 492**

A company runs a microservice-based serverless web application. The application must be able to retrieve data from multiple Amazon DynamoDB tables A solutions architect needs to give the application the ability to retrieve the data with no impact on the baseline performance of the application.

Which solution will meet these requirements in the MOST operationally efficient way?

**A. AWS AppSync pipeline resolvers. ✅**

B. Amazon CloudFront with Lambda@Edge functions

C. Edge-optimized Amazon API Gateway with AWS Lambda functions

D. Amazon Athena Federated Query with a DynamoDB connector

**Question 493**

A company wants to analyze and troubleshoot Access Denied errors and Unauthorized errors that are related to IAM permissions. The company has AWS CloudTrail turned on.

Which solution will meet these requirements with the LEAST effort?

A. Use AWS Glue and write custom scripts to query CloudTrail logs for the errors.

B. Use AWS Batch and write custom scripts to query CloudTrail logs for the errors.

**C. Search CloudTrail logs with Amazon Athena queries to identify the errors. ✅**

D. Search CloudTrail logs with Amazon QuickSight. Create a dashboard to identify the errors.

**Question 494**

A company wants to add its existing AWS usage cost to its operation cost dashboard. A solutions architect needs to recommend a solution that will give the company access to its usage cost programmatically. The company must be able to access cost data for the current year and forecast costs for the next 12 months.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Access usage cost-related data by using the AWS Cost Explorer API with pagination. ✅**

B. Access usage cost-related data by using downloadable AWS Cost Explorer report .csv files.

C. Configure AWS Budgets actions to send usage cost data to the company through FTP.

D. Create AWS Budgets reports for usage cost data. Send the data to the company through SMTP.

**Question 495**

A solutions architect is reviewing the resilience of an application. The solutions architect notices that a database administrator recently failed over the application's Amazon Aurora PostgreSQL database writer instance as part of a scaling exercise. The failover resulted in 3 minutes of downtime for the application.

Which solution will reduce the downtime for scaling exercises with the LEAST operational overhead?

A. Create more Aurora PostgreSQL read replicas in the cluster to handle the load during failover.

B. Set up a secondary Aurora PostgreSQL cluster in the same AWS Region. During failover, update the application to use the secondary cluster's writer endpoint.

C. Create an Amazon ElastiCache for Memcached cluster to handle the load during failover.

**D. Set up an Amazon RDS proxy for the database. Update the application to use the proxy endpoint. ✅**

---

**Question 496**

A regional subscription-based streaming service runs in a single AWS Region. The architecture consists of web servers and application servers on Amazon EC2 instances. The EC2 instances are in Auto Scaling groups behind Elastic Load Balancers. The architecture includes an Amazon Aurora global database cluster that extends across multiple Availability Zones.

The company wants to expand globally and to ensure that its application has minimal downtime.

Which solution will provide the MOST fault tolerance?

A. Extend the Auto Scaling groups for the web tier and the application tier to deploy instances in Availability Zones in a second Region. Use an Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.

B. Deploy the web tier and the application tier to a second Region. Add an Aurora PostgreSQL cross-Region Aurora Replica in the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed.

C. Deploy the web tier and the application tier to a second Region. Create an Aurora PostgreSQL database in the second Region. Use AWS Database Migration Service (AWS DMS) to replicate the primary database to the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region.

**D. Deploy the web tier and the application tier to a second Region. Use an Amazon Aurora global database to deploy the database in the primary Region and the second Region. Use Amazon Route 53 health checks with a failover routing policy to the second Region. Promote the secondary to primary as needed. ✅**

**Question 497**

A data analytics company wants to migrate its batch processing system to AWS. The company receives thousands of small data files periodically during the day through FTP. An on-premises batch job processes the data files overnight. However, the batch job takes hours to finish running.

The company wants the AWS solution to process incoming data files as soon as possible with minimal changes to the FTP clients that send the files. The solution must delete the incoming data files after the files have been processed successfully. Processing for each file needs to take 3-8 minutes.

Which solution will meet these requirements in the MOST operationally efficient way?

A. Use an Amazon EC2 instance that runs an FTP server to store incoming files as objects in Amazon S3 Glacier Flexible Retrieval. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the job to process the objects nightly from S3 Glacier Flexible Retrieval. Delete the objects after the job has processed the objects.

B. Use an Amazon EC2 instance that runs an FTP server to store incoming files on an Amazon Elastic Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use Amazon EventBridge rules to invoke the job to process the files nightly from the EBS volume. Delete the files after the job has processed the files.

C. Use AWS Transfer Family to create an FTP server to store incoming files on an Amazon Elastic Block Store (Amazon EBS) volume. Configure a job queue in AWS Batch. Use an Amazon S3 event notification when each file arrives to invoke the job in AWS Batch. Delete the files after the job has processed the files.

**D. Use AWS Transfer Family to create an FTP server to store incoming files in Amazon S3 Standard. Create an AWS Lambda function to process the files and to delete the files after they are processed. Use an S3 event notification to invoke the Lambda function when the files arrive. ✅**

**Question 498**

A company is migrating its workloads to AWS. The company has transactional and sensitive data in its databases. The company wants to use AWS Cloud solutions to increase security and reduce operational overhead for the databases.

Which solution will meet these requirements?

A. Migrate the databases to Amazon EC2. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.

**B. Migrate the databases to Amazon RDS. Configure encryption at rest. ✅**

C. Migrate the data to Amazon S3. Use Amazon Macie for data security and protection.

D. Migrate the database to Amazon RDS. Use Amazon CloudWatch Logs for data security and protection.

**Question 499**

A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.

Which solution will meet these requirements?

A. Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.

B. Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.

**C. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years. ✅**

D. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.

**Question 500**

A company has an online gaming application that has TCP and UDP multiplayer gaming capabilities. The company uses Amazon Route 53 to point the application traffic to multiple Network Load Balancers (NLBs) in different AWS Regions. The company needs to improve application performance and decrease latency for the online game in preparation for user growth.

Which solution will meet these requirements?

A. Add an Amazon CloudFront distribution in front of the NLBs. Increase the Cache-Control max-age parameter.

B. Replace the NLBs with Application Load Balancers (ALBs). Configure Route 53 to use latency-based routing.

**C. Add AWS Global Accelerator in front of the NLBs. Configure a Global Accelerator endpoint to use the correct listener ports. ✅**

D. Add an Amazon API Gateway endpoint behind the NLBs. Enable API caching. Override method caching for the different stages.

**Question 501**

A company needs to integrate with a third-party data feed. The data feed sends a webhook to notify an external service when new data is ready for consumption. A developer wrote an AWS Lambda function to retrieve data when the company receives a webhook callback. The developer must make the Lambda function available for the third party to call.

Which solution will meet these requirements with the MOST operational efficiency?

**A. Create a function URL for the Lambda function. Provide the Lambda function URL to the third party for the webhook. ✅**

B. Deploy an Application Load Balancer (ALB) in front of the Lambda function. Provide the ALB URL to the third party for the webhook.

C. Create an Amazon Simple Notification Service (Amazon SNS) topic. Attach the topic to the Lambda function. Provide the public hostname of the SNS topic to the third party for the webhook.

D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Attach the queue to the Lambda function. Provide the public hostname of the SQS queue to the third party for the webhook.

**Question 502**

A company has a workload in an AWS Region. Customers connect to and access the workload by using an Amazon API Gateway REST API. The company uses Amazon Route 53 as its DNS provider. The company wants to provide individual and secure URLs for all customers.

Which combination of steps will meet these requirements with the MOST operational efficiency? (Choose three.)

**A. Register the required domain in a registrar. Create a wildcard custom domain name in a Route 53 hosted zone and record in the zone that points to the API Gateway endpoint. ✅**

B. Request a wildcard certificate that matches the domains in AWS Certificate Manager (ACM) in a different Region.

C. Create hosted zones for each customer as required in Route 53\. Create zone records that point to the API Gateway endpoint.

**D. Request a wildcard certificate that matches the custom domain name in AWS Certificate Manager (ACM) in the same Region. ✅**

E. Create multiple API endpoints for each customer in API Gateway.

**F. Create a custom domain name in API Gateway for the REST API. Import the certificate from AWS Certificate Manager (ACM). ✅**

**Question 503**

A company stores data in Amazon S3. According to regulations, the data must not contain personally identifiable information (PII). The company recently discovered that S3 buckets have some objects that contain PII. The company needs to automatically detect PII in S3 buckets and to notify the company’s security team.

Which solution will meet these requirements?

**A. Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData event type from Macie findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team. ✅**

B. Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Notification Service (Amazon SNS) notification to the security team.

C. Use Amazon Macie. Create an Amazon EventBridge rule to filter the SensitiveData:S3Object/Personal event type from Macie findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.

D. Use Amazon GuardDuty. Create an Amazon EventBridge rule to filter the CRITICAL event type from GuardDuty findings and to send an Amazon Simple Queue Service (Amazon SQS) notification to the security team.

**Question 504**

A company wants to build a logging solution for its multiple AWS accounts. The company currently stores the logs from all accounts in a centralized account. The company has created an Amazon S3 bucket in the centralized account to store the VPC flow logs and AWS CloudTrail logs. All logs must be highly available for 30 days for frequent analysis, retained for an additional 60 days for backup purposes, and deleted 90 days after creation.

Which solution will meet these requirements MOST cost-effectively?

**A. Transition objects to the S3 Standard storage class 30 days after creation. Write an expiration action that directs Amazon S3 to delete objects after 90 days. ✅**

B. Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class 30 days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.

C. Transition objects to the S3 Glacier Flexible Retrieval storage class 30 days after creation. Write an expiration action that directs Amazon S3 to delete objects after 90 days.

D. Transition objects to the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class 30 days after creation. Move all objects to the S3 Glacier Flexible Retrieval storage class after 90 days. Write an expiration action that directs Amazon S3 to delete objects after 90 days.

**Question 505**

A company is building an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for its workloads. All secrets that are stored in Amazon EKS must be encrypted in the Kubernetes etcd key-value store.

Which solution will meet these requirements?

A. Create a new AWS Key Management Service (AWS KMS) key. Use AWS Secrets Manager to manage, rotate, and store all secrets in Amazon EKS.

**B. Create a new AWS Key Management Service (AWS KMS) key. Enable Amazon EKS KMS secrets encryption on the Amazon EKS cluster. ✅**

C. Create the Amazon EKS cluster with default options. Use the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver as an add-on.

D. Create a new AWS Key Management Service (AWS KMS) key with the alias/aws/ebs alias. Enable default Amazon Elastic Block Store (Amazon EBS) volume encryption for the account.

**Question 506**

A company wants to provide data scientists with near real-time read-only access to the company's production Amazon RDS for PostgreSQL database. The database is currently configured as a Single-AZ database. The data scientists use complex queries that will not affect the production database. The company needs a solution that is highly available.

Which solution will meet these requirements MOST cost-effectively?

A. Scale the existing production database in a maintenance window to provide enough power for the data scientists.

B. Change the setup from a Single-AZ to a Multi-AZ instance deployment with a larger secondary standby instance. Provide the data scientists access to the secondary instance.

**C. Change the setup from a Single-AZ to a Multi-AZ instance deployment. Provide two additional read replicas for the data scientists. ✅**

D. Change the setup from a Single-AZ to a Multi-AZ cluster deployment with two readable standby instances. Provide read endpoints to the data scientists.

**Question 507**

A company runs a three-tier web application in the AWS Cloud that operates across three Availability Zones. The application architecture has an Application Load Balancer, an Amazon EC2 web server that hosts user session states, and a MySQL database that runs on an EC2 instance. The company expects sudden increases in application traffic. The company wants to be able to scale to meet future application capacity demands and to ensure high availability across all three Availability Zones.

Which solution will meet these requirements?

**A. Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones. ✅**

B. Migrate the MySQL database to Amazon RDS for MySQL with a Multi-AZ DB cluster deployment. Use Amazon ElastiCache for Memcached with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.

C. Migrate the MySQL database to Amazon DynamoDB. Use DynamoDB Accelerator (DAX) to cache reads. Store the session data in DynamoDB. Migrate the web server to an Auto Scaling group that is in three Availability Zones.

D. Migrate the MySQL database to Amazon RDS for MySQL in a single Availability Zone. Use Amazon ElastiCache for Redis with high availability to store session data and to cache reads. Migrate the web server to an Auto Scaling group that is in three Availability Zones.

**Question 508**

A global video streaming company uses Amazon CloudFront as a content distribution network (CDN). The company wants to roll out content in a phased manner across multiple countries. The company needs to ensure that viewers who are outside the countries to which the company rolls out content are not able to view the content.

Which solution will meet these requirements?

**A. Add geographic restrictions to the content in CloudFront by using an allow list. Set up a custom error message. ✅**

B. Set up a new URL for restricted content. Authorize access by using a signed URL and cookies. Set up a custom error message.

C. Encrypt the data for the content that the company distributes. Set up a custom error message.

D. Create a new URL for restricted content. Set up a time-restricted access policy for signed URLs.

**Question 509**

A company wants to use the AWS Cloud to improve its on-premises disaster recovery (DR) configuration. The company's core production business application uses Microsoft SQL Server Standard, which runs on a virtual machine (VM). The application has a recovery point objective (RPO) of 30 seconds or fewer and a recovery time objective (RTO) of 60 minutes. The DR solution needs to minimize costs wherever possible.

A. Configure a multi-site active/active setup between the on-premises server and AWS by using Microsoft SQL Server Enterprise with Always On availability groups.

B. Configure a warm standby Amazon RDS for SQL Server database on AWS. Configure AWS Database Migration Service (AWS DMS) to use change data capture (CDC).

**C. Use AWS Elastic Disaster Recovery configured to replicate disk changes to AWS as a pilot light. ✅**

D. Use third-party backup software to capture backups every night. Store a secondary set of backups in Amazon S3.

**Question 510**

A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.

What should a solutions architect do to meet these requirements?

A. Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.

B. Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.

**C. Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server. ✅**

D. Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.

**Question 511**

A company has an on-premises server that uses an Oracle database to process and store customer information. The company wants to use an AWS database service to achieve higher availability and to improve application performance. The company also wants to offload reporting from its primary database system.

Which solution will meet these requirements in the MOST operationally efficient way?

A. Use AWS Database Migration Service (AWS DMS) to create an Amazon RDS DB instance in multiple AWS Regions. Point the reporting functions toward a separate DB instance from the primary DB instance.

B. Use Amazon RDS in a Single-AZ deployment to create an Oracle database. Create a read replica in the same zone as the primary DB instance. Direct the reporting functions to the read replica.

**C. Use Amazon RDS deployed in a Multi-AZ cluster deployment to create an Oracle database. Direct the reporting functions to use the reader instance in the cluster deployment. ✅**

D. Use Amazon RDS deployed in a Multi-AZ instance deployment to create an Amazon Aurora database. Direct the reporting functions to the reader instances.

**Question 512**

A company wants to build a web application on AWS. Client access requests to the website are not predictable and can be idle for a long time. Only customers who have paid a subscription fee can have the ability to sign in and use the web application.

Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)

**A. Create an AWS Lambda function to retrieve user information from Amazon DynamoDB. Create an Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function. ✅**

B. Create an Amazon Elastic Container Service (Amazon ECS) service behind an Application Load Balancer to retrieve user information from Amazon RDS. Create an Amazon API Gateway endpoint to accept RESTful APIs. Send the API calls to the Lambda function.

**C. Create an Amazon Cognito user pool to authenticate users. ✅**

D. Create an Amazon Cognito identity pool to authenticate users.

**E. Use AWS Amplify to serve the frontend web content with HTML, CSS, and JS. Use an integrated Amazon CloudFront configuration. ✅**

F. Use Amazon S3 static web hosting with PHP, CSS, and JS. Use Amazon CloudFront to serve the frontend web content.

**Question 513**

A media company uses an Amazon CloudFront distribution to deliver content over the internet. The company wants only premium customers to have access to the media streams and file content. The company stores all content in an Amazon S3 bucket. The company also delivers content on demand to customers for a specific purpose, such as movie rentals or music downloads.

Which solution will meet these requirements?

A. Generate and provide S3 signed cookies to premium customers.

**B. Generate and provide CloudFront signed URLs to premium customers. ✅**

C. Use origin access control (OAC) to limit the access of non-premium customers.

D. Generate and activate field-level encryption to block non-premium customers.

**Question 514**

A company runs Amazon EC2 instances in multiple AWS accounts that are individually billed. The company recently purchased a Savings Plan. Because of changes in the company’s business requirements, the company has decommissioned a large number of EC2 instances. The company wants to use its Savings Plan discounts on its other AWS accounts.

Which combination of steps will meet these requirements? (Choose two.)

**A. From the AWS Account Management Console of the management account, turn on discount sharing from the billing preferences section. ✅**

B. From the AWS Account Management Console of the account that purchased the existing Savings Plan, turn on discount sharing from the billing preferences section. Include all accounts.

C. From the AWS Organizations management account, use AWS Resource Access Manager (AWS RAM) to share the Savings Plan with other accounts.

**D. Create an organization in AWS Organizations in a new payer account. Invite the other AWS accounts to join the organization from the management account. ✅**

E. Create an organization in AWS Organizations in the existing AWS account with the existing EC2 instances and Savings Plan. Invite the other AWS accounts to join the organization from the management account.

**Question 515**

A retail company uses a regional Amazon API Gateway API for its public REST APIs. The API Gateway endpoint is a custom domain name that points to an Amazon Route 53 alias record. A solutions architect needs to create a solution that has minimal effects on customers and minimal data loss to release the new version of APIs.

Which solution will meet these requirements?

**A. Create a canary release deployment stage for API Gateway. Deploy the latest API version. Point an appropriate percentage of traffic to the canary stage. After API verification, promote the canary stage to the production stage. ✅**

B. Create a new API Gateway endpoint with a new version of the API in OpenAPI YAML file format. Use the import-to-update operation in merge mode into the API in API Gateway. Deploy the new version of the API to the production stage.

C. Create a new API Gateway endpoint with a new version of the API in OpenAPI JSON file format. Use the import-to-update operation in overwrite mode into the API in API Gateway. Deploy the new version of the API to the production stage.

D. Create a new API Gateway endpoint with new versions of the API definitions. Create a custom domain name for the new API Gateway API. Point the Route 53 alias record to the new API Gateway API custom domain name.

---

**Question 516**

A company wants to direct its users to a backup static error page if the company's primary website is unavailable. The primary website's DNS records are hosted in Amazon Route 53\. The domain is pointing to an Application Load Balancer (ALB). The company needs a solution that minimizes changes and infrastructure overhead.

Which solution will meet these requirements?

A. Update the Route 53 records to use a latency routing policy. Add a static error page that is hosted in an Amazon S3 bucket to the records so that the traffic is sent to the most responsive endpoints.  
**B. Set up a Route 53 active-passive failover configuration. Direct traffic to a static error page that is hosted in an Amazon S3 bucket when Route 53 health checks determine that the ALB endpoint is unhealthy. ✅**  
C. Set up a Route 53 active-active configuration with the ALB and an Amazon EC2 instance that hosts a static error page as endpoints. Configure Route 53 to send requests to the instance only if the health checks fail for the ALB.  
D. Update the Route 53 records to use a multivalue answer routing policy. Create a health check. Direct traffic to the website if the health check passes. Direct traffic to a static error page that is hosted in Amazon S3 if the health check does not pass.

---

**Question 517**

A recent analysis of a company's IT expenses highlights the need to reduce backup costs. The company's chief information officer wants to simplify the on-premises backup infrastructure and reduce costs by eliminating the use of physical backup tapes. The company must preserve the existing investment in the on-premises backup applications and workflows.

What should a solutions architect recommend?

A. Set up AWS Storage Gateway to connect with the backup applications using the NFS interface.  
B. Set up an Amazon EFS file system that connects with the backup applications using the NFS interface.  
C. Set up an Amazon EFS file system that connects with the backup applications using the iSCSI interface.  
**D. Set up AWS Storage Gateway to connect with the backup applications using the iSCSI-virtual tape library (VTL) interface. ✅**

---

**Question 518**

A company has data collection sensors at different locations. The data collection sensors stream a high volume of data to the company. The company wants to design a platform on AWS to ingest and process high-volume streaming data. The solution must be scalable and support data collection in near real time. The company must store the data in Amazon S3 for future reporting.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Use Amazon Kinesis Data Firehose to deliver streaming data to Amazon S3. ✅**  
B. Use AWS Glue to deliver streaming data to Amazon S3.  
C. Use AWS Lambda to deliver streaming data and store the data to Amazon S3.  
D. Use AWS Database Migration Service (AWS DMS) to deliver streaming data to Amazon S3.

---

**Question 519**

A company has separate AWS accounts for its finance, data analytics, and development departments. Because of costs and security concerns, the company wants to control which services each AWS account can use.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Systems Manager templates to control which AWS services each department can use.  
**B. Create organization units (OUs) for each department in AWS Organizations. Attach service control policies (SCPs) to the OUs. ✅**  
C. Use AWS CloudFormation to automatically provision only the AWS services that each department can use.  
D. Set up a list of products in AWS Service Catalog in the AWS accounts to manage and control the usage of specific AWS services.

---

**Question 520**

A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead.

What should the solutions architect do to meet these requirements?

A. Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance.  
**B. Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway. ✅**  
C. Configure an internet gateway and attach it to the VPModify the private subnet route table to direct internet-bound traffic to the internet gateway.  
D. Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway.

---

**Question 521**

A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.

Which solution will meet these requirements?

A. Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.  
B. Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.  
**C. Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances. ✅**  
D. Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.

---

**Question 522**

A company is using AWS Key Management Service (AWS KMS) keys to encrypt AWS Lambda environment variables. A solutions architect needs to ensure that the required permissions are in place to decrypt and use the environment variables.

Which steps must the solutions architect take to implement the correct permissions? (Choose two.)

A. Add AWS KMS permissions in the Lambda resource policy.  
**B. Add AWS KMS permissions in the Lambda execution role. ✅**  
C. Add AWS KMS permissions in the Lambda function policy.  
**D. Allow the Lambda execution role in the AWS KMS key policy. ✅**  
E. Allow the Lambda resource policy in the AWS KMS key policy.

---

**Question 523**

A company has a financial application that produces reports. The reports average 50 KB in size and are stored in Amazon S3. The reports are frequently accessed during the first week after production and must be stored for several years. The reports must be retrievable within 6 hours.

Which solution meets these requirements MOST cost-effectively?

**A. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier after 7 days. ✅**  
B. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days.  
C. Use S3 Intelligent-Tiering. Configure S3 Intelligent-Tiering to transition the reports to S3 Standard-Infrequent Access (S3 Standard-IA) and S3 Glacier.  
D. Use S3 Standard. Use an S3 Lifecycle rule to transition the reports to S3 Glacier Deep Archive after 7 days.

---

**Question 524**

A company needs to optimize the cost of its Amazon EC2 instances. The company also needs to change the type and family of its EC2 instances every 2-3 months.

What should the company do to meet these requirements?

A. Purchase Partial Upfront Reserved Instances for a 3-year term.  
**B. Purchase a No Upfront Compute Savings Plan for a 1-year term. ✅**  
C. Purchase All Upfront Reserved Instances for a 1-year term.  
D. Purchase an All Upfront EC2 Instance Savings Plan for a 1-year term.

---

**Question 525**

A solutions architect needs to review a company's Amazon S3 buckets to discover personally identifiable information (PII). The company stores the PII data in the us-east-1 Region and us-west-2 Region.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Configure Amazon Macie in each Region. Create a job to analyze the data that is in Amazon S3. ✅**  
B. Configure AWS Security Hub for all Regions. Create an AWS Config rule to analyze the data that is in Amazon S3.  
C. Configure Amazon Inspector to analyze the data that is in Amazon S3.  
D. Configure Amazon GuardDuty to analyze the data that is in Amazon S3.

---

**Question 526**

A company's SAP application has a backend SQL Server database in an on-premises environment. The company wants to migrate its on-premises application and database server to AWS. The company needs an instance type that meets the high demands of its SAP database. On-premises performance data shows that both the SAP application and the database have high memory utilization.

Which solution will meet these requirements?

A. Use the compute optimized instance family for the application. Use the memory optimized instance family for the database.  
B. Use the storage optimized instance family for both the application and the database.  
**C. Use the memory optimized instance family for both the application and the database. ✅**  
D. Use the high performance computing (HPC) optimized instance family for the application. Use the memory optimized instance family for the database.

---

**Question 527**

A company runs an application in a VPC with public and private subnets. The VPC extends across multiple Availability Zones. The application runs on Amazon EC2 instances in private subnets. The application uses an Amazon Simple Queue Service (Amazon SQS) queue.

A solutions architect needs to design a secure solution to establish a connection between the EC2 instances and the SQS queue.

Which solution will meet these requirements?

**A. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the private subnets. Add to the endpoint a security group that has an inbound access rule that allows traffic from the EC2 instances that are in the private subnets. ✅**  
B. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach to the interface endpoint a VPC endpoint policy that allows access from the EC2 instances that are in the private subnets.  
C. Implement an interface VPC endpoint for Amazon SQS. Configure the endpoint to use the public subnets. Attach an Amazon SQS access policy to the interface VPC endpoint that allows requests from only a specified VPC endpoint.  
D. Implement a gateway endpoint for Amazon SQS. Add a NAT gateway to the private subnets. Attach an IAM role to the EC2 instances that allows access to the SQS queue.

---

**Question 528**

A solutions architect is using an AWS CloudFormation template to deploy a three-tier web application. The web application consists of a web tier and an application tier that stores and retrieves user data in Amazon DynamoDB tables. The web and application tiers are hosted on Amazon EC2 instances, and the database tier is not publicly accessible. The application EC2 instances need to access the DynamoDB tables without exposing API credentials in the template.

What should the solutions architect do to meet these requirements?

A. Create an IAM role to read the DynamoDB tables. Associate the role with the application instances by referencing an instance profile.  
**B. Create an IAM role that has the required permissions to read and write from the DynamoDB tables. Add the role to the EC2 instance profile, and associate the instance profile with the application instances. ✅**  
C. Use the parameter section in the AWS CloudFormation template to have the user input access and secret keys from an already-created IAM user that has the required permissions to read and write from the DynamoDB tables.  
D. Create an IAM user in the AWS CloudFormation template that has the required permissions to read and write from the DynamoDB tables. Use the GetAtt function to retrieve the access and secret keys, and pass them to the application instances through the user data.

---

**Question 529**

A solutions architect manages an analytics application. The application stores large amounts of semistructured data in an Amazon S3 bucket. The solutions architect wants to use parallel data processing to process the data more quickly. The solutions architect also wants to use information that is stored in an Amazon Redshift database to enrich the data.

Which solution will meet these requirements?

A. Use Amazon Athena to process the S3 data. Use AWS Glue with the Amazon Redshift data to enrich the S3 data.  
**B. Use Amazon EMR to process the S3 data. Use Amazon EMR with the Amazon Redshift data to enrich the S3 data. ✅**  
C. Use Amazon EMR to process the S3 data. Use Amazon Kinesis Data Streams to move the S3 data into Amazon Redshift so that the data can be enriched.  
D. Use AWS Glue to process the S3 data. Use AWS Lake Formation with the Amazon Redshift data to enrich the S3 data.

---

**Question 530**

A company has two VPCs that are located in the us-west-2 Region within the same AWS account. The company needs to allow network traffic between these VPCs. Approximately 500 GB of data transfer will occur between the VPCs each month.

What is the MOST cost-effective solution to connect these VPCs?

A. Implement AWS Transit Gateway to connect the VPCs. Update the route tables of each VPC to use the transit gateway for inter-VPC communication.  
B. Implement an AWS Site-to-Site VPN tunnel between the VPCs. Update the route tables of each VPC to use the VPN tunnel for inter-VPC communication.  
**C. Set up a VPC peering connection between the VPCs. Update the route tables of each VPC to use the VPC peering connection for inter-VPC communication. ✅**  
D. Set up a 1 GB AWS Direct Connect connection between the VPCs. Update the route tables of each VPC to use the Direct Connect connection for inter-VPC communication.

---

**Question 531**

A company hosts multiple applications on AWS for different product lines. The applications use different compute resources, including Amazon EC2 instances and Application Load Balancers. The applications run in different AWS accounts under the same organization in AWS Organizations across multiple AWS Regions. Teams for each product line have tagged each compute resource in the individual accounts.

The company wants more details about the cost for each product line from the consolidated billing feature in Organizations.

Which combination of steps will meet these requirements? (Choose two.)

A. Select a specific AWS generated tag in the AWS Billing console.  
**B. Select a specific user-defined tag in the AWS Billing console. ✅**  
C. Select a specific user-defined tag in the AWS Resource Groups console.  
**D. Activate the selected tag from each AWS account. ✅**  
E. Activate the selected tag from the Organizations management account.

---

**Question 532**

A company has registered its domain name with Amazon Route 53\. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.

Which solution will meet these requirements?

A. Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).  
B. Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.  
**C. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint. ✅**  
D. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.

---

**Question 533**

A company's solutions architect is designing an AWS multi-account solution that uses AWS Organizations. The solutions architect has organized the company's accounts into organizational units (OUs).

The solutions architect needs a solution that will identify any changes to the OU hierarchy. The solution also needs to notify the company's operations team of any changes.

Which solution will meet these requirements with the LEAST operational overhead?

A. Provision the AWS accounts by using AWS Control Tower. Use account drift notifications to identify the changes to the OU hierarchy.  
B. Provision the AWS accounts by using AWS Control Tower. Use AWS Config aggregated rules to identify the changes to the OU hierarchy.  
**C. Use AWS Service Catalog to create accounts in Organizations. Use an AWS CloudTrail organization trail to identify the changes to the OU hierarchy. ✅**  
D. Use AWS CloudFormation templates to create accounts in Organizations. Use the drift detection operation on a stack to identify the changes to the OU hierarchy.

---

**Question 534**

A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the response time of the web application. The solutions architect determines that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table.

Which solution will meet these requirements with the LEAST amount of operational overhead?

**A. Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX. ✅**  
B. Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis.  
C. Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached.  
D. Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache.

---

**Question 535**

A solutions architect needs to ensure that API calls to Amazon DynamoDB from Amazon EC2 instances in a VPC do not travel across the internet.

Which combination of steps should the solutions architect take to meet this requirement? (Choose two.)

**A. Create a route table entry for the endpoint. ✅**  
**B. Create a gateway endpoint for DynamoDB. ✅**  
C. Create an interface endpoint for Amazon EC2.  
D. Create an elastic network interface for the endpoint in each of the subnets of the VPC.  
E. Create a security group entry in the endpoint's security group to provide access.

---

**Question 536**

A company runs its applications on both Amazon Elastic Kubernetes Service (Amazon EKS) clusters and on-premises Kubernetes clusters. The company wants to view all clusters and workloads from a central location.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon CloudWatch Container Insights to collect and group the cluster information.

**B. Use Amazon EKS Connector to register and connect all Kubernetes clusters. ✅**

C. Use AWS Systems Manager to collect and view the cluster information.

D. Use Amazon EKS Anywhere as the primary cluster to view the other clusters with native Kubernetes commands.

---

**Question 537**

A company is building an ecommerce application and needs to store sensitive customer information. The company needs to give customers the ability to complete purchase transactions on the website. The company also needs to ensure that sensitive customer data is protected, even from database administrators.

Which solution meets these requirements?

A. Store sensitive data in an Amazon Elastic Block Store (Amazon EBS) volume. Use EBS encryption to encrypt the data. Use an IAM instance role to restrict access.

**B. Store sensitive data in Amazon RDS for MySQL. Use AWS Key Management Service (AWS KMS) client-side encryption to encrypt the data. ✅**

C. Store sensitive data in Amazon S3. Use AWS Key Management Service (AWS KMS) server-side encryption to encrypt the data. Use S3 bucket policies to restrict access.

D. Store sensitive data in Amazon FSx for Windows Server. Mount the file share on application servers. Use Windows file permissions to restrict access.

---

**Question 538**

A company has an on-premises MySQL database that handles transactional data. The company is migrating the database to the AWS Cloud. The migrated database must maintain compatibility with the company's applications that use the database. The migrated database also must scale automatically during periods of increased demand.

Which migration solution will meet these requirements?

A. Use native MySQL tools to migrate the database to Amazon RDS for MySQL. Configure elastic storage scaling.

B. Migrate the database to Amazon Redshift by using the mysqldump utility. Turn on Auto Scaling for the Amazon Redshift cluster.

**C. Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon Aurora. Turn on Aurora Auto Scaling. ✅**

D. Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon DynamoDB. Configure an Auto Scaling policy.

---

**Question 539**

A company runs multiple Amazon EC2 Linux instances in a VPC across two Availability Zones. The instances host applications that use a hierarchical directory structure. The applications need to read and write rapidly and concurrently to shared storage.

What should a solutions architect do to meet these requirements?

A. Create an Amazon S3 bucket. Allow access from all the EC2 instances in the VPC.

**B. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system from each EC2 instance. ✅**

C. Create a file system on a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume. Attach the EBS volume to all the EC2 instances.

D. Create file systems on Amazon Elastic Block Store (Amazon EBS) volumes that are attached to each EC2 instance. Synchronize the EBS volumes across the different EC2 instances.

---

**Question 540**

A solutions architect is designing a workload that will store hourly energy consumption by business tenants in a building. The sensors will feed a database through HTTP requests that will add up usage for each tenant. The solutions architect must use managed services when possible. The workload will receive more features in the future as the solutions architect adds independent components.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in an Amazon DynamoDB table. ✅**

B. Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon S3 bucket to store the processed data.

C. Use Amazon API Gateway with AWS Lambda functions to receive the data from the sensors, process the data, and store the data in a Microsoft SQL Server Express database on an Amazon EC2 instance.

D. Use an Elastic Load Balancer that is supported by an Auto Scaling group of Amazon EC2 instances to receive and process the data from the sensors. Use an Amazon Elastic File System (Amazon EFS) shared file system to store the processed data.

---

**Question 541**

A solutions architect is designing the storage architecture for a new web application used for storing and viewing engineering drawings. All application components will be deployed on the AWS infrastructure.

The application design must support caching to minimize the amount of time that users wait for the engineering drawings to load. The application must be able to store petabytes of data.

Which combination of storage and caching should the solutions architect use?

**A. Amazon S3 with Amazon CloudFront. ✅**

B. Amazon S3 Glacier with Amazon ElastiCache

C. Amazon Elastic Block Store (Amazon EBS) volumes with Amazon CloudFront

D. AWS Storage Gateway with Amazon ElastiCache

---

**Question 542**

An Amazon EventBridge rule targets a third-party API. The third-party API has not received any incoming traffic. A solutions architect needs to determine whether the rule conditions are being met and if the rule's target is being invoked.

Which solution will meet these requirements?

**A. Check for metrics in Amazon CloudWatch in the namespace for AWS/Events. ✅**

B. Review events in the Amazon Simple Queue Service (Amazon SQS) dead-letter queue.

C. Check for the events in Amazon CloudWatch Logs.

D. Check the trails in AWS CloudTrail for the EventBridge events.

---

**Question 543**

A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.

What should a solutions architect do to meet these requirements?

A. Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.

**B. Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions. ✅**

C. Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.

D. Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.

---

**Question 544**

A company has a large workload that runs every Friday evening. The workload runs on Amazon EC2 instances that are in two Availability Zones in the us-east-1 Region. Normally, the company must run no more than two instances at all times. However, the company wants to scale up to six instances each Friday to handle a regularly repeating increased workload.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a reminder in Amazon EventBridge to scale the instances.

**B. Create an Auto Scaling group that has a scheduled action. ✅**

C. Create an Auto Scaling group that uses manual scaling.

D. Create an Auto Scaling group that uses automatic scaling.

---

**Question 545**

A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires TLSv1.3 on the API endpoints. The company also requires a specific public third-party certificate authority (CA) to sign the TLS certificate.

Which solution will meet these requirements?

**A. Use a local machine to create a certificate that is signed by the third-party CA. Import the certificate into AWS Certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate. ✅**

B. Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate.

C. Use AWS Certificate Manager (ACM) to create a certificate that is signed by the third-party CA. Import the certificate into AWS Certificate Manager (ACM). Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.

D. Create a certificate in AWS Certificate Manager (ACM) that is signed by the third-party CA. Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate.

---

**Question 546**

A company runs an application on AWS. The application receives inconsistent amounts of usage. The application uses AWS Direct Connect to connect to an on-premises MySQL-compatible database. The on-premises database consistently uses a minimum of 2 GiB of memory.

The company wants to migrate the on-premises database to a managed AWS service. The company wants to use auto scaling capabilities to manage unexpected workload increases.

Which solution will meet these requirements with the LEAST administrative overhead?

A. Provision an Amazon DynamoDB database with default read and write capacity settings.

B. Provision an Amazon Aurora database with a minimum capacity of 1 Aurora capacity unit (ACU).

**C. Provision an Amazon Aurora Serverless v2 database with a minimum capacity of 1 Aurora capacity unit (ACU). ✅**

D. Provision an Amazon RDS for MySQL database with 2 GiB of memory.

---

**Question 547**

A company wants to use an event-driven programming model with AWS Lambda. The company wants to reduce startup latency for Lambda functions that run on Java 11\. The company does not have strict latency requirements for the applications. The company wants to reduce cold starts and outlier latencies when a function scales up.

Which solution will meet these requirements MOST cost-effectively?

A. Configure Lambda provisioned concurrency.

B. Increase the timeout of the Lambda functions.

C. Increase the memory of the Lambda functions.

**D. Configure Lambda SnapStart. ✅**

---

**Question 548**

A financial services company launched a new application that uses an Amazon RDS for MySQL database. The company uses the application to track stock market trends. The company needs to operate the application for only 2 hours at the end of each week. The company needs to optimize the cost of running the database.

Which solution will meet these requirements MOST cost-effectively?

**A. Migrate the existing RDS for MySQL database to an Aurora Serverless v2 MySQL database cluster. ✅**

B. Migrate the existing RDS for MySQL database to an Aurora MySQL database cluster.

C. Migrate the existing RDS for MySQL database to an Amazon EC2 instance that runs MySQL. Purchase an instance reservation for the EC2 instance.

D. Migrate the existing RDS for MySQL database to an Amazon Elastic Container Service (Amazon ECS) cluster that uses MySQL container images to run tasks.

---

**Question 549**

A company deploys its applications on Amazon Elastic Kubernetes Service (Amazon EKS) behind an Application Load Balancer in an AWS Region. The application needs to store data in a PostgreSQL database engine. The company wants the data in the database to be highly available. The company also needs increased capacity for read workloads.

Which solution will meet these requirements with the MOST operational efficiency?

A. Create an Amazon DynamoDB database table configured with global tables.

B. Create an Amazon RDS database with Multi-AZ deployments.

**C. Create an Amazon RDS database with Multi-AZ DB cluster deployment. ✅**

D. Create an Amazon RDS database configured with cross-Region read replicas.

---

**Question 550**

A company is building a RESTful serverless web application on AWS by using Amazon API Gateway and AWS Lambda. The users of this web application will be geographically distributed, and the company wants to reduce the latency of API requests to these users.

Which type of endpoint should a solutions architect use to meet these requirements?

A. Private endpoint

B. Regional endpoint

C. Interface VPC endpoint

**D. Edge-optimized endpoint. ✅**

---

**Question 551**

A company uses an Amazon CloudFront distribution to serve content pages for its website. The company needs to ensure that clients use a TLS certificate when accessing the company's website. The company wants to automate the creation and renewal of the TLS certificates.

Which solution will meet these requirements with the MOST operational efficiency?

A. Use a CloudFront security policy to create a certificate.

B. Use a CloudFront origin access control (OAC) to create a certificate.

**C. Use AWS Certificate Manager (ACM) to create a certificate. Use DNS validation for the domain. ✅**

D. Use AWS Certificate Manager (ACM) to create a certificate. Use email validation for the domain.

---

**Question 552**

A company deployed a serverless application that uses Amazon DynamoDB as a database layer. The application has experienced a large increase in users. The company wants to improve database response time from milliseconds to microseconds and to cache requests to the database.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Use DynamoDB Accelerator (DAX). ✅**

B. Migrate the database to Amazon Redshift.

C. Migrate the database to Amazon RDS.

D. Use Amazon ElastiCache for Redis.

---

**Question 553**

A company runs an application that uses Amazon RDS for PostgreSQL. The application receives traffic only on weekdays during business hours. The company wants to optimize costs and reduce operational overhead based on this usage.

Which solution will meet these requirements?

**A. Use the Instance Scheduler on AWS to configure start and stop schedules. ✅**

B. Turn off automatic backups. Create weekly manual snapshots of the database.

C. Create a custom AWS Lambda function to start and stop the database based on minimum CPU utilization.

D. Purchase All Upfront reserved DB instances.

---

**Question 554**

A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.

What should a solutions architect do to meet these requirements?

A. Use Amazon EC2 instances, and install Docker on the instances.

B. Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.

**C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. ✅**

D. Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).

---

**Question 555**

A company uses locally attached storage to run a latency-sensitive application on premises. The company is using a lift and shift method to move the application to the AWS Cloud. The company does not want to change the application architecture.

Which solution will meet these requirements MOST cost-effectively?

A. Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for Lustre file system to run the application.

B. Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP2 volume to run the application.

C. Configure an Auto Scaling group with an Amazon EC2 instance. Use an Amazon FSx for OpenZFS file system to run the application.

**D. Host the application on an Amazon EC2 instance. Use an Amazon Elastic Block Store (Amazon EBS) GP3 volume to run the application. ✅**

---

**Question 556**

A company runs a stateful production application on Amazon EC2 instances. The application requires at least two EC2 instances to always be running.

A solutions architect needs to design a highly available and fault-tolerant architecture for the application. The solutions architect creates an Auto Scaling group of EC2 instances.

Which set of additional steps should the solutions architect take to meet these requirements?

A. Set the Auto Scaling group's minimum capacity to two. Deploy one On-Demand Instance in one Availability Zone and one On-Demand Instance in a second Availability Zone.

**B. Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability Zone and two On-Demand Instances in a second Availability Zone. ✅**

C. Set the Auto Scaling group's minimum capacity to two. Deploy four Spot Instances in one Availability Zone.

D. Set the Auto Scaling group's minimum capacity to four. Deploy two On-Demand Instances in one Availability Zone and two Spot Instances in a second Availability Zone.

---

**Question 557**

An ecommerce company uses Amazon Route 53 as its DNS provider. The company hosts its website on premises and in the AWS Cloud. The company's on-premises data center is near the us-west-1 Region. The company uses the eu-central-1 Region to host the website. The company wants to minimize load time for the website as much as possible.

Which solution will meet these requirements?

**A. Set up a geolocation routing policy. Send the traffic that is near us-west-1 to the on-premises data center. Send the traffic that is near eu-central-1 to eu-central-1. ✅**

B. Set up a simple routing policy that routes all traffic that is near eu-central-1 to eu-central-1 and routes all traffic that is near the on-premises datacenter to the on-premises data center.

C. Set up a latency routing policy. Associate the policy with us-west-1.

D. Set up a weighted routing policy. Split the traffic evenly between eu-central-1 and the on-premises data center.

---

**Question 558**

A company has 5 PB of archived data on physical tapes. The company needs to preserve the data on the tapes for another 10 years for compliance purposes. The company wants to migrate to AWS in the next 6 months. The data center that stores the tapes has a 1 Gbps uplink internet connectivity.

Which solution will meet these requirements MOST cost-effectively?

A. Read the data from the tapes on premises. Stage the data in a local NFS storage. Use AWS DataSync to migrate the data to Amazon S3 Glacier Flexible Retrieval.

B. Use an on-premises backup application to read the data from the tapes and to write directly to Amazon S3 Glacier Deep Archive.

C. Order multiple AWS Snowball devices that have Tape Gateway. Copy the physical tapes to virtual tapes in Snowball. Ship the Snowball devices to AWS. Create a lifecycle policy to move the tapes to Amazon S3 Glacier Deep Archive.

**D. Configure an on-premises Tape Gateway. Create virtual tapes in the AWS Cloud. Use backup software to copy the physical tape to the virtual tape. ✅**

---

**Question 559**

A company is deploying an application that processes large quantities of data in parallel. The company plans to use Amazon EC2 instances for the workload. The network architecture must be configurable to prevent groups of nodes from sharing the same underlying hardware.

Which networking solution meets these requirements?

**A. Run the EC2 instances in a spread placement group. ✅**

B. Group the EC2 instances in separate accounts.

C. Configure the EC2 instances with dedicated tenancy.

D. Configure the EC2 instances with shared tenancy.

---

**Question 560**

A solutions architect is designing a disaster recovery (DR) strategy to provide Amazon EC2 capacity in a failover AWS Region. Business requirements state that the DR strategy must meet capacity in the failover Region.

Which solution will meet these requirements?

A. Purchase On-Demand Instances in the failover Region.

B. Purchase an EC2 Savings Plan in the failover Region.

C. Purchase regional Reserved Instances in the failover Region.

**D. Purchase a Capacity Reservation in the failover Region. ✅**

---

**Question 561**

A company has five organizational units (OUs) as part of its organization in AWS Organizations. Each OU correlates to the five businesses that the company owns. The company's research and development (R\&D) business is separating from the company and will need its own organization. A solutions architect creates a separate new management account for this purpose.

What should the solutions architect do next in the new management account?

A. Have the R\&D AWS account be part of both organizations during the transition.

**B. Invite the R\&D AWS account to be part of the new organization after the R\&D AWS account has left the prior organization. ✅**

C. Create a new R\&D AWS account in the new organization. Migrate resources from the prior R\&D AWS account to the new R\&D AWS account.

D. Have the R\&D AWS account join the new organization. Make the new management account a member of the prior organization.

---

**Question 562**

A company is designing a solution to capture customer activity in different web applications to process analytics and make predictions. Customer activity in the web applications is unpredictable and can increase suddenly. The company requires a solution that integrates with other web applications. The solution must include an authorization step for security purposes.

Which solution will meet these requirements?

A. Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives in an Amazon Elastic File System (Amazon EFS) file system. Authorization is resolved at the GWLB.

B. Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis data stream that stores the information that the company receives in an Amazon S3 bucket. Use an AWS Lambda function to resolve authorization.

**C. Configure an Amazon API Gateway endpoint in front of an Amazon Kinesis Data Firehose that stores the information that the company receives in an Amazon S3 bucket. Use an API Gateway Lambda authorizer to resolve authorization. ✅**

D. Configure a Gateway Load Balancer (GWLB) in front of an Amazon Elastic Container Service (Amazon ECS) container instance that stores the information that the company receives on an Amazon Elastic File System (Amazon EFS) file system. Use an AWS Lambda function to resolve authorization.

---

**Question 563**

An ecommerce company wants a disaster recovery solution for its Amazon RDS DB instances that run Microsoft SQL Server Enterprise Edition. The company's current recovery point objective (RPO) and recovery time objective (RTO) are 24 hours.

Which solution will meet these requirements MOST cost-effectively?

A. Create a cross-Region read replica and promote the read replica to the primary instance.

B. Use AWS Database Migration Service (AWS DMS) to create RDS cross-Region replication.

C. Use cross-Region replication every 24 hours to copy native backups to an Amazon S3 bucket.

**D. Copy automatic snapshots to another Region every 24 hours. ✅**

---

**Question 564**

A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer that has sticky sessions enabled. The web server currently hosts the user session state. The company wants to ensure high availability and avoid user session state loss in the event of a web server outage.

Which solution will meet these requirements?

A. Use an Amazon ElastiCache for Memcached instance to store the session data. Update the application to use ElastiCache for Memcached to store the session state.

**B. Use Amazon ElastiCache for Redis to store the session state. Update the application to use Amazon ElastiCache for Redis to store the session state. ✅**

C. Use an AWS Storage Gateway cached volume to store session data. Update the application to use AWS Storage Gateway cached volume to store the session state.

D. Use Amazon RDS to store the session state. Update the application to use Amazon RDS to store the session state.

---

**Question 565**

A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.

What should a solutions architect do to transmit and process the clickstream data?

A. Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.

B. Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.

C. Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.

**D. Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis. ✅**

---

**Question 566**

A company migrated a MySQL database from the company's on-premises data center to an Amazon RDS for MySQL DB instance. The company sized the RDS DB instance to meet the company's average daily workload. Once a month, the database performs slowly when the company runs queries for a report. The company wants to have the ability to run reports and maintain the performance of the daily workloads.

Which solution will meet these requirements?

**A. Create a read replica of the database. Direct the queries to the read replica. ✅**  
B. Create a backup of the database. Restore the backup to another DB instance. Direct the queries to the new database.  
C. Export the data to Amazon S3. Use Amazon Athena to query the S3 bucket.  
D. Resize the DB instance to accommodate the additional workload.

---

**Question 567**

A company runs a container application by using Amazon Elastic Kubernetes Service (Amazon EKS). The application includes microservices that manage customers and place orders. The company needs to route incoming requests to the appropriate microservices.

Which solution will meet this requirement MOST cost-effectively?

A. Use the AWS Load Balancer Controller to provision a Network Load Balancer.  
**B. Use the AWS Load Balancer Controller to provision an Application Load Balancer. ✅**  
C. Use an AWS Lambda function to connect the requests to Amazon EKS.  
D. Use Amazon API Gateway to connect the requests to Amazon EKS.

---

**Question 568**

A company uses AWS and sells access to copyrighted images. The company’s global customer base needs to be able to access these images quickly. The company must deny access to users from specific countries. The company wants to minimize costs as much as possible.

Which solution will meet these requirements?

A. Use Amazon S3 to store the images. Turn on multi-factor authentication (MFA) and public bucket access. Provide customers with a link to the S3 bucket.  
B. Use Amazon S3 to store the images. Create an IAM user for each customer. Add the users to a group that has permission to access the S3 bucket.  
C. Use Amazon EC2 instances that are behind Application Load Balancers (ALBs) to store the images. Deploy the instances only in the countries the company services. Provide customers with links to the ALBs for their specific country's instances.  
**D. Use Amazon S3 to store the images. Use Amazon CloudFront to distribute the images with geographic restrictions. Provide a signed URL for each customer to access the data in CloudFront. ✅**

---

**Question 569**

A solutions architect is designing a highly available Amazon ElastiCache for Redis based solution. The solutions architect needs to ensure that failures do not result in performance degradation or loss of data locally and within an AWS Region. The solution needs to provide high availability at the node level and at the Region level.

Which solution will meet these requirements?

**A. Use Multi-AZ Redis replication groups with shards that contain multiple nodes. ✅**  
B. Use Redis shards that contain multiple nodes with Redis append only files (AOF) turned on.  
C. Use a Multi-AZ Redis cluster with more than one read replica in the replication group.  
D. Use Redis shards that contain multiple nodes with Auto Scaling turned on.

---

**Question 570**

A company plans to migrate to AWS and use Amazon EC2 On-Demand Instances for its application. During the migration testing phase, a technical team observes that the application takes a long time to launch and load memory to become fully productive.

Which solution will reduce the launch time of the application during the next testing phase?

A. Launch two or more EC2 On-Demand Instances. Turn on auto scaling features and make the EC2 On-Demand Instances available during the next testing phase.  
B. Launch EC2 Spot Instances to support the application and to scale the application so it is available during the next testing phase.  
**C. Launch the EC2 On-Demand Instances with hibernation turned on. Configure EC2 Auto Scaling warm pools during the next testing phase. ✅**  
D. Launch EC2 On-Demand Instances with Capacity Reservations. Start additional EC2 instances during the next testing phase.

---

**Question 571**

A company's applications run on Amazon EC2 instances in Auto Scaling groups. The company notices that its applications experience sudden traffic increases on random days of the week. The company wants to maintain application performance during sudden traffic increases.

Which solution will meet these requirements MOST cost-effectively?

A. Use manual scaling to change the size of the Auto Scaling group.  
B. Use predictive scaling to change the size of the Auto Scaling group.  
**C. Use dynamic scaling to change the size of the Auto Scaling group. ✅**  
D. Use schedule scaling to change the size of the Auto Scaling group.

---

**Question 572**

An ecommerce application uses a PostgreSQL database that runs on an Amazon EC2 instance. During a monthly sales event, database usage increases and causes database connection issues for the application. The traffic is unpredictable for subsequent monthly sales events, which impacts the sales forecast. The company needs to maintain performance when there is an unpredictable increase in traffic.

Which solution resolves this issue in the MOST cost-effective way?

**A. Migrate the PostgreSQL database to Amazon Aurora Serverless v2. ✅**  
B. Enable auto scaling for the PostgreSQL database on the EC2 instance to accommodate increased usage.  
C. Migrate the PostgreSQL database to Amazon RDS for PostgreSQL with a larger instance type.  
D. Migrate the PostgreSQL database to Amazon Redshift to accommodate increased usage.

---

**Question 573**

A company hosts an internal serverless application on AWS by using Amazon API Gateway and AWS Lambda. The company’s employees report issues with high latency when they begin using the application each day. The company wants to reduce latency.

Which solution will meet these requirements?

A. Increase the API Gateway throttling limit.  
**B. Set up a scheduled scaling to increase Lambda provisioned concurrency before employees begin to use the application each day. ✅**  
C. Create an Amazon CloudWatch alarm to initiate a Lambda function as a target for the alarm at the beginning of each day.  
D. Increase the Lambda function memory.

---

**Question 574**

A research company uses on-premises devices to generate data for analysis. The company wants to use the AWS Cloud to analyze the data. The devices generate .csv files and support writing the data to an SMB file share. Company analysts must be able to use SQL commands to query the data. The analysts will run queries periodically throughout the day.

Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)

**A. Deploy an AWS Storage Gateway on premises in Amazon S3 File Gateway mode. ✅**  
B. Deploy an AWS Storage Gateway on premises in Amazon FSx File Gateway made.  
**C. Set up an AWS Glue crawler to create a table based on the data that is in Amazon S3. ✅**  
D. Set up an Amazon EMR cluster with EMR File System (EMRFS) to query the data that is in Amazon S3. Provide access to analysts.  
E. Set up an Amazon Redshift cluster to query the data that is in Amazon S3. Provide access to analysts.  
**F. Setup Amazon Athena to query the data that is in Amazon S3. Provide access to analysts. ✅**

---

**Question 575**

A company wants to use Amazon Elastic Container Service (Amazon ECS) clusters and Amazon RDS DB instances to build and run a payment processing application. The company will run the application in its on-premises data center for compliance purposes.

A solutions architect wants to use AWS Outposts as part of the solution. The solutions architect is working with the company's operational team to build the application.

Which activities are the responsibility of the company's operational team? (Choose three.)

**A. Providing resilient power and network connectivity to the Outposts racks. ✅**  
B. Managing the virtualization hypervisor, storage systems, and the AWS services that run on Outposts.  
**C. Physical security and access controls of the data center environment. ✅**  
D. Availability of the Outposts infrastructure including the power supplies, servers, and networking equipment within the Outposts racks.  
E. Physical maintenance of Outposts components.  
**F. Providing extra capacity for Amazon ECS clusters to mitigate server failures and maintenance events. ✅**

---

**Question 576**

A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.

Which solution will meet these requirements?

A. Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.  
**B. Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3. ✅**  
C. Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.  
D. Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.

---

**Question 577**

A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.

What should a solutions architect do to meet this requirement?

A. Update the ALB's network ACL to accept only HTTPS traffic.  
B. Create a rule that replaces the HTTP in the URL with HTTPS.  
**C. Create a listener rule on the ALB to redirect HTTP traffic to HTTPS. ✅**  
D. Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).

---

**Question 578**

A company is planning to migrate a TCP-based application into the company's VPC. The application is publicly accessible on a nonstandard TCP port through a hardware appliance in the company's data center. This public endpoint can process up to 3 million requests per second with low latency. The company requires the same level of performance for the new public endpoint in AWS.

What should a solutions architect recommend to meet this requirement?

**A. Deploy a Network Load Balancer (NLB). Configure the NLB to be publicly accessible over the TCP port that the application requires. ✅**  
B. Deploy an Application Load Balancer (ALB). Configure the ALB to be publicly accessible over the TCP port that the application requires.  
C. Deploy an Amazon CloudFront distribution that listens on the TCP port that the application requires. Use an Application Load Balancer as the origin.  
D. Deploy an Amazon API Gateway API that is configured with the TCP port that the application requires. Configure AWS Lambda functions with provisioned concurrency to process the requests.

---

**Question 579**

A company runs its critical database on an Amazon RDS for PostgreSQL DB instance. The company wants to migrate to Amazon Aurora PostgreSQL with minimal downtime and data loss.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a DB snapshot of the RDS for PostgreSQL DB instance to populate a new Aurora PostgreSQL DB cluster.  
**B. Create an Aurora read replica of the RDS for PostgreSQL DB instance. Promote the Aurora read replicate to a new Aurora PostgreSQL DB cluster. ✅**  
C. Use data import from Amazon S3 to migrate the database to an Aurora PostgreSQL DB cluster.  
D. Use the pg\_dump utility to back up the RDS for PostgreSQL database. Restore the backup to a new Aurora PostgreSQL DB cluster.

---

**Question 580**

A company's infrastructure consists of hundreds of Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) storage. A solutions architect must ensure that every EC2 instance can be recovered after a disaster.

What should the solutions architect do to meet this requirement with the LEAST amount of effort?

A. Take a snapshot of the EBS storage that is attached to each EC2 instance. Create an AWS CloudFormation template to launch new EC2 instances from the EBS storage.  
B. Take a snapshot of the EBS storage that is attached to each EC2 instance. Use AWS Elastic Beanstalk to set the environment based on the EC2 template and attach the EBS storage.  
**C. Use AWS Backup to set up a backup plan for the entire group of EC2 instances. Use the AWS Backup API or the AWS CLI to speed up the restore process for multiple EC2 instances. ✅**  
D. Create an AWS Lambda function to take a snapshot of the EBS storage that is attached to each EC2 instance and copy the Amazon Machine Images (AMIs). Create another Lambda function to perform the restores with the copied AMIs and attach the EBS storage.

---

**Question 581**

A company recently migrated to the AWS Cloud. The company wants a serverless solution for large-scale parallel on-demand processing of a semistructured dataset. The data consists of logs, media files, sales transactions, and IoT sensor data that is stored in Amazon S3. The company wants the solution to process thousands of items in the dataset in parallel.

Which solution will meet these requirements with the MOST operational efficiency?

A. Use the AWS Step Functions Map state in Inline mode to process the data in parallel.  
**B. Use the AWS Step Functions Map state in Distributed mode to process the data in parallel. ✅**  
C. Use AWS Glue to process the data in parallel.  
D. Use several AWS Lambda functions to process the data in parallel.

---

**Question 582**

A company will migrate 10 PB of data to Amazon S3 in 6 weeks. The current data center has a 500 Mbps uplink to the internet. Other on-premises applications share the uplink. The company can use 80% of the internet bandwidth for this one-time migration task.

Which solution will meet these requirements?

A. Configure AWS DataSync to migrate the data to Amazon S3 and to automatically verify the data.  
B. Use rsync to transfer the data directly to Amazon S3.  
C. Use the AWS CLI and multiple copy processes to send the data directly to Amazon S3.  
**D. Order multiple AWS Snowball devices. Copy the data to the devices. Send the devices to AWS to copy the data to Amazon S3. ✅**

---

**Question 583**

A company has several on-premises Internet Small Computer Systems Interface (ISCSI) network storage servers. The company wants to reduce the number of these servers by moving to the AWS Cloud. A solutions architect must provide low-latency access to frequently used data and reduce the dependency on on-premises servers with a minimal number of infrastructure changes.

Which solution will meet these requirements?

A. Deploy an Amazon S3 File Gateway.  
B. Deploy Amazon Elastic Block Store (Amazon EBS) storage with backups to Amazon S3.  
C. Deploy an AWS Storage Gateway volume gateway that is configured with stored volumes.  
**D. Deploy an AWS Storage Gateway volume gateway that is configured with cached volumes. ✅**

---

**Question 584**

A solutions architect is designing an application that will allow business users to upload objects to Amazon S3. The solution needs to maximize object durability. Objects also must be readily available at any time and for any length of time. Users will access objects frequently within the first 30 days after the objects are uploaded, but users are much less likely to access objects that are older than 30 days.

Which solution meets these requirements MOST cost-effectively?

A. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Glacier after 30 days.  
**B. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days. ✅**  
C. Store all the objects in S3 Standard with an S3 Lifecycle rule to transition the objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.  
D. Store all the objects in S3 Intelligent-Tiering with an S3 Lifecycle rule to transition the objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

---

**Question 585**

A company has migrated a two-tier application from its on-premises data center to the AWS Cloud. The data tier is a Multi-AZ deployment of Amazon RDS for Oracle with 12 TB of General Purpose SSD Amazon Elastic Block Store (Amazon EBS) storage. The application is designed to process and store documents in the database as binary large objects (blobs) with an average document size of 6 MB.

The database size has grown over time, reducing the performance and increasing the cost of storage. The company must improve the database performance and needs a solution that is highly available and resilient.

Which solution will meet these requirements MOST cost-effectively?

A. Reduce the RDS DB instance size. Increase the storage capacity to 24 TiB. Change the storage type to Magnetic.  
B. Increase the RDS DB instance size. Increase the storage capacity to 24 TiChange the storage type to Provisioned IOPS.  
**C. Create an Amazon S3 bucket. Update the application to store documents in the S3 bucket. Store the object metadata in the existing database. ✅**  
D. Create an Amazon DynamoDB table. Update the application to use DynamoDB. Use AWS Database Migration Service (AWS DMS) to migrate data from the Oracle database to DynamoDB.

---

**Question 586**

A company has an application that serves clients that are deployed in more than 20.000 retail storefront locations around the world. The application consists of backend web services that are exposed over HTTPS on port 443\. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The retail locations communicate with the web application over the public internet. The company allows each retail location to register the IP address that the retail location has been allocated by its local ISP.

The company's security team recommends to increase the security of the application endpoint by restricting access to only the IP addresses registered by the retail locations.

What should a solutions architect do to meet these requirements?

**A. Associate an AWS WAF web ACL with the ALB. Use IP rule sets on the ALB to filter traffic. Update the IP addresses in the rule to include the registered IP addresses. ✅**  
B. Deploy AWS Firewall Manager to manage the ALConfigure firewall rules to restrict traffic to the ALModify the firewall rules to include the registered IP addresses.  
C. Store the IP addresses in an Amazon DynamoDB table. Configure an AWS Lambda authorization function on the ALB to validate that incoming requests are from the registered IP addresses.  
D. Configure the network ACL on the subnet that contains the public interface of the ALB. Update the ingress rules on the network ACL with entries for each of the registered IP addresses.

---

**Question 587**

A company is building a data analysis platform on AWS by using AWS Lake Formation. The platform will ingest data from different sources such as Amazon S3 and Amazon RDS. The company needs a secure solution to prevent access to portions of the data that contain sensitive information.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an IAM role that includes permissions to access Lake Formation tables.  
**B. Create data filters to implement row-level security and cell-level security. ✅**  
C. Create an AWS Lambda function that removes sensitive information before Lake Formation ingests the data.  
D. Create an AWS Lambda function that periodically queries and removes sensitive information from Lake Formation tables.

---

**Question 588**

A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.

Which solution will meet these requirements with the LEAST operational overhead?

A. Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.  
B. Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.  
**C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret. ✅**  
D. Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.

---

**Question 589**

A company deploys Amazon EC2 instances that run in a VPC. The EC2 instances load source data into Amazon S3 buckets so that the data can be processed in the future. According to compliance laws, the data must not be transmitted over the public internet. Servers in the company's on-premises data center will consume the output from an application that runs on the EC2 instances.

Which solution will meet these requirements?

A. Deploy an interface VPC endpoint for Amazon EC2. Create an AWS Site-to-Site VPN connection between the company and the VPC.  
**B. Deploy a gateway VPC endpoint for Amazon S3. Set up an AWS Direct Connect connection between the on-premises network and the VPC. ✅**  
C. Set up an AWS Transit Gateway connection from the VPC to the S3 buckets. Create an AWS Site-to-Site VPN connection between the company and the VPC.  
D. Set up proxy EC2 instances that have routes to NAT gateways. Configure the proxy EC2 instances to fetch S3 data and feed the application instances.

---

**Question 590**

A company has an application with a REST-based interface that allows data to be received in near-real time from a third-party vendor. Once received, the application processes and stores the data for further analysis. The application is running on Amazon EC2 instances.

The third-party vendor has received many 503 Service Unavailable Errors when sending data to the application. When the data volume spikes, the compute capacity reaches its maximum limit and the application is unable to process all requests.

Which design should a solutions architect recommend to provide a more scalable solution?

**A. Use Amazon Kinesis Data Streams to ingest the data. Process the data using AWS Lambda functions. ✅**  
B. Use Amazon API Gateway on top of the existing application. Create a usage plan with a quota limit for the third-party vendor.  
C. Use Amazon Simple Notification Service (Amazon SNS) to ingest the data. Put the EC2 instances in an Auto Scaling group behind an Application Load Balancer.  
D. Repackage the application as a container. Deploy the application using Amazon Elastic Container Service (Amazon ECS) using the EC2 launch type with an Auto Scaling group.

---

**Question 591**

A company has an application that runs on Amazon EC2 instances in a private subnet. The application needs to process sensitive information from an Amazon S3 bucket. The application must not use the internet to connect to the S3 bucket.

Which solution will meet these requirements?

A. Configure an internet gateway. Update the S3 bucket policy to allow access from the internet gateway. Update the application to use the new internet gateway.  
B. Configure a VPN connection. Update the S3 bucket policy to allow access from the VPN connection. Update the application to use the new VPN connection.  
C. Configure a NAT gateway. Update the S3 bucket policy to allow access from the NAT gateway. Update the application to use the new NAT gateway.  
**D. Configure a VPC endpoint. Update the S3 bucket policy to allow access from the VPC endpoint. Update the application to use the new VPC endpoint. ✅**

---

**Question 592**

A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run a container application. The EKS cluster stores sensitive information in the Kubernetes secrets object. The company wants to ensure that the information is encrypted.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use the container application to encrypt the information by using AWS Key Management Service (AWS KMS).  
**B. Enable secrets encryption in the EKS cluster by using AWS Key Management Service (AWS KMS). ✅**  
C. Implement an AWS Lambda function to encrypt the information by using AWS Key Management Service (AWS KMS).  
D. Use AWS Systems Manager Parameter Store to encrypt the information by using AWS Key Management Service (AWS KMS).

---

**Question 593**

A company is designing a new multi-tier web application that consists of the following components:

• Web and application servers that run on Amazon EC2 instances as part of Auto Scaling groups

• An Amazon RDS DB instance for data storage

A solutions architect needs to limit access to the application servers so that only the web servers can access them.

Which solution will meet these requirements?

A. Deploy AWS PrivateLink in front of the application servers. Configure the network ACL to allow only the web servers to access the application servers.  
B. Deploy a VPC endpoint in front of the application servers. Configure the security group to allow only the web servers to access the application servers.  
C. Deploy a Network Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the network ACL to allow only the web servers to access the application servers.  
**D. Deploy an Application Load Balancer with a target group that contains the application servers' Auto Scaling group. Configure the security group to allow only the web servers to access the application servers. ✅**

---

**Question 594**

A company runs a critical, customer-facing application on Amazon Elastic Kubernetes Service (Amazon EKS). The application has a microservices architecture. The company needs to implement a solution that collects, aggregates, and summarizes metrics and logs from the application in a centralized location.

Which solution meets these requirements?

A. Run the Amazon CloudWatch agent in the existing EKS cluster. View the metrics and logs in the CloudWatch console.  
B. Run AWS App Mesh in the existing EKS cluster. View the metrics and logs in the App Mesh console.  
C. Configure AWS CloudTrail to capture data events. Query CloudTrail by using Amazon OpenSearch Service.  
**D. Configure Amazon CloudWatch Container Insights in the existing EKS cluster. View the metrics and logs in the CloudWatch console. ✅**

---

**Question 595**

A company has deployed its newest product on AWS. The product runs in an Auto Scaling group behind a Network Load Balancer. The company stores the product’s objects in an Amazon S3 bucket.

The company recently experienced malicious attacks against its systems. The company needs a solution that continuously monitors for malicious activity in the AWS account, workloads, and access patterns to the S3 bucket. The solution must also report suspicious activity and display the information on a dashboard.

Which solution will meet these requirements?

A. Configure Amazon Macie to monitor and report findings to AWS Config.  
B. Configure Amazon Inspector to monitor and report findings to AWS CloudTrail.  
**C. Configure Amazon GuardDuty to monitor and report findings to AWS Security Hub. ✅**  
D. Configure AWS Config to monitor and report findings to Amazon EventBridge.

---

**Question 596**

A company wants to migrate an on-premises data center to AWS. The data center hosts a storage server that stores data in an NFS-based file system. The storage server holds 200 GB of data. The company needs to migrate the data without interruption to existing services. Multiple resources in AWS must be able to access the data by using the NFS protocol.

Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

A. Create an Amazon FSx for Lustre file system.  
**B. Create an Amazon Elastic File System (Amazon EFS) file system. ✅**  
C. Create an Amazon S3 bucket to receive the data.  
D. Manually use an operating system copy command to push the data into the AWS destination.  
**E. Install an AWS DataSync agent in the on-premises data center. Use a DataSync task between the on-premises location and AWS. ✅**

---

**Question 597**

A company wants to use Amazon FSx for Windows File Server for its Amazon EC2 instances that have an SMB file share mounted as a volume in the us-east-1 Region. The company has a recovery point objective (RPO) of 5 minutes for planned system maintenance or unplanned service disruptions. The company needs to replicate the file system to the us-west-2 Region. The replicated data must not be deleted by any user for 5 years.

Which solution will meet these requirements?

A. Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.  
B. Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.  
**C. Create an FSx for Windows File Server file system in us-east-1 that has a Multi-AZ deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in compliance mode for a target vault in us-west-2. Configure a minimum duration of 5 years. ✅**  
D. Create an FSx for Windows File Server file system in us-east-1 that has a Single-AZ 2 deployment type. Use AWS Backup to create a daily backup plan that includes a backup rule that copies the backup to us-west-2. Configure AWS Backup Vault Lock in governance mode for a target vault in us-west-2. Configure a minimum duration of 5 years.

---

**Question 598**

A solutions architect is designing a security solution for a company that wants to provide developers with individual AWS accounts through AWS Organizations, while also maintaining standard security controls. Because the individual developers will have AWS account root user-level access to their own accounts, the solutions architect wants to ensure that the mandatory AWS CloudTrail configuration that is applied to new developer accounts is not modified.

Which action meets these requirements?

A. Create an IAM policy that prohibits changes to CloudTrail. and attach it to the root user.  
B. Create a new trail in CloudTrail from within the developer accounts with the organization trails option enabled.  
**C. Create a service control policy (SCP) that prohibits changes to CloudTrail, and attach it the developer accounts. ✅**  
D. Create a service-linked role for CloudTrail with a policy condition that allows changes only from an Amazon Resource Name (ARN) in the management account.

---

**Question 599**

A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.

What should a solutions architect do to meet these requirements?

A. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.  
B. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.  
C. Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.  
**D. Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually. ✅**

---

**Question 600**

A company is planning to deploy a business-critical application in the AWS Cloud. The application requires durable storage with consistent, low-latency performance.

Which type of storage should a solutions architect recommend to meet these requirements?

A. Instance store volume  
B. Amazon ElastiCache for Memcached cluster  
**C. Provisioned IOPS SSD Amazon Elastic Block Store (Amazon EBS) volume ✅**  
D. Throughput Optimized HDD Amazon Elastic Block Store (Amazon EBS) volume

[image1]: <data:image/png;base64,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>