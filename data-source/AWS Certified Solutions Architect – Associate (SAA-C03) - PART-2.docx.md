

**Question 311**

**A company uses Amazon API Gateway to run a private gateway with two REST APIs in the same VPC. The BuyStock RESTful web service calls the CheckFunds RESTful web service to ensure that enough funds are available before a stock can be purchased. The company has noticed in the VPC flow logs that the BuyStock RESTful web service calls the CheckFunds RESTful web service over the internet instead of through the VPC. A solutions architect must implement a solution so that the APIs communicate through the VPC.**

**Which solution will meet these requirements with the FEWEST changes to the code?**

**A. Add an X-API-Key header in the HTTP header for authorization.**

**B. Use an interface endpoint. ✅**

**C. Use a gateway endpoint.**

**D. Add an Amazon Simple Queue Service (Amazon SQS) queue between the two REST APIs.**

**Question 312**

**A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries on historical data.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to export the data to an Amazon S3 bucket.**

**B. Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move older data to S3 Glacier Deep Archive for long-term storage. Run one-time queries on the data in Amazon S3 by using Amazon Athena.**

**C. Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently accessed. Export the data to an Amazon S3 bucket by using DynamoDB table export. Run one-time queries on the data in Amazon S3 by using Amazon Athena. ✅**

**D. Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to read the data from Kinesis Data Streams. Store the records in an Amazon S3 bucket.**

**Question 313**

**A company uses a payment processing system that requires messages for a particular payment ID to be received in the same order that they were sent. Otherwise, the payments might be processed incorrectly.**

**Which actions should a solutions architect take to meet this requirement? (Choose two.)**

**A. Write the messages to an Amazon DynamoDB table with the payment ID as the partition key.**

**B. Write the messages to an Amazon Kinesis data stream with the payment ID as the partition key. ✅**

**C. Write the messages to an Amazon ElastiCache for Memcached cluster with the payment ID as the key.**

**D. Write the messages to an Amazon Simple Queue Service (Amazon SQS) queue. Set the message attribute to use the payment ID.**

**E. Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the message group to use the payment ID. ✅**

**Question 314**

**A company is building a game system that needs to send unique events to separate leaderboard, matchmaking, and authentication services concurrently. The company needs an AWS event-driven system that guarantees the order of the events.**

**Which solution will meet these requirements?**

**A. Amazon EventBridge event bus**

**B. Amazon Simple Notification Service (Amazon SNS) FIFO topics. ✅**

**C. Amazon Simple Notification Service (Amazon SNS) standard topics**

**D. Amazon Simple Queue Service (Amazon SQS) FIFO queues**

**Question 315**

**A hospital is designing a new application that gathers symptoms from patients. The hospital has decided to use Amazon Simple Queue Service (Amazon SQS) and Amazon Simple Notification Service (Amazon SNS) in the architecture.**

**A solutions architect is reviewing the infrastructure design. Data must be encrypted at rest and in transit. Only authorized personnel of the hospital should be able to access the data.**

**Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)**

**A. Turn on server-side encryption on the SQS components. Update the default key policy to restrict key usage to a set of authorized principals.**

**B. Turn on server-side encryption on the SNS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals. ✅**

**C. Turn on encryption on the SNS components. Update the default key policy to restrict key usage to a set of authorized principals. Set a condition in the topic policy to allow only encrypted connections over TLS.**

**D. Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply a key policy to restrict key usage to a set of authorized principals. Set a condition in the queue policy to allow only encrypted connections over TLS. ✅**

**E. Turn on server-side encryption on the SQS components by using an AWS Key Management Service (AWS KMS) customer managed key. Apply an IAM policy to restrict key usage to a set of authorized principals. Set a condition in the queue policy to allow only encrypted connections over TLS.**

**Question 316**

**A company runs a web application that is backed by Amazon RDS. A new database administrator caused data loss by accidentally editing information in a database table. To help recover from this type of incident, the company wants the ability to restore the database to its state from 5 minutes before any change within the last 30 days.**

**Which feature should the solutions architect include in the design to meet this requirement?**

**A. Read replicas**

**B. Manual snapshots**

**C. Automated backups. ✅**

**D. Multi-AZ deployments**

**Question 317**

**A company’s web application consists of an Amazon API Gateway API in front of an AWS Lambda function and an Amazon DynamoDB database. The Lambda function handles the business logic, and the DynamoDB table hosts the data. The application uses Amazon Cognito user pools to identify the individual users of the application. A solutions architect needs to update the application so that only users who have a subscription can access premium content.**

**Which solution will meet this requirement with the LEAST operational overhead?**

**A. Enable API caching and throttling on the API Gateway API.**

**B. Set up AWS WAF on the API Gateway API. Create a rule to filter users who have a subscription.**

**C. Apply fine-grained IAM permissions to the premium content in the DynamoDB table.**

**D. Implement API usage plans and API keys to limit the access of users who do not have a subscription. ✅**

**Question 318**

**A company is using Amazon Route 53 latency-based routing to route requests to its UDP-based application for users around the world. The application is hosted on redundant servers in the company's on-premises data centers in the United States, Asia, and Europe. The company’s compliance requirements state that the application must be hosted on premises. The company wants to improve the performance and availability of the application.**

**What should a solutions architect do to meet these requirements?**

**A. Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises endpoints. Create an accelerator by using AWS Global Accelerator, and register the NLBs as its endpoints. Provide access to the application by using a CNAME that points to the accelerator DNS. ✅**

**B. Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises endpoints. Create an accelerator by using AWS Global Accelerator, and register the ALBs as its endpoints. Provide access to the application by using a CNAME that points to the accelerator DNS.**

**C. Configure three Network Load Balancers (NLBs) in the three AWS Regions to address the on-premises endpoints. In Route 53, create a latency-based record that points to the three NLBs, and use it as an origin for an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the CloudFront DNS.**

**D. Configure three Application Load Balancers (ALBs) in the three AWS Regions to address the on-premises endpoints. In Route 53, create a latency-based record that points to the three ALBs, and use it as an origin for an Amazon CloudFront distribution. Provide access to the application by using a CNAME that points to the CloudFront DNS.**

**Question 319**

**A solutions architect wants all new users to have specific complexity requirements and mandatory rotation periods for IAM user passwords.**

**What should the solutions architect do to accomplish this?**

**A. Set an overall password policy for the entire AWS account. ✅**

**B. Set a password policy for each IAM user in the AWS account.**

**C. Use third-party vendor software to set password requirements.**

**D. Attach an Amazon CloudWatch rule to the Create\_newuser event to set the password with the appropriate requirements.**

**Question 320**

**A company has migrated an application to Amazon EC2 Linux instances. One of these EC2 instances runs several 1-hour tasks on a schedule. These tasks were written by different teams and have no common programming language. The company is concerned about performance and scalability while these tasks run on a single instance. A solutions architect needs to implement a solution to resolve these concerns.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use AWS Batch to run the tasks as jobs. Schedule the jobs by using Amazon EventBridge (Amazon CloudWatch Events). ✅**

**B. Convert the EC2 instance to a container. Use AWS App Runner to create the container on demand to run the tasks as jobs.**

**C. Copy the tasks into AWS Lambda functions. Schedule the Lambda functions by using Amazon EventBridge (Amazon CloudWatch Events).**

**D. Create an Amazon Machine Image (AMI) of the EC2 instance that runs the tasks. Create an Auto Scaling group with the AMI to run multiple copies of the instance.**

**Question 321**

**A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use the EC2 serial console to directly access the terminal interface of each instance for administration.**

**B. Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session. ✅**

**C. Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.**

**D. Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.**

**Question 322**

**A company runs a public three-tier web application in a VPC. The application runs on Amazon EC2 instances across multiple Availability Zones. The EC2 instances that run in private subnets need to communicate with a license server over the internet. The company needs a managed solution that minimizes operational maintenance.**

**Which solution meets these requirements?**

**A. Provision a NAT instance in a public subnet. Modify each private subnet's route table with a default route that points to the NAT instance.**

**B. Provision a NAT instance in a private subnet. Modify each private subnet's route table with a default route that points to the NAT instance.**

**C. Provision a NAT gateway in a public subnet. Modify each private subnet's route table with a default route that points to the NAT gateway. ✅**

**D. Provision a NAT gateway in a private subnet. Modify each private subnet's route table with a default route that points to the NAT gateway.**

**Question 323**

**A company needs to create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host a digital media streaming application. The EKS cluster will use a managed node group that is backed by Amazon Elastic Block Store (Amazon EBS) volumes for storage. The company must encrypt all data at rest by using a customer managed key that is stored in AWS Key Management Service (AWS KMS).**

**Which combination of actions will meet this requirement with the LEAST operational overhead? (Choose two.)**

**A. Use a Kubernetes plugin that uses the customer managed key to perform data encryption.**

**B. After creation of the EKS cluster, locate the EBS volumes. Enable encryption by using the customer managed key.**

**C. Enable EBS encryption by default in the AWS Region where the EKS cluster will be created. Select the customer managed key as the default key. ✅**

**D. Create the EKS cluster. Create an IAM role that has a policy that grants permission to the customer managed key. Associate the role with the EKS cluster. ✅**

**E. Store the customer managed key as a Kubernetes secret in the EKS cluster. Use the customer managed key to encrypt the EBS volumes.**

**Question 324**

**A company wants to migrate an Oracle database to AWS. The database consists of a single table that contains millions of geographic information systems (GIS) images that are high resolution and are identified by a geographic code.**

**When a natural disaster occurs, tens of thousands of images get updated every few minutes. Each geographic code has a single image or row that is associated with it. The company wants a solution that is highly available and scalable during such events.**

**Which solution meets these requirements MOST cost-effectively?**

**A. Store the images and geographic codes in a database table. Use Oracle running on an Amazon RDS Multi-AZ DB instance.**

**B. Store the images in Amazon S3 buckets. Use Amazon DynamoDB with the geographic code as the key and the image S3 URL as the value. ✅**

**C. Store the images and geographic codes in an Amazon DynamoDB table. Configure DynamoDB Accelerator (DAX) during times of high load.**

**D. Store the images in Amazon S3 buckets. Store geographic codes and image S3 URLs in a database table. Use Oracle running on an Amazon RDS Multi-AZ DB instance.**

**Question 325**

**A company has an application that collects data from IoT sensors on automobiles. The data is streamed and stored in Amazon S3 through Amazon Kinesis Data Firehose. The data produces trillions of S3 objects each year. Each morning, the company uses the data from the previous 30 days to retrain a suite of machine learning (ML) models.**

**Four times each year, the company uses the data from the previous 12 months to perform analysis and train other ML models. The data must be available with minimal delay for up to 1 year. After 1 year, the data must be retained for archival purposes.**

**Which storage solution meets these requirements MOST cost-effectively?**

**A. Use the S3 Intelligent-Tiering storage class. Create an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 1 year. ✅**

**B. Use the S3 Intelligent-Tiering storage class. Configure S3 Intelligent-Tiering to automatically move objects to S3 Glacier Deep Archive after 1 year.**

**C. Use the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 1 year.**

**D. Use the S3 Standard storage class. Create an S3 Lifecycle policy to transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days, and then to S3 Glacier Deep Archive after 1 year.**

**Question 326**

**A company is running several business applications in three separate VPCs within the us-east-1 Region. The applications must be able to communicate between VPCs. The applications also must be able to consistently send hundreds of gigabytes of data each day to a latency-sensitive application that runs in a single on-premises data center.**

**A solutions architect needs to design a network connectivity solution that maximizes cost-effectiveness.**

**Which solution meets these requirements?**

**A. Configure three AWS Site-to-Site VPN connections from the data center to AWS. Establish connectivity by configuring one VPN connection for each VPC.**

**B. Launch a third-party virtual network appliance in each VPC. Establish an IPsec VPN tunnel between the data center and each virtual appliance.**

**C. Set up three AWS Direct Connect connections from the data center to a Direct Connect gateway in us-east-1. Establish connectivity by configuring each VPC to use one of the Direct Connect connections.**

**D. Set up one AWS Direct Connect connection from the data center to AWS. Create a transit gateway, and attach each VPC to the transit gateway. Establish connectivity between the Direct Connect connection and the transit gateway. ✅**

**Question 327**

**An ecommerce company is building a distributed application that involves several serverless functions and AWS services to complete order-processing tasks. These tasks require manual approvals as part of the workflow. A solutions architect needs to design an architecture for the order-processing application. The solution must be able to combine multiple AWS Lambda functions into responsive serverless applications. The solution also must orchestrate data and services that run on Amazon EC2 instances, containers, or on-premises servers.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use AWS Step Functions to build the application. ✅**

**B. Integrate all the application components in an AWS Glue job.**

**C. Use Amazon Simple Queue Service (Amazon SQS) to build the application.**

**D. Use AWS Lambda functions and Amazon EventBridge events to build the application.**

**Question 328**

**A company has launched an Amazon RDS for MySQL DB instance. Most of the connections to the database come from serverless applications. Application traffic to the database changes significantly at random intervals. At times of high demand, users report that their applications experience database connection rejection errors.**

**Which solution will resolve this issue with the LEAST operational overhead?**

**A. Create a proxy in RDS Proxy. Configure the users’ applications to use the DB instance through RDS Proxy. ✅**

**B. Deploy Amazon ElastiCache for Memcached between the users’ applications and the DB instance.**

**C. Migrate the DB instance to a different instance class that has higher I/O capacity. Configure the users’ applications to use the new DB instance.**

**D. Configure Multi-AZ for the DB instance. Configure the users’ applications to switch between the DB instances.**

**Question 329**

**A company recently deployed a new auditing system to centralize information about operating system versions, patching, and installed software for Amazon EC2 instances. A solutions architect must ensure all instances provisioned through EC2 Auto Scaling groups successfully send reports to the auditing system as soon as they are launched and terminated.**

**Which solution achieves these goals MOST efficiently?**

**A. Use a scheduled AWS Lambda function and run a script remotely on all EC2 instances to send data to the audit system.**

**B. Use EC2 Auto Scaling lifecycle hooks to run a custom script to send data to the audit system when instances are launched and terminated. ✅**

**C. Use an EC2 Auto Scaling launch configuration to run a custom script through user data to send data to the audit system when instances are launched and terminated.**

**D. Run a custom script on the instance operating system to send data to the audit system. Configure the script to be invoked by the EC2 Auto Scaling group when the instance starts and is terminated.**

**Question 330**

**A company is developing a real-time multiplayer game that uses UDP for communications between the client and servers in an Auto Scaling group. Spikes in demand are anticipated during the day, so the game server platform must adapt accordingly. Developers want to store gamer scores and other non-relational data in a database solution that will scale without intervention.**

**Which solution should a solutions architect recommend?**

**A. Use Amazon Route 53 for traffic distribution and Amazon Aurora Serverless for data storage.**

**B. Use a Network Load Balancer for traffic distribution and Amazon DynamoDB on-demand for data storage. ✅**

**C. Use a Network Load Balancer for traffic distribution and Amazon Aurora Global Database for data storage.**

**D. Use an Application Load Balancer for traffic distribution and Amazon DynamoDB global tables for data storage.**

**Question 331**

**A company hosts a frontend application that uses an Amazon API Gateway API backend that is integrated with AWS Lambda. When the API receives requests, the Lambda function loads many libraries. Then the Lambda function connects to an Amazon RDS database, processes the data, and returns the data to the frontend application. The company wants to ensure that response latency is as low as possible for all its users with the fewest number of changes to the company's operations.**

**Which solution will meet these requirements?**

**A. Establish a connection between the frontend application and the database to make queries faster by bypassing the API.**

**B. Configure provisioned concurrency for the Lambda function that handles the requests. ✅**

**C. Cache the results of the queries in Amazon S3 for faster retrieval of similar datasets.**

**D. Increase the size of the database to increase the number of connections Lambda can establish at one time.**

**Question 332**

**A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.**

**Which solution meets these requirements MOST cost-effectively?**

**A. Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.**

**B. Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.**

**C. Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution. ✅**

**D. Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.**

**Question 333**

**A company is migrating its on-premises workload to the AWS Cloud. The company already uses several Amazon EC2 instances and Amazon RDS DB instances. The company wants a solution that automatically starts and stops the EC2 instances and DB instances outside of business hours. The solution must minimize cost and infrastructure maintenance.**

**Which solution will meet these requirements?**

**A. Scale the EC2 instances by using elastic resize. Scale the DB instances to zero outside of business hours.**

**B. Explore AWS Marketplace for partner solutions that will automatically start and stop the EC2 instances and DB instances on a schedule.**

**C. Launch another EC2 instance. Configure a crontab schedule to run shell scripts that will start and stop the existing EC2 instances and DB instances on a schedule.**

**D. Create an AWS Lambda function that will start and stop the EC2 instances and DB instances. Configure Amazon EventBridge to invoke the Lambda function on a schedule. ✅**

**Question 334**

**A company hosts a three-tier web application that includes a PostgreSQL database. The database stores the metadata from documents. The company searches the metadata for key terms to retrieve documents that the company reviews in a report each month. The documents are stored in Amazon S3. The documents are usually written only once, but they are updated frequently.**

**The reporting process takes a few hours with the use of relational queries. The reporting process must not prevent any document modifications or the addition of new documents. A solutions architect needs to implement a solution to speed up the reporting process.**

**Which solution will meet these requirements with the LEAST amount of change to the application code?**

**A. Set up a new Amazon DocumentDB (with MongoDB compatibility) cluster that includes a read replica. Scale the read replica to generate the reports.**

**B. Set up a new Amazon Aurora PostgreSQL DB cluster that includes an Aurora Replica. Issue queries to the Aurora Replica to generate the reports. ✅**

**C. Set up a new Amazon RDS for PostgreSQL Multi-AZ DB instance. Configure the reporting module to query the secondary RDS node so that the reporting module does not affect the primary node.**

**D. Set up a new Amazon DynamoDB table to store the documents. Use a fixed write capacity to support new document entries. Automatically scale the read capacity to support the reports.**

**Question 335**

**A company has a three-tier application on AWS that ingests sensor data from its users’ devices. The traffic flows through a Network Load Balancer (NLB), then to Amazon EC2 instances for the web tier, and finally to EC2 instances for the application tier. The application tier makes calls to a database.**

**What should a solutions architect do to improve the security of the data in transit?**

**A. Configure a TLS listener. Deploy the server certificate on the NLB. ✅**

**B. Configure AWS Shield Advanced. Enable AWS WAF on the NLB.**

**C. Change the load balancer to an Application Load Balancer (ALB). Enable AWS WAF on the ALB.**

**D. Encrypt the Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instances by using AWS Key Management Service (AWS KMS).**

**Question 336**

**A company is planning to migrate a commercial off-the-shelf application from its on-premises data center to AWS. The software has a software licensing model using sockets and cores with predictable capacity and uptime requirements. The company wants to use its existing licenses, which were purchased earlier this year.**

**Which Amazon EC2 pricing option is the MOST cost-effective?**

**A. Dedicated Reserved Hosts ✅**

**B. Dedicated On-Demand Hosts**

**C. Dedicated Reserved Instances**

**D. Dedicated On-Demand Instances**

**Question 337**

**A company runs an application on Amazon EC2 Linux instances across multiple Availability Zones. The application needs a storage layer that is highly available and Portable Operating System Interface (POSIX)-compliant. The storage layer must provide maximum data durability and must be shareable across the EC2 instances. The data in the storage layer will be accessed frequently for the first 30 days and will be accessed infrequently after that time.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed data to S3 Glacier.**

**B. Use the Amazon S3 Standard storage class. Create an S3 Lifecycle policy to move infrequently accessed data to S3 Standard-Infrequent Access (S3 Standard-IA).**

**C. Use the Amazon Elastic File System (Amazon EFS) Standard storage class. Create a lifecycle management policy to move infrequently accessed data to EFS Standard-Infrequent Access (EFS Standard-IA). ✅**

**D. Use the Amazon Elastic File System (Amazon EFS) One Zone storage class. Create a lifecycle management policy to move infrequently accessed data to EFS One Zone-Infrequent Access (EFS One Zone-IA).**

**Question 338**

**A solutions architect is creating a new VPC design. There are two public subnets for the load balancer, two private subnets for web servers, and two private subnets for MySQL. The web servers use only HTTPS. The solutions architect has already created a security group for the load balancer allowing port 443 from 0.0.0.0/0. Company policy requires that each resource has the least access required to still be able to perform its tasks.**

**Which additional configuration strategy should the solutions architect use to meet these requirements?**

**A. Create a security group for the web servers and allow port 443 from 0.0.0.0/0. Create a security group for the MySQL servers and allow port 3306 from the web servers security group.**

**B. Create a network ACL for the web servers and allow port 443 from 0.0.0.0/0. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.**

**C. Create a security group for the web servers and allow port 443 from the load balancer. Create a security group for the MySQL servers and allow port 3306 from the web servers security group. ✅**

**D. Create a network ACL for the web servers and allow port 443 from the load balancer. Create a network ACL for the MySQL servers and allow port 3306 from the web servers security group.**

**Question 339**

**An ecommerce company is running a multi-tier application on AWS. The front-end and backend tiers both run on Amazon EC2, and the database runs on Amazon RDS for MySQL. The backend tier communicates with the RDS instance. There are frequent calls to return identical datasets from the database that are causing performance slowdowns.**

**Which action should be taken to improve the performance of the backend?**

**A. Implement Amazon SNS to store the database calls.**

**B. Implement Amazon ElastiCache to cache the large datasets. ✅**

**C. Implement an RDS for MySQL read replica to cache database calls.**

**D. Implement Amazon Kinesis Data Firehose to stream the calls to the database.**

**Question 340**

**A new employee has joined a company as a deployment engineer. The deployment engineer will be using AWS CloudFormation templates to create multiple AWS resources. A solutions architect wants the deployment engineer to perform job activities while following the principle of least privilege.**

**Which combination of actions should the solutions architect take to accomplish this goal? (Choose two.)**

**A. Have the deployment engineer use AWS account root user credentials for performing AWS CloudFormation stack operations.**

**B. Create a new IAM user for the deployment engineer and add the IAM user to a group that has the PowerUsers IAM policy attached.**

**C. Create a new IAM user for the deployment engineer and add the IAM user to a group that has the AdministratorAccess IAM policy attached.**

**D. Create a new IAM user for the deployment engineer and add the IAM user to a group that has an IAM policy that allows AWS CloudFormation actions only. ✅**

**E. Create an IAM role for the deployment engineer to explicitly define the permissions specific to the AWS CloudFormation stack and launch stacks using that IAM role. ✅**

**Question 341**

**A company is deploying a two-tier web application in a VPC. The web tier is using an Amazon EC2 Auto Scaling group with public subnets that span multiple Availability Zones. The database tier consists of an Amazon RDS for MySQL DB instance in separate private subnets. The web tier requires access to the database to retrieve product information.**

**The web application is not working as intended. The web application reports that it cannot connect to the database. The database is confirmed to be up and running. All configurations for the network ACLs, security groups, and route tables are still in their default states.**

**What should a solutions architect recommend to fix the application?**

**A. Add an explicit rule to the private subnet’s network ACL to allow traffic from the web tier’s EC2 instances.**

**B. Add a route in the VPC route table to allow traffic between the web tier’s EC2 instances and the database tier.**

**C. Deploy the web tier's EC2 instances and the database tier’s RDS instance into two separate VPCs, and configure VPC peering.**

**D. Add an inbound rule to the security group of the database tier’s RDS instance to allow traffic from the web tiers security group. ✅**

**Question 342**

**A company has a large dataset for its online advertising business stored in an Amazon RDS for MySQL DB instance in a single Availability Zone. The company wants business reporting queries to run without impacting the write operations to the production DB instance.**

**Which solution meets these requirements?**

**A. Deploy RDS read replicas to process the business reporting queries. ✅**

**B. Scale out the DB instance horizontally by placing it behind an Elastic Load Balancer.**

**C. Scale up the DB instance to a larger instance type to handle write operations and queries.**

**D. Deploy the DB instance in multiple Availability Zones to process the business reporting queries.**

**Question 343**

**A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.**

**The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.**

**Which solution addresses this performance issue?**

**A. Change the storage type to Provisioned IOPS SSD. ✅**

**B. Change the DB instance to a memory optimized instance class.**

**C. Change the DB instance to a burstable performance instance class.**

**D. Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.**

**Question 344**

**A company hosts a three-tier ecommerce application on a fleet of Amazon EC2 instances. The instances run in an Auto Scaling group behind an Application Load Balancer (ALB). All ecommerce data is stored in an Amazon RDS for MariaDB Multi-AZ DB instance.**

**The company wants to optimize customer session management during transactions. The application must store session data durably.**

**Which solutions will meet these requirements? (Choose two.)**

**A. Turn on the sticky sessions feature (session affinity) on the ALB.**

**B. Use an Amazon DynamoDB table to store customer session information. ✅**

**C. Deploy an Amazon Cognito user pool to manage user session information.**

**D. Deploy an Amazon ElastiCache for Redis cluster to store customer session information. ✅**

**E. Use AWS Systems Manager Application Manager in the application to manage user session information.**

**Question 345**

**A company needs a backup strategy for its three-tier stateless web application. The web application runs on Amazon EC2 instances in an Auto Scaling group with a dynamic scaling policy that is configured to respond to scaling events. The database tier runs on Amazon RDS for PostgreSQL. The web application does not require temporary local storage on the EC2 instances. The company’s recovery point objective (RPO) is 2 hours.**

**The backup strategy must maximize scalability and optimize resource utilization for this environment.**

**Which solution will meet these requirements?**

**A. Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances and database every 2 hours to meet the RPO.**

**B. Configure a snapshot lifecycle policy to take Amazon Elastic Block Store (Amazon EBS) snapshots. Enable automated backups in Amazon RDS to meet the RPO.**

**C. Retain the latest Amazon Machine Images (AMIs) of the web and application tiers. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO. ✅**

**D. Take snapshots of Amazon Elastic Block Store (Amazon EBS) volumes of the EC2 instances every 2 hours. Enable automated backups in Amazon RDS and use point-in-time recovery to meet the RPO.**

**Question 346**

**A company wants to deploy a new public web application on AWS. The application includes a web server tier that uses Amazon EC2 instances. The application also includes a database tier that uses an Amazon RDS for MySQL DB instance.**

**The application must be secure and accessible for global customers that have dynamic IP addresses.**

**How should a solutions architect configure the security groups to meet these requirements?**

**A. Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers. ✅**

**B. Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the security group of the web servers.**

**C. Configure the security group for the web servers to allow inbound traffic on port 443 from the IP addresses of the customers. Configure the security group for the DB instance to allow inbound traffic on port 3306 from the IP addresses of the customers.**

**D. Configure the security group for the web servers to allow inbound traffic on port 443 from 0.0.0.0/0. Configure the security group for the DB instance to allow inbound traffic on port 3306 from 0.0.0.0/0.**

**Question 347**

**A payment processing company records all voice communication with its customers and stores the audio files in an Amazon S3 bucket. The company needs to capture the text from the audio files. The company must remove from the text any personally identifiable information (PII) that belongs to customers.**

**What should a solutions architect do to meet these requirements?**

**A. Process the audio files by using Amazon Kinesis Video Streams. Use an AWS Lambda function to scan for known PII patterns.**

**B. When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start an Amazon Textract task to analyze the call recordings.**

**C. Configure an Amazon Transcribe transcription job with PII redaction turned on. When an audio file is uploaded to the S3 bucket, invoke an AWS Lambda function to start the transcription job. Store the output in a separate S3 bucket. ✅**

**D. Create an Amazon Connect contact flow that ingests the audio files with transcription turned on. Embed an AWS Lambda function to scan for known PII patterns. Use Amazon EventBridge to start the contact flow when an audio file is uploaded to the S3 bucket.**

**Question 348**

**A company is running a multi-tier ecommerce web application in the AWS Cloud. The application runs on Amazon EC2 instances with an Amazon RDS for MySQL Multi-AZ DB instance. Amazon RDS is configured with the latest generation DB instance with 2,000 GB of storage in a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. The database performance affects the application during periods of high demand.**

**A database administrator analyzes the logs in Amazon CloudWatch Logs and discovers that the application performance always degrades when the number of read and write IOPS is higher than 20,000.**

**What should a solutions architect do to improve the application performance?**

**A. Replace the volume with a magnetic volume.**

**B. Increase the number of IOPS on the gp3 volume. ✅**

**C. Replace the volume with a Provisioned IOPS SSD (io2) volume.**

**D. Replace the 2,000 GB gp3 volume with two 1,000 GB gp3 volumes.**

**Question 349**

**An IAM user made several configuration changes to AWS resources in their company's account during a production deployment last week. A solutions architect learned that a couple of security group rules are not configured as desired. The solutions architect wants to confirm which IAM user was responsible for making changes.**

**Which service should the solutions architect use to find the desired information?**

**A. Amazon GuardDuty**

**B. Amazon Inspector**

**C. AWS CloudTrail ✅**

**D. AWS Config**

**Question 350**

**A company has implemented a self-managed DNS service on AWS. The solution consists of the following:**

**• Amazon EC2 instances in different AWS Regions**

**• Endpoints of a standard accelerator in AWS Global Accelerator**

**The company wants to protect the solution against DDoS attacks.**

**What should a solutions architect do to meet this requirement?**

**A. Subscribe to AWS Shield Advanced. Add the accelerator as a resource to protect. ✅**

**B. Subscribe to AWS Shield Advanced. Add the EC2 instances as resources to protect.**

**C. Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the accelerator.**

**D. Create an AWS WAF web ACL that includes a rate-based rule. Associate the web ACL with the EC2 instances.**

**Question 351**

**An ecommerce company needs to run a scheduled daily job to aggregate and filter sales records for analytics. The company stores the sales records in an Amazon S3 bucket. Each object can be up to 10 GB in size. Based on the number of sales events, the job can take up to an hour to complete. The CPU and memory usage of the job are constant and are known in advance.**

**A solutions architect needs to minimize the amount of operational effort that is needed for the job to run.**

**Which solution meets these requirements?**

**A. Create an AWS Lambda function that has an Amazon EventBridge notification. Schedule the EventBridge event to run once a day.**

**B. Create an AWS Lambda function. Create an Amazon API Gateway HTTP API, and integrate the API with the function. Create an Amazon EventBridge scheduled event that calls the API and invokes the function.**

**C. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an AWS Fargate launch type. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job. ✅**

**D. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type and an Auto Scaling group with at least one EC2 instance. Create an Amazon EventBridge scheduled event that launches an ECS task on the cluster to run the job.**

**Question 352**

**A company needs to transfer 600 TB of data from its on-premises network-attached storage (NAS) system to the AWS Cloud. The data transfer must be complete within 2 weeks. The data is sensitive and must be encrypted in transit. The company’s internet connection can support an upload speed of 100 Mbps.**

**Which solution meets these requirements MOST cost-effectively?**

**A. Use Amazon S3 multi-part upload functionality to transfer the files over HTTPS.**

**B. Create a VPN connection between the on-premises NAS system and the nearest AWS Region. Transfer the data over the VPN connection.**

**C. Use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices. Use the devices to transfer the data to Amazon S3. ✅**

**D. Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3.**

**Question 353**

**A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API endpoint to give users the ability to retrieve current stock prices. The company’s security team has noticed an increase in the number of API requests. The security team is concerned that HTTP flood attacks might take the application offline.**

**A solutions architect must design a solution to protect the application from this type of attack.**

**Which solution meets these requirements with the LEAST operational overhead?**

**A. Create an Amazon CloudFront distribution in front of the API Gateway Regional API endpoint with a maximum TTL of 24 hours.**

**B. Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web ACL with the API Gateway stage. ✅**

**C. Use Amazon CloudWatch metrics to monitor the Count metric and alert the security team when the predefined rate is reached.**

**D. Create an Amazon CloudFront distribution with Lambda@Edge in front of the API Gateway Regional API endpoint. Create an AWS Lambda function to block requests from IP addresses that exceed the predefined rate.**

**Question 354**

**An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.**

**Which solution will provide private network connectivity to Amazon S3?**

**A. Create a gateway VPC endpoint to the S3 bucket. ✅**

**B. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.**

**C. Create an instance profile on Amazon EC2 to allow S3 access.**

**D. Create an Amazon API Gateway API with a private link to access the S3 endpoint.**

**Question 355**

**A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.**

**The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.**

**What is the MOST operationally efficient solution that meets these requirements?**

**A. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days. ✅**

**B. Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.**

**C. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.**

**D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.**

**Question 356**

**A meteorological startup company has a custom web application to sell weather data to its users online. The company uses Amazon DynamoDB to store its data and wants to build a new service that sends an alert to the managers of four internal teams every time a new weather event is recorded. The company does not want this new service to affect the performance of the current application.**

**What should a solutions architect do to meet these requirements with the LEAST amount of operational overhead?**

**A. Use DynamoDB transactions to write new event data to the table. Configure the transactions to notify internal teams.**  
**B. Have the current application publish a message to four Amazon Simple Notification Service (Amazon SNS) topics. Have each team subscribe to one topic.**  
**C. Enable Amazon DynamoDB Streams on the table. Use triggers to write to a single Amazon Simple Notification Service (Amazon SNS) topic to which the teams can subscribe. ✅**  
**D. Add a custom attribute to each record to flag new items. Write a cron job that scans the table every minute for items that are new and notifies an Amazon Simple Queue Service (Amazon SQS) queue to which the teams can subscribe.**

**Question 357**

**A company wants to use the AWS Cloud to make an existing application highly available and resilient. The current version of the application resides in the company's data center. The application recently experienced data loss after a database server crashed because of an unexpected power outage.**

**The company needs a solution that avoids any single points of failure. The solution must give the application the ability to scale to meet user demand.**

**Which solution will meet these requirements?**

**A. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance in a Multi-AZ configuration. ✅**  
**B. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group in a single Availability Zone. Deploy the database on an EC2 instance. Enable EC2 Auto Recovery.**  
**C. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon RDS DB instance with a read replica in a single Availability Zone. Promote the read replica to replace the primary DB instance if the primary DB instance fails.**  
**D. Deploy the application servers by using Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy the primary and secondary database servers on EC2 instances across multiple Availability Zones. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach to create shared storage between the instances.**

**Question 358**

**A company needs to ingest and handle large amounts of streaming data that its application generates. The application runs on Amazon EC2 instances and sends data to Amazon Kinesis Data Streams, which is configured with default settings. Every other day, the application consumes the data and writes the data to an Amazon S3 bucket for business intelligence (BI) processing. The company observes that Amazon S3 is not receiving all the data that the application sends to Kinesis Data Streams.**

**What should a solutions architect do to resolve this issue?**

**A. Update the Kinesis Data Streams default settings by modifying the data retention period. ✅**  
**B. Update the application to use the Kinesis Producer Library (KPL) to send the data to Kinesis Data Streams.**  
**C. Update the number of Kinesis shards to handle the throughput of the data that is sent to Kinesis Data Streams.**  
**D. Turn on S3 Versioning within the S3 bucket to preserve every version of every object that is ingested in the S3 bucket.**

**Question 359**

**A developer has an application that uses an AWS Lambda function to upload files to Amazon S3 and needs the required permissions to perform the task. The developer already has an IAM user with valid IAM credentials required for Amazon S3.**

**What should a solutions architect do to grant the permissions?**

**A. Add required IAM permissions in the resource policy of the Lambda function.**  
**B. Create a signed request using the existing IAM credentials in the Lambda function.**  
**C. Create a new IAM user and use the existing IAM credentials in the Lambda function.**  
**D. Create an IAM execution role with the required permissions and attach the IAM role to the Lambda function. ✅**

**Question 360**

**A company has deployed a serverless application that invokes an AWS Lambda function when new documents are uploaded to an Amazon S3 bucket. The application uses the Lambda function to process the documents. After a recent marketing campaign, the company noticed that the application did not process many of the documents.**

**What should a solutions architect do to improve the architecture of this application?**

**A. Set the Lambda function's runtime timeout value to 15 minutes.**  
**B. Configure an S3 bucket replication policy. Stage the documents in the S3 bucket for later processing.**  
**C. Deploy an additional Lambda function. Load balance the processing of the documents across the two Lambda functions.**  
**D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Send the requests to the queue. Configure the queue as an event source for Lambda. ✅**

**Question 361**

**A solutions architect is designing the architecture for a software demonstration environment. The environment will run on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The system will experience significant increases in traffic during working hours but is not required to operate on weekends.**

**Which combination of actions should the solutions architect take to ensure that the system can scale to meet demand? (Choose two.)**

**A. Use AWS Auto Scaling to adjust the ALB capacity based on request rate.**  
**B. Use AWS Auto Scaling to scale the capacity of the VPC internet gateway.**  
**C. Launch the EC2 instances in multiple AWS Regions to distribute the load across Regions.**  
**D. Use a target tracking scaling policy to scale the Auto Scaling group based on instance CPU utilization. ✅**  
**E. Use scheduled scaling to change the Auto Scaling group minimum, maximum, and desired capacity to zero for weekends. Revert to the default values at the start of the week. ✅**

**Question 362**

**A solutions architect is designing a two-tiered architecture that includes a public subnet and a database subnet. The web servers in the public subnet must be open to the internet on port 443\. The Amazon RDS for MySQL DB instance in the database subnet must be accessible only to the web servers on port 3306\.**

**Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)**

**A. Create a network ACL for the public subnet. Add a rule to deny outbound traffic to 0.0.0.0/0 on port 3306\.**  
**B. Create a security group for the DB instance. Add a rule to allow traffic from the public subnet CIDR block on port 3306\.**  
**C. Create a security group for the web servers in the public subnet. Add a rule to allow traffic from 0.0.0.0/0 on port 443\. ✅**  
**D. Create a security group for the DB instance. Add a rule to allow traffic from the web servers’ security group on port 3306\. ✅**  
**E. Create a security group for the DB instance. Add a rule to deny all traffic except traffic from the web servers’ security group on port 3306\.**

**Question 363**

**A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.**

**Which solution meets these requirements?**

**A. Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.**  
**B. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.**  
**C. Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.**  
**D. Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system. ✅**

**Question 364**

**A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored.**

**The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region.**

**Which solution will meet these requirements?**

**A. Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data.**  
**B. Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLB. Process the data in Amazon ECS. ✅**  
**C. Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.**  
**D. Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS.**

**Question 365**

**A solutions architect must migrate a Windows Internet Information Services (IIS) web application to AWS. The application currently relies on a file share hosted in the user's on-premises network-attached storage (NAS). The solutions architect has proposed migrating the IIS web servers to Amazon EC2 instances in multiple Availability Zones that are connected to the storage solution, and configuring an Elastic Load Balancer attached to the instances.**

**Which replacement to the on-premises file share is MOST resilient and durable?**

**A. Migrate the file share to Amazon RDS.**  
**B. Migrate the file share to AWS Storage Gateway.**  
**C. Migrate the file share to Amazon FSx for Windows File Server. ✅**  
**D. Migrate the file share to Amazon Elastic File System (Amazon EFS).**

**Question 366**

**A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.**  
**B. Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete. ✅**  
**C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.**  
**D. Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.**

**Question 367**

**A company is deploying a new application on Amazon EC2 instances. The application writes data to Amazon Elastic Block Store (Amazon EBS) volumes. The company needs to ensure that all data that is written to the EBS volumes is encrypted at rest.**

**Which solution will meet this requirement?**

**A. Create an IAM role that specifies EBS encryption. Attach the role to the EC2 instances.**  
**B. Create the EBS volumes as encrypted volumes. Attach the EBS volumes to the EC2 instances. ✅**  
**C. Create an EC2 instance tag that has a key of Encrypt and a value of True. Tag all instances that require encryption at the EBS level.**  
**D. Create an AWS Key Management Service (AWS KMS) key policy that enforces EBS encryption in the account. Ensure that the key policy is active.**

**Question 368**

**A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modifications.**

**Which solution will meet these requirements?**

**A. Amazon DynamoDB**  
**B. Amazon RDS for MySQL. ✅**  
**C. MySQL-compatible Amazon Aurora Serverless**  
**D. MySQL deployed on Amazon EC2 in an Auto Scaling group**

**Question 369**

**An image-hosting company stores its objects in Amazon S3 buckets. The company wants to avoid accidental exposure of the objects in the S3 buckets to the public. All S3 objects in the entire AWS account need to remain private.**

**Which solution will meet these requirements?**

**A. Use Amazon GuardDuty to monitor S3 bucket policies. Create an automatic remediation action rule that uses an AWS Lambda function to remediate any change that makes the objects public.**  
**B. Use AWS Trusted Advisor to find publicly accessible S3 buckets. Configure email notifications in Trusted Advisor when a change is detected. Manually change the S3 bucket policy if it allows public access.**  
**C. Use AWS Resource Access Manager to find publicly accessible S3 buckets. Use Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function when a change is detected. Deploy a Lambda function that programmatically remediates the change.**  
**D. Use the S3 Block Public Access feature on the account level. Use AWS Organizations to create a service control policy (SCP) that prevents IAM users from changing the setting. Apply the SCP to the account. ✅**

**Question 370**

**An ecommerce company is experiencing an increase in user traffic. The company’s store is deployed on Amazon EC2 instances as a two-tier web application consisting of a web tier and a separate database tier. As traffic increases, the company notices that the architecture is causing significant delays in sending timely marketing and order confirmation email to users. The company wants to reduce the time it spends resolving complex email delivery issues and minimize operational overhead.**

**What should a solutions architect do to meet these requirements?**

**A. Create a separate application tier using EC2 instances dedicated to email processing.**  
**B. Configure the web instance to send email through Amazon Simple Email Service (Amazon SES). ✅**  
**C. Configure the web instance to send email through Amazon Simple Notification Service (Amazon SNS).**  
**D. Create a separate application tier using EC2 instances dedicated to email processing. Place the instances in an Auto Scaling group.**

**Question 371**

**A company has a business system that generates hundreds of reports each day. The business system saves the reports to a network share in CSV format. The company needs to store this data in the AWS Cloud in near-real time for analysis.**

**Which solution will meet these requirements with the LEAST administrative overhead?**

**A. Use AWS DataSync to transfer the files to Amazon S3. Create a scheduled task that runs at the end of each day.**  
**B. Create an Amazon S3 File Gateway. Update the business system to use a new network share from the S3 File Gateway. ✅**  
**C. Use AWS DataSync to transfer the files to Amazon S3. Create an application that uses the DataSync API in the automation workflow.**  
**D. Deploy an AWS Transfer for SFTP endpoint. Create a script that checks for new files on the network share and uploads the new files by using SFTP.**

**Question 372**

**A company is storing petabytes of data in Amazon S3 Standard. The data is stored in multiple S3 buckets and is accessed with varying frequency. The company does not know access patterns for all the data. The company needs to implement a solution for each S3 bucket to optimize the cost of S3 usage.**

**Which solution will meet these requirements with the MOST operational efficiency?**

**A. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Intelligent-Tiering. ✅**  
**B. Use the S3 storage class analysis tool to determine the correct tier for each object in the S3 bucket. Move each object to the identified storage tier.**  
**C. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 Glacier Instant Retrieval.**  
**D. Create an S3 Lifecycle configuration with a rule to transition the objects in the S3 bucket to S3 One Zone-Infrequent Access (S3 One Zone-IA).**

**Question 373**

**A rapidly growing global ecommerce company is hosting its web application on AWS. The web application includes static content and dynamic content. The website stores online transaction processing (OLTP) data in an Amazon RDS database The website’s users are experiencing slow page loads.**

**Which combination of actions should a solutions architect take to resolve this issue? (Choose two.)**

**A. Configure an Amazon Redshift cluster.**  
**B. Set up an Amazon CloudFront distribution. ✅**  
**C. Host the dynamic web content in Amazon S3.**  
**D. Create a read replica for the RDS DB instance. ✅**  
**E. Configure a Multi-AZ deployment for the RDS DB instance.**

**Question 374**

**A company uses Amazon EC2 instances and AWS Lambda functions to run its application. The company has VPCs with public subnets and private subnets in its AWS account. The EC2 instances run in a private subnet in one of the VPCs. The Lambda functions need direct network access to the EC2 instances for the application to work.**

**The application will run for at least 1 year. The company expects the number of Lambda functions that the application uses to increase during that time. The company wants to maximize its savings on all application resources and to keep network latency between the services low.**

**Which solution will meet these requirements?**

**A. Purchase an EC2 Instance Savings Plan Optimize the Lambda functions’ duration and memory usage and the number of invocations. Connect the Lambda functions to the private subnet that contains the EC2 instances.**  
**B. Purchase an EC2 Instance Savings Plan Optimize the Lambda functions' duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to a public subnet in the same VPC where the EC2 instances run.**  
**C. Purchase a Compute Savings Plan. Optimize the Lambda functions’ duration and memory usage, the number of invocations, and the amount of data that is transferred. Connect the Lambda functions to the private subnet that contains the EC2 instances. ✅**  
**D. Purchase a Compute Savings Plan. Optimize the Lambda functions’ duration and memory usage, the number of invocations, and the amount of data that is transferred. Keep the Lambda functions in the Lambda service VPC.**

**Question 375**

**A solutions architect needs to allow team members to access Amazon S3 buckets in two different AWS accounts: a development account and a production account. The team currently has access to S3 buckets in the development account by using unique IAM users that are assigned to an IAM group that has appropriate permissions in the account.**

**The solutions architect has created an IAM role in the production account. The role has a policy that grants access to an S3 bucket in the production account.**

**Which solution will meet these requirements while complying with the principle of least privilege?**

**A. Attach the Administrator Access policy to the development account users.**  
**B. Add the development account as a principal in the trust policy of the role in the production account. ✅**  
**C. Turn off the S3 Block Public Access feature on the S3 bucket in the production account.**  
**D. Create a user in the production account with unique credentials for each team member.**

**Question 381**

**A solutions architect wants to use the following JSON text as an identity-based policy to grant specific permissions:**

![Question][image1]

**Which IAM principals can the solutions architect attach this policy to? (Choose two.)**

**A. Role ✅**  
**B. Group✅**  
**C. Organization**  
**D. Amazon Elastic Container Service (Amazon ECS) resource**  
**E. Amazon EC2 resource**

**Question 382**

**A company is running a custom application on Amazon EC2 On-Demand Instances. The application has frontend nodes that need to run 24 hours a day, 7 days a week and backend nodes that need to run only for a short time based on workload. The number of backend nodes varies during the day.**

**The company needs to scale out and scale in more instances based on workload.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Use Reserved Instances for the frontend nodes. Use AWS Fargate for the backend nodes.**  
**B. Use Reserved Instances for the frontend nodes. Use Spot Instances for the backend nodes. ✅**  
**C. Use Spot Instances for the frontend nodes. Use Reserved Instances for the backend nodes.**  
**D. Use Spot Instances for the frontend nodes. Use AWS Fargate for the backend nodes.**

**Question 383**

**A company uses high block storage capacity to runs its workloads on premises. The company's daily peak input and output transactions per second are not more than 15,000 IOPS. The company wants to migrate the workloads to Amazon EC2 and to provision disk performance independent of storage capacity.**

**Which Amazon Elastic Block Store (Amazon EBS) volume type will meet these requirements MOST cost-effectively?**

**A. GP2 volume type**  
**B. io2 volume type**  
**C. GP3 volume type ✅**  
**D. io1 volume type**

**Question 384**

**A company needs to store data from its healthcare application. The application’s data frequently changes. A new regulation requires audit access at all levels of the stored data.**

**The company hosts the application on an on-premises infrastructure that is running out of storage capacity. A solutions architect must securely migrate the existing data to AWS while satisfying the new regulation.**

**Which solution will meet these requirements?**

**A. Use AWS DataSync to move the existing data to Amazon S3. Use AWS CloudTrail to log data events. ✅**  
**B. Use AWS Snowcone to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.**  
**C. Use Amazon S3 Transfer Acceleration to move the existing data to Amazon S3. Use AWS CloudTrail to log data events.**  
**D. Use AWS Storage Gateway to move the existing data to Amazon S3. Use AWS CloudTrail to log management events.**

**Question 385**

**A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be highly available.**

**What should the solutions architect do to meet these requirements?**

**A. Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda functions.**  
**B. Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy. ✅**  
**C. Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from the application.**  
**D. Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group.**

**Question 386**

**A serverless application uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. The Lambda function needs permissions to read and write to the DynamoDB table.**

**Which solution will give the Lambda function access to the DynamoDB table MOST securely?**

**A. Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access\_key\_id and secret\_access\_key parameters as part of the Lambda environment variables. Ensure that other AWS users do not have read and write access to the Lambda function configuration.**

**B. Create an IAM role that includes Lambda as a trusted service. Attach a policy to the role that allows read and write access to the DynamoDB table. Update the configuration of the Lambda function to use the new role as the execution role. ✅**

**C. Create an IAM user with programmatic access to the Lambda function. Attach a policy to the user that allows read and write access to the DynamoDB table. Store the access\_key\_id and secret\_access\_key parameters in AWS Systems Manager Parameter Store as secure string parameters. Update the Lambda function code to retrieve the secure string parameters before connecting to the DynamoDB table.**

**D. Create an IAM role that includes DynamoDB as a trusted service. Attach a policy to the role that allows read and write access from the Lambda function. Update the code of the Lambda function to attach to the new role as an execution role.**

**Question 387**

**The following IAM policy is attached to an IAM group. This is the only policy applied to the group.**

**![Question][image2]**

**What are the effective IAM permissions of this policy for group members?**

**A. Group members are permitted any Amazon EC2 action within the us-east-1 Region. Statements after the Allow permission are not applied.**

**B. Group members are denied any Amazon EC2 permissions in the us-east-1 Region unless they are logged in with multi-factor authentication (MFA).**

**C. Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for all Regions when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action.**

**D.**

**Group members are allowed the ec2:StopInstances and ec2:TerminateInstances permissions for the us-east-1 Region only when logged in with multi-factor authentication (MFA). Group members are permitted any other Amazon EC2 action within the us-east-1 Region. ✅**

**Question 388**

**A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.**

**Which solution meets these requirements?**

**A. Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.**  
**B. Establish a new AWS Direct Connect connection and direct backup traffic through this new connection. ✅**  
**C. Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.**  
**D. Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.**

**Question 389**

**A manufacturing company has machine sensors that upload .csv files to an Amazon S3 bucket. These .csv files must be converted into images and must be made available as soon as possible for the automatic generation of graphical reports.**

**The images become irrelevant after 1 month, but the .csv files must be kept to train machine learning (ML) models twice a year. The ML trainings and audits are planned weeks in advance.**

**Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)**

**A. Launch an Amazon EC2 Spot Instance that downloads the .csv files every hour, generates the image files, and uploads the images to the S3 bucket.**  
**B. Design an AWS Lambda function that converts the .csv files into images and stores the images in the S3 bucket. Invoke the Lambda function when a .csv file is uploaded. ✅**  
**C. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Glacier 1 day after they are uploaded. Expire the image files after 30 days.**  
**D. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 day after they are uploaded. Expire the image files after 30 days. ✅**  
**E. Create S3 Lifecycle rules for .csv files and image files in the S3 bucket. Transition the .csv files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 1 day after they are uploaded. Keep the image files in Reduced Redundancy Storage (RRS).**

**Question 390**

**A company has developed a new video game as a web application. The application is in a three-tier architecture in a VPC with Amazon RDS for MySQL in the database layer. Several players will compete concurrently online. The game’s developers want to display a top-10 scoreboard in near-real time and offer the ability to stop and restore the game while preserving the current scores.**

**What should a solutions architect do to meet these requirements?**

**A. Set up an Amazon ElastiCache for Memcached cluster to cache the scores for the web application to display.**  
**B. Set up an Amazon ElastiCache for Redis cluster to compute and cache the scores for the web application to display. ✅**  
**C. Place an Amazon CloudFront distribution in front of the web application to cache the scoreboard in a section of the application.**  
**D. Create a read replica on Amazon RDS for MySQL to run queries to compute the scoreboard and serve the read traffic to the web application.**

**Question 391**

An ecommerce company wants to use machine learning (ML) algorithms to build and train models. The company will use the models to visualize complex scenarios and to detect trends in customer data. The architecture team wants to integrate its ML models with a reporting platform to analyze the augmented data and use the data directly in its business intelligence dashboards.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Glue to create an ML transform to build and train models. Use Amazon OpenSearch Service to visualize the data.

**B. Use Amazon SageMaker to build and train models. Use Amazon QuickSight to visualize the data. ✅**

C. Use a pre-built ML Amazon Machine Image (AMI) from the AWS Marketplace to build and train models. Use Amazon OpenSearch Service to visualize the data.

D. Use Amazon QuickSight to build and train models by using calculated fields. Use Amazon QuickSight to visualize the data.

**Question 392**

A company is running its production and nonproduction environment workloads in multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to design a solution that will prevent the modification of cost usage tags.

Which solution will meet these requirements?

A. Create a custom AWS Config rule to prevent tag modification except by authorized principals.

B. Create a custom trail in AWS CloudTrail to prevent tag modification.

**C. Create a service control policy (SCP) to prevent tag modification except by authorized principals. ✅**

D. Create custom Amazon CloudWatch logs to prevent tag modification.

**Question 393**

A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances behind an Elastic Load Balancer in an Auto Scaling group and with an Amazon DynamoDB table. The company wants to ensure the application can be made available in another AWS Region with minimal downtime.

What should a solutions architect do to meet these requirements with the LEAST amount of downtime?

A. Create an Auto Scaling group and a load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer.

B. Create an AWS CloudFormation template to create EC2 instances, load balancers, and DynamoDB tables to be launched when needed Configure DNS failover to point to the new disaster recovery Region's load balancer.

**C. Create an AWS CloudFormation template to create EC2 instances and a load balancer to be launched when needed. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new disaster recovery Region's load balancer. ✅**

D. Create an Auto Scaling group and load balancer in the disaster recovery Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm to trigger an AWS Lambda function that updates Amazon Route 53 pointing to the disaster recovery load balancer.

**Question 394**

A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The database is 20 TB in size. The company wants to complete the migration with minimal downtime.

Which solution will migrate the database MOST cost-effectively?

**A. Order an AWS Snowball Edge Storage Optimized device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes. Send the Snowball Edge device to AWS to finish the migration and continue the ongoing replication. ✅**

B. Order an AWS Snowmobile vehicle. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowmobile vehicle back to AWS to finish the migration and continue the ongoing replication.

C. Order an AWS Snowball Edge Compute Optimized with GPU device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowball device to AWS to finish the migration and continue the ongoing replication

D. Order a 1 GB dedicated AWS Direct Connect connection to establish a connection with the data center. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes.

**Question 395**

A company moved its on-premises PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. The company successfully launched a new product. The workload on the database has increased. The company wants to accommodate the larger workload without adding infrastructure.

Which solution will meet these requirements MOST cost-effectively?

**A. Buy reserved DB instances for the total workload. Make the Amazon RDS for PostgreSQL DB instance larger. ✅**

B. Make the Amazon RDS for PostgreSQL DB instance a Multi-AZ DB instance.

C. Buy reserved DB instances for the total workload. Add another Amazon RDS for PostgreSQL DB instance.

D. Make the Amazon RDS for PostgreSQL DB instance an on-demand DB instance.

**Question 396**

A company operates an ecommerce website on Amazon EC2 instances behind an Application Load Balancer (ALB) in an Auto Scaling group. The site is experiencing performance issues related to a high request rate from illegitimate external systems with changing IP addresses. The security team is worried about potential DDoS attacks against the website. The company must block the illegitimate incoming requests in a way that has a minimal impact on legitimate users.

What should a solutions architect recommend?

A. Deploy Amazon Inspector and associate it with the ALB.

**B. Deploy AWS WAF, associate it with the ALB, and configure a rate-limiting rule. ✅**

C. Deploy rules to the network ACLs associated with the ALB to block the incomingtraffic.

D. Deploy Amazon GuardDuty and enable rate-limiting protection when configuring GuardDuty.

**Question 397**

A company wants to share accounting data with an external auditor. The data is stored in an Amazon RDS DB instance that resides in a private subnet. The auditor has its own AWS account and requires its own copy of the database.

What is the MOST secure way for the company to share the database with the auditor?

A. Create a read replica of the database. Configure IAM standard database authentication to grant the auditor access.

B. Export the database contents to text files. Store the files in an Amazon S3 bucket. Create a new IAM user for the auditor. Grant the user access to the S3 bucket.

C. Copy a snapshot of the database to an Amazon S3 bucket. Create an IAM user. Share the user's keys with the auditor to grant access to the object in the S3 bucket.

**D. Create an encrypted snapshot of the database. Share the snapshot with the auditor. Allow access to the AWS Key Management Service (AWS KMS) encryption key. ✅**

**Question 398**

A solutions architect configured a VPC that has a small range of IP addresses. The number of Amazon EC2 instances that are in the VPC is increasing, and there is an insufficient number of IP addresses for future workloads.

Which solution resolves this issue with the LEAST operational overhead?

**A. Add an additional IPv4 CIDR block to increase the number of IP addresses and create additional subnets in the VPC. Create new resources in the new subnets by using the new CIDR. ✅**

B. Create a second VPC with additional subnets. Use a peering connection to connect the second VPC with the first VPC Update the routes and create new resources in the subnets of the second VPC.

C. Use AWS Transit Gateway to add a transit gateway and connect a second VPC with the first VPUpdate the routes of the transit gateway and VPCs. Create new resources in the subnets of the second VPC.

D. Create a second VPC. Create a Site-to-Site VPN connection between the first VPC and the second VPC by using a VPN-hosted solution on Amazon EC2 and a virtual private gateway. Update the route between VPCs to the traffic through the VPN. Create new resources in the subnets of the second VPC.

**Question 399**

A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

**A. Enable versioning on the S3 bucket. ✅**

**B. Enable MFA Delete on the S3 bucket. ✅**

C. Create a bucket policy on the S3 bucket.

D. Enable default encryption on the S3 bucket.

E. Create a lifecycle policy for the objects in the S3 bucket.

**Question 400**

A company used an Amazon RDS for MySQL DB instance during application testing. Before terminating the DB instance at the end of the test cycle, a solutions architect created two backups. The solutions architect created the first backup by using the mysqldump utility to create a database dump. The solutions architect created the second backup by enabling the final DB snapshot option on RDS termination.

The company is now planning for a new test cycle and wants to create a new DB instance from the most recent backup. The company has chosen a MySQL-compatible edition of Amazon Aurora to host the DB instance.

Which solutions will create the new DB instance? (Choose two.)

A. Import the RDS snapshot directly into Aurora.

B. Upload the RDS snapshot to Amazon S3. Then import the RDS snapshot into Aurora.

**C. Upload the database dump to Amazon S3. Then import the database dump into Aurora. ✅**

D. Use AWS Database Migration Service (AWS DMS) to import the RDS snapshot into Aurora.

**E. Upload the database dump to Amazon S3. Then use AWS Database Migration Service (AWS DMS) to import the database dump into Aurora. ✅**
