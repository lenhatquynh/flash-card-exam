**Question 801**

**A financial company needs to handle highly sensitive data. The company will store the data in an Amazon S3 bucket. The company needs to ensure that the data is encrypted in transit and at rest. The company must manage the encryption keys outside the AWS Cloud.**

**Which solution will meet these requirements?**

**A. Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management Service (AWS KMS) customer managed key.**

**B. Encrypt the data in the S3 bucket with server-side encryption (SSE) that uses an AWS Key Management Service (AWS KMS) AWS managed key.**

**C. Encrypt the data in the S3 bucket with the default server-side encryption (SSE).**

**D. Encrypt the data at the company's data center before storing the data in the S3 bucket. ✅**

**────────────────────────────────────**

**Question 802**

**A company wants to run its payment application on AWS. The application receives payment notifications from mobile devices. Payment notifications require a basic validation before they are sent for further processing.**

**The backend processing application is long running and requires compute and memory to be adjusted. The company does not want to manage the infrastructure.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Kubernetes Service (Amazon EKS) Anywhere. Create a standalone cluster.**

**B. Create an Amazon API Gateway API. Integrate the API with an AWS Step Functions state machine to receive payment notifications from mobile devices. Invoke the state machine to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure an EKS cluster with self-managed nodes.**

**C. Create an Amazon Simple Queue Service (Amazon SQS) queue. Integrate the queue with an Amazon EventBridge rule to receive payment notifications from mobile devices. Configure the rule to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon EC2 Spot Instances. Configure a Spot Fleet with a default allocation strategy.**

**D. Create an Amazon API Gateway API. Integrate the API with AWS Lambda to receive payment notifications from mobile devices. Invoke a Lambda function to validate payment notifications and send the notifications to the backend application. Deploy the backend application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon ECS with an AWS Fargate launch type. ✅**

**────────────────────────────────────**

**Question 803**

**A solutions architect is designing a user authentication solution for a company. The solution must invoke two-factor authentication for users that log in from inconsistent geographical locations, IP addresses, or devices. The solution must also be able to scale up to accommodate millions of users.**

**Which solution will meet these requirements?**

**A. Configure Amazon Cognito user pools for user authentication. Enable the risk-based adaptive authentication feature with multifactor authentication (MFA). ✅**

**B. Configure Amazon Cognito identity pools for user authentication. Enable multi-factor authentication (MFA).**

**C. Configure AWS Identity and Access Management (IAM) users for user authentication. Attach an IAM policy that allows the AllowManageOwnUserMFA action.**

**D. Configure AWS IAM Identity Center (AWS Single Sign-On) authentication for user authentication. Configure the permission sets to require multi-factor authentication (MFA).**

**────────────────────────────────────**

**Question 804**

**A company has an Amazon S3 data lake. The company needs a solution that transforms the data from the data lake and loads the data into a data warehouse every day. The data warehouse must have massively parallel processing (MPP) capabilities.**

**Data analysts then need to create and train machine learning (ML) models by using SQL commands on the data. The solution must use serverless AWS services wherever possible.**

**Which solution will meet these requirements?**

**A. Run a daily Amazon EMR job to transform the data and load the data into Amazon Redshift. Use Amazon Redshift ML to create and train the ML models.**

**B. Run a daily Amazon EMR job to transform the data and load the data into Amazon Aurora Serverless. Use Amazon Aurora ML to create and train the ML models.**

**C. Run a daily AWS Glue job to transform the data and load the data into Amazon Redshift Serverless. Use Amazon Redshift ML to create and train the ML models. ✅**

**D. Run a daily AWS Glue job to transform the data and load the data into Amazon Athena tables. Use Amazon Athena ML to create and train the ML models.**

**────────────────────────────────────**

**Question 805**

**A company runs containers in a Kubernetes environment in the company's local data center. The company wants to use Amazon Elastic Kubernetes Service (Amazon EKS) and other AWS managed services. Data must remain locally in the company's data center and cannot be stored in any remote site or cloud to maintain compliance.**

**Which solution will meet these requirements?**

**A. Deploy AWS Local Zones in the company's data center.**

**B. Use an AWS Snowmobile in the company's data center.**

**C. Install an AWS Outposts rack in the company's data center. ✅**

**D. Install an AWS Snowball Edge Storage Optimized node in the data center.**

**────────────────────────────────────**

**Question 806**

**A social media company has workloads that collect and process data. The workloads store the data in on-premises NFS storage. The data store cannot scale fast enough to meet the company’s expanding business needs. The company wants to migrate the current data store to AWS.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Set up an AWS Storage Gateway Volume Gateway. Use an Amazon S3 Lifecycle policy to transition the data to the appropriate storage class.**

**B. Set up an AWS Storage Gateway Amazon S3 File Gateway. Use an Amazon S3 Lifecycle policy to transition the data to the appropriate storage class. ✅**

**C. Use the Amazon Elastic File System (Amazon EFS) Standard-Infrequent Access (Standard-IA) storage class. Activate the infrequent access lifecycle policy.**

**D. Use the Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA) storage class. Activate the infrequent access lifecycle policy.**

**────────────────────────────────────**

**Question 807**

**A company uses high concurrency AWS Lambda functions to process a constantly increasing number of messages in a message queue during marketing events. The Lambda functions use CPU intensive code to process the messages. The company wants to reduce the compute costs and to maintain service latency for its customers.**

**Which solution will meet these requirements?**

**A. Configure reserved concurrency for the Lambda functions. Decrease the memory allocated to the Lambda functions.**

**B. Configure reserved concurrency for the Lambda functions. Increase the memory according to AWS Compute Optimizer recommendations.**

**C. Configure provisioned concurrency for the Lambda functions. Decrease the memory allocated to the Lambda functions.**

**D. Configure provisioned concurrency for the Lambda functions. Increase the memory according to AWS Compute Optimizer recommendations. ✅**

**────────────────────────────────────**

**Question 808**

**A company runs its workloads on Amazon Elastic Container Service (Amazon ECS). The container images that the ECS task definition uses need to be scanned for Common Vulnerabilities and Exposures (CVEs). New container images that are created also need to be scanned.**

**Which solution will meet these requirements with the FEWEST changes to the workloads?**

**A. Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository to store the container images. Specify scan on push filters for the ECR basic scan. ✅**

**B. Store the container images in an Amazon S3 bucket. Use Amazon Macie to scan the images. Use an S3 Event Notification to initiate a Macie scan for every event with an s3:ObjectCreated:Put event type.**

**C. Deploy the workloads to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Container Registry (Amazon ECR) as a private image repository. Specify scan on push filters for the ECR enhanced scan.**

**D. Store the container images in an Amazon S3 bucket that has versioning enabled. Configure an S3 Event Notification for s3:ObjectCreated:\* events to invoke an AWS Lambda function. Configure the Lambda function to initiate an Amazon Inspector scan.**

**────────────────────────────────────**

**Question 809**

**A company uses an AWS Batch job to run its end-of-day sales process. The company needs a serverless solution that will invoke a third-party reporting application when the AWS Batch job is successful. The reporting application has an HTTP API interface that uses username and password authentication.**

**Which solution will meet these requirements?**

**A. Configure an Amazon EventBridge rule to match incoming AWS Batch job SUCCEEDED events. Configure the third-party API as an EventBridge API destination with a username and password. Set the API destination as the EventBridge rule target. ✅**

**B. Configure Amazon EventBridge Scheduler to match incoming AWS Batch job SUCCEEDED events. Configure an AWS Lambda function to invoke the third-party API by using a username and password. Set the Lambda function as the EventBridge rule target.**

**C. Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure an HTTP proxy integration on the API Gateway REST API to invoke the third-party API by using a username and password.**

**D. Configure an AWS Batch job to publish job SUCCEEDED events to an Amazon API Gateway REST API. Configure a proxy integration on the API Gateway REST API to an AWS Lambda function. Configure the Lambda function to invoke the third-party API by using a username and password.**

**────────────────────────────────────**

**Question 810**

**A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.**

**Which design should the solutions architect use?**

**A. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.**

**B. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.**

**C. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue. ✅**

**D. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.**

**────────────────────────────────────**

**Question 811**

**A company collects and processes data from a vendor. The vendor stores its data in an Amazon RDS for MySQL database in the vendor's own AWS account. The company’s VPC does not have an internet gateway, an AWS Direct Connect connection, or an AWS Site-to-Site VPN connection. The company needs to access the data that is in the vendor database.**

**Which solution will meet this requirement?**

**A. Instruct the vendor to sign up for the AWS Hosted Connection Direct Connect Program. Use VPC peering to connect the company's VPC and the vendor's VPC.**

**B. Configure a client VPN connection between the company's VPC and the vendor's VPC. Use VPC peering to connect the company's VPC and the vendor's VPC.**

**C. Instruct the vendor to create a Network Load Balancer (NLB). Place the NLB in front of the Amazon RDS for MySQL database. Use AWS PrivateLink to integrate the company's VPC and the vendor's VPC. ✅**

**D. Use AWS Transit Gateway to integrate the company's VPC and the vendor's VPC. Use VPC peering to connect the company’s VPC and the vendor's VPC.**

**────────────────────────────────────**

**Question 812**

**A company wants to set up Amazon Managed Grafana as its visualization tool. The company wants to visualize data from its Amazon RDS database as one data source. The company needs a secure solution that will not expose the data over the internet.**

**Which solution will meet these requirements?**

**A. Create an Amazon Managed Grafana workspace without a VPC. Create a public endpoint for the RDS database. Configure the public endpoint as a data source in Amazon Managed Grafana.**

**B. Create an Amazon Managed Grafana workspace in a VPC. Create a private endpoint for the RDS database. Configure the private endpoint as a data source in Amazon Managed Grafana. ✅**

**C. Create an Amazon Managed Grafana workspace without a VPC. Create an AWS PrivateLink endpoint to establish a connection between Amazon Managed Grafana and Amazon RDS. Set up Amazon RDS as a data source in Amazon Managed Grafana.**

**D. Create an Amazon Managed Grafana workspace in a VPC. Create a public endpoint for the RDS database. Configure the public endpoint as a data source in Amazon Managed Grafana.**

**────────────────────────────────────**

**Question 813**

**A company hosts a data lake on Amazon S3. The data lake ingests data in Apache Parquet format from various data sources. The company uses multiple transformation steps to prepare the ingested data. The steps include filtering of anomalies, normalizing of data to standard date and time values, and generation of aggregates for analyses.**

**The company must store the transformed data in S3 buckets that data analysts access. The company needs a prebuilt solution for data transformation that does not require code. The solution must provide data lineage and data profiling. The company needs to share the data transformation steps with employees throughout the company.**

**Which solution will meet these requirements?**

**A. Configure an AWS Glue Studio visual canvas to transform the data. Share the transformation steps with employees by using AWS Glue jobs.**

**B. Configure Amazon EMR Serverless to transform the data. Share the transformation steps with employees by using EMR Serverless jobs.**

**C. Configure AWS Glue DataBrew to transform the data. Share the transformation steps with employees by using DataBrew recipes. ✅**

**D. Create Amazon Athena tables for the data. Write Athena SQL queries to transform the data. Share the Athena SQL queries with employees.**

**────────────────────────────────────**

**Question 814**

**A solutions architect runs a web application on multiple Amazon EC2 instances that are in individual target groups behind an Application Load Balancer (ALB). Users can reach the application through a public website.**

**The solutions architect wants to allow engineers to use a development version of the website to access one specific development EC2 instance to test new features for the application. The solutions architect wants to use an Amazon Route 53 hosted zone to give the engineers access to the development instance. The solution must automatically route to the development instance even if the development instance is replaced.**

**Which solution will meet these requirements?**

**A. Create an A Record for the development website that has the value set to the ALB. Create a listener rule on the ALB that forwards requests for the development website to the target group that contains the development instance. ✅**

**B. Recreate the development instance with a public IP address. Create an A Record for the development website that has the value set to the public IP address of the development instance.**

**C. Create an A Record for the development website that has the value set to the ALB. Create a listener rule on the ALB to redirect requests for the development website to the public IP address of the development instance.**

**D. Place all the instances in the same target group. Create an A Record for the development website. Set the value to the ALB. Create a listener rule on the ALB that forwards requests for the development website to the target group.**

**────────────────────────────────────**

**Question 815**

**A company runs a container application on a Kubernetes cluster in the company's data center. The application uses Advanced Message Queuing Protocol (AMQP) to communicate with a message queue. The data center cannot scale fast enough to meet the company’s expanding business needs. The company wants to migrate the workloads to AWS.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Migrate the container application to Amazon Elastic Container Service (Amazon ECS). Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages.**

**B. Migrate the container application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon MQ to retrieve the messages. ✅**

**C. Use highly available Amazon EC2 instances to run the application. Use Amazon MQ to retrieve the messages.**

**D. Use AWS Lambda functions to run the application. Use Amazon Simple Queue Service (Amazon SQS) to retrieve the messages.**

**────────────────────────────────────**

**Question 816**

**An online gaming company hosts its platform on Amazon EC2 instances behind Network Load Balancers (NLBs) across multiple AWS Regions. The NLBs can route requests to targets over the internet. The company wants to improve the customer playing experience by reducing end-to-end load time for its global customer base.**

**Which solution will meet these requirements?**

**A. Create Application Load Balancers (ALBs) in each Region to replace the existing NLBs. Register the existing EC2 instances as targets for the ALBs in each Region.**

**B. Configure Amazon Route 53 to route equally weighted traffic to the NLBs in each Region.**

**C. Create additional NLBs and EC2 instances in other Regions where the company has large customer bases.**

**D. Create a standard accelerator in AWS Global Accelerator. Configure the existing NLBs as target endpoints. ✅**

**────────────────────────────────────**

**Question 817**

**A company has an on-premises application that uses SFTP to collect financial data from multiple vendors. The company is migrating to the AWS Cloud. The company has created an application that uses Amazon S3 APIs to upload files from vendors.**

**Some vendors run their systems on legacy applications that do not support S3 APIs. The vendors want to continue to use SFTP-based applications to upload data. The company wants to use managed services for the needs of the vendors that use legacy applications.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create an AWS Database Migration Service (AWS DMS) instance to replicate data from the storage of the vendors that use legacy applications to Amazon S3. Provide the vendors with the credentials to access the AWS DMS instance.**

**B. Create an AWS Transfer Family endpoint for vendors that use legacy applications. ✅**

**C. Configure an Amazon EC2 instance to run an SFTP server. Instruct the vendors that use legacy applications to use the SFTP server to upload data.**

**D. Configure an Amazon S3 File Gateway for vendors that use legacy applications to upload files to an SMB file share.**

**────────────────────────────────────**

**Question 818**

**A marketing team wants to build a campaign for an upcoming multi-sport event. The team has news reports from the past five years in PDF format. The team needs a solution to extract insights about the content and the sentiment of the news reports. The solution must use Amazon Textract to process the news reports.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Provide the extracted insights to Amazon Athena for analysis. Store the extracted insights and analysis in an Amazon S3 bucket.**

**B. Store the extracted insights in an Amazon DynamoDB table. Use Amazon SageMaker to build a sentiment model.**

**C. Provide the extracted insights to Amazon Comprehend for analysis. Save the analysis to an Amazon S3 bucket. ✅**

**D. Store the extracted insights in an Amazon S3 bucket. Use Amazon QuickSight to visualize and analyze the data.**

**────────────────────────────────────**

**Question 819**

**A company's application runs on Amazon EC2 instances that are in multiple Availability Zones. The application needs to ingest real-time data from third-party applications.**

**The company needs a data ingestion solution that places the ingested raw data in an Amazon S3 bucket.**

**Which solution will meet these requirements?**

**A. Create Amazon Kinesis data streams for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume the Kinesis data streams. Specify the S3 bucket as the destination of the delivery streams. ✅**

**B. Create database migration tasks in AWS Database Migration Service (AWS DMS). Specify replication instances of the EC2 instances as the source endpoints. Specify the S3 bucket as the target endpoint. Set the migration type to migrate existing data and replicate ongoing changes.**

**C. Create and configure AWS DataSync agents on the EC2 instances. Configure DataSync tasks to transfer data from the EC2 instances to the S3 bucket.**

**D. Create an AWS Direct Connect connection to the application for data ingestion. Create Amazon Kinesis Data Firehose delivery streams to consume direct PUT operations from the application. Specify the S3 bucket as the destination of the delivery streams.**

**────────────────────────────────────**

**Question 820**

**A company’s application is receiving data from multiple data sources. The size of the data varies and is expected to increase over time. The current maximum size is 700 KB. The data volume and data size continue to grow as more data sources are added.**

**The company decides to use Amazon DynamoDB as the primary database for the application. A solutions architect needs to identify a solution that handles the large data sizes.**

**Which solution will meet these requirements in the MOST operationally efficient way?**

**A. Create an AWS Lambda function to filter the data that exceeds DynamoDB item size limits. Store the larger data in an Amazon DocumentDB (with MongoDB compatibility) database.**

**B. Store the large data as objects in an Amazon S3 bucket. In a DynamoDB table, create an item that has an attribute that points to the S3 URL of the data. ✅**

**C. Split all incoming large data into a collection of items that have the same partition key. Write the data to a DynamoDB table in a single operation by using the BatchWriteItem API operation.**

**D. Create an AWS Lambda function that uses gzip compression to compress the large objects as they are written to a DynamoDB table.**

**────────────────────────────────────**

**Question 821**

**A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.**

**What should a solutions architect recommend to meet this requirement?**

**A. Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.**

**B. Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource. ✅**

**C. Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).**

**D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).**

**────────────────────────────────────**

**Question 822**

**A company is migrating a legacy application from an on-premises data center to AWS. The application relies on hundreds of cron jobs that run between 1 and 20 minutes on different recurring schedules throughout the day.**

**The company wants a solution to schedule and run the cron jobs on AWS with minimal refactoring. The solution must support running the cron jobs in response to an event in the future.**

**Which solution will meet these requirements?**

**A. Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring schedule. Run the cron job tasks as AWS Lambda functions.**

**B. Create a container image for the cron jobs. Use AWS Batch on Amazon Elastic Container Service (Amazon ECS) with a scheduling policy to run the cron jobs.**

**C. Create a container image for the cron jobs. Use Amazon EventBridge Scheduler to create a recurring schedule. Run the cron job tasks on AWS Fargate. ✅**

**D. Create a container image for the cron jobs. Create a workflow in AWS Step Functions that uses a Wait state to run the cron jobs at a specified time. Use the RunTask action to run the cron job tasks on AWS Fargate.**

**────────────────────────────────────**

**Question 823**

**A company uses Salesforce. The company needs to load existing data and ongoing data changes from Salesforce to Amazon Redshift for analysis. The company does not want the data to travel over the public internet.**

**Which solution will meet these requirements with the LEAST development effort?**

**A. Establish a VPN connection from the VPC to Salesforce. Use AWS Glue DataBrew to transfer data.**

**B. Establish an AWS Direct Connect connection from the VPC to Salesforce. Use AWS Glue DataBrew to transfer data.**

**C. Create an AWS PrivateLink connection in the VPC to Salesforce. Use Amazon AppFlow to transfer data. ✅**

**D. Create a VPC peering connection to Salesforce. Use Amazon AppFlow to transfer data.**

**────────────────────────────────────**

**Question 824**

**A company recently migrated its application to AWS. The application runs on Amazon EC2 Linux instances in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon Elastic File System (Amazon EFS) file system that uses EFS Standard-Infrequent Access storage. The application indexes the company's files. The index is stored in an Amazon RDS database.**

**The company needs to optimize storage costs with some application and services changes.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Create an Amazon S3 bucket that uses an Intelligent-Tiering lifecycle policy. Copy all files to the S3 bucket. Update the application to use Amazon S3 API to store and retrieve files. ✅**

**B. Deploy Amazon FSx for Windows File Server file shares. Update the application to use CIFS protocol to store and retrieve files.**

**C. Deploy Amazon FSx for OpenZFS file system shares. Update the application to use the new mount point to store and retrieve files.**

**D. Create an Amazon S3 bucket that uses S3 Glacier Flexible Retrieval. Copy all files to the S3 bucket. Update the application to use Amazon S3 API to store and retrieve files as standard retrievals.**

**────────────────────────────────────**

**Question 825**

**A robotics company is designing a solution for medical surgery. The robots will use advanced sensors, cameras, and AI algorithms to perceive their environment and to complete surgeries.**

**The company needs a public load balancer in the AWS Cloud that will ensure seamless communication with backend services. The load balancer must be capable of routing traffic based on the query strings to different target groups. The traffic must also be encrypted.**

**Which solution will meet these requirements?**

**A. Use a Network Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use query parameter-based routing.**

**B. Use a Gateway Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM). Attach the certificate to the load balancer. Use HTTP path-based routing.**

**C. Use an Application Load Balancer with a certificate attached from AWS Certificate Manager (ACM). Use query parameter-based routing. ✅**

**D. Use a Network Load Balancer. Import a generated certificate in AWS Identity and Access Management (IAM). Attach the certificate to the load balancer. Use query parameter-based routing.**

**────────────────────────────────────**

---

**Question 831**

**A company uses an Amazon S3 bucket as its data lake storage platform. The S3 bucket contains a massive amount of data that is accessed randomly by multiple teams and hundreds of applications. The company wants to reduce the S3 storage costs and provide immediate availability for frequently accessed objects.**

**What is the MOST operationally efficient solution that meets these requirements?**

**A. Create an S3 Lifecycle rule to transition objects to the S3 Intelligent-Tiering storage class. ✅**

**B. Store objects in Amazon S3 Glacier. Use S3 Select to provide applications with access to the data.**

**C. Use data from S3 storage class analysis to create S3 Lifecycle rules to automatically transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class.**

**D. Transition objects to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class. Create an AWS Lambda function to transition objects to the S3 Standard storage class when they are accessed by an application.**

---

**Question 832**

**A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.**

**What should the solutions architect recommend?**

**A. Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.**

**B. Move the website to Amazon S3. Use Cross-Region Replication between Regions.**

**C. Use Amazon CloudFront with a custom origin pointing to the on-premises servers. ✅**

**D. Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.**

---

**Question 833**

**A company has 5 TB of datasets. The datasets consist of 1 million user profiles and 10 million connections. The user profiles have connections as many-to-many relationships. The company needs a performance efficient way to find mutual connections up to five levels.**

**Which solution will meet these requirements?**

**A. Use an Amazon S3 bucket to store the datasets. Use Amazon Athena to perform SQL JOIN queries to find connections.**

**B. Use Amazon Neptune to store the datasets with edges and vertices. Query the data to find connections. ✅**

**C. Use an Amazon S3 bucket to store the datasets. Use Amazon QuickSight to visualize connections.**

**D. Use Amazon RDS to store the datasets with multiple tables. Perform SQL JOIN queries to find connections.**

---

**Question 834**

**A company needs a secure connection between its on-premises environment and AWS. This connection does not need high bandwidth and will handle a small amount of traffic. The connection should be set up quickly.**

**What is the MOST cost-effective method to establish this type of connection?**

**A. Implement a client VPN.**

**B. Implement AWS Direct Connect.**

**C. Implement a bastion host on Amazon EC2.**

**D. Implement an AWS Site-to-Site VPN connection. ✅**

---

**Question 835**

**A company has an on-premises SFTP file transfer solution. The company is migrating to the AWS Cloud to scale the file transfer solution and to optimize costs by using Amazon S3. The company's employees will use their credentials for the on-premises Microsoft Active Directory (AD) to access the new solution. The company wants to keep the current authentication and file access mechanisms.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Configure an S3 File Gateway. Create SMB file shares on the file gateway that use the existing Active Directory to authenticate.**

**B. Configure an Auto Scaling group with Amazon EC2 instances to run an SFTP solution. Configure the group to scale up at 60% CPU utilization.**

**C. Create an AWS Transfer Family server with SFTP endpoints. Choose the AWS Directory Service option as the identity provider. Use AD Connector to connect the on-premises Active Directory. ✅**

**D. Create an AWS Transfer Family SFTP endpoint. Configure the endpoint to use the AWS Directory Service option as the identity provider to connect to the existing Active Directory.**

---

**Question 836**

**A company is designing an event-driven order processing system. Each order requires multiple validation steps after the order is created. An idempotent AWS Lambda function performs each validation step. Each validation step is independent from the other validation steps. Individual validation steps need only a subset of the order event information.**

**The company wants to ensure that each validation step Lambda function has access to only the information from the order event that the function requires. The components of the order processing system should be loosely coupled to accommodate future business changes.**

**Which solution will meet these requirements?**

**A. Create an Amazon Simple Queue Service (Amazon SQS) queue for each validation step. Create a new Lambda function to transform the order data to the format that each validation step requires and to publish the messages to the appropriate SQS queues. Subscribe each validation step Lambda function to its corresponding SQS queue.**

**B. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the validation step Lambda functions to the SNS topic. Use message body filtering to send only the required data to each subscribed Lambda function.**

**C. Create an Amazon EventBridge event bus. Create an event rule for each validation step. Configure the input transformer to send only the required data to each target validation step Lambda function. ✅**

**D. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a new Lambda function to subscribe to the SQS queue and to transform the order data to the format that each validation step requires. Use the new Lambda function to perform synchronous invocations of the validation step Lambda functions in parallel on separate threads.**

---

**Question 837**

**A company is migrating a three-tier application to AWS. The application requires a MySQL database. In the past, the application users reported poor application performance when creating new entries. These performance issues were caused by users generating different real-time reports from the application during working hours.**

**Which solution will improve the performance of the application when it is moved to AWS?**

**A. Import the data into an Amazon DynamoDB table with provisioned capacity. Refactor the application to use DynamoDB for reports.**

**B. Create the database on a compute optimized Amazon EC2 instance. Ensure compute resources exceed the on-premises database.**

**C. Create an Amazon Aurora MySQL Multi-AZ DB cluster with multiple read replicas. Configure the application to use the reader endpoint for reports. ✅**

**D. Create an Amazon Aurora MySQL Multi-AZ DB cluster. Configure the application to use the backup instance of the cluster as an endpoint for the reports.**

---

**Question 838**

**A company is expanding a secure on-premises network to the AWS Cloud by using an AWS Direct Connect connection. The on-premises network has no direct internet access. An application that runs on the on-premises network needs to use an Amazon S3 bucket.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Create a public virtual interface (VIF). Route the AWS traffic over the public VIF. ✅**

**B. Create a VPC and a NAT gateway. Route the AWS traffic from the on-premises network to the NAT gateway.**

**C. Create a VPC and an Amazon S3 interface endpoint. Route the AWS traffic from the on-premises network to the S3 interface endpoint.**

**D. Create a VPC peering connection between the on-premises network and Direct Connect. Route the AWS traffic over the peering connection.**

---

**Question 839**

**A company serves its website by using an Auto Scaling group of Amazon EC2 instances in a single AWS Region. The website does not require a database.**

**The company is expanding, and the company's engineering team deploys the website to a second Region. The company wants to distribute traffic across both Regions to accommodate growth and for disaster recovery purposes. The solution should not serve traffic from a Region in which the website is unhealthy.**

**Which policy or resource should the company use to meet these requirements?**

**A. An Amazon Route 53 simple routing policy**

**B. An Amazon Route 53 multivalue answer routing policy. ✅**

**C. An Application Load Balancer in one Region with a target group that specifies the EC2 instance IDs from both Regions**

**D. An Application Load Balancer in one Region with a target group that specifies the IP addresses of the EC2 instances from both Regions**

---

**Question 840**

**A company runs its applications on Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS). The EC2 instances run the most recent Amazon Linux release. The applications are experiencing availability issues when the company's employees store and retrieve files that are 25 GB or larger. The company needs a solution that does not require the company to transfer files between EC2 instances. The files must be available across many EC2 instances and across multiple Availability Zones.**

**Which solution will meet these requirements?**

**A. Migrate all the files to an Amazon S3 bucket. Instruct the employees to access the files from the S3 bucket.**

**B. Take a snapshot of the existing EBS volume. Mount the snapshot as an EBS volume across the EC2 instances. Instruct the employees to access the files from the EC2 instances.**

**C. Mount an Amazon Elastic File System (Amazon EFS) file system across all the EC2 instances. Instruct the employees to access the files from the EC2 instances. ✅**

**D. Create an Amazon Machine Image (AMI) from the EC2 instances. Configure new EC2 instances from the AMI that use an instance store volume. Instruct the employees to access the files from the EC2 instances.**

---

**Question 841**

**A company is running a highly sensitive application on Amazon EC2 backed by an Amazon RDS database. Compliance regulations mandate that all personally identifiable information (PII) be encrypted at rest.**

**Which solution should a solutions architect recommend to meet this requirement with the LEAST amount of changes to the infrastructure?**

**A. Deploy AWS Certificate Manager to generate certificates. Use the certificates to encrypt the database volume.**

**B. Deploy AWS CloudHSM, generate encryption keys, and use the keys to encrypt database volumes.**

**C. Configure SSL encryption using AWS Key Management Service (AWS KMS) keys to encrypt database volumes.**

**D. Configure Amazon Elastic Block Store (Amazon EBS) encryption and Amazon RDS encryption with AWS Key Management Service (AWS KMS) keys to encrypt instance and database volumes. ✅**

---

**Question 842**

**A company runs an AWS Lambda function in private subnets in a VPC. The subnets have a default route to the internet through an Amazon EC2 NAT instance. The Lambda function processes input data and saves its output as an object to Amazon S3.**

**Intermittently, the Lambda function times out while trying to upload the object because of saturated traffic on the NAT instance's network. The company wants to access Amazon S3 without traversing the internet.**

**Which solution will meet these requirements?**

**A. Replace the EC2 NAT instance with an AWS managed NAT gateway.**

**B. Increase the size of the EC2 NAT instance in the VPC to a network optimized instance type.**

**C. Provision a gateway endpoint for Amazon S3 in the VPC. Update the route tables of the subnets accordingly. ✅**

**D. Provision a transit gateway. Place transit gateway attachments in the private subnets where the Lambda function is running.**

---

**Question 843**

**A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.**

**The production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.**

**Which EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?**

**A. Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.**

**B. Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances. ✅**

**C. Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.**

**D. Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.**

---

**Question 844**

**A news company that has reporters all over the world is hosting its broadcast system on AWS. The reporters send live broadcasts to the broadcast system. The reporters use software on their phones to send live streams through the Real Time Messaging Protocol (RTMP).**

**A solutions architect must design a solution that gives the reporters the ability to send the highest quality streams. The solution must provide accelerated TCP connections back to the broadcast system.**

**What should the solutions architect use to meet these requirements?**

**A. Amazon CloudFront**

**B. AWS Global Accelerator. ✅**

**C. AWS Client VPN**

**D. Amazon EC2 instances and AWS Elastic IP addresses**

---

**Question 845**

**A company uses Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) to run its self-managed database. The company has 350 TB of data spread across all EBS volumes. The company takes daily EBS snapshots and keeps the snapshots for 1 month. The daily change rate is 5% of the EBS volumes.**

**Because of new regulations, the company needs to keep the monthly snapshots for 7 years. The company needs to change its backup strategy to comply with the new regulations and to ensure that data is available with minimal administrative effort.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Copy the monthly snapshot to Amazon S3 Glacier Deep Archive with a 7-year retention period.**

**B. Continue with the current EBS snapshot policy. Add a new policy to move the monthly snapshot to Amazon EBS Snapshots Archive with a 7-year retention period. ✅**

**C. Keep the daily snapshot in the EBS snapshot standard tier for 1 month. Keep the monthly snapshot in the standard tier for 7 years. Use incremental snapshots.**

**D. Keep the daily snapshot in the EBS snapshot standard tier. Use EBS direct APIs to take snapshots of all the EBS volumes every month. Store the snapshots in an Amazon S3 bucket in the Infrequent Access tier for 7 years.**

---

**Question 846**

**A company runs an application on several Amazon EC2 instances that store persistent data on an Amazon Elastic File System (Amazon EFS) file system. The company needs to replicate the data to another AWS Region by using an AWS managed service solution.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Use the EFS-to-EFS backup solution to replicate the data to an EFS file system in another Region.**

**B. Run a nightly script to copy data from the EFS file system to an Amazon S3 bucket. Enable S3 Cross-Region Replication on the S3 bucket.**

**C. Create a VPC in another Region. Establish a cross-Region VPC peer. Run a nightly rsync to copy data from the original Region to the new Region.**

**D. Use AWS Backup to create a backup plan with a rule that takes a daily backup and replicates it to another Region. Assign the EFS file system resource to the backup plan. ✅**

---

**Question 847**

**An ecommerce company is migrating its on-premises workload to the AWS Cloud. The workload currently consists of a web application and a backend Microsoft SQL database for storage.**

**The company expects a high volume of customers during a promotional event. The new infrastructure in the AWS Cloud must be highly available and scalable.**

**Which solution will meet these requirements with the LEAST administrative overhead?**

**A. Migrate the web application to two Amazon EC2 instances across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS for Microsoft SQL Server with read replicas in both Availability Zones.**

**B. Migrate the web application to an Amazon EC2 instance that runs in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to two EC2 instances across separate AWS Regions with database replication.**

**C. Migrate the web application to Amazon EC2 instances that run in an Auto Scaling group across two Availability Zones behind an Application Load Balancer. Migrate the database to Amazon RDS with Multi-AZ deployment. ✅**

**D. Migrate the web application to three Amazon EC2 instances across three Availability Zones behind an Application Load Balancer. Migrate the database to three EC2 instances across three Availability Zones.**

---

**Question 848**

**A company has an on-premises business application that generates hundreds of files each day. These files are stored on an SMB file share and require a low-latency connection to the application servers. A new company policy states all application-generated files must be copied to AWS. There is already a VPN connection to AWS.**

**The application development team does not have time to make the necessary code modifications to move the application to AWS.**

**Which service should a solutions architect recommend to allow the application to copy files to AWS?**

**A. Amazon Elastic File System (Amazon EFS)**

**B. Amazon FSx for Windows File Server**

**C. AWS Snowball**

**D. AWS Storage Gateway. ✅**

---

**Question 849**

**A company has 15 employees. The company stores employee start dates in an Amazon DynamoDB table. The company wants to send an email message to each employee on the day of the employee's work anniversary.**

**Which solution will meet these requirements with the MOST operational efficiency?**

**A. Create a script that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.**

**B. Create a script that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Use a cron job to run this script every day on an Amazon EC2 instance.**

**C. Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Notification Service (Amazon SNS) to send email messages to employees when necessary. Schedule this Lambda function to run every day. ✅**

**D. Create an AWS Lambda function that scans the DynamoDB table and uses Amazon Simple Queue Service (Amazon SQS) to send email messages to employees when necessary. Schedule this Lambda function to run every day.**

---

**Question 850**

**A company’s application is running on Amazon EC2 instances within an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. Based on the application's history, the company anticipates a spike in traffic during a holiday each year. A solutions architect must design a strategy to ensure that the Auto Scaling group proactively increases capacity to minimize any performance impact on application users.**

**Which solution will meet these requirements?**

**A. Create an Amazon CloudWatch alarm to scale up the EC2 instances when CPU utilization exceeds 90%.**

**B. Create a recurring scheduled action to scale up the Auto Scaling group before the expected period of peak demand. ✅**

**C. Increase the minimum and maximum number of EC2 instances in the Auto Scaling group during the peak demand period.**

**D. Configure an Amazon Simple Notification Service (Amazon SNS) notification to send alerts when there are autoscaling:EC2\_INSTANCE\_LAUNCH events.**

---

**Question 851**

**A company uses Amazon RDS for PostgreSQL databases for its data tier. The company must implement password rotation for the databases.**

**Which solution meets this requirement with the LEAST operational overhead?**

**A. Store the password in AWS Secrets Manager. Enable automatic rotation on the secret. ✅**

**B. Store the password in AWS Systems Manager Parameter Store. Enable automatic rotation on the parameter.**

**C. Store the password in AWS Systems Manager Parameter Store. Write an AWS Lambda function that rotates the password.**

**D. Store the password in AWS Key Management Service (AWS KMS). Enable automatic rotation on the AWS KMS key.**

---

**Question 852**

**A company runs its application on Oracle Database Enterprise Edition. The company needs to migrate the application and the database to AWS. The company can use the Bring Your Own License (BYOL) model while migrating to AWS. The application uses third-party database features that require privileged access.**

**A solutions architect must design a solution for the database migration.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Migrate the database to Amazon RDS for Oracle by using native tools. Replace the third-party features with AWS Lambda.**

**B. Migrate the database to Amazon RDS Custom for Oracle by using native tools. Customize the new database settings to support the third-party features. ✅**

**C. Migrate the database to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Customize the new database settings to support the third-party features.**

**D. Migrate the database to Amazon RDS for PostgreSQL by using AWS Database Migration Service (AWS DMS). Rewrite the application code to remove the dependency on third-party features.**

---

**Question 853**

**A large international university has deployed all of its compute services in the AWS Cloud. These services include Amazon EC2, Amazon RDS, and Amazon DynamoDB. The university currently relies on many custom scripts to back up its infrastructure. However, the university wants to centralize management and automate data backups as much as possible by using AWS native options.**

**Which solution will meet these requirements?**

**A. Use third-party backup software with an AWS Storage Gateway tape gateway virtual tape library.**

**B. Use AWS Backup to configure and monitor all backups for the services in use. ✅**

**C. Use AWS Config to set lifecycle management to take snapshots of all data sources on a schedule.**

**D. Use AWS Systems Manager State Manager to manage the configuration and monitoring of backup tasks.**

---

**Question 854**

**A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored.**

**What should a solutions architect do to meet this requirement?**

**A. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled. ✅**

**B. Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.**

**C. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.**

**D. Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.**

---

**Question 855**

**A company wants to build a map of its IT infrastructure to identify and enforce policies on resources that pose security risks. The company's security team must be able to query data in the IT infrastructure map and quickly identify security risks.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use Amazon RDS to store the data. Use SQL to query the data to identify security risks.**

**B. Use Amazon Neptune to store the data. Use SPARQL to query the data to identify security risks. ✅**

**C. Use Amazon Redshift to store the data. Use SQL to query the data to identify security risks.**

**D. Use Amazon DynamoDB to store the data. Use PartiQL to query the data to identify security risks.**

---

**Question 856**

**A large company wants to provide its globally located developers separate, limited size, managed PostgreSQL databases for development purposes. The databases will be low volume. The developers need the databases only when they are actively working.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Give the developers the ability to launch separate Amazon Aurora instances. Set up a process to shut down Aurora instances at the end of the workday and to start Aurora instances at the beginning of the next workday.**

**B. Develop an AWS Service Catalog product that enforces size restrictions for launching Amazon Aurora instances. Give the developers access to launch the product when they need a development database.**

**C. Create an Amazon Aurora Serverless cluster. Develop an AWS Service Catalog product to launch databases in the cluster with the default capacity settings. Grant the developers access to the product. ✅**

**D. Monitor AWS Trusted Advisor checks for idle Amazon RDS databases. Create a process to terminate identified idle RDS databases.**

---

**Question 857**

**A company is building a web application that serves a content management system. The content management system runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. Users are constantly adding and updating files, blogs, and other website assets in the content management system.**

**A solutions architect must implement a solution in which all the EC2 instances share up-to-date website content with the least possible lag time.**

**Which solution meets these requirements?**

**A. Update the EC2 user data in the Auto Scaling group lifecycle policy to copy the website assets from the EC2 instance that was launched most recently. Configure the ALB to make changes to the website assets only in the newest EC2 instance.**

**B. Copy the website assets to an Amazon Elastic File System (Amazon EFS) file system. Configure each EC2 instance to mount the EFS file system locally. Configure the website hosting application to reference the website assets that are stored in the EFS file system. ✅**

**C. Copy the website assets to an Amazon S3 bucket. Ensure that each EC2 instance downloads the website assets from the S3 bucket to the attached Amazon Elastic Block Store (Amazon EBS) volume. Run the S3 sync command once each hour to keep files up to date.**

**D. Restore an Amazon Elastic Block Store (Amazon EBS) snapshot with the website assets. Attach the EBS snapshot as a secondary EBS volume when a new EC2 instance is launched. Configure the website hosting application to reference the website assets that are stored in the secondary EBS volume.**

---

**Question 858**

**A company's web application consists of multiple Amazon EC2 instances that run behind an Application Load Balancer in a VPC. An Amazon RDS for MySQL DB instance contains the data. The company needs the ability to automatically detect and respond to suspicious or unexpected behavior in its AWS environment. The company already has added AWS WAF to its architecture.**

**What should a solutions architect do next to protect against threats?**

**A. Use Amazon GuardDuty to perform threat detection. Configure Amazon EventBridge to filter for GuardDuty findings and to invoke an AWS Lambda function to adjust the AWS WAF rules. ✅**

**B. Use AWS Firewall Manager to perform threat detection. Configure Amazon EventBridge to filter for Firewall Manager findings and to invoke an AWS Lambda function to adjust the AWS WAF web ACL.**

**C. Use Amazon Inspector to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.**

**D. Use Amazon Macie to perform threat detection and to update the AWS WAF rules. Create a VPC network ACL to limit access to the web application.**

---

**Question 859**

**A company is planning to run a group of Amazon EC2 instances that connect to an Amazon Aurora database. The company has built an AWS CloudFormation template to deploy the EC2 instances and the Aurora DB cluster. The company wants to allow the instances to authenticate to the database in a secure way. The company does not want to maintain static database credentials.**

**Which solution meets these requirements with the LEAST operational effort?**

**A. Create a database user with a user name and password. Add parameters for the database user name and password to the CloudFormation template. Pass the parameters to the EC2 instances when the instances are launched.**

**B. Create a database user with a user name and password. Store the user name and password in AWS Systems Manager Parameter Store. Configure the EC2 instances to retrieve the database credentials from Parameter Store.**

**C. Configure the DB cluster to use IAM database authentication. Create a database user to use with IAM authentication. Associate a role with the EC2 instances to allow applications on the instances to access the database. ✅**

**D. Configure the DB cluster to use IAM database authentication with an IAM user. Create a database user that has a name that matches the IAM user. Associate the IAM user with the EC2 instances to allow applications on the instances to access the database.**

---

**Question 860**

**A company wants to configure its Amazon CloudFront distribution to use SSL/TLS certificates. The company does not want to use the default domain name for the distribution. Instead, the company wants to use a different domain name for the distribution.**

**Which solution will deploy the certificate without incurring any additional costs?**

**A. Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-east-1 Region.**

**B. Request an Amazon issued private certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.**

**C. Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-east-1 Region. ✅**

**D. Request an Amazon issued public certificate from AWS Certificate Manager (ACM) in the us-west-1 Region.**

---

**Question 861**

**A company creates operations data and stores the data in an Amazon S3 bucket. For the company's annual audit, an external consultant needs to access an annual report that is stored in the S3 bucket. The external consultant needs to access the report for 7 days.**

**The company must implement a solution to allow the external consultant access to only the report.**

**Which solution will meet these requirements with the MOST operational efficiency?**

**A. Create a new S3 bucket that is configured to host a public static website. Migrate the operations data to the new S3 bucket. Share the S3 website URL with the external consultant.**

**B. Enable public access to the S3 bucket for 7 days. Remove access to the S3 bucket when the external consultant completes the audit.**

**C. Create a new IAM user that has access to the report in the S3 bucket. Provide the access keys to the external consultant. Revoke the access keys after 7 days.**

**D. Generate a presigned URL that has the required access to the location of the report on the S3 bucket. Share the presigned URL with the external consultant. ✅**

**────────────────────**

**Question 862**

**A company plans to run a high performance computing (HPC) workload on Amazon EC2 Instances. The workload requires low-latency network performance and high network throughput with tightly coupled node-to-node communication.**

**Which solution will meet these requirements?**

**A. Configure the EC2 instances to be part of a cluster placement group. ✅**

**B. Launch the EC2 instances with Dedicated Instance tenancy.**

**C. Launch the EC2 instances as Spot Instances.**

**D. Configure an On-Demand Capacity Reservation when the EC2 instances are launched.**

**────────────────────**

**Question 863**

**A company has primary and secondary data centers that are 500 miles (804.7 km) apart and interconnected with high-speed fiber-optic cable. The company needs a highly available and secure network connection between its data centers and a VPC on AWS for a mission-critical workload. A solutions architect must choose a connection solution that provides maximum resiliency.**

**Which solution meets these requirements?**

**A. Two AWS Direct Connect connections from the primary data center terminating at two Direct Connect locations on two separate devices**

**B. A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on the same device**

**C. Two AWS Direct Connect connections from each of the primary and secondary data centers terminating at two Direct Connect locations on two separate devices. ✅**

**D. A single AWS Direct Connect connection from each of the primary and secondary data centers terminating at one Direct Connect location on two separate devices**

**────────────────────**

**Question 864**

**A company runs several Amazon RDS for Oracle On-Demand DB instances that have high utilization. The RDS DB instances run in member accounts that are in an organization in AWS Organizations.**

**The company's finance team has access to the organization's management account and member accounts. The finance team wants to find ways to optimize costs by using AWS Trusted Advisor.**

**Which combination of steps will meet these requirements? (Choose two.)**

**A. Use the Trusted Advisor recommendations in the management account. ✅**

**B. Use the Trusted Advisor recommendations in the member accounts where the RDS DB instances are running.**

**C. Review the Trusted Advisor checks for Amazon RDS Reserved Instance Optimization. ✅**

**D. Review the Trusted Advisor checks for Amazon RDS Idle DB Instances.**

**E. Review the Trusted Advisor checks for compute optimization. Crosscheck the results by using AWS Compute Optimizer.**

**────────────────────**

**Question 865**

**A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.**

**Which solution meets these requirements?**

**A. Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager. ✅**

**B. Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.**

**C. Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.**

**D. Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.**

**────────────────────**

**Question 866**

**A solutions architect is creating an application. The application will run on Amazon EC2 instances in private subnets across multiple Availability Zones in a VPC. The EC2 instances will frequently access large files that contain confidential information. These files are stored in Amazon S3 buckets for processing. The solutions architect must optimize the network architecture to minimize data transfer costs.**

**What should the solutions architect do to meet these requirements?**

**A. Create a gateway endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the gateway endpoint. ✅**

**B. Create a single NAT gateway in a public subnet. In the route tables for the private subnets, add a default route that points to the NAT gateway.**

**C. Create an AWS PrivateLink interface endpoint for Amazon S3 in the VPC. In the route tables for the private subnets, add an entry for the interface endpoint.**

**D. Create one NAT gateway for each Availability Zone in public subnets. In each of the route tables for the private subnets, add a default route that points to the NAT gateway in the same Availability Zone.**

**────────────────────**

**Question 867**

**A company wants to relocate its on-premises MySQL database to AWS. The database accepts regular imports from a client-facing application, which causes a high volume of write operations. The company is concerned that the amount of traffic might be causing performance issues within the application.**

**How should a solutions architect design the architecture on AWS?**

**A. Provision an Amazon RDS for MySQL DB instance with Provisioned IOPS SSD storage. Monitor write operation metrics by using Amazon CloudWatch. Adjust the provisioned IOPS if necessary. ✅**

**B. Provision an Amazon RDS for MySQL DB instance with General Purpose SSD storage. Place an Amazon ElastiCache cluster in front of the DB instance. Configure the application to query ElastiCache instead.**

**C. Provision an Amazon DocumentDB (with MongoDB compatibility) instance with a memory optimized instance type. Monitor Amazon CloudWatch for performance-related issues. Change the instance class if necessary.**

**D. Provision an Amazon Elastic File System (Amazon EFS) file system in General Purpose performance mode. Monitor Amazon CloudWatch for IOPS bottlenecks. Change to Provisioned Throughput performance mode if necessary.**

**────────────────────**

**Question 868**

**A company runs an application in the AWS Cloud that generates sensitive archival data files. The company wants to rearchitect the application's data storage. The company wants to encrypt the data files and to ensure that third parties do not have access to the data before the data is encrypted and sent to AWS. The company has already created an Amazon S3 bucket.**

**Which solution will meet these requirements?**

**A. Configure the S3 bucket to use client-side encryption with an Amazon S3 managed encryption key. Configure the application to use the S3 bucket to store the archival files.**

**B. Configure the S3 bucket to use server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.**

**C. Configure the S3 bucket to use dual-layer server-side encryption with AWS KMS keys (SSE-KMS). Configure the application to use the S3 bucket to store the archival files.**

**D. Configure the application to use client-side encryption with a key stored in AWS Key Management Service (AWS KMS). Configure the application to store the archival files in the S3 bucket. ✅**

**────────────────────**

**Question 869**

**A company uses Amazon RDS with default backup settings for its database tier. The company needs to make a daily backup of the database to meet regulatory requirements. The company must retain the backups for 30 days.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Write an AWS Lambda function to create an RDS snapshot every day.**

**B. Modify the RDS database to have a retention period of 30 days for automated backups. ✅**

**C. Use AWS Systems Manager Maintenance Windows to modify the RDS backup retention period.**

**D. Create a manual snapshot every day by using the AWS CLI. Modify the RDS backup retention period.**

**────────────────────**

**Question 870**

**A company that runs its application on AWS uses an Amazon Aurora DB cluster as its database. During peak usage hours when multiple users access and read the data, the monitoring system shows degradation of database performance for the write queries. The company wants to increase the scalability of the application to meet peak usage demands.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Create a second Aurora DB cluster. Configure a copy job to replicate the users’ data to the new database. Update the application to use the second database to read the data.**

**B. Create an Amazon DynamoDB Accelerator (DAX) cluster in front of the existing Aurora DB cluster. Update the application to use the DAX cluster for read-only queries. Write data directly to the Aurora DB cluster.**

**C. Create an Aurora read replica in the existing Aurora DB cluster. Update the application to use the replica endpoint for read-only queries and to use the cluster endpoint for write queries. ✅**

**D. Create an Amazon Redshift cluster. Copy the users' data to the Redshift cluster. Update the application to connect to the Redshift cluster and to perform read-only queries on the Redshift cluster.**

**────────────────────**

**Question 871**

**A company's near-real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to large amounts of incoming data. A solutions architect needs to design a scalable and serverless solution to enhance performance.**

**Which combination of steps should the solutions architect take? (Choose two.)**

**A. Use Amazon Kinesis Data Firehose to ingest the data.**

**B. Use AWS Lambda with AWS Step Functions to process the data.**

**C. Use AWS Database Migration Service (AWS DMS) to ingest the data.**

**D. Use Amazon EC2 instances in an Auto Scaling group to process the data.**

**E. Use AWS Fargate with Amazon Elastic Container Service (Amazon ECS) to process the data. ✅**

**────────────────────**

**Question 872**

**A company runs a web application on multiple Amazon EC2 instances in a VPC. The application needs to write sensitive data to an Amazon S3 bucket. The data cannot be sent over the public internet.**

**Which solution will meet these requirements?**

**A. Create a gateway VPC endpoint for Amazon S3. Create a route in the VPC route table to the endpoint. ✅**

**B. Create an internal Network Load Balancer that has the S3 bucket as the target.**

**C. Deploy the S3 bucket inside the VPC. Create a route in the VPC route table to the bucket.**

**D. Create an AWS Direct Connect connection between the VPC and an S3 regional endpoint.**

**────────────────────**

**Question 873**

**A company runs its production workload on Amazon EC2 instances with Amazon Elastic Block Store (Amazon EBS) volumes. A solutions architect needs to analyze the current EBS volume cost and to recommend optimizations. The recommendations need to include estimated monthly saving opportunities.**

**Which solution will meet these requirements?**

**A. Use Amazon Inspector reporting to generate EBS volume recommendations for optimization.**

**B. Use AWS Systems Manager reporting to determine EBS volume recommendations for optimization.**

**C. Use Amazon CloudWatch metrics reporting to determine EBS volume recommendations for optimization.**

**D. Use AWS Compute Optimizer to generate EBS volume recommendations for optimization. ✅**

**────────────────────**

**Question 874**

**A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets daily. The company wants to identify all S3 buckets that are not versioning-enabled.**

**Which solution will meet these requirements?**

**A. Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions. ✅**

**B. Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.**

**C. Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across Regions.**

**────────────────────**

**Question 875**

**A company wants to enhance its ecommerce order-processing application that is deployed on AWS. The application must process each order exactly once without affecting the customer experience during unpredictable traffic surges.**

**Which solution will meet these requirements?**

**A. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Put all the orders in the SQS queue. Configure an AWS Lambda function as the target to process the orders. ✅**

**B. Create an Amazon Simple Notification Service (Amazon SNS) standard topic. Publish all the orders to the SNS standard topic. Configure the application as a notification target.**

**C. Create a flow by using Amazon AppFlow. Send the orders to the flow. Configure an AWS Lambda function as the target to process the orders.**

**D. Configure AWS X-Ray in the application to track the order requests. Configure the application to process the orders by pulling the orders from Amazon CloudWatch.**

**────────────────────**

**Question 876**

**A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.**

**A solutions architect needs to design a solution that stores customer data that is created during database upgrades.**

**Which solution will meet these requirements?**

**A. Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.**

**B. Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.**

**C. Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.**

**D. Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database. ✅**

**────────────────────**

**Question 877**

**A company has two AWS accounts: Production and Development. The company needs to push code changes in the Development account to the Production account. In the alpha phase, only two senior developers on the development team need access to the Production account. In the beta phase, more developers will need access to perform testing.**

**Which solution will meet these requirements?**

**A. Create two policy documents by using the AWS Management Console in each account. Assign the policy to developers who need access.**

**B. Create an IAM role in the Development account. Grant the IAM role access to the Production account. Allow developers to assume the role.**

**C. Create an IAM role in the Production account. Define a trust policy that specifies the Development account. Allow developers to assume the role. ✅**

**D. Create an IAM group in the Production account. Add the group as a principal in a trust policy that specifies the Production account. Add developers to the group.**

**────────────────────**

**Question 878**

**A company wants to restrict access to the content of its web application. The company needs to protect the content by using authorization techniques that are available on AWS. The company also wants to implement a serverless architecture for authorization and authentication that has low login latency.**

**The solution must integrate with the web application and serve web content globally. The application currently has a small user base, but the company expects the application's user base to increase.**

**Which solution will meet these requirements?**

**A. Configure Amazon Cognito for authentication. Implement Lambda@Edge for authorization. Configure Amazon CloudFront to serve the web application globally. ✅**

**B. Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.**

**C. Configure Amazon Cognito for authentication. Implement AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.**

**D. Configure AWS Directory Service for Microsoft Active Directory for authentication. Implement Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.**

**────────────────────**

**Question 879**

**A development team uses multiple AWS accounts for its development, staging, and production environments. Team members have been launching large Amazon EC2 instances that are underutilized. A solutions architect must prevent large instances from being launched in all accounts.**

**How can the solutions architect meet this requirement with the LEAST operational overhead?**

**A. Update the IAM policies to deny the launch of large EC2 instances. Apply the policies to all users.**

**B. Define a resource in AWS Resource Access Manager that prevents the launch of large EC2 instances.**

**C. Create an IAM role in each account that denies the launch of large EC2 instances. Grant the developers IAM group access to the role.**

**D. Create an organization in AWS Organizations in the management account with the default policy. Create a service control policy (SCP) that denies the launch of large EC2 instances, and apply it to the AWS accounts. ✅**

**────────────────────**

**Question 880**

**A company has migrated a fleet of hundreds of on-premises virtual machines (VMs) to Amazon EC2 instances. The instances run a diverse fleet of Windows Server versions along with several Linux distributions. The company wants a solution that will automate inventory and updates of the operating systems. The company also needs a summary of common vulnerabilities of each instance for regular monthly reviews.**

**What should a solutions architect recommend to meet these requirements?**

**A. Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Configure AWS Security Hub to produce monthly reports.**

**B. Set up AWS Systems Manager Patch Manager to manage all the EC2 instances. Deploy Amazon Inspector, and configure monthly reports. ✅**

**C. Set up AWS Shield Advanced, and configure monthly reports. Deploy AWS Config to automate patch installations on the EC2 instances.**

**D. Set up Amazon GuardDuty in the account to monitor all EC2 instances. Deploy AWS Config to automate patch installations on the EC2 instances.**

---

**Question 881**

**A company hosts its application in the AWS Cloud. The application runs on Amazon EC2 instances in an Auto Scaling group behind an Elastic Load Balancing (ELB) load balancer. The application connects to an Amazon DynamoDB table.**

**For disaster recovery (DR) purposes, the company wants to ensure that the application is available from another AWS Region with minimal downtime.**

**Which solution will meet these requirements with the LEAST downtime?**

**A. Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB. ✅**

**B. Create an AWS CloudFormation template to create EC2 instances, ELBs, and DynamoDB tables to be launched when necessary. Configure DNS failover to point to the new DR Region's ELB.**

**C. Create an AWS CloudFormation template to create EC2 instances and an ELB to be launched when necessary. Configure the DynamoDB table as a global table. Configure DNS failover to point to the new DR Region's ELB.**

**D. Create an Auto Scaling group and an ELB in the DR Region. Configure the DynamoDB table as a global table. Create an Amazon CloudWatch alarm with an evaluation period of 10 minutes to invoke an AWS Lambda function that updates Amazon Route 53 to point to the DR Region's ELB.**

---

**Question 882**

**A company runs an application on Amazon EC2 instances in a private subnet. The application needs to store and retrieve data in Amazon S3 buckets. According to regulatory requirements, the data must not travel across the public internet.**

**What should a solutions architect do to meet these requirements MOST cost-effectively?**

**A. Deploy a NAT gateway to access the S3 buckets.**

**B. Deploy AWS Storage Gateway to access the S3 buckets.**

**C. Deploy an S3 interface endpoint to access the S3 buckets.**

**D. Deploy an S3 gateway endpoint to access the S3 buckets. ✅**

---

**Question 883**

**A company hosts an application on Amazon EC2 instances that run in a single Availability Zone. The application is accessible by using the transport layer of the Open Systems Interconnection (OSI) model. The company needs the application architecture to have high availability.**

**Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)**

**A. Configure new EC2 instances in a different Availability Zone. Use Amazon Route 53 to route traffic to all instances. ✅**

**B. Configure a Network Load Balancer in front of the EC2 instances.**

**C. Configure a Network Load Balancer for TCP traffic to the instances. Configure an Application Load Balancer for HTTP and HTTPS traffic to the instances.**

**D. Create an Auto Scaling group for the EC2 instances. Configure the Auto Scaling group to use multiple Availability Zones. Configure the Auto Scaling group to run application health checks on the instances. ✅**

**E. Create an Amazon CloudWatch alarm. Configure the alarm to restart EC2 instances that transition to a stopped state.**

---

**Question 884**

**A company uses Amazon S3 to host its static website. The company wants to add a contact form to the webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message.**

**The company expects fewer than 100 site visits each month. The contact form must notify the company by email when a customer fills out the form.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Host the dynamic contact form in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to a third-party email provider.**

**B. Create an Amazon API Gateway endpoint that returns the contact form from an AWS Lambda function. Configure another Lambda function on the API Gateway to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic. ✅**

**C. Host the website by using AWS Amplify Hosting for static content and dynamic content. Use server-side scripting to build the contact form. Configure Amazon Simple Queue Service (Amazon SQS) to deliver the message to the company.**

**D. Migrate the website from Amazon S3 to Amazon EC2 instances that run Windows Server. Use Internet Information Services (IIS) for Windows Server to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.**

---

**Question 885**

**A company creates dedicated AWS accounts in AWS Organizations for its business units. Recently, an important notification was sent to the root user email address of a business unit account instead of the assigned account owner. The company wants to ensure that all future notifications can be sent to different employees based on the notification categories of billing, operations, or security.**

**Which solution will meet these requirements MOST securely?**

**A. Configure each AWS account to use a single email address that the company manages. Ensure that all account owners can access the email account to receive notifications. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit.**

**B. Configure each AWS account to use a different email distribution list for each business unit that the company manages. Configure each distribution list with administrator email addresses that can respond to alerts. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit. ✅**

**C. Configure each AWS account root user email address to be the individual company managed email address of one person from each business unit. Configure alternate contacts for each AWS account with corresponding distribution lists for the billing team, the security team, and the operations team for each business unit.**

**D. Configure each AWS account root user to use email aliases that go to a centralized mailbox. Configure alternate contacts for each account by using a single business managed email distribution list each for the billing team, the security team, and the operations team.**

---

**Question 886**

**A company runs an ecommerce application on AWS. Amazon EC2 instances process purchases and store the purchase details in an Amazon Aurora PostgreSQL DB cluster.**

**Customers are experiencing application timeouts during times of peak usage. A solutions architect needs to rearchitect the application so that the application can scale to meet peak usage demands.**

**Which combination of actions will meet these requirements MOST cost-effectively? (Choose two.)**

**A. Configure an Auto Scaling group of new EC2 instances to retry the purchases until the processing is complete. Update the applications to connect to the DB cluster by using Amazon RDS Proxy. ✅**

**B. Configure the application to use an Amazon ElastiCache cluster in front of the Aurora PostgreSQL DB cluster.**

**C. Update the application to send the purchase requests to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an Auto Scaling group of new EC2 instances that read from the SQS queue. ✅**

**D. Configure an AWS Lambda function to retry the ticket purchases until the processing is complete.**

**E. Configure an Amazon API Gateway REST API with a usage plan.**

---

**Question 887**

**A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.**

**Which solution will meet these requirements?**

**A. Configure the Requester Pays feature on the company's S3 bucket. ✅**

**B. Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.**

**C. Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.**

**D. Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.**

---

**Question 888**

**A company that uses AWS Organizations runs 150 applications across 30 different AWS accounts. The company used AWS Cost and Usage Report to create a new report in the management account. The report is delivered to an Amazon S3 bucket that is replicated to a bucket in the data collection account.**

**The company's senior leadership wants to view a custom dashboard that provides NAT gateway costs each day starting at the beginning of the current month.**

**Which solution will meet these requirements?**

**A. Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use AWS DataSync to query the new report.**

**B. Share an Amazon QuickSight dashboard that includes the requested table visual. Configure QuickSight to use Amazon Athena to query the new report. ✅**

**C. Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use AWS DataSync to query the new report.**

**D. Share an Amazon CloudWatch dashboard that includes the requested table visual. Configure CloudWatch to use Amazon Athena to query the new report.**

---

**Question 889**

**A company is hosting a high-traffic static website on Amazon S3 with an Amazon CloudFront distribution that has a default TTL of 0 seconds. The company wants to implement caching to improve performance for the website. However, the company also wants to ensure that stale content is not served for more than a few minutes after a deployment.**

**Which combination of caching methods should a solutions architect implement to meet these requirements? (Choose two.)**

**A. Set the CloudFront default TTL to 2 minutes. ✅**

**B. Set a default TTL of 2 minutes on the S3 bucket.**

**C. Add a Cache-Control private directive to the objects in Amazon S3.**

**D. Create an AWS Lambda@Edge function to add an Expires header to HTTP responses. Configure the function to run on viewer response.**

**E. Add a Cache-Control max-age directive of 24 hours to the objects in Amazon S3. On deployment, create a CloudFront invalidation to clear any changed files from edge caches. ✅**

---

**Question 890**

**A company runs its application by using Amazon EC2 instances and AWS Lambda functions. The EC2 instances run in private subnets of a VPC. The Lambda functions need direct network access to the EC2 instances for the application to work.**

**The application will run for 1 year. The number of Lambda functions that the application uses will increase during the 1-year period. The company must minimize costs on all application resources.**

**Which solution will meet these requirements?**

**A. Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to the private subnets that contain the EC2 instances.**

**B. Purchase an EC2 Instance Savings Plan. Connect the Lambda functions to new public subnets in the same VPC where the EC2 instances run.**

**C. Purchase a Compute Savings Plan. Connect the Lambda functions to the private subnets that contain the EC2 instances. ✅**

**D. Purchase a Compute Savings Plan. Keep the Lambda functions in the Lambda service VPC.**

---

**Question 891**

**A company has deployed a multi-account strategy on AWS by using AWS Control Tower. The company has provided individual AWS accounts to each of its developers. The company wants to implement controls to limit AWS resource costs that the developers incur.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Instruct each developer to tag all their resources with a tag that has a key of CostCenter and a value of the developer's name. Use the required-tags AWS Config managed rule to check for the tag. Create an AWS Lambda function to terminate resources that do not have the tag. Configure AWS Cost Explorer to send a daily report to each developer to monitor their spending.**

**B. Use AWS Budgets to establish budgets for each developer account. Set up budget alerts for actual and forecast values to notify developers when they exceed or expect to exceed their assigned budget. Use AWS Budgets actions to apply a DenyAll policy to the developer's IAM role to prevent additional resources from being launched when the assigned budget is reached. ✅**

**C. Use AWS Cost Explorer to monitor and report on costs for each developer account. Configure Cost Explorer to send a daily report to each developer to monitor their spending. Use AWS Cost Anomaly Detection to detect anomalous spending and provide alerts.**

**D. Use AWS Service Catalog to allow developers to launch resources within a limited cost range. Create AWS Lambda functions in each AWS account to stop running resources at the end of each work day. Configure the Lambda functions to resume the resources at the start of each work day.**

---

**Question 892**

**A solutions architect is designing a three-tier web application. The architecture consists of an internet-facing Application Load Balancer (ALB) and a web tier that is hosted on Amazon EC2 instances in private subnets. The application tier with the business logic runs on EC2 instances in private subnets. The database tier consists of Microsoft SQL Server that runs on EC2 instances in private subnets. Security is a high priority for the company.**

**Which combination of security group configurations should the solutions architect use? (Choose three.)**

**A. Configure the security group for the web tier to allow inbound HTTPS traffic from the security group for the ALB. ✅**

**B. Configure the security group for the web tier to allow outbound HTTPS traffic to 0.0.0.0/0.**

**C. Configure the security group for the database tier to allow inbound Microsoft SQL Server traffic from the security group for the application tier. ✅**

**D. Configure the security group for the database tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.**

**E. Configure the security group for the application tier to allow inbound HTTPS traffic from the security group for the web tier. ✅**

**F. Configure the security group for the application tier to allow outbound HTTPS traffic and Microsoft SQL Server traffic to the security group for the web tier.**

---

**Question 893**

**A company has released a new version of its production application. The company's workload uses Amazon EC2, AWS Lambda, AWS Fargate, and Amazon SageMaker.**

**The company wants to cost optimize the workload now that usage is at a steady state. The company wants to cover the most services with the fewest savings plans.**

**Which combination of savings plans will meet these requirements? (Choose two.)**

**A. Purchase an EC2 Instance Savings Plan for Amazon EC2 and SageMaker.**

**B. Purchase a Compute Savings Plan for Amazon EC2, Lambda, and SageMaker. ✅**

**C. Purchase a SageMaker Savings Plan.**

**D. Purchase a Compute Savings Plan for Lambda, Fargate, and Amazon EC2. ✅**

**E. Purchase an EC2 Instance Savings Plan for Amazon EC2 and Fargate.**

---

**Question 894**

**A company uses a Microsoft SQL Server database. The company's applications are connected to the database. The company wants to migrate to an Amazon Aurora PostgreSQL database with minimal changes to the application code.**

**Which combination of steps will meet these requirements? (Choose two.)**

**A. Use the AWS Schema Conversion Tool (AWS SCT) to rewrite the SQL queries in the applications.**

**B. Enable Babelfish on Aurora PostgreSQL to run the SQL queries from the applications. ✅**

**C. Migrate the database schema and data by using the AWS Schema Conversion Tool (AWS SCT) and AWS Database Migration Service (AWS DMS). ✅**

**D. Use Amazon RDS Proxy to connect the applications to Aurora PostgreSQL.**

**E. Use AWS Database Migration Service (AWS DMS) to rewrite the SQL queries in the applications.**

---

**Question 895**

**A company plans to rehost an application to Amazon EC2 instances that use Amazon Elastic Block Store (Amazon EBS) as the attached storage.**

**A solutions architect must design a solution to ensure that all newly created Amazon EBS volumes are encrypted by default. The solution must also prevent the creation of unencrypted EBS volumes.**

**Which solution will meet these requirements?**

**A. Configure the EC2 account attributes to always encrypt new EBS volumes. ✅**

**B. Use AWS Config. Configure the encrypted-volumes identifier. Apply the default AWS Key Management Service (AWS KMS) key.**

**C. Configure AWS Systems Manager to create encrypted copies of the EBS volumes. Reconfigure the EC2 instances to use the encrypted volumes.**

**D. Create a customer managed key in AWS Key Management Service (AWS KMS). Configure AWS Migration Hub to use the key when the company migrates workloads.**

---

**Question 896**

**An ecommerce company wants to collect user clickstream data from the company's website for real-time analysis. The website experiences fluctuating traffic patterns throughout the day. The company needs a scalable solution that can adapt to varying levels of traffic.**

**Which solution will meet these requirements?**

**A. Use a data stream in Amazon Kinesis Data Streams in on-demand mode to capture the clickstream data. Use AWS Lambda to process the data in real time. ✅**

**B. Use Amazon Kinesis Data Firehose to capture the clickstream data. Use AWS Glue to process the data in real time.**

**C. Use Amazon Kinesis Video Streams to capture the clickstream data. Use AWS Glue to process the data in real time.**

**D. Use Amazon Managed Service for Apache Flink (previously known as Amazon Kinesis Data Analytics) to capture the clickstream data. Use AWS Lambda to process the data in real time.**

---

**Question 897**

**A global company runs its workloads on AWS. The company's application uses Amazon S3 buckets across AWS Regions for sensitive data storage and analysis. The company stores millions of objects in multiple S3 buckets daily. The company wants to identify all S3 buckets that are not versioning-enabled.**

**Which solution will meet these requirements?**

**A. Set up an AWS CloudTrail event that has a rule to identify all S3 buckets that are not versioning-enabled across Regions.**

**B. Use Amazon S3 Storage Lens to identify all S3 buckets that are not versioning-enabled across Regions. ✅**

**C. Enable IAM Access Analyzer for S3 to identify all S3 buckets that are not versioning-enabled across Regions.**

**D. Create an S3 Multi-Region Access Point to identify all S3 buckets that are not versioning-enabled across Regions.**

---

**Question 898**

**A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.**

**What should a solutions architect do to secure the audit documents?**

**A. Enable the versioning and MFA Delete features on the S3 bucket. ✅**

**B. Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.**

**C. Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.**

**D. Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.**

---

**Question 899**

**A company needs to optimize its Amazon S3 storage costs for an application that generates many files that cannot be recreated. Each file is approximately 5 MB and is stored in Amazon S3 Standard storage.**

**The company must store the files for 4 years before the files can be deleted. The files must be immediately accessible. The files are frequently accessed in the first 30 days of object creation, but they are rarely accessed after the first 30 days.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Create an S3 Lifecycle policy to move the files to S3 Glacier Instant Retrieval 30 days after object creation. Delete the files 4 years after object creation.**

**B. Create an S3 Lifecycle policy to move the files to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days after object creation. Delete the files 4 years after object creation.**

**C. Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after object creation. Delete the files 4 years after object creation. ✅**

**D. Create an S3 Lifecycle policy to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days after object creation. Move the files to S3 Glacier Flexible Retrieval 4 years after object creation.**

---

**Question 900**

**A company runs its critical storage application in the AWS Cloud. The application uses Amazon S3 in two AWS Regions. The company wants the application to send remote user data to the nearest S3 bucket with no public network congestion. The company also wants the application to fail over with the least amount of management of Amazon S3.**

**Which solution will meet these requirements?**

**A. Implement an active-active design between the two Regions. Configure the application to use the regional S3 endpoints closest to the user.**

**B. Use an active-passive configuration with S3 Multi-Region Access Points. Create a global endpoint for each of the Regions.**

**C. Send user data to the regional S3 endpoints closest to the user. Configure an S3 cross-account replication rule to keep the S3 buckets synchronized.**

**D. Set up Amazon S3 to use Multi-Region Access Points in an active-active configuration with a single global endpoint. Configure S3 Cross-Region Replication. ✅**

**────────────────────────────────────**  
**Question 901**

**A company is migrating a data center from its on-premises location to AWS. The company has several legacy applications that are hosted on individual virtual servers. Changes to the application designs cannot be made.**

**Each individual virtual server currently runs as its own EC2 instance. A solutions architect needs to ensure that the applications are reliable and fault tolerant after migration to AWS. The applications will run on Amazon EC2 instances.**

**Which solution will meet these requirements?**

**A. Create an Auto Scaling group that has a minimum of one and a maximum of one. Create an Amazon Machine Image (AMI) of each application instance. Use the AMI to create EC2 instances in the Auto Scaling group Configure an Application Load Balancer in front of the Auto Scaling group.**

**B. Use AWS Backup to create an hourly backup of the EC2 instance that hosts each application. Store the backup in Amazon S3 in a separate Availability Zone. Configure a disaster recovery process to restore the EC2 instance for each application from its most recent backup.**

**C. Create an Amazon Machine Image (AMI) of each application instance. Launch two new EC2 instances from the AMI. Place each EC2 instance in a separate Availability Zone. Configure a Network Load Balancer that has the EC2 instances as targets. ✅**

**D. Use AWS Mitigation Hub Refactor Spaces to migrate each application off the EC2 instance. Break down functionality from each application into individual components. Host each application on Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type.**

**────────────────────────────────────**

**Question 902**

**A company wants to isolate its workloads by creating an AWS account for each workload. The company needs a solution that centrally manages networking components for the workloads. The solution also must create accounts with automatic security controls (guardrails).**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use AWS Control Tower to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts. ✅**

**B. Use AWS Organizations to deploy accounts. Create a networking account that has a VPC with private subnets and public subnets. Use AWS Resource Access Manager (AWS RAM) to share the subnets with the workload accounts.**

**C. Use AWS Control Tower to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.**

**D. Use AWS Organizations to deploy accounts. Deploy a VPC in each workload account. Configure each VPC to route through an inspection VPC by using a transit gateway attachment.**

**────────────────────────────────────**

**Question 903**

**A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing. The company wants to minimize the website hosting costs.**

**Which solution will meet these requirements?**

**A. Move the website to an Amazon S3 bucket. Configure an Amazon CloudFront distribution for the S3 bucket. ✅**

**B. Move the website to an Amazon S3 bucket. Configure an Amazon ElastiCache cluster for the S3 bucket.**

**C. Move the website to AWS Amplify. Configure an ALB to resolve to the Amplify website.**

**D. Move the website to AWS Amplify. Configure EC2 instances to cache the website.**

**────────────────────────────────────**

**Question 904**

**A company is implementing a shared storage solution for a media application that the company hosts on AWS. The company needs the ability to use SMB clients to access stored data.**

**Which solution will meet these requirements with the LEAST administrative overhead?**

**A. Create an AWS Storage Gateway Volume Gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.**

**B. Create an AWS Storage Gateway Tape Gateway. Configure tapes to use Amazon S3. Connect the application server to the Tape Gateway.**

**C. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.**

**D. Create an Amazon FSx for Windows File Server file system. Connect the application server to the file system. ✅**

**────────────────────────────────────**

**Question 905**

**A company is designing its production application's disaster recovery (DR) strategy. The application is backed by a MySQL database on an Amazon Aurora cluster in the us-east-1 Region. The company has chosen the us-west-1 Region as its DR Region.**

**The company's target recovery point objective (RPO) is 5 minutes and the target recovery time objective (RTO) is 20 minutes. The company wants to minimize configuration changes.**

**Which solution will meet these requirements with the MOST operational efficiency?**

**A. Create an Aurora read replica in us-west-1 similar in size to the production application's Aurora MySQL cluster writer instance.**

**B. Convert the Aurora cluster to an Aurora global database. Configure managed failover. ✅**

**C. Create a new Aurora cluster in us-west-1 that has Cross-Region Replication.**

**D. Create a new Aurora cluster in us-west-1. Use AWS Database Migration Service (AWS DMS) to sync both clusters.**

**────────────────────────────────────**

**Question 906**

**A company runs a critical data analysis job each week before the first day of the work week. The job requires at least 1 hour to complete the analysis. The job is stateful and cannot tolerate interruptions. The company needs a solution to run the job on AWS.**

**Which solution will meet these requirements?**

**A. Create a container for the job. Schedule the job to run as an AWS Fargate task on an Amazon Elastic Container Service (Amazon ECS) cluster by using Amazon EventBridge Scheduler. ✅**

**B. Configure the job to run in an AWS Lambda function. Create a scheduled rule in Amazon EventBridge to invoke the Lambda function.**

**C. Configure an Auto Scaling group of Amazon EC2 Spot Instances that run Amazon Linux. Configure a crontab entry on the instances to run the analysis.**

**D. Configure an AWS DataSync task to run the job. Configure a cron expression to run the task on a schedule.**

**────────────────────────────────────**

**Question 907**

**A company runs workloads in the AWS Cloud. The company wants to centrally collect security data to assess security across the entire company and to improve workload protection.**

**Which solution will meet these requirements with the LEAST development effort?**

**A. Configure a data lake in AWS Lake Formation. Use AWS Glue crawlers to ingest the security data into the data lake.**

**B. Configure an AWS Lambda function to collect the security data in .csv format. Upload the data to an Amazon S3 bucket.**

**C. Configure a data lake in Amazon Security Lake to collect the security data. Upload the data to an Amazon S3 bucket. ✅**

**D. Configure an AWS Database Migration Service (AWS DMS) replication instance to load the security data into an Amazon RDS cluster.**

**────────────────────────────────────**

**Question 908**

**A company is migrating five on-premises applications to VPCs in the AWS Cloud. Each application is currently deployed in isolated virtual networks on premises and should be deployed similarly in the AWS Cloud. The applications need to reach a shared services VPC. All the applications must be able to communicate with each other.**

**If the migration is successful, the company will repeat the migration process for more than 100 applications.**

**Which solution will meet these requirements with the LEAST administrative overhead?**

**A. Deploy software VPN tunnels between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC.**

**B. Deploy VPC peering connections between the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets to the shared services VPC through the peering connection.**

**C. Deploy an AWS Direct Connect connection between the application VPCs and the shared services VPAdd routes from the application VPCs in their subnets to the shared services VPC and the applications VPCs. Add routes from the shared services VPC subnets to the applications VPCs.**

**D. Deploy a transit gateway with associations between the transit gateway and the application VPCs and the shared services VPC. Add routes between the application VPCs in their subnets and the application VPCs to the shared services VPC through the transit gateway. ✅**

**────────────────────────────────────**

**Question 909**

**A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.**

**The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.**

**Which solution will meet these requirements?**

**A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.**

**B. Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days. ✅**

**C. Create an Amazon FSx for Windows File Server file system to extend the company's storage space.**

**D. Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.**

**────────────────────────────────────**

**Question 910**

**A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.**

**The company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.**

**Which solution will meet this requirement with the LEAST operational overhead?**

**A. Modify the DB instance to be a Multi-AZ deployment.**

**B. Create a read replica of the database. Configure the script to query only the read replica. ✅**

**C. Instruct the development team to manually export the entries in the database at the end of each day.**

**D. Use Amazon ElastiCache to cache the common queries that the script runs against the database.**

**────────────────────────────────────**

**Question 911**

**A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its on-premises application in a hybrid environment. The application currently runs on containers on premises.**

**The company needs a single container solution that can scale in an on-premises, hybrid, or cloud environment. The company must run new application containers in the AWS Cloud and must use a load balancer for HTTP traffic.**

**Which combination of actions will meet these requirements? (Choose two.)**

**A. Set up an ECS cluster that uses the AWS Fargate launch type for the cloud application containers. Use an Amazon ECS Anywhere external launch type for the on-premises application containers. ✅**

**B. Set up an Application Load Balancer for cloud ECS services. ✅**

**C. Set up a Network Load Balancer for cloud ECS services.**

**D. Set up an ECS cluster that uses the AWS Fargate launch type. Use Fargate for the cloud application containers and the on-premises application containers.**

**E. Set up an ECS cluster that uses the Amazon EC2 launch type for the cloud application containers. Use Amazon ECS Anywhere with an AWS Fargate launch type for the on-premises application containers.**

**────────────────────────────────────**

**Question 912**

**A company is migrating its workloads to AWS. The company has sensitive and critical data in on-premises relational databases that run on SQL Server instances.**

**The company wants to use the AWS Cloud to increase security and reduce operational overhead for the databases.**

**Which solution will meet these requirements?**

**A. Migrate the databases to Amazon EC2 instances. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption.**

**B. Migrate the databases to a Multi-AZ Amazon RDS for SQL Server DB instance. Use an AWS Key Management Service (AWS KMS) AWS managed key for encryption. ✅**

**C. Migrate the data to an Amazon S3 bucket. Use Amazon Macie to ensure data security.**

**D. Migrate the databases to an Amazon DynamoDB table. Use Amazon CloudWatch Logs to ensure data security.**

**────────────────────────────────────**

**Question 913**

**A company wants to migrate an application to AWS. The company wants to increase the application's current availability. The company wants to use AWS WAF in the application's architecture.**

**Which solution will meet these requirements?**

**A. Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the target. Connect a WAF to the ALB. ✅**

**B. Create a cluster placement group that contains multiple Amazon EC2 instances that hosts the application. Configure an Application Load Balancer and set the EC2 instances as the targets. Connect a WAF to the placement group.**

**C. Create two Amazon EC2 instances that host the application across two Availability Zones. Configure the EC2 instances as the targets of an Application Load Balancer (ALB). Connect a WAF to the ALB.**

**D. Create an Auto Scaling group that contains multiple Amazon EC2 instances that host the application across two Availability Zones. Configure an Application Load Balancer (ALB) and set the Auto Scaling group as the target. Connect a WAF to the Auto Scaling group.**

**────────────────────────────────────**

**Question 914**

**A company manages a data lake in an Amazon S3 bucket that numerous applications access. The S3 bucket contains a unique prefix for each application. The company wants to restrict each application to its specific prefix and to have granular control of the objects under each prefix.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create dedicated S3 access points and access point policies for each application. ✅**

**B. Create an S3 Batch Operations job to set the ACL permissions for each object in the S3 bucket.**

**C. Replicate the objects in the S3 bucket to new S3 buckets for each application. Create replication rules by prefix.**

**D. Replicate the objects in the S3 bucket to new S3 buckets for each application. Create dedicated S3 access points for each application.**

**────────────────────────────────────**

**Question 915**

**A company has an application that customers use to upload images to an Amazon S3 bucket. Each night, the company launches an Amazon EC2 Spot Fleet that processes all the images that the company received that day. The processing for each image takes 2 minutes and requires 512 MB of memory.**

**A solutions architect needs to change the application to process the images when the images are uploaded.**

**Which change will meet these requirements MOST cost-effectively?**

**A. Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an AWS Lambda function to read the messages from the queue and to process the images. ✅**

**B. Use S3 Event Notifications to write a message with image details to an Amazon Simple Queue Service (Amazon SQS) queue. Configure an EC2 Reserved Instance to read the messages from the queue and to process the images.**

**C. Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure a container instance in Amazon Elastic Container Service (Amazon ECS) to subscribe to the topic and to process the images.**

**D. Use S3 Event Notifications to publish a message with image details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure an AWS Elastic Beanstalk application to subscribe to the topic and to process the images.**

**────────────────────────────────────**

**Question 916**

**A company wants to improve the availability and performance of its hybrid application. The application consists of a stateful TCP-based workload hosted on Amazon EC2 instances in different AWS Regions and a stateless UDP-based workload hosted on premises.**

**Which combination of actions should a solutions architect take to improve availability and performance? (Choose two.)**

**A. Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints. ✅**

**B. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the load balancers.**

**C. Configure two Application Load Balancers in each Region. The first will route to the EC2 endpoints, and the second will route to the on-premises endpoints.**

**D. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network Load Balancer in each Region that routes to the on-premises endpoints. ✅**

**E. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure an Application Load Balancer in each Region that routes to the on-premises endpoints.**

---

**Question 916**

**A company wants to improve the availability and performance of its hybrid application. The application consists of a stateful TCP-based workload hosted on Amazon EC2 instances in different AWS Regions and a stateless UDP-based workload hosted on premises.**

**Which combination of actions should a solutions architect take to improve availability and performance? (Choose two.)**

**A. Create an accelerator using AWS Global Accelerator. Add the load balancers as endpoints. ✅**

**B. Create an Amazon CloudFront distribution with an origin that uses Amazon Route 53 latency-based routing to route requests to the load balancers.**

**C. Configure two Application Load Balancers in each Region. The first will route to the EC2 endpoints, and the second will route to the on-premises endpoints.**

**D. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure a Network Load Balancer in each Region that routes to the on-premises endpoints. ✅**

**E. Configure a Network Load Balancer in each Region to address the EC2 endpoints. Configure an Application Load Balancer in each Region that routes to the on-premises endpoints.**

---

**Question 917**

**A company runs a self-managed Microsoft SQL Server on Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS). Daily snapshots are taken of the EBS volumes.**

**Recently, all the company’s EBS snapshots were accidentally deleted while running a snapshot cleaning script that deletes all expired EBS snapshots. A solutions architect needs to update the architecture to prevent data loss without retaining EBS snapshots indefinitely.**

**Which solution will meet these requirements with the LEAST development effort?**

**A. Change the IAM policy of the user to deny EBS snapshot deletion.**

**B. Copy the EBS snapshots to another AWS Region after completing the snapshots daily.**

**C. Create a 7-day EBS snapshot retention rule in Recycle Bin and apply the rule for all snapshots. ✅**

**D. Copy EBS snapshots to Amazon S3 Standard-Infrequent Access (S3 Standard-IA).**

---

**Question 918**

**A company wants to use an AWS CloudFormation stack for its application in a test environment. The company stores the CloudFormation template in an Amazon S3 bucket that blocks public access. The company wants to grant CloudFormation access to the template in the S3 bucket based on specific user requests to create the test environment. The solution must follow security best practices.**

**Which solution will meet these requirements?**

**A. Create a gateway VPC endpoint for Amazon S3. Configure the CloudFormation stack to use the S3 object URL.**

**B. Create an Amazon API Gateway REST API that has the S3 bucket as the target. Configure the CloudFormation stack to use the API Gateway URL.**

**C. Create a presigned URL for the template object. Configure the CloudFormation stack to use the presigned URL. ✅**

**D. Allow public access to the template object in the S3 bucket. Block the public access after the test environment is created.**

---

**Question 919**

**A company has applications that run in an organization in AWS Organizations. The company outsources operational support of the applications. The company needs to provide access for the external support engineers without compromising security.**

**The external support engineers need access to the AWS Management Console. The external support engineers also need operating system access to the company's fleet of Amazon EC2 instances that run Amazon Linux in private subnets.**

**Which solution will meet these requirements MOST securely?**

**A. Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance profile with the necessary policy to connect to Systems Manager. Use AWS IAM Identity Center to provide the external support engineers console access. Use Systems Manager Session Manager to assign the required permissions. ✅**

**B. Confirm that AWS Systems Manager Agent (SSM Agent) is installed on all instances. Assign an instance profile with the necessary policy to connect to Systems Manager. Use Systems Manager Session Manager to provide local IAM user credentials in each AWS account to the external support engineers for console access.**

**C. Confirm that all instances have a security group that allows SSH access only from the external support engineers' source IP address ranges. Provide local IAM user credentials in each AWS account to the external support engineers for console access. Provide each external support engineer an SSH key pair to log in to the application instances.**

**D. Create a bastion host in a public subnet. Set up the bastion host security group to allow access from only the external engineers' IP address ranges. Ensure that all instances have a security group that allows SSH access from the bastion host. Provide each external support engineer an SSH key pair to log in to the application instances. Provide local account IAM user credentials to the engineers for console access.**

---

**Question 920**

**A company uses Amazon RDS for PostgreSQL to run its applications in the us-east-1 Region. The company also uses machine learning (ML) models to forecast annual revenue based on near real-time reports. The reports are generated by using the same RDS for PostgreSQL database. The database performance slows during business hours. The company needs to improve database performance.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Create a cross-Region read replica. Configure the reports to be generated from the read replica.**

**B. Activate Multi-AZ DB instance deployment for RDS for PostgreSQL. Configure the reports to be generated from the standby database.**

**C. Use AWS Data Migration Service (AWS DMS) to logically replicate data to a new database. Configure the reports to be generated from the new database.**

**D. Create a read replica in us-east-1. Configure the reports to be generated from the read replica. ✅**

---

**Question 921**

**A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet.**

**Which solution will meet these requirements?**

**A. Configure an S3 gateway endpoint. ✅**  
**B. Create an S3 bucket in a private subnet.**  
**C. Create an S3 bucket in the same AWS Region as the EC2 instances.**  
**D. Configure a NAT gateway in the same subnet as the EC2 instances.**

---

**Question 922**

**A company hosts its multi-tier, public web application in the AWS Cloud. The web application runs on Amazon EC2 instances, and its database runs on Amazon RDS. The company is anticipating a large increase in sales during an upcoming holiday weekend. A solutions architect needs to build a solution to analyze the performance of the web application with a granularity of no more than 2 minutes.**

**What should the solutions architect do to meet this requirement?**

**A. Send Amazon CloudWatch logs to Amazon Redshift. Use Amazon QuickSight to perform further analysis.**  
**B. Enable detailed monitoring on all EC2 instances. Use Amazon CloudWatch metrics to perform further analysis. ✅**  
**C. Create an AWS Lambda function to fetch EC2 logs from Amazon CloudWatch Logs. Use Amazon CloudWatch metrics to perform further analysis.**  
**D. Send EC2 logs to Amazon S3. Use Amazon Redshift to fetch logs from the S3 bucket to process raw data for further analysis with Amazon QuickSight.**

---

**Question 923**

**A company runs an application that stores and shares photos. Users upload the photos to an Amazon S3 bucket. Every day, users upload approximately 150 photos. The company wants to design a solution that creates a thumbnail of each new photo and stores the thumbnail in a second S3 bucket.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a long-running Amazon EMR cluster. Configure the script to generate thumbnails for the photos that do not have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.**  
**B. Configure an Amazon EventBridge scheduled rule to invoke a script every minute on a memory-optimized Amazon EC2 instance that is always on. Configure the script to generate thumbnails for the photos that do not have thumbnails. Configure the script to upload the thumbnails to the second S3 bucket.**  
**C. Configure an S3 event notification to invoke an AWS Lambda function each time a user uploads a new photo to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to the second S3 bucket. ✅**  
**D. Configure S3 Storage Lens to invoke an AWS Lambda function each time a user uploads a new photo to the application. Configure the Lambda function to generate a thumbnail and to upload the thumbnail to a second S3 bucket.**

---

**Question 924**

**A company has stored millions of objects across multiple prefixes in an Amazon S3 bucket by using the Amazon S3 Glacier Deep Archive storage class. The company needs to delete all data older than 3 years except for a subset of data that must be retained. The company has identified the data that must be retained and wants to implement a serverless solution.**

**Which solution will meet these requirements?**

**A. Use S3 Inventory to list all objects. Use the AWS CLI to create a script that runs on an Amazon EC2 instance that deletes objects from the inventory list.**  
**B. Use AWS Batch to delete objects older than 3 years except for the data that must be retained.**  
**C. Provision an AWS Glue crawler to query objects older than 3 years. Save the manifest file of old objects. Create a script to delete objects in the manifest.**  
**D. Enable S3 Inventory. Create an AWS Lambda function to filter and delete objects. Invoke the Lambda function with S3 Batch Operations to delete objects by using the inventory reports. ✅**

---

**Question 925**

**A company is building an application on AWS. The application uses multiple AWS Lambda functions to retrieve sensitive data from a single Amazon S3 bucket for processing. The company must ensure that only authorized Lambda functions can access the data. The solution must comply with the principle of least privilege.**

**Which solution will meet these requirements?**

**A. Grant full S3 bucket access to all Lambda functions through a shared IAM role.**  
**B. Configure the Lambda functions to run within a VPC. Configure a bucket policy to grant access based on the Lambda functions' VPC endpoint IP addresses.**  
**C. Create individual IAM roles for each Lambda function. Grant the IAM roles access to the S3 bucket. Assign each IAM role as the Lambda execution role for its corresponding Lambda function. ✅**  
**D. Configure a bucket policy granting access to the Lambda functions based on their function ARNs.**

---

**Question 926**

**A company has developed a non-production application that is composed of multiple microservices for each of the company's business units. A single development team maintains all the microservices.**

**The current architecture uses a static web frontend and a Java-based backend that contains the application logic. The architecture also uses a MySQL database that the company hosts on an Amazon EC2 instance.**

**The company needs to ensure that the application is secure and available globally.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Use Amazon CloudFront and AWS Amplify to host the static web frontend. Refactor the microservices to use AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL database to an Amazon EC2 Reserved Instance.**  
**B. Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that the microservices access by using Amazon API Gateway. Migrate the MySQL database to Amazon RDS for MySQL. ✅**  
**C. Use Amazon CloudFront and Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that are in a target group behind a Network Load Balancer. Migrate the MySQL database to Amazon RDS for MySQL.**  
**D. Use Amazon S3 to host the static web frontend. Refactor the microservices to use AWS Lambda functions that are in a target group behind an Application Load Balancer. Migrate the MySQL database to an Amazon EC2 Reserved Instance.**

---

**Question 927**

**A video game company is deploying a new gaming application to its global users. The company requires a solution that will provide near real-time reviews and rankings of the players.**

**A solutions architect must design a solution to provide fast access to the data. The solution must also ensure the data persists on disks in the event that the company restarts the application.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin. Store the player data in the S3 bucket.**  
**B. Create Amazon EC2 instances in multiple AWS Regions. Store the player data on the EC2 instances. Configure Amazon Route 53 with geolocation records to direct users to the closest EC2 instance.**  
**C. Deploy an Amazon ElastiCache for Redis cluster. Store the player data in the ElastiCache cluster. ✅**  
**D. Deploy an Amazon ElastiCache for Memcached cluster. Store the player data in the ElastiCache cluster.**

---

**Question 928**

**A company is designing an application on AWS that processes sensitive data. The application stores and processes financial data for multiple customers.**

**To meet compliance requirements, the data for each customer must be encrypted separately at rest by using a secure, centralized key management solution. The company wants to use AWS Key Management Service (AWS KMS) to implement encryption.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Generate a unique encryption key for each customer. Store the keys in an Amazon S3 bucket. Enable server-side encryption.**  
**B. Deploy a hardware security appliance in the AWS environment that securely stores customer-provided encryption keys. Integrate the security appliance with AWS KMS to encrypt the sensitive data in the application.**  
**C. Create a single AWS KMS key to encrypt all sensitive data across the application.**  
**D. Create separate AWS KMS keys for each customer's data that have granular access control and logging enabled. ✅**

---

**Question 929**

**A company needs to design a resilient web application to process customer orders. The web application must automatically handle increases in web traffic and application usage without affecting the customer experience or losing customer orders.**

**Which solution will meet these requirements?**

**A. Use a NAT gateway to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive, process, and store processed customer orders. Use an AWS Lambda function to capture and store unprocessed orders.**  
**B. Use a Network Load Balancer (NLB) to manage web traffic. Use an Application Load Balancer to receive customer orders from the NLB. Use Amazon Redshift with a Multi-AZ deployment to store unprocessed and processed customer orders.**  
**C. Use a Gateway Load Balancer (GWLB) to manage web traffic. Use Amazon Elastic Container Service (Amazon ECS) to receive and process customer orders. Use the GWLB to capture and store unprocessed orders. Use Amazon DynamoDB to store processed customer orders.**  
**D. Use an Application Load Balancer to manage web traffic. Use Amazon EC2 Auto Scaling groups to receive and process customer orders. Use Amazon Simple Queue Service (Amazon SQS) to store unprocessed orders. Use Amazon RDS with a Multi-AZ deployment to store processed customer orders. ✅**

---

**Question 930**

**A company is using AWS DataSync to migrate millions of files from an on-premises system to AWS. The files are 10 KB in size on average.**

**The company wants to use Amazon S3 for file storage. For the first year after the migration, the files will be accessed once or twice and must be immediately available. After 1 year, the files must be archived for at least 7 years.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Use an archive tool to group the files into large objects. Use DataSync to migrate the objects. Store the objects in S3 Glacier Instant Retrieval for the first year. Use a lifecycle configuration to transition the files to S3 Glacier Deep Archive after 1 year with a retention period of 7 years. ✅**  
**B. Use an archive tool to group the files into large objects. Use DataSync to copy the objects to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Glacier Instant Retrieval after 1 year with a retention period of 7 years.**  
**C. Configure the destination storage class for the files as S3 Glacier Instant Retrieval. Use a lifecycle policy to transition the files to S3 Glacier Flexible Retrieval after 1 year with a retention period of 7 years.**  
**D. Configure a DataSync task to transfer the files to S3 Standard-Infrequent Access (S3 Standard-IA). Use a lifecycle configuration to transition the files to S3 Deep Archive after 1 year with a retention period of 7 years.**

---

**Question 931**

**A company recently performed a lift and shift migration of its on-premises Oracle database workload to run on an Amazon EC2 memory optimized Linux instance. The EC2 Linux instance uses a 1 TB Provisioned IOPS SSD (io1) EBS volume with 64,000 IOPS.**

**The database storage performance after the migration is slower than the performance of the on-premises database.**

**Which solution will improve storage performance?**

**A. Add more Provisioned IOPS SSD (io1) EBS volumes. Use OS commands to create a Logical Volume Management (LVM) stripe. ✅**  
**B. Increase the Provisioned IOPS SSD (io1) EBS volume to more than 64,000 IOPS.**  
**C. Increase the size of the Provisioned IOPS SSD (io1) EBS volume to 2 TB.**  
**D. Change the EC2 Linux instance to a storage optimized instance type. Do not change the Provisioned IOPS SSD (io1) EBS volume.**

---

**Question 932**

**A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.**

**Which combination of steps should a solutions architect take to accomplish this? (Choose two.)**

**A. Configure a VPC gateway endpoint for Amazon S3 within the VPC. ✅**  
**B. Create a bucket policy to make the objects in the S3 bucket public.**  
**C. Create a bucket policy that limits access to only the application tier running in the VPC. ✅**  
**D. Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.**  
**E. Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.**

---

**Question 933**

**A company is migrating from a monolithic architecture for a web application that is hosted on Amazon EC2 to a serverless microservices architecture. The company wants to use AWS services that support an event-driven, loosely coupled architecture. The company wants to use the publish/subscribe (pub/sub) pattern.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Queue Service (Amazon SQS) queue. Configure one or more subscribers to read events from the SQS queue.**  
**B. Configure an Amazon API Gateway REST API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the SNS topic.**  
**C. Configure an Amazon API Gateway WebSocket API to write to a data stream in Amazon Kinesis Data Streams with enhanced fan-out. Configure one or more subscribers to receive events from the data stream.**  
**D. Configure an Amazon API Gateway HTTP API to invoke an AWS Lambda function that publishes events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure one or more subscribers to receive events from the topic. ✅**

---

**Question 934**

**A company recently migrated a monolithic application to an Amazon EC2 instance and Amazon RDS. The application has tightly coupled modules. The existing design of the application gives the application the ability to run on only a single EC2 instance.**

**The company has noticed high CPU utilization on the EC2 instance during peak usage times. The high CPU utilization corresponds to degraded performance on Amazon RDS for read requests. The company wants to reduce the high CPU utilization and improve read request performance.**

**Which solution will meet these requirements?**

**A. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1\. Configure an RDS read replica for read requests. ✅**  
**B. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1\. Add an RDS read replica and redirect all read/write traffic to the replica.**  
**C. Configure an Auto Scaling group with a minimum size of 1 and maximum size of 2\. Resize the RDS DB instance to an instance type that has more CPU capacity.**  
**D. Resize the EC2 instance to an EC2 instance type that has more CPU capacity. Configure an Auto Scaling group with a minimum and maximum size of 1\. Resize the RDS DB instance to an instance type that has more CPU capacity.**

---

**Question 935**

**A company needs to grant a team of developers access to the company's AWS resources. The company must maintain a high level of security for the resources.**

**The company requires an access control solution that will prevent unauthorized access to the sensitive data.**

**Which solution will meet these requirements?**

**A. Share the IAM user credentials for each development team member with the rest of the team to simplify access management and to streamline development workflows.**  
**B. Define IAM roles that have fine-grained permissions based on the principle of least privilege. Assign an IAM role to each developer. ✅**  
**C. Create IAM access keys to grant programmatic access to AWS resources. Allow only developers to interact with AWS resources through API calls by using the access keys.**  
**D. Create an AWS Cognito user pool. Grant developers access to AWS resources by using the user pool.**

---

**Question 936**

**A company hosts a monolithic web application on an Amazon EC2 instance. Application users have recently reported poor performance at specific times. Analysis of Amazon CloudWatch metrics shows that CPU utilization is 100% during the periods of poor performance.**

**The company wants to resolve this performance issue and improve application availability.**

**Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)**

**A. Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale vertically. ✅**  
**B. Create an Amazon Machine Image (AMI) from the web server. Reference the AMI in a new launch template.**  
**C. Create an Auto Scaling group and an Application Load Balancer to scale vertically.**  
**D. Use AWS Compute Optimizer to obtain a recommendation for an instance type to scale horizontally.**  
**E. Create an Auto Scaling group and an Application Load Balancer to scale horizontally. ✅**

---

**Question 937**

**A company runs all its business applications in the AWS Cloud. The company uses AWS Organizations to manage multiple AWS accounts.**

**A solutions architect needs to review all permissions that are granted to IAM users to determine which IAM users have more permissions than required.**

**Which solution will meet these requirements with the LEAST administrative overhead?**

**A. Use Network Access Analyzer to review all access permissions in the company's AWS accounts.**  
**B. Create an AWS CloudWatch alarm that activates when an IAM user creates or modifies resources in an AWS account.**  
**C. Use AWS Identity and Access Management (IAM) Access Analyzer to review all the company’s resources and accounts. ✅**  
**D. Use Amazon Inspector to find vulnerabilities in existing IAM policies.**

---

**Question 938**

**A company needs to implement a new data retention policy for regulatory compliance. As part of this policy, sensitive documents that are stored in an Amazon S3 bucket must be protected from deletion or modification for a fixed period of time.**

**Which solution will meet these requirements?**

**A. Activate S3 Object Lock on the required objects and enable governance mode.**  
**B. Activate S3 Object Lock on the required objects and enable compliance mode. ✅**  
**C. Enable versioning on the S3 bucket. Set a lifecycle policy to delete the objects after a specified period.**  
**D. Configure an S3 Lifecycle policy to transition objects to S3 Glacier Flexible Retrieval for the retention duration.**

---

**Question 939**

**A company runs its customer-facing web application on containers. The workload uses Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. The web application is resource intensive.**

**The web application needs to be available 24 hours a day, 7 days a week for customers. The company expects the application to experience short bursts of high traffic. The workload must be highly available.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Configure an ECS capacity provider with Fargate. Conduct load testing by using a third-party tool. Rightsize the Fargate tasks in Amazon CloudWatch.**  
**B. Configure an ECS capacity provider with Fargate for steady state and Fargate Spot for burst traffic. ✅**  
**C. Configure an ECS capacity provider with Fargate Spot for steady state and Fargate for burst traffic.**  
**D. Configure an ECS capacity provider with Fargate. Use AWS Compute Optimizer to rightsize the Fargate task.**

---

**Question 940**

**A company is building an application in the AWS Cloud. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses Amazon Route 53 for the DNS.**

**The company needs a managed solution with proactive engagement to detect against DDoS attacks.**

**Which solution will meet these requirements?**

**A. Enable AWS Config. Configure an AWS Config managed rule that detects DDoS attacks.**  
**B. Enable AWS WAF on the ALB. Create an AWS WAF web ACL with rules to detect and prevent DDoS attacks. Associate the web ACL with the ALB.**  
**C. Store the ALB access logs in an Amazon S3 bucket. Configure Amazon GuardDuty to detect and take automated preventative actions for DDoS attacks.**  
**D. Subscribe to AWS Shield Advanced. Configure hosted zones in Route 53\. Add ALB resources as protected resources. ✅**

---

**Question 941**

**A company hosts a video streaming web application in a VPC. The company uses a Network Load Balancer (NLB) to handle TCP traffic for real-time data processing. There have been unauthorized attempts to access the application.**

**The company wants to improve application security with minimal architectural change to prevent unauthorized attempts to access the application.**

**Which solution will meet these requirements?**

**A. Implement a series of AWS WAF rules directly on the NLB to filter out unauthorized traffic.**

**B. Recreate the NLB with a security group to allow only trusted IP addresses. ✅**

**C. Deploy a second NLB in parallel with the existing NLB configured with a strict IP address allow list.**

**D. Use AWS Shield Advanced to provide enhanced DDoS protection and prevent unauthorized access attempts.**

---

**Question 942**

**A healthcare company is developing an AWS Lambda function that publishes notifications to an encrypted Amazon Simple Notification Service (Amazon SNS) topic. The notifications contain protected health information (PHI).**

**The SNS topic uses AWS Key Management Service (AWS KMS) customer managed keys for encryption. The company must ensure that the application has the necessary permissions to publish messages securely to the SNS topic.**

**Which combination of steps will meet these requirements? (Choose three.)**

**A. Create a resource policy for the SNS topic that allows the Lambda function to publish messages to the topic. ✅**

**B. Use server-side encryption with AWS KMS keys (SSE-KMS) for the SNS topic instead of customer managed keys.**

**C. Create a resource policy for the encryption key that the SNS topic uses that has the necessary AWS KMS permissions. ✅**

**D. Specify the Lambda function's Amazon Resource Name (ARN) in the SNS topic's resource policy. ✅**

**E. Associate an Amazon API Gateway HTTP API with the SNS topic to control access to the topic by using API Gateway resource policies.**

**F. Configure a Lambda execution role that has the necessary IAM permissions to use a customer managed key in AWS KMS.**

---

**Question 943**

**A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.**

**The current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.**

**A solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.**

**Which solution meets these requirements?**

**A. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.**

**B. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand. ✅**

**C. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.**

**D. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.**

---

**Question 944**

**A company has an employee web portal. Employees log in to the portal to view payroll details. The company is developing a new system to give employees the ability to upload scanned documents for reimbursement. The company runs a program to extract text-based data from the documents and attach the extracted information to each employee’s reimbursement IDs for processing.**

**The employee web portal requires 100% uptime. The document extract program runs infrequently throughout the day on an on-demand basis. The company wants to build a scalable and cost-effective new system that will require minimal changes to the existing web portal. The company does not want to make any code changes.**

**Which solution will meet these requirements with the LEAST implementation effort?**

**A. Run Amazon EC2 On-Demand Instances in an Auto Scaling group for the web portal. Use an AWS Lambda function to run the document extract program. Invoke the Lambda function when an employee uploads a new reimbursement document. ✅**

**B. Run Amazon EC2 Spot Instances in an Auto Scaling group for the web portal. Run the document extract program on EC2 Spot Instances. Start document extract program instances when an employee uploads a new reimbursement document.**

**C. Purchase a Savings Plan to run the web portal and the document extract program. Run the web portal and the document extract program in an Auto Scaling group.**

**D. Create an Amazon S3 bucket to host the web portal. Use Amazon API Gateway and an AWS Lambda function for the existing functionalities. Use the Lambda function to run the document extract program. Invoke the Lambda function when the API that is associated with a new document upload is called.**

---

**Question 945**

**A media company has a multi-account AWS environment in the us-east-1 Region. The company has an Amazon Simple Notification Service (Amazon SNS) topic in a production account that publishes performance metrics. The company has an AWS Lambda function in an administrator account to process and analyze log data.**

**The Lambda function that is in the administrator account must be invoked by messages from the SNS topic that is in the production account when significant metrics are reported.**

**Which combination of steps will meet these requirements? (Choose two.)**

**A. Create an IAM resource policy for the Lambda function that allows Amazon SNS to invoke the function. ✅**

**B. Implement an Amazon Simple Queue Service (Amazon SQS) queue in the administrator account to buffer messages from the SNS topic that is in the production account. Configure the SQS queue to invoke the Lambda function.**

**C. Create an IAM policy for the SNS topic that allows the Lambda function to subscribe to the topic. ✅**

**D. Use an Amazon EventBridge rule in the production account to capture the SNS topic notifications. Configure the EventBridge rule to forward notifications to the Lambda function that is in the administrator account.**

**E. Store performance metrics in an Amazon S3 bucket in the production account. Use Amazon Athena to analyze the metrics from the administrator account.**

---

**Question 946**

**A company is migrating an application from an on-premises location to Amazon Elastic Kubernetes Service (Amazon EKS). The company must use a custom subnet for pods that are in the company's VPC to comply with requirements. The company also needs to ensure that the pods can communicate securely within the pods' VPC.**

**Which solution will meet these requirements?**

**A. Configure AWS Transit Gateway to directly manage custom subnet configurations for the pods in Amazon EKS.**

**B. Create an AWS Direct Connect connection from the company's on-premises IP address ranges to the EKS pods.**

**C. Use the Amazon VPC CNI plugin for Kubernetes. Define custom subnets in the VPC cluster for the pods to use. ✅**

**D. Implement a Kubernetes network policy that has pod anti-affinity rules to restrict pod placement to specific nodes that are within custom subnets.**

---

**Question 947**

**A company hosts an ecommerce application that stores all data in a single Amazon RDS for MySQL DB instance that is fully managed by AWS. The company needs to mitigate the risk of a single point of failure.**

**Which solution will meet these requirements with the LEAST implementation effort?**

**A. Modify the RDS DB instance to use a Multi-AZ deployment. Apply the changes during the next maintenance window. ✅**

**B. Migrate the current database to a new Amazon DynamoDB Multi-AZ deployment. Use AWS Database Migration Service (AWS DMS) with a heterogeneous migration strategy to migrate the current RDS DB instance to DynamoDB tables.**

**C. Create a new RDS DB instance in a Multi-AZ deployment. Manually restore the data from the existing RDS DB instance from the most recent snapshot.**

**D. Configure the DB instance in an Amazon EC2 Auto Scaling group with a minimum group size of three. Use Amazon Route 53 simple routing to distribute requests to all DB instances.**

---

**Question 948**

**A company has multiple Microsoft Windows SMB file servers and Linux NFS file servers for file sharing in an on-premises environment. As part of the company's AWS migration plan, the company wants to consolidate the file servers in the AWS Cloud.**

**The company needs a managed AWS storage service that supports both NFS and SMB access. The solution must be able to share between protocols. The solution must have redundancy at the Availability Zone level.**

**Which solution will meet these requirements?**

**A. Use Amazon FSx for NetApp ONTAP for storage. Configure multi-protocol access. ✅**

**B. Create two Amazon EC2 instances. Use one EC2 instance for Windows SMB file server access and one EC2 instance for Linux NFS file server access.**

**C. Use Amazon FSx for NetApp ONTAP for SMB access. Use Amazon FSx for Lustre for NFS access.**

**D. Use Amazon S3 storage. Access Amazon S3 through an Amazon S3 File Gateway.**

---

**Question 949**

**A software company needs to upgrade a critical web application. The application currently runs on a single Amazon EC2 instance that the company hosts in a public subnet. The EC2 instance runs a MySQL database. The application's DNS records are published in an Amazon Route 53 zone.**

**A solutions architect must reconfigure the application to be scalable and highly available. The solutions architect must also reduce MySQL read latency.**

**Which combination of solutions will meet these requirements? (Choose two.)**

**A. Launch a second EC2 instance in a second AWS Region. Use a Route 53 failover routing policy to redirect the traffic to the second EC2 instance.**

**B. Create and configure an Auto Scaling group to launch private EC2 instances in multiple Availability Zones. Add the instances to a target group behind a new Application Load Balancer. ✅**

**C. Migrate the database to an Amazon Aurora MySQL cluster. Create the primary DB instance and reader DB instance in separate Availability Zones. ✅**

**D. Create and configure an Auto Scaling group to launch private EC2 instances in multiple AWS Regions. Add the instances to a target group behind a new Application Load Balancer.**

**E. Migrate the database to an Amazon Aurora MySQL cluster with cross-Region read replicas.**

---

**Question 950**

**A company runs thousands of AWS Lambda functions. The company needs a solution to securely store sensitive information that all the Lambda functions use. The solution must also manage the automatic rotation of the sensitive information.**

**Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)**

**A. Create HTTP security headers by using Lambda@Edge to retrieve and create sensitive information**

**B. Create a Lambda layer that retrieves sensitive information. ✅**

**C. Store sensitive information in AWS Secrets Manager. ✅**

**D. Store sensitive information in AWS Systems Manager Parameter Store**

**E. Create a Lambda consumer with dedicated throughput to retrieve sensitive information and create environmental variables.**

---

**Question 951**

**A company has an internal application that runs on Amazon EC2 instances in an Auto Scaling group. The EC2 instances are compute optimized and use Amazon Elastic Block Store (Amazon EBS) volumes.**

**The company wants to identify cost optimizations across the EC2 instances, the Auto Scaling group, and the EBS volumes.**

**Which solution will meet these requirements with the MOST operational efficiency?**

**A. Create a new AWS Cost and Usage Report. Search the report for cost recommendations for the EC2 instances the Auto Scaling group, and the EBS volumes.**

**B. Create new Amazon CloudWatch billing alerts. Check the alert statuses for cost recommendations for the EC2 instances, the Auto Scaling group, and the EBS volumes.**

**C. Configure AWS Compute Optimizer for cost recommendations for the EC2 instances, the Auto Scaling group and the EBS volumes. ✅**

**D. Configure AWS Compute Optimizer for cost recommendations for the EC2 instances. Create a new AWS Cost and Usage Report. Search the report for cost recommendations for the Auto Scaling group and the EBS volumes.**

---

**Question 952**

**A company is running a media store across multiple Amazon EC2 instances distributed across multiple Availability Zones in a single VPC. The company wants a high-performing solution to share data between all the EC2 instances, and prefers to keep the data within the VPC only.**

**What should a solutions architect recommend?**

**A. Create an Amazon S3 bucket and call the service APIs from each instance's application**

**B. Create an Amazon S3 bucket and configure all instances to access it as a mounted volume**

**C. Configure an Amazon Elastic Block Store (Amazon EBS) volume and mount it across all instances**

**D. Configure an Amazon Elastic File System (Amazon EFS) file system and mount it across all instances. ✅**

---

**Question 953**

**A company uses an Amazon RDS for MySQL instance. To prepare for end-of-year processing, the company added a read replica to accommodate extra read-only queries from the company's reporting tool. The read replica CPU usage was 60% and the primary instance CPU usage was 60%.**

**After end-of-year activities are complete, the read replica has a constant 25% CPU usage. The primary instance still has a constant 60% CPU usage. The company wants to rightsize the database and still provide enough performance for future growth.**

**Which solution will meet these requirements?**

**A. Delete the read replica Do not make changes to the primary instance**

**B. Resize the read replica to a smaller instance size Do not make changes to the primary instance. ✅**

**C. Resize the read replica to a larger instance size Resize the primary instance to a smaller instance size**

**D. Delete the read replica Resize the primary instance to a larger instance**

---

**Question 954**

**A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis.**

**Each file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.**

**Which solution meets these requirements with the LEAST operational overhead?**

**A. Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.**

**B. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.**

**C. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB. ✅**

**D. Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.**

---

**Question 955**

**A company is migrating its databases to Amazon RDS for PostgreSQL. The company is migrating its applications to Amazon EC2 instances. The company wants to optimize costs for long-running workloads.**

**Which solution will meet this requirement MOST cost-effectively?**

**A. Use On-Demand Instances for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year Compute Savings Plan with the No Upfront option for the EC2 instances.**

**B. Purchase Reserved Instances for a 1 year term with the No Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the No Upfront option for the EC2 instances. ✅**

**C. Purchase Reserved Instances for a 1 year term with the Partial Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 1 year EC2 Instance Savings Plan with the Partial Upfront option for the EC2 instances.**

**D. Purchase Reserved Instances for a 3 year term with the All Upfront option for the Amazon RDS for PostgreSQL workloads. Purchase a 3 year EC2 Instance Savings Plan with the All Upfront option for the EC2 instances.**

---

**Question 956**

**A company is using an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company must ensure that Kubernetes service accounts in the EKS cluster have secure and granular access to specific AWS resources by using IAM roles for service accounts (IRSA).**

**Which combination of solutions will meet these requirements? (Choose two.)**

**A. Create an IAM policy that defines the required permissions Attach the policy directly to the IAM role of the EKS nodes.**  
**B. Implement network policies within the EKS cluster to prevent Kubernetes service accounts from accessing specific AWS services.**  
**C. Modify the EKS cluster's IAM role to include permissions for each Kubernetes service account. Ensure a one-to-one mapping between IAM roles and Kubernetes roles.**  
**D. Define an IAM role that includes the necessary permissions. Annotate the Kubernetes service accounts with the Amazon ResourceName (ARN) of the IAM role. ✅**  
**E. Set up a trust relationship between the IAM roles for the service accounts and an OpenID Connect (OIDC) identity provider. ✅**

---

**Question 957**

**A company regularly uploads confidential data to Amazon S3 buckets for analysis.**

**The company's security policies mandate that the objects must be encrypted at rest. The company must automatically rotate the encryption key every year. The company must be able to track key rotation by using AWS CloudTrail. The company also must minimize costs for the encryption key.**

**Which solution will meet these requirements?**

**A. Use server-side encryption with customer-provided keys (SSE-C)**  
**B. Use server-side encryption with Amazon S3 managed keys (SSE-S3)**  
**C. Use server-side encryption with AWS KMS keys (SSE-KMS)**  
**D. Use server-side encryption with customer managed AWS KMS keys. ✅**

---

**Question 958**

**A company has migrated several applications to AWS in the past 3 months. The company wants to know the breakdown of costs for each of these applications. The company wants to receive a regular report that includes this information.**

**Which solution will meet these requirements MOST cost-effectively?**

**A. Use AWS Budgets to download data for the past 3 months into a .csv file. Look up the desired information.**  
**B. Load AWS Cost and Usage Reports into an Amazon RDS DB instance. Run SQL queries to get the desired information.**  
**C. Tag all the AWS resources with a key for cost and a value of the application's name. Activate cost allocation tags. Use Cost Explorer to get the desired information. ✅**  
**D. Tag all the AWS resources with a key for cost and a value of the application's name. Use the AWS Billing and Cost Management console to download bills for the past 3 months. Look up the desired information.**

---

**Question 959**

**An ecommerce company is preparing to deploy a web application on AWS to ensure continuous service for customers. The architecture includes a web application that the company hosts on Amazon EC2 instances, a relational database in Amazon RDS, and static assets that the company stores in Amazon S3.**

**The company wants to design a robust and resilient architecture for the application.**

**Which solution will meet these requirements?**

**A. Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in the same Availability Zone. Use Amazon S3 with versioning enabled to store static assets.**  
**B. Deploy Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones. Deploy a Multi-AZ RDS DB instance. Use Amazon CloudFront to distribute static assets. ✅**  
**C. Deploy Amazon EC2 instances in a single Availability Zone. Deploy an RDS DB instance in a second Availability Zone for cross-AZ redundancy. Serve static assets directly from the EC2 instances.**  
**D. Use AWS Lambda functions to serve the web application. Use Amazon Aurora Serverless v2 for the database. Store static assets in Amazon Elastic File System (Amazon EFS) One Zone-Infrequent Access (One Zone-IA).**

---

**Question 961**

**A company runs its production workload on an Amazon Aurora MySQL DB cluster that includes six Aurora Replicas. The company wants near-real-time reporting queries from one of its departments to be automatically distributed across three of the Aurora Replicas. Those three replicas have a different compute and memory specification from the rest of the DB cluster.**

**Which solution meets these requirements?**

**A. Create and use a custom endpoint for the workload. ✅**  
**B. Create a three-node cluster clone and use the reader endpoint**  
**C. Use any of the instance endpoints for the selected three nodes**  
**D. Use the reader endpoint to automatically distribute the read-only workload**

---

**Question 962**

**A company runs a Node js function on a server in its on-premises data center. The data center stores data in a PostgreSQL database. The company stores the credentials in a connection string in an environment variable on the server. The company wants to migrate its application to AWS and to replace the Node.js application server with AWS Lambda. The company also wants to migrate to Amazon RDS for PostgreSQL and to ensure that the database credentials are securely managed.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Store the database credentials as a parameter in AWS Systems Manager Parameter Store Configure Parameter Store to automatically rotate the secrets every 30 days. Update the Lambda function to retrieve the credentials from the parameter.**  
**B. Store the database credentials as a secret in AWS Secrets Manager. Configure Secrets Manager to automatically rotate the credentials every 30 days. Update the Lambda function to retrieve the credentials from the secret. ✅**  
**C. Store the database credentials as an encrypted Lambda environment variable. Write a custom Lambda function to rotate the credentials. Schedule the Lambda function to run every 30 days.**  
**D. Store the database credentials as a key in AWS Key Management Service (AWS KMS). Configure automatic rotation for the key. Update the Lambda function to retneve the credentials from the KMS key.**

---

**Question 963**

**A company wants to replicate existing and ongoing data changes from an on-premises Oracle database to Amazon RDS for Oracle. The amount of data to replicate varies throughout each day. The company wants to use AWS Database Migration Service (AWS DMS) for data replication. The solution must allocate only the capacity that the replication instance requires.**

**Which solution will meet these requirements?**

**A. Configure the AWS DMS replication instance with a Multi-AZ deployment to provision instances across multiple Availability Zones.**  
**B. Create an AWS DMS Serverless replication task to analyze and replicate the data while provisioning the required capacity. ✅**  
**C. Use Amazon EC2 Auto Scaling to scale the size of the AWS DMS replication instance up or down based on the amount of data toreplicate.**  
**D. Provision AWS DMS replication capacity by using Amazon Elastic Container Service (Amazon ECS) with an AWS Fargate launch type to analyze and replicate the data while provisioning the required capacity.**

---

**Question 964**

**A company has a multi-tier web application. The application's internal service components are deployed on Amazon EC2 instances. The internal service components need to access third-party software as a service (SaaS) APIs that are hosted on AWS.**

**The company needs to provide secure and private connectivity from the application's internal services to the third-party SaaS application. The company needs to ensure that there is minimal public internet exposure.**

**Which solution will meet these requirements?**

**A. Implement an AWS Site-to-Site VPN to establish a secure connection with the third-party SaaS provider.**  
**B. Deploy AWS Transit Gateway to manage and route traffic between the application's VPC and the third-party SaaS provider.**  
**C. Configure AWS PrivateLink to allow only outbound traffic from the VPC without enabling the third-party SaaS provider to establish.**  
**D. Use AWS PrivateLink to create a private connection between the application's VPC and the third-party SaaS provider. ✅**

---

**Question 965**

**An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.**

**What should the solutions architect recommend?**

**A. Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.**  
**B. Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.**  
**C. Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.**  
**D. Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database. ✅**

---

**Question 966**

**A solutions architect needs to connect a company's corporate network to its VPC to allow on-premises access to its AWS resources. The solution must provide encryption of all traffic between the corporate network and the VPC at the network layer and the session layer. The solution also must provide security controls to prevent unrestricted access between AWS and the on-premises systems.**

**Which solution meets these requirements?**

**A. Configure AWS Direct Connect to connect to the VPC. Configure the VPC route tables to allow and deny traffic between AWS and on premises as required.**  
**B. Create an IAM policy to allow access to the AWS Management Console only from a defined set of corporate IP addresses. Restrict user access based on job responsibility by using an IAM policy and roles.**  
**C. Configure AWS Site-to-Site VPN to connect to the VPConfigure route table entries to direct traffic from on premises to the VPConfigure instance security groups and network ACLs to allow only required traffic from on premises. ✅**  
**D. Configure AWS Transit Gateway to connect to the VPC. Configure route table entries to direct traffic from on premises to the VPC. Configure instance security groups and network ACLs to allow only required traffic from on premises.**

---

**Question 967**

**A company has a custom application with embedded credentials that retrieves information from a database in an Amazon RDS for MySQL DB cluster. The company needs to make the application more secure with minimal programming effort. The company has created credentials on the RDS for MySQL database for the application user.**

**Which solution will meet these requirements?**

**A. Store the credentials in AWS Key Management Service (AWS KMS). Create keys in AWS KMS. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation**  
**B. Store the credentials in encrypted local storage. Configure the application to load the database credentials from the local storage. Set up a credentials rotation schedule by creating a cron job.**  
**C. Store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule by creating an AWS Lambda function for Secrets Manager. ✅**  
**D. Store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule in the RDS for MySQL database by using Parameter Store.**

---

**Question 968**

**A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing data and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data must be encrypted at rest and replicated to a different AWS Region.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create a new S3 bucket that uses server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon Athena to query the data.**  
**B. Create a new S3 bucket that uses server-side encryption with Amazon S3 managed keys (SSE-S3). Configure Cross-Region Replication (CRR). Load the data into the new S3 bucket. Use Amazon RDS to query the data.**  
**C. Configure Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with Amazon S3 managed keys (SSE-S3). Use Amazon Athena to query the data. ✅**  
**D. Configure S3 Cross-Region Replication (CRR) on the existing S3 bucket. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.**

---

**Question 969**

**A company has a web application that has thousands of users. The application uses 8-10 user-uploaded images to generate AI images. Users can download the generated AI images once every 6 hours. The company also has a premium user option that gives users the ability to download the generated AI images anytime.**

**The company uses the user-uploaded images to run AI model training twice a year. The company needs a storage solution to store the images.**

**Which storage solution meets these requirements MOST cost-effectively?**

**A. Move uploaded images to Amazon S3 Glacier Deep Archive. Move premium user-generated AI images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent Access (S3 Standard-IA).**  
**B. Move uploaded images to Amazon S3 Glacier Deep Archive Move all generated AI images to S3 Glacier Flexible Retrieval.**  
**C. Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move premium user-generated AI images to S3 Standard. Move non-premium user-generated AI images to S3 Standard-Infrequent Access (S3 Standard-IA). ✅**  
**D. Move uploaded images to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA). Move all generated AI images to S3 Glacier Flexible Retrieval.**

---

**Question 970**

**A company is developing machine learning (ML) models on AWS. The company is developing the ML models as independent microservices. The microservices fetch approximately 1 GB of model data from Amazon S3 at startup and load the data into memory. Users access the ML models through an asynchronous API. Users can send a request or a batch of requests.**

**The company provides the ML models to hundreds of users. The usage patterns for the models are irregular. Some models are not used for days or weeks. Other models receive batches of thousands of requests at a time.**

**Which solution will meet these requirements?**

**A. Direct the requests from the API to a Network Load Balancer (NLB). Deploy the ML models as AWS Lambda functions that the NLB will invoke. Use auto scaling to scale the Lambda functions based on the traffic that the NLB receives.**  
**B. Direct the requests from the API to an Application Load Balancer (ALB). Deploy the ML models as Amazon Elastic Container Service (Amazon ECS) services that the ALB will invoke. Use auto scaling to scale the ECS cluster instances based on the traffic that the ALB receives.**  
**C. Direct the requests from the API into an Amazon Simple Queue Service (SQS) queue. Deploy the ML models as AWS Lambda functions that SQS events will invoke. Use auto scaling to increase the number of vCPUs for the Lambda functions based on the size of the SQS queue.**  
**D. Direct the requests from the API into an Amazon Simple Queue Service (SQS) queue. Deploy the ML models as Amazon Elastic Container Service (Amazon ECS) services that read from the queue. Use auto scaling for Amazon ECS to scale both the cluster capacity and number of the services based on the size of the SQS queue. ✅**

---

**Question 971**

**A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). The application stores data in an Amazon Aurora MySQL DB cluster.**

**The company needs to create a disaster recovery (DR) solution. The acceptable recovery time for the DR solution is up to 30 minutes. The DR solution does not need to support customer usage when the primary infrastructure is healthy.**

**Which solution will meet these requirements?**

**A. Deploy the DR infrastructure in a second AWS Region with an ALB and an Auto Scaling group. Set the desired capacity and maximum capacity of the Auto Scaling group to a minimum value. Convert the Aurora MySQL DB cluster to an Aurora global database. Configure Amazon Route 53 for an active-passive failover with ALB endpoints. ✅**  
**B. Deploy the DR infrastructure in a second AWS Region with an ALUpdate the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Convert the Aurora MySQL DB cluster to an Aurora global database.**  
**C. Back up the Aurora MySQL DB cluster data by using AWS Backup. Deploy the DR infrastructure in a second AWS Region with an ALB. Update the Auto Scaling group to include EC2 instances from the second Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora MySQL DB cluster in the second Region Restore the data from the backup.**  
**D. Back up the infrastructure configuration by using AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Set the Auto Scaling group desired capacity to zero. Use Amazon Route 53 to configure active-passive failover. Convert the Aurora MySQL DB cluster to an Aurora global database.**

---

**Question 972**

**A company is migrating its data processing application to the AWS Cloud. The application processes several short-lived batch jobs that cannot be disrupted. Data is generated after each batch job is completed. The data is accessed for 30 days and retained for 2 years.**

**The company wants to keep the cost of running the application in the AWS Cloud as low as possible.**

**Which solution will meet these requirements?**

**A. Migrate the data processing application to Amazon EC2 Spot Instances. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Instant Retrieval after 30 days. Set an expiration to delete the data after 2 years.**  
**B. Migrate the data processing application to Amazon EC2 On-Demand Instances. Store the data in Amazon S3 Glacier Instant Retrieval. Move the data to S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years.**  
**C. Deploy Amazon EC2 Spot Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Flexible Retrieval after 30 days. Set an expiration to delete the data after 2 years.**  
**D. Deploy Amazon EC2 On-Demand Instances to run the batch jobs. Store the data in Amazon S3 Standard. Move the data to Amazon S3 Glacier Deep Archive after 30 days. Set an expiration to delete the data after 2 years. ✅**

---

**Question 973**

**A company needs to design a hybrid network architecture. The company's workloads are currently stored in the AWS Cloud and in on-premises data centers. The workloads require single-digit latencies to communicate. The company uses an AWS Transit Gateway transit gateway to connect multiple VPCs.**

**Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)**

**A. Establish an AWS Site-to-Site VPN connection to each VPC.**  
**B. Associate an AWS Direct Connect gateway with the transit gateway that is attached to the VPCs. ✅**  
**C. Establish an AWS Site-to-Site VPN connection to an AWS Direct Connect gateway.**  
**D. Establish an AWS Direct Connect connection. Create a transit virtual interface (VIF) to a Direct Connect gateway. ✅**  
**E. Associate AWS Site-to-Site VPN connections with the transit gateway that is attached to the VPCs.**

---

**Question 974**

**A global ecommerce company runs its critical workloads on AWS. The workloads use an Amazon RDS for PostgreSQL DB instance that is configured for a Multi-AZ deployment.**

**Customers have reported application timeouts when the company undergoes database failovers. The company needs a resilient solution to reduce failover time.**

**Which solution will meet these requirements?**

**A. Create an Amazon RDS Proxy. Assign the proxy to the DB instance. ✅**  
**B. Create a read replica for the DB instance. Move the read traffic to the read replica.**  
**C. Enable Performance Insights. Monitor the CPU load to identify the timeouts.**  
**D. Take regular automatic snapshots. Copy the automatic snapshots to multiple AWS Regions.**

---

**Question 975**

**A company has multiple Amazon RDS DB instances that run in a development AWS account. All the instances have tags to identify them as development resources. The company needs the development DB instances to run on a schedule only during business hours.**

**Which solution will meet these requirements with the LEAST operational overhead?**

**A. Create an Amazon CloudWatch alarm to identify RDS instances that need to be stopped. Create an AWS Lambda function to start and stop the RDS instances.**  
**B. Create an AWS Trusted Advisor report to identify RDS instances to be started and stopped. Create an AWS Lambda function to start and stop the RDS instances.**  
**C. Create AWS Systems Manager State Manager associations to start and stop the RDS instances.**  
**D. Create an Amazon EventBridge rule that invokes AWS Lambda functions to start and stop the RDS instances. ✅**

---

**Question 976**

An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:

**![Question][image1]**

**What is the effect of this policy?**

A. Users can terminate an EC2 instance in any AWS Region except us-east-1.

B. Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.

**C. Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254. ✅**

D. Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.

**Question 977**

A consumer survey company has gathered data for several years from a specific geographic region. The company stores this data in an Amazon S3 bucket in an AWS Region.

The company has started to share this data with a marketing firm in a new geographic region. The company has granted the firm's AWS account access to the S3 bucket. The company wants to minimize the data transfer costs when the marketing firm requests data from the S3 bucket.

Which solution will meet these requirements?

**A. Configure the Requester Pays feature on the company’s S3 bucket. ✅**

B.Configure S3 Cross-Region Replication (CRR) from the company’s S3 bucket to one of the marketing firm’s S3 buckets.

C.Configure AWS Resource Access Manager to share the S3 bucket with the marketing firm AWS account.

D.Configure the company’s S3 bucket to use S3 Intelligent-Tiering Sync the S3 bucket to one of the marketing firm’s S3 buckets.

**Question 978**

A company uses AWS to host its public ecommerce website. The website uses an AWS Global Accelerator accelerator for traffic from the internet. The Global Accelerator accelerator forwards the traffic to an Application Load Balancer (ALB) that is the entry point for an Auto Scaling group.

The company recently identified a DDoS attack on the website. The company needs a solution to mitigate future attacks.

Which solution will meet these requirements with the LEAST implementation effort?

A.  Configure an AWS WAF web ACL for the Global Accelerator accelerator to block traffic by using rate-based rules

B. Configure an AWS Lambda function to read the ALB metrics to block attacks by updating a VPC network ACL

**C. Configure an AWS WAF web ACL on the ALB to block traffic by using rate-based rules ✅**

D. Configure an Amazon CloudFront distribution in front of the Global Accelerator accelerator

**Question 979**

A company uses an Amazon DynamoDB table to store data that the company receives from devices. The DynamoDB table supports a customer-facing website to display recent activity on customer devices. The company configured the table with provisioned throughput for writes and reads.

The company wants to calculate performance metrics for customer device data on a daily basis. The solution must have minimal effect on the table's provisioned read and write capacity.

Which solution will meet these requirements?

A. Use an Amazon Athena SQL query with the Amazon Athena DynamoDB connector to calculate performance metrics on a recurring schedule.

**B. Use an AWS Glue job with the AWS Glue DynamoDB export connector to calculate performance metrics on a recurring schedule. ✅**

C. Use an Amazon Redshift COPY command to calculate performance metrics on a recurring schedule.

D. Use an Amazon EMR job with an Apache Hive external table to calculate performance metrics on a recurring schedule.

**Question 980**

A solutions architect is designing the cloud architecture for a new stateless application that will be deployed on AWS. The solutions architect created an Amazon Machine Image (AMI) and launch template for the application.

Based on the number of jobs that need to be processed, the processing must run in parallel while adding and removing application Amazon EC2 instances as needed. The application must be loosely coupled. The job items must be durably stored.

Which solution will meet these requirements?

A. Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on CPU usage.

B. Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on network usage.

**C. Create an Amazon Simple Queue Service (Amazon SQS) queue to hold the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of items in the SQS queue. ✅**

D. Create an Amazon Simple Notification Service (Amazon SNS) topic to send the jobs that need to be processed. Create an Auto Scaling group by using the launch template with the scaling policy set to add and remove EC2 instances based on the number of messages published to the SNS topic.

Question 981

A global ecommerce company uses a monolithic architecture. The company needs a solution to manage the increasing volume of product data. The solution must be scalable and have a modular service architecture. The company needs to maintain its structured database schemas. The company also needs a storage solution to store product data and product images.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Amazon EC2 instance in an Auto Scaling group to deploy a containerized application. Use an Application Load Balancer to distribute web traffic. Use an Amazon RDS DB instance to store product data and product images.

B. Use AWS Lambda functions to manage the existing monolithic application. Use Amazon DynamoDB to store product data and product images. Use Amazon Simple Notification Service (Amazon SNS) for event-driven communication between the Lambda functions.

C. Use Amazon Elastic Kubernetes Service (Amazon EKS) with an Amazon EC2 deployment to deploy a containerized application. Use an Amazon Aurora cluster to store the product data. Use AWS Step Functions to manage workflows. Store the product images in Amazon S3 Glacier Deep Archive.

**D. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate to deploy a containerized application. Use Amazon RDS with a Multi-AZ deployment to store the product data. Store the product images in an Amazon S3 bucket. ✅**

---

Question 982

A company is migrating an application from an on-premises environment to AWS. The application will store sensitive data in Amazon S3. The company must encrypt the data before storing the data in Amazon S3.

Which solution will meet these requirements?

**A. Encrypt the data by using client-side encryption with customer managed keys. ✅**

B. Encrypt the data by using server-side encryption with AWS KMS keys (SSE-KMS).

C. Encrypt the data by using server-side encryption with customer-provided keys (SSE-C).

D. Encrypt the data by using client-side encryption with Amazon S3 managed keys.

---

Question 983

A company wants to create an Amazon EMR cluster that multiple teams will use. The company wants to ensure that each team’s big data workloads can access only the AWS services that each team needs to interact with. The company does not want the workloads to have access to Instance Metadata Service Version 2 (IMDSv2) on the cluster’s underlying EC2 instances.

Which solution will meet these requirements?

A. Configure interface VPC endpoints for each AWS service that the teams need. Use the required interface VPC endpoints to submit the big data workloads.

**B. Create EMR runtime roles. Configure the cluster to use the runtime roles. Use the runtime roles to submit the big data workloads. ✅**

C. Create an EC2 IAM instance profile that has the required permissions for each team. Use the instance profile to submit the big data workloads.

D. Create an EMR security configuration that has the EnableApplicationScopedIAMRole option set to false. Use the security configuration to submit the big data workloads.

---

Question 984

A solutions architect is designing an application that helps users fill out and submit registration forms. The solutions architect plans to use a two-tier architecture that includes a web application server tier and a worker tier.

The application needs to process submitted forms quickly. The application needs to process each form exactly once. The solution must ensure that no data is lost.

Which solution will meet these requirements?

**A. Use an Amazon Simple Queue Service (Amazon SQS) FIFO queue between the web application server tier and the worker tier to store and forward form data. ✅**

B. Use an Amazon API Gateway HTTP API between the web application server tier and the worker tier to store and forward form data.

C. Use an Amazon Simple Queue Service (Amazon SQS) standard queue between the web application server tier and the worker tier to store and forward form data.

D. Use an AWS Step Functions workflow. Create a synchronous workflow between the web application server tier and the worker tier that stores and forwards form data.

---

Question 985

A finance company uses an on-premises search application to collect streaming data from various producers. The application provides real-time updates to search and visualization features.

The company is planning to migrate to AWS and wants to use an AWS native solution.

Which solution will meet these requirements?

A. Use Amazon EC2 instances to ingest and process the data streams to Amazon S3 buckets tor storage. Use Amazon Athena to search the data. Use Amazon Managed Grafana to create visualizations.

B. Use Amazon EMR to ingest and process the data streams to Amazon Redshift for storage. Use Amazon Redshift Spectrum to search the data. Use Amazon QuickSight to create visualizations.

C. Use Amazon Elastic Kubernetes Service (Amazon EKS) to ingest and process the data streams to Amazon DynamoDB for storage. Use Amazon CloudWatch to create graphical dashboards to search and visualize the data.

**D. Use Amazon Kinesis Data Streams to ingest and process the data streams to Amazon OpenSearch Service. Use OpenSearch Service to search the data. Use Amazon QuickSight to create visualizations. ✅**

---

Question 986

A company currently runs an on-premises application that usesASP.NET on Linux machines. The application is resource-intensive and serves customers directly.

The company wants to modernize the application to .NET. The company wants to run the application on containers and to scale based on Amazon CloudWatch metrics. The company also wants to reduce the time spent on operational maintenance activities.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. ✅**

B. Use AWS App2Container to containerize the application. Use an AWS CloudFormation template to deploy the application to Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 instances.

C. Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.

D. Use AWS App Runner to containerize the application. Use App Runner to deploy the application to Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2 instances.

---

Question 987

A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.

Which solution will satisfy these requirements?

A. Configure Amazon EFS storage and set the Active Directory domain for authentication.

B. Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.

C. Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.

**D. Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication. ✅**

---

Question 988

A company is designing a new internal web application in the AWS Cloud. The new application must securely retrieve and store multiple employee usernames and passwords from an AWS managed service.

Which solution will meet these requirements with the LEAST operational overhead?

A. Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve usernames and passwords from Parameter Store.

B. Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager.

C. Store the employee credentials in AWS Systems Manager Parameter Store. Use AWS CloudFormation and AWS Batch with the BatchGetSecretValue API to retrieve the usernames and passwords from Parameter Store.

**D. Store the employee credentials in AWS Secrets Manager. Use AWS CloudFormation and the BatchGetSecretValue API to retrieve the usernames and passwords from Secrets Manager. ✅**

---

Question 989

A company that is in the ap-northeast-1 Region has a fleet of thousands of AWS Outposts servers. The company has deployed the servers at remote locations around the world. All the servers regularly download new software versions that consist of 100 files. There is significant latency before all servers run the new software versions.

The company must reduce the deployment latency for new software versions.

Which solution will meet this requirement with the LEAST operational overhead?

A. Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution in ap-northeast-1 that includes a CachingDisabled cache policy. Configure the S3 bucket as the origin. Download the software by using signed URLs.

B. Create an Amazon S3 bucket in ap-northeast-1. Create a second S3 bucket in the us-east-1 Region. Configure replication between the buckets. Set up an Amazon CloudFront distribution that uses ap-northeast-1 as the primary origin and us-east-1 as the secondary origin. Download the software by using signed URLs.

C. Create an Amazon S3 bucket in ap-northeast-1. Configure Amazon S3 Transfer Acceleration. Download the software by using the S3 Transfer Acceleration endpoint.

**D. Create an Amazon S3 bucket in ap-northeast-1. Set up an Amazon CloudFront distribution. Configure the S3 bucket as the origin. Download the software by using signed URLs. ✅**

---

Question 990

A company currently runs an on-premises stock trading application by using Microsoft Windows Server. The company wants to migrate the application to the AWS Cloud.

The company needs to design a highly available solution that provides low-latency access to block storage across multiple Availability Zones.

Which solution will meet these requirements with the LEAST implementation effort?

A. Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon FSx for Windows File Server as shared storage between the two cluster nodes.

B. Configure a Windows Server cluster that spans two Availability Zones on Amazon EC2 instances. Install the application on both cluster nodes. Use Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3) volumes as storage attached to the EC2 instances. Set up application-level replication to sync data from one EBS volume in one Availability Zone to another EBS volume in the second Availability Zone.

**C. Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use an Amazon FSx for NetApp ONTAP Multi-AZ file system to access the data by using Internet Small Computer Systems Interface (iSCSI) protocol. ✅**

D. Deploy the application on Amazon EC2 instances in two Availability Zones. Configure one EC2 instance as active and the second EC2 instance in standby mode. Use Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS SSD (io2) volumes as storage attached to the EC2 instances. Set up Amazon EBS level replication to sync data from one io2 volume in one Availability Zone to another io2 volume in the second Availability Zone.

---

Question 991

A company is designing a web application with an internet-facing Application Load Balancer (ALB).

The company needs the ALB to receive HTTPS web traffic from the public internet. The ALB must send only HTTPS traffic to the web application servers hosted on the Amazon EC2 instances on port 443\. The ALB must perform a health check of the web application servers over HTTPS on port 8443\.

Which combination of configurations of the security group that is associated with the ALB will meet these requirements? (Choose three.)

**A. Allow HTTPS inbound traffic from 0.0.0.0/0 for port 443\. ✅**

B. Allow all outbound traffic to 0.0.0.0/0 for port 443\.

**C. Allow HTTPS outbound traffic to the web application instances for port 443\. ✅**

D. Allow HTTPS inbound traffic from the web application instances for port 443\.

**E. Allow HTTPS outbound traffic to the web application instances for the health check on port 8443\. ✅**

F. Allow HTTPS inbound traffic from the web application instances for the health check on port 8443\.

---

Question 992

A company hosts an application on AWS. The application gives users the ability to upload photos and store the photos in an Amazon S3 bucket. The company wants to use Amazon CloudFront and a custom domain name to upload the photo files to the S3 bucket in the eu-west-1 Region.

Which solution will meet these requirements? (Choose two.)

**A. Use AWS Certificate Manager (ACM) to create a public certificate in the us-east-1 Region. Use the certificate in CloudFront. ✅**

B. Use AWS Certificate Manager (ACM) to create a public certificate in eu-west-1. Use the certificate in CloudFront.

C. Configure Amazon S3 to allow uploads from CloudFront. Configure S3 Transfer Acceleration.

**D. Configure Amazon S3 to allow uploads from CloudFront origin access control (OAC). ✅**

E. Configure Amazon S3 to allow uploads from CloudFront. Configure an Amazon S3 website endpoint.

---

Question 993

A weather forecasting company collects temperature readings from various sensors on a continuous basis. An existing data ingestion process collects the readings and aggregates the readings into larger Apache Parquet files. Then the process encrypts the files by using client-side encryption with KMS managed keys (CSE-KMS). Finally, the process writes the files to an Amazon S3 bucket with separate prefixes for each calendar day.

The company wants to run occasional SQL queries on the data to take sample moving averages for a specific calendar day.

Which solution will meet these requirements MOST cost-effectively?

**A. Configure Amazon Athena to read the encrypted files. Run SQL queries on the data directly in Amazon S3. ✅**

B. Use Amazon S3 Select to run SQL queries on the data directly in Amazon S3.

C. Configure Amazon Redshift to read the encrypted files. Use Redshift Spectrum and Redshift query editor v2 to run SQL queries on the data directly in Amazon S3.

D. Configure Amazon EMR Serverless to read the encrypted files. Use Apache SparkSQL to run SQL queries on the data directly in Amazon S3.

---

Question 994

A company is implementing a new application on AWS. The company will run the application on multiple Amazon EC2 instances across multiple Availability Zones within multiple AWS Regions. The application will be available through the internet. Users will access the application from around the world.

The company wants to ensure that each user who accesses the application is sent to the EC2 instances that are closest to the user’s location.

Which solution will meet these requirements?

A. Implement an Amazon Route 53 geolocation routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.

**B. Implement an Amazon Route 53 geoproximity routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region. ✅**

C. Implement an Amazon Route 53 multivalue answer routing policy. Use an internet-facing Application Load Balancer to distribute the traffic across all Availability Zones within the same Region.

D. Implement an Amazon Route 53 weighted routing policy. Use an internet-facing Network Load Balancer to distribute the traffic across all Availability Zones within the same Region.

---

Question 995

A financial services company plans to launch a new application on AWS to handle sensitive financial transactions. The company will deploy the application on Amazon EC2 instances. The company will use Amazon RDS for MySQL as the database. The company’s security policies mandate that data must be encrypted at rest and in transit.

Which solution will meet these requirements with the LEAST operational overhead?

**A. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit. ✅**

B. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure IPsec tunnels for encryption in transit.

C. Implement third-party application-level data encryption before storing data in Amazon RDS for MySQL. Configure AWS Certificate Manager (ACM) SSL/TLS certificates for encryption in transit.

D. Configure encryption at rest for Amazon RDS for MySQL by using AWS KMS managed keys. Configure a VPN connection to enable private connectivity to encrypt data in transit.

---

Question 996

A company is migrating its on-premises Oracle database to an Amazon RDS for Oracle database. The company needs to retain data for 90 days to meet regulatory requirements. The company must also be able to restore the database to a specific point in time for up to 14 days.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create Amazon RDS automated backups. Set the retention period to 90 days.

B. Create an Amazon RDS manual snapshot every day. Delete manual snapshots that are older than 90 days.

C. Use the Amazon Aurora Clone feature for Oracle to create a point-in-time restore. Delete clones that are older than 90 days.

**D. Create a backup plan that has a retention period of 90 days by using AWS Backup for Amazon RDS. ✅**

---

Question 997

A company is developing a new application that uses a relational database to store user data and application configurations. The company expects the application to have steady user growth. The company expects the database usage to be variable and read-heavy, with occasional writes.

The company wants to cost-optimize the database solution. The company wants to use an AWS managed database solution that will provide the necessary performance.

Which solution will meet these requirements MOST cost-effectively?

A. Deploy the database on Amazon RDS. Use Provisioned IOPS SSD storage to ensure consistent performance for read and write operations.

**B. Deploy the database on Amazon Aurora Serverless to automatically scale the database capacity based on actual usage to accommodate the workload. ✅**

C. Deploy the database on Amazon DynamoDB. Use on-demand capacity mode to automatically scale throughput to accommodate the workload.

D. Deploy the database on Amazon RDS. Use magnetic storage and use read replicas to accommodate the workload.

---

Question 998

An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.

Users report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.

What should the solutions architect do to resolve this issue with the LEAST operational overhead?

A. Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.

B. Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.

**C. Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout. ✅**

D. Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.

---

Question 999

A company hosts its application on several Amazon EC2 instances inside a VPC. The company creates a dedicated Amazon S3 bucket for each customer to store their relevant information in Amazon S3.

The company wants to ensure that the application running on EC2 instances can securely access only the S3 buckets that belong to the company’s AWS account.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a gateway endpoint for Amazon S3 that is attached to the VPC. Update the IAM instance profile policy to provide access to only the specific buckets that the application needs.

B. Create a NAT gateway in a public subnet with a security group that allows access to only Amazon S3. Update the route tables to use the NAT Gateway.

**C. Create a gateway endpoint for Amazon S3 that is attached to the VPUpdate the IAM instance profile policy with a Deny action and the following condition key:**

D. Create a NAT Gateway in a public subnet. Update route tables to use the NAT Gateway. Assign bucket policies for all buckets with a Deny action and the following condition key:

---

Question 1000

A company is building a cloud-based application on AWS that will handle sensitive customer data. The application uses Amazon RDS for the database, Amazon S3 for object storage, and S3 Event Notifications that invoke AWS Lambda for serverless processing.

The company uses AWS IAM Identity Center to manage user credentials. The development, testing, and operations teams need secure access to Amazon RDS and Amazon S3 while ensuring the confidentiality of sensitive customer data. The solution must comply with the principle of least privilege.

Which solution meets these requirements with the LEAST operational overhead?

A. Use IAM roles with least privilege to grant all the teams access. Assign IAM roles to each team with customized IAM policies defining specific permission for Amazon RDS and S3 object access based on team responsibilities.

**B. Enable IAM Identity Center with an Identity Center directory. Create and configure permission sets with granular access to Amazon RDS and Amazon S3. Assign all the teams to groups that have specific access with the permission sets. ✅**

C. Create individual IAM users for each member in all the teams with role-based permissions. Assign the IAM roles with predefined policies for RDS and S3 access to each user based on user needs. Implement IAM Access Analyzer for periodic credential evaluation.

D. Use AWS Organizations to create separate accounts for each team. Implement cross-account IAM roles with least privilege. Grant specific permission for RDS and S3 access based on team roles and responsibilities.

---

Question 1001

A company has an Amazon S3 bucket that contains sensitive data files. The company has an application that runs on virtual machines in an on-premises data center. The company currently uses AWS IAM Identity Center.

The application requires temporary access to files in the S3 bucket. The company wants to grant the application secure access to the files in the S3 bucket.

Which solution will meet these requirements?

A. Create an S3 bucket policy that permits access to the bucket from the public IP address range of the company’s on-premises data center.

**B. Use IAM Roles Anywhere to obtain security credentials in IAM Identity Center that grant access to the S3 bucket. Configure the virtual machines to assume the role by using the AWS CLI. ✅**

C. Install the AWS CLI on the virtual machine. Configure the AWS CLI with access keys from an IAM user that has access to the bucket.

D. Create an IAM user and policy that grants access to the bucket. Store the access key and secret key for the IAM user in AWS Secrets Manager. Configure the application to retrieve the access key and secret key at startup.

---

Question 1002

A company hosts its core network services, including directory services and DNS, in its on-premises data center. The data center is connected to the AWS Cloud using AWS Direct Connect (DX). Additional AWS accounts are planned that will require quick, cost-effective, and consistent access to these network services.

What should a solutions architect implement to meet these requirements with the LEAST amount of operational overhead?

A. Create a DX connection in each new account. Route the network traffic to the on-premises servers.

B. Configure VPC endpoints in the DX VPC for all required services. Route the network traffic to the on-premises servers.

C. Create a VPN connection between each new account and the DX VPRoute the network traffic to the on-premises servers.

**D. Configure AWS Transit Gateway between the accounts. Assign DX to the transit gateway and route network traffic to the on-premises servers. ✅**

---

Question 1003

A company hosts its main public web application in one AWS Region across multiple Availability Zones. The application uses an Amazon EC2 Auto Scaling group and an Application Load Balancer (ALB).

A web development team needs a cost-optimized compute solution to improve the company’s ability to serve dynamic content globally to millions of customers.

Which solution will meet these requirements?

**A. Create an Amazon CloudFront distribution. Configure the existing ALB as the origin. ✅**

B. Use Amazon Route 53 to serve traffic to the ALB and EC2 instances based on the geographic location of each customer.

C. Create an Amazon S3 bucket with public read access enabled. Migrate the web application to the S3 bucket. Configure the S3 bucket for website hosting.

D. Use AWS Direct Connect to directly serve content from the web application to the location of each customer.

---

Question 1004

A company stores user data in AWS. The data is used continuously with peak usage during business hours. Access patterns vary, with some data not being used for months at a time. A solutions architect must choose a cost-effective solution that maintains the highest level of durability while maintaining high availability.

Which storage solution meets these requirements?

A. Amazon S3 Standard

**B. Amazon S3 Intelligent-Tiering ✅**

C. Amazon S3 Glacier Deep Archive

D. Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)

**C. Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) to process videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue Service (Amazon SQS) for queuing and to decouple processing tasks. ✅**

D. Deploy a containerized video processing application on Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2. Store video metadata in Amazon RDS in a single Availability Zone. Store video content in Amazon S3 Glacier Deep Archive.

---

Question 1006

A company recently launched a new application for its customers. The application runs on multiple Amazon EC2 instances across two Availability Zones. End users use TCP to communicate with the application.

The application must be highly available and must automatically scale as the number of users increases.

Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)

**A. Add a Network Load Balancer in front of the EC2 instances. ✅**

**B. Configure an Auto Scaling group for the EC2 instances. ✅**

C. Add an Application Load Balancer in front of the EC2 instances.

D. Manually add more EC2 instances for the application.

E. Add a Gateway Load Balancer in front of the EC2 instances.

---

Question 1007

A company is designing the architecture for a new mobile app that uses the AWS Cloud. The company uses organizational units (OUs) in AWS Organizations to manage its accounts. The company wants to tag Amazon EC2 instances with data sensitivity by using values of sensitive and nonsensitive. IAM identities must not be able to delete a tag or create instances without a tag.

Which combination of steps will meet these requirements? (Choose two.)

A. In Organizations, create a new tag policy that specifies the data sensitivity tag key and the required values. Enforce the tag values for the EC2 instances. Attach the tag policy to the appropriate OU.

B. In Organizations, create a new service control policy (SCP) that specifies the data sensitivity tag key and the required tag values. Enforce the tag values for the EC2 instances. Attach the SCP to the appropriate OU.

C. Create a tag policy to deny running instances when a tag key is not specified. Create another tag policy that prevents identities from deleting tags. Attach the tag policies to the appropriate OU.

**D. Create a service control policy (SCP) to deny creating instances when a tag key is not specified. Create another SCP that prevents identities from deleting tags. Attach the SCPs to the appropriate OU. ✅**

E. Create an AWS Config rule to check if EC2 instances use the data sensitivity tag and the specified values. Configure an AWS Lambda function to delete the resource if a noncompliant resource is found.

---

Question 1008

A company runs database workloads on AWS that are the backend for the company's customer portals. The company runs a Multi-AZ database cluster on Amazon RDS for PostgreSQL.

The company needs to implement a 30-day backup retention policy. The company currently has both automated RDS backups and manual RDS backups. The company wants to maintain both types of existing RDS backups that are less than 30 days old.

Which solution will meet these requirements MOST cost-effectively?

A. Configure the RDS backup retention policy to 30 days for automated backups by using AWS Backup. Manually delete manual backups that are older than 30 days.

B. Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days. Configure the RDS backup retention policy to 30 days for automated backups.

**C. Configure the RDS backup retention policy to 30 days for automated backups. Manually delete manual backups that are older than 30 days. ✅**

D. Disable RDS automated backups. Delete automated backups and manual backups that are older than 30 days automatically by using AWS CloudFormation. Configure the RDS backup retention policy to 30 days for automated backups.

---

Question 1009

A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.

Which solution meets these requirements?

A. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.

B. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.

C. Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.

**D. Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system. ✅**

---

Question 1010

A company is planning to migrate a legacy application to AWS. The application currently uses NFS to communicate to an on-premises storage solution to store application data. The application cannot be modified to use any other communication protocols other than NFS for this purpose.

Which storage solution should a solutions architect recommend for use after the migration?

A. AWS DataSync

B. Amazon Elastic Block Store (Amazon EBS)

**C. Amazon Elastic File System (Amazon EFS) ✅**

D. Amazon EMR File System (Amazon EMRFS)

---

Question 1011

A company uses GPS trackers to document the migration patterns of thousands of sea turtles. The trackers check every 5 minutes to see if a turtle has moved more than 100 yards (91.4 meters). If a turtle has moved, its tracker sends the new coordinates to a web application running on three Amazon EC2 instances that are in multiple Availability Zones in one AWS Region.

Recently, the web application was overwhelmed while processing an unexpected volume of tracker data. Data was lost with no way to replay the events. A solutions architect must prevent this problem from happening again and needs a solution with the least operational overhead.

What should the solutions architect do to meet these requirements?

A. Create an Amazon S3 bucket to store the data. Configure the application to scan for new data in the bucket for processing.

B. Create an Amazon API Gateway endpoint to handle transmitted location coordinates. Use an AWS Lambda function to process each item concurrently.

**C. Create an Amazon Simple Queue Service (Amazon SQS) queue to store the incoming data. Configure the application to poll for new messages for processing. ✅**

D. Create an Amazon DynamoDB table to store transmitted location coordinates. Configure the application to query the table for new data for processing. Use TTL to remove data that has been processed.

---

Question 1012

A company's software development team needs an Amazon RDS Multi-AZ cluster. The RDS cluster will serve as a backend for a desktop client that is deployed on premises. The desktop client requires direct connectivity to the RDS cluster.

The company must give the development team the ability to connect to the cluster by using the client when the team is in the office.

Which solution provides the required connectivity MOST securely?

A. Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office.

**B. Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use AWS Site-to-Site VPN with a customer gateway in the company's office. ✅**

C. Create a VPC and two private subnets. Create the RDS cluster in the private subnets. Use RDS security groups to allow the company's office IP ranges to access the cluster.

D. Create a VPC and two public subnets. Create the RDS cluster in the public subnets. Create a cluster user for each developer. Use RDS security groups to allow the users to access the cluster.

---

Question 1013

A solutions architect is creating an application that will handle batch processing of large amounts of data. The input data will be held in Amazon S3 and the output data will be stored in a different S3 bucket. For processing, the application will transfer the data over the network between multiple Amazon EC2 instances.

What should the solutions architect do to reduce the overall data transfer costs?

A. Place all the EC2 instances in an Auto Scaling group.

B. Place all the EC2 instances in the same AWS Region.

**C. Place all the EC2 instances in the same Availability Zone. ✅**

D. Place all the EC2 instances in private subnets in multiple Availability Zones.

---

Question 1014

A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company's IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days.

What should a solutions architect do to meet this requirement with the LEAST operational effort?

**A. Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days. ✅**

B. Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.

C. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.

D. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.

---

Question 1015

A streaming media company is rebuilding its infrastructure to accommodate increasing demand for video content that users consume daily.

The company needs to process terabyte-sized videos to block some content in the videos. Video processing can take up to 20 minutes.

The company needs a solution that will scale with demand and remain cost-effective.

Which solution will meet these requirements?

A. Use AWS Lambda functions to process videos. Store video metadata in Amazon DynamoDB. Store video content in Amazon S3 Intelligent-Tiering.

B. Use Amazon Elastic Container Service (Amazon ECS) and AWS Fargate to implement microservices to process videos. Store video metadata in Amazon Aurora. Store video content in Amazon S3 Intelligent-Tiering.

**C. Use Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB) to process videos. Store video content in Amazon S3 Standard. Use Amazon Simple Queue Service (Amazon SQS) for queuing and to decouple processing tasks. ✅**

D. Deploy a containerized video processing application on Amazon Elastic Kubernetes Service (Amazon EKS) on Amazon EC2. Store video metadata in Amazon RDS in a single Availability Zone. Store video content in Amazon S3 Glacier Deep Archive.

---

Question 1016

A company runs an on-premises application on a Kubernetes cluster. The company recently added millions of new customers. The company's existing on-premises infrastructure is unable to handle the large number of new customers. The company needs to migrate the on-premises application to the AWS Cloud.

The company will migrate to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The company does not want to manage the underlying compute infrastructure for the new architecture on AWS.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use a self-managed node to supply compute capacity. Deploy the application to the new EKS cluster.

B. Use managed node groups to supply compute capacity. Deploy the application to the new EKS cluster.

**C. Use AWS Fargate to supply compute capacity. Create a Fargate profile. Use the Fargate profile to deploy the application. ✅**

D. Use managed node groups with Karpenter to supply compute capacity. Deploy the application to the new EKS cluster.

---

Question 1017

A company is launching a new application that requires a structured database to store user profiles, application settings, and transactional data. The database must be scalable with application traffic and must offer backups.

Which solution will meet these requirements MOST cost-effectively?

A. Deploy a self-managed database on Amazon EC2 instances by using open source software. Use Spot Instances for cost optimization. Configure automated backups to Amazon S3.

B. Use Amazon RDS. Use on-demand capacity mode for the database with General Purpose SSD storage. Configure automatic backups with a retention period of 7 days.

**C. Use Amazon Aurora Serverless for the database. Use serverless capacity scaling. Configure automated backups to Amazon S3. ✅**

D. Deploy a self-managed NoSQL database on Amazon EC2 instances. Use Reserved Instances for cost optimization. Configure automated backups directly to Amazon S3 Glacier Flexible Retrieval.

---

Question 1018

A company runs its legacy web application on AWS. The web application server runs on an Amazon EC2 instance in the public subnet of a VPC. The web application server collects images from customers and stores the image files in a locally attached Amazon Elastic Block Store (Amazon EBS) volume. The image files are uploaded every night to an Amazon S3 bucket for backup.

A solutions architect discovers that the image files are being uploaded to Amazon S3 through the public endpoint. The solutions architect needs to ensure that traffic to Amazon S3 does not use the public endpoint.

Which solution will meet these requirements?

**A. Create a gateway VPC endpoint for the S3 bucket that has the necessary permissions for the VPC. Configure the subnet route table to use the gateway VPC endpoint. ✅**

B. Move the S3 bucket inside the VPC. Configure the subnet route table to access the S3 bucket through private IP addresses.

C. Create an Amazon S3 access point for the Amazon EC2 instance inside the VPConfigure the web application to upload by using the Amazon S3 access point.

D. Configure an AWS Direct Connect connection between the VPC that has the Amazon EC2 instance and Amazon S3 to provide a dedicated network path.

---

Question 1019

A company is creating a prototype of an ecommerce website on AWS. The website consists of an Application Load Balancer, an Auto Scaling group of Amazon EC2 instances for web servers, and an Amazon RDS for MySQL DB instance that runs with the Single-AZ configuration.

The website is slow to respond during searches of the product catalog. The product catalog is a group of tables in the MySQL database that the company does not update frequently. A solutions architect has determined that the CPU utilization on the DB instance is high when product catalog searches occur.

What should the solutions architect recommend to improve the performance of the website during searches of the product catalog?

A. Migrate the product catalog to an Amazon Redshift database. Use the COPY command to load the product catalog tables.

**B. Implement an Amazon ElastiCache for Redis cluster to cache the product catalog. Use lazy loading to populate the cache. ✅**

C. Add an additional scaling policy to the Auto Scaling group to launch additional EC2 instances when database response is slow.

D. Turn on the Multi-AZ configuration for the DB instance. Configure the EC2 instances to throttle the product catalog queries that are sent to the database.

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAAHoCAIAAABGrEVHAACAAElEQVR4XuzdB1gUSd4wcO793gt7u3ebgwkFTIAYELMoiIqoSAaJAiIIiCBBRBEUkJyT5AySJeecc5Kccw4DA8MME/qbzDDiLrrcvYb6PY+PTFd1TXX3TP+7qnuqGCAAAAAAAP40BvoFAAAAAAC8P0pAxa6sjCf66fCz/3Iqq3F6TRYAAAAAAP4IJaAiZ+dS7impyh55kr28gl2TBQAAAACAP0IJqMtTU1GKmg91xCOn1qQDAAAAALAB1IA6PR2n+vTZwzuxk2vSAQAAAADYAFJAxSEm+/rC7jx+ZqQRP0GXAwAAAACAP0QKqNM2VwV4Tsnpe2S2TaDocgAAAAAA8IdIAXXO65a8BL+8gWtixcAyXQ4AAAAAAP4Q9SnfmZl41ccmeoqR42vSAQAAAADYgDUPJRk/e6gCHkoCAAAAgPdH87OZSAU1vftCr8DPZgAAAADgvVECKmoOlqV/547kAc0o2BJ6TRYAAAAAAP4IJaDiMBhYbqTh9aM/Hk6tA72+AAAAAPB+wOD4AAAAALAJQEAFAAAAgE0AAioAAAAAbAIQUAEAAABgE4CAummwKyjk0iIazH0HAADwRQIBddMM5YX7P1IuG6VfDgAAAHwJPuqAutCWluVtYmnv1I2EVqYGKkMcXK0Jf2PoM34UGjzuKTAzhLTSL98UmOn6/BAPawu/4PReaKWzIfWltbXT46g6+nwfBoOMcTazcAsKr56cwEKZ7haOtv6xFQNj9PlmXhobGhniPX7mk0SfSDJWSEg3fPTILimnAUafirdUl+PrlNO9vLxeU741zd/xieEjQgnGRR/8663xokQ3h9JhzHrvAEHT5RVRlsRKGiZXzdCnbgga0ZXmFVtZP4mjT4F3OVo+ffqEuAXE/WBi7uEZUd0CR62sZpqdbEq1cEoqbJ6HIAQ0XGhuH+JRODyPfKs0AAA+KR91QJ0sdLAX3PrLV3/xb0OjB6pjlPaxMPzFsxt/EsJDwse7iovLy0pLy4pKikq6sBAWCRvowv9ZVFZZWl5Y2zs2+18d6L8vzdtZVTB/iH75puiPVxbZ8g+Gry6JO9Uia6z1zv/I8C3nXt1E+nwfBr2offT7r/61dY92av44zvb8v35k+OmwenjSHDUHFrc8PlTmeGgnBxsH3u7dJ6/mdszP0Q4BgllCjtUUeKgS0jk42A+LKZrFoajXPjh0V2NpXl5ckquq4uEtd+KmppE06xJg0AvdjwRPs7KQCtglb1NUO4yArx8V14NFNtcU5+VFRJtLie7fapS7uPJ2hMIul/lpaVwnvQXHzccRlcOIjQ9kgppoq60oyssLCNS/skfW06nqrTV7Qxm+27aNhbiTiJi+P3z4gFlQ3xz14gI3l5Kof+wfh43c8mYgVPegt9g3e+Vlg1omFje+qQAAfIw+6oBKAGuqNeM7qf66EX+2wQ62OAvuFoxMHIajIPhUe9EL8d1HeXiP3vFw9i5GQ5jF0dpiXxdvtWN/Oa370Ke0fWiBvrRPVf9Nxr/8fFL7cdbEArRw9+g/v9l3Qy16+q3T+YdD976OVD787S+Ccs5VuOniLD2ug9svnbqXRz7HT1a1BYhcE5btprwlqi/6kpBTUHI/pYDJ3qood4X7VlbJ5AXzDTE2pqFVIyOklzhkcVKgm5uX18vI2jjj29Hj44uUVUnpAynFDvz3gjqHyQuwHqrSl6UCMys2PEEvZjE9xtfNzSfIL7Qh7rFu8hySvitjeuhNgsWzmKIOcjBPc39xU+yRd0HPwNp877LUmRMb6uXmFhAZ6HfbM/VF/hJ9jvnulPZF2i3ztDC7rBRTMbRIfEsUNFcafYft0A9bUwbxTdb2Gldprl//FtwM5kwEgM/BRx9QsRPIaj+Oa3dNaxFw/MvBpKM7L+ukdHaQGp8VRoZP7bVD52nXWIzUl4ofn6W8RDRFpPjZWlOEJHasOUPPNTdmBdnY2sXVjM/ho8d4aVKIi7Wdt0ts/eAEtYG7MNmcGelAXN8myMUjKy8/vGUaQpMbQIgcNydXfJK9s6Pvq9G1cYJiJcXD0Z5cBdus9gVqro6CYDtbdxev7OrOvtHxMkdCBnvXwNgiciAiwPYH/vobn4JzVT0cWhkq+mH7zj0aIXljEN1pGN6VnxAZ5OcXGJVS9d5t85Xu/jjjm0cYj6k54rcI3RhkeJqT85jSJKmncqq1L9vFK5O2h7n9vLidfUgL+RW2vjjdV0MptrlutVU78NrLJLG1mr4qGKjBViVmcowuoA6VNae5Vk+vLqlIfHZS1CM6e3B10UbNQmXP9FLnl+kCKralptC/smS1K3k061WQDPfTyIqi9Y/au+G6tVzjLQrpt40eakHfRIM/aHBwgXhlghyF5WhLHWHedvQ+/sM2VWhpxPctw35+8ocZAIBP3EcfUPGWpp480TRKn5kmntxdVQRMYlqrST1okylOBobaWkHDs6SmEwYzOxKsppk0AZHbDpjFSOOzglws+yjOXrRwKO0fWiTlx0EDiTHPRfftZuaSt3SLykqzlLlwkm3fHu5j4q4Z9eOEvmUsHNYdEaYneHo7cf09fOzbr/Cd+7tzPYQgN99mLc9wncIn7fpt+z6OjD7SQiochJmb6E+/zs6+l1yFPZKG/lGtw9Mows3gLHsRVhbmX77ik9UysHa/y0bIsJON67S0fSWC0mOJqfG4oBFR3kFocM/WZx5TsjTPo4k8FH3+Ymy/MOBtOabzAfcfUSM1JQ6X7pnbkV7WeGi/UJfvJ5/rcQSreSFMb/rJx9GupZSpFBZyMiJtrusk5tRRr2SgiWxz9cCqbLqntLDzULW1TNjQKHxthyz9O0DhZtrHzTJeE240vifkEFRoohE/RR9QF4tLXtsmlK7um5lit1fau9W9shPfN2ovvFG2izTO/v264dCLg091NewaIfLHE94/FKcjf0v7tl05/lVbiLGGMO/pZ2lr1wIA4FP1KQRUCBob6R2YWSHdEpsdbBuaRiyQzlBYeJ2XorWmoE0BsWG03Dufb31DWGeJEMeI+rPPqhnrvMyspnBXkeM8Z26R2UUOBctTk31vSjMiT7D8smXnftZ9V2RtoirSsipCEgv6Rjrw74AoiFI5K3vixl3PKsL6hXEJj64d3M7g0gRRbgKi+2urayoqyoINbTR4o1rp4gQCag+yU76m7ZudWkGSo3Xx8CVhXecq3BQGmhmsyk8yubt7J+N3P7BdVEsnZAgNfy537ZBCDaV/Fbcw1j4MRxPDwwp8rmVgenK9Nk2vn8i+HwkB9RfO+x8QUCHcyspMx+AouWm8Mjs8Odi17qNDENRV7m5vm93eskQJWSOx0bbqrFLesaWr8XMqz1zIOjWuk7qACA3DB9QzDvUDMPoOWRr4d20y5DN3bxwdeEcNfs/yIKbgqaBPxxLNg0AE4ymZrhoB2av9u7OlriH3dgqZRQS/ocm2EfNvLhp4qET9flcxfGkqx0jFOx9F+ahgkMjpvq6+kcFpQufC0vhAT0d7+2pHCAAAn7ZPI6D+numyVD/bc4pu+NbkbG1cmOhRY894chKmJtNS+66xnUuArw9FoJeF94PzP/LqiLo2UctAj9VfVlZVSV2n4w+NrM0wULt/UUbeklSAv39UWgHlRh8tbENAso3Y2oCKXBiq9xRQefowkGYhXl26i8UtbrvcGnz4gcN6Q6w4TyhKOkdTwuBkQ2OQtFQO8eGrjwpuojTf/q7CmdOiWg5rdtZEYpz9vSOiHsnFq7tmKs9M3CEroZsmG0QOqEetqvrXPNFEtbzUk/76iazEqXOpkzSPc+PQI9kWLnf53ibkXFw9vPYBJ2JAvezRvEgXUGcysj3uh2f0UhfMlrmE3WcUt4oJayVMuNQdr2t2i758Pkkdef+GbnIbk2L+zVkdZ4WwnjUL18KMl3QGCenlfNiDxAAAfHo+/YAKYfuzU1wkJRuRU22JTvfZHziFUW71oYozzKV2MO3eu3/vboo9e/ey7mdjOffQIpxy/w9/Bh6u1TUzc21+xw9y+uJeGV1jYiEVwMLMcZhbJ3wJTWkEU6wXUGFz/alWXJrG2jFr21kdBY5WGvuNI8oG8Wf12Z4YyyP3jLVf11CSx+tq/SQlP76Aishw1pI8InnXMqVwYW2wQpXmBJiJX3HLyl9ttI1lWGqH1eXTTbD7uwF1bjg5/LGyMOeth34V9Lt3BbG8uPA2+DKafjCNdwVUdHV51IvXyV3UkqcKPSM192v756cSfiGEw6KWEG+/BXxpEYnB0tXmjwMqdq4+OkHzQNT7diYTYZdn56eG+4dm5um3AQCAj9dnEFAhdFt2kdmNwISIWBu5wzcD/ak/YMTW51g/fOgSHp2TnUWVnZdTWF5Z1zMyufqIJnKk7rGVpVc79I6z1+L8cEN+Dmn9hJig+ypHj0f3Urt8KRoDU2zFo9toF63AR9r8RW8/1X+55gEidEm8w3O5y64lDeP4gDrXG291RP+ZbnIjJX2irsZPUir3Y+sLHI7nOi6j4phfOo56Kxh2VEU4abEaByasbn9HpPeLtPYGun2KXYBqbI5aVw/Mv92Xi3iheO3IWVX9oPqm9X7CulGoIVyhyWXPFgT99VHvmxT3lyF11F7p3uQIT0kBs7jqCvpj+UfgzWcfuNwKX23svmW8I8nr+WG5lrf21AbgxnIsXJROcok4RuR+UEAGAOD/wucQUKGF5qEyC/mTMpp3hQRfNZRMUc+jM4P5EYr2RaV0T/D0J/iGJEQX0pyqlntNHR0CaR6spRqvDHNLqUpbM8bBm0ief5vWQIt0rZaBmCJ3mfTxNcvQ8LlOH0212zq05/aJ5IdmqpIKdo0948uEp17nslyOPbJ6lEO927jU2/1KTr6aZpWNmKuNdLMxMTIytvVOX6fz+s9YHpooC3DXUtULraAETNTrV8V1tdTYtDBZEh4iJqrukUdJr41xsYxvnFynx7Pb7YRrF+GZbVoL7T0ZrqKyz5+9biEdh9nu8pjw8s7OdQr4I0tQg9X14LfHrFqcqX+tbpcUS2k0p/vZCkjbhZYPvf8t5xFeIz9Vmh/q0lsqz/U05uV48dYPazbkjYeE+D8Ztkn6xTTRNfABAPh4fRYBFUIg50oPMDAfljR81Q1ffcwUb7lN6qbaHV3bKCova8u7gpekTV8Qunyx8P6ymszIEHeLizduyFhHhr6KxCuoH0VRfhPTaH+W5eyFPbccIykFBHm/fCR3PR7fQiVmQY43x0UT1nplqfxA7ICGLbGImNeRxcT4iFuC+mNdnmp5+YUQlhM9kRNU13oc3ALhQ/9Q4+sAl3siP/Jc5dFzzG5AQ0sz7RVJFmZKHAcfJ5WW9S1tfNiBbk/+rX8lPJT0j72qG/7x5oYg+3KTVJh+Ythum5wQHxtN2NwIy32cD10DqI1qCJpu6k020tAzIm5iWKTlXSWdp31z1AsJTFdFdhI+Jdw/0kz0JxEzV79wwn7KKic9dbTUEOp9/QdWCTPPpNfxMVFRkZGPlMVYT1i8prnl+UdWmgvS4vGFhrhFPL7KLGsTFEaoSlxBA4Z66TPX9eDhQyVj8rFQ1zG8HNj8ZuIdHRNvQU231mYmxeLXDLDexnuTS9WJWExU2zR9a3up1t7jPt9OWX+65RuAhVCjaYZXj/zlH9ZFE5t7HAEA+I/6PAIqYZidmuqSitZZ7Oq5k2KmqaEwIZoqLiOpjDAwBBE+oFbUZkfHxMYlJyUlxkXHELMUNqwG1KWh+rrClNSEWGoBMYmpuZ2rv5dATrS8JiXGJbxOSn0dR/o7Mbq0i5oHWplIiieVTZBWPzxAuT863JT/Ov51UnpyUnJKRk4jPqDOdlSWxsUlpaYmZpdV9L9HQF0ebaoozs3Kyimu7txoiNgYJGy6pyKnKCuNtHGkLUwt7Riapu+Vnm8vp6SXVLbQ9gxguitzUggJMdFxSelJcbHE/RGXU0kOqJPD7SXpqUnx1LeIT8zJrOqbmt/4oAcrLUXphCMdExsdn5SWGEfa468LG2k/FPDumuoU8rEobZh8r/vUqJm2uuzkeMJbxKUlJ6aQPxUx7W8FVMRIU1dTcdMIfTv8jyEGx2JvizP98u1BjWn6LmsAAD5qn0tABYDPAna8tuTJXmZmdlaNhA1fSgEA8FEAARUAPiKYiZZKTzEZw2dGaWvvxgMA8NEDARUAPiI4DGoZNjo+OzcLJp8BgE8NCKgAAAAAsAlAQAUAAACATQACKgAAAABsAhBQAQAAAGATfNQBFQ2fmBro6O7rR+AgLAoxN9zb39O/jKMfRBfYmOXFqZG+YRhyBQtBK6j5sY7BqanFzf+p4+L0UH93e0d7a2vXAGrziwcAAPhIfdQBdbLQwVX20PFTp7MnoeWB+hjNi/xHTmdOvzWILvDHENBYcoiOkIBuUtsoEkJVl7rIHrrl5VmxZlypTZFlI3Lx5KFDBzk4LqsOwOhHPAAAAPhcfdQBdaE9PUbvCuc3DJZ589BMe5UN39G/MBiVL9PNpLnYnxWpqSxHoHNbLSg+zi+iFjZLHQJnriY9Lj02rgWJ/LDmEhZCtlblZoSEvO/Yuv9dqI7goIqh4XcMzbM8MhglIvIjg6BbfR8cmi+xMzr1jdCTpNzuTR70Fy9U+xALr7TQncePbQKmKZOwAwAAfPY+6oCKh+guiJTbJ2pWOQOhoZnscEX2s0ZVNbOUgQEh+FRj7GsTGSk2boLTl8/vvXqdZ5dE8NAAdXDAuShTTVP1e9mU1x8gN9z2mYREBP3ij0uJqEhweyf9WIBEyMX2BH+xf+38dkcxPoCiBtJ0zx/45bfaof9IUz/GSkrsZX3umukEAAAAPn8fe0DFt61wI1VXJSXV0+dmMIRpT+SPHlYLa6oixctGe1VR0VPiXm+oPZfwphJbAYmgkQFC02usPdmO+yDT1l+2/vLLHk7Oo1x4J66fVwstaabMYYKqK/PTlyUkEJ3mO64fQykLD+Z87QI/5x6m7Vt/+IGJkuk8l4QDTR6o1u2aEv8xcuIxZfUX+c3E5YWut87wCJy56fFc7+m5M6dP3It4lV82mvyY69jJG/dtgtsgOOm6AL3QH6P2WJxagqjo7ci8eeLAc5g5qN7bUv3yNUn3lNrESG9tQq5jJySe+MX0kyabg8/2xHqJXbnKufeH73exsR0mFyL0wiuZMphwX2ycEff2A7L33Kqg6a6M+0eYWQ+xGqbQj/eLnsbUeJlr3rgiZvqybGy9qXc2JMZSQti5hPrmAAAAX4iPP6DiYdOSQqLq4AvEEFMR4fC6YoTcVdnjbSBy6cwF06whmuzTRXGN8DnCmOozg+VROvJ8XBxcBziuqqioqeNpPnnglN3cR2nArnS1pHlZEhII7qooXxO97pPWCUeS+ioX4x7rGapcu3CSa8+eC5RcD9Sf0wTd2Rpp6cuiN5XIiVIiQnzqUta5lZPLja+NVUW5dn3PvpPpwh3Vu9cF5UV4hbRFpdWVzvKdunL2fk7aIBxa6hspd9O6e11AVJZcwi0JaR55gfuRhB5qLBzqTolwUWNmYD0nwCuoqCiurK6uxC1wUUxSNzGzB45vw8NHC5OfPXp8R5CFhUdCQpFcyNPw5HJKTByvrUv1sw0ta+hfwsAmqsIcbLyjXzW/1ZZFDa4kKvJsZWBgOKUQ2dlKn7xRIKACAPBl+iQC6u9oLbSW1z3Hp/jwVRJBSkpGbTvdJJWTUeY65toPsjAbuoWKmo2XOK/yenyWpv2GzolwsJCTe7W6hAxHeKY12eGSR3UJtYmMqyyw1b128aFWEr6ZOr1cY6NxnI2T7xEKg254wcfz/U+7r4ZBmORABXEmRgPrimF4XVycttTFZ3G+7dRie4fjLOQvaOSML1N6ticV/t9fvv/xnJhDQS3+FbY6WlNOkF3WLIemGYkrkr4Z0tK2sLrkfRFaqC/N1K9fFn3qWTY2TJ+8USCgAgDwZfrUAyqEXWxvjHyksWc/C9He/SIaPmU42h/WTESaaZvd18lYoe/ipMJhl5fI4GNzjU7SKnFTMzT3F1HZ4fbmcnJv30NFQ7j6VH1D59LuzrlFcgkL42O1EfGWt/drBeLbhosNHnfEHj23zIeg5XaXc8oS50V98K3pgjgddT6mx26VQ41Bdvr71EyCS6qmFih1mJ7pyqt5eVc2pJMy79i42i+Mwg/iYgcJP3nBb3SVs93T6zL2hTQNc0yh9M3gNy2w1SXvDQuh4LCZyYlJGBy5scuP9YCACgDAl+nTDqijlaGVjY1dtE+SLhWnG148atPQMUOZ/Gow1ET7mZZOGhJOH1Gx6L7mpBeOSkJip27KEMjKysndVrwsppU0A6NOw4mBFlKDbJ/LyIfRrku0Ai1mBN8WuSIrJ6MoTyyBSOGOyj2Tp64ZEDQwWeWmJPXCwbkCwsDeuJxXvy0g/2oSgnJjHty7uu+ZV9VImdNd/r9znBcQk1FWWC1BTknhrn56OTVedujuMQ3M76bOP1Lt4Wopccu5hCagLmVLSQc2NUyuLvk/AgIqAABfpk87oJY82696W14/cWzNI6XVJkdt6lomKRFxIMBIwVBZJRlGau2hJoZrq8rqerpmVrDLKW48h4UPqTq3UVeemS2xV7yfsbw6rTU+oCb5PzUUuR5AWbIw3VLbNLqExuFbca255ub2RQOjaxp0K+jprsa2AXzEhzf5qMrau79shKD5Zudz6qqCyq8X8QE1Slvr2n7zgOaZztiXlie1jQMqGug6a+F9HUPUJ5WHDPeahpQMUSfsfuPn7SCt8rKO5lekiIwb/F7lLeRSYO311RVN9cPw9/itEG4FtzDS3/mmsblvZB71wU8Ag4AKAMCX6RMPqE9ZeLZ8xSJg/bJxHkmAWl6YbvUVNMhCDC9Run2Hwl5cVxW97Jo+CYchkd05Vo+OH98vaPksbw63kuV+QVH9on0i+debqOXJ10ESJy5oxA9PIdBYUs8xFkJkRjzQun7QdJzwFrPTnSEuV88ovuqaJ8Qq1GJr3Lm7gfHlNDF9pLDYU/W6ihMW3TtS6ignamplW4RZmWty5la7dfFm8DAWmxOjo87P/NC5qHd5tLTJU59fyf5F9OpNVGihqzfmgZ5XLaEKWDR6pfneLj33lOY+NBbfGsesoMqc7J8Jy9jmdWOorXNUniCrkUdOxzChkjBf8fOcnIriAc1jiA2PK4WeQJdYaYseYTuh/iJ3qJ8+eaNAQAUA4Mv0aQfUoidMiny/HDgvd/7sjatEAvwCx6+It89Bq7NJLvU0uD96wMd1+IrA5atXz/EcP8avp+lWkNu7DOHG2kOdbW4KnSSvfVnw+mHhyzy//HryurBLSO0osQGIgzAjfQmuNoKnLxDyXLp46TDneeW4pmnyg8DQmJWaoPDl86QiCHj4eYU0TTyyK4K1BLlZvv8XIxMzT2zLaJELnwLHP77llKvoSM55KsTGsG33cdkWaB49mh9qIi/Bf3a1BD7+sxdlUsqHcbgFqCXc7YnIrwxb9h6RfuBb1gRBmU81xHezMH7zHfOJSwkdlBYobtxFlPsM33kewvqXObllxR7GvaqdeKuf+91QgytJt/kYGRgYzipGda422t8TCKgAAHyZPu2ACpGfPsIRWnFkaPT6g/NgSDnQGEIjby0szcqEJh8Wgyb8sebRJkI2SqbVZiE1CUsunpyB9DARDoMvCIPBYvD/Y4lDEOPwGTFoYsE4HOFP6ggV+Je0JdBsBY5QHUIhxLJwxOrhSyQtIbxeRaw4sYCNd/SuhSOjX/4eXhlfOqfr75hQX9/SjaQ8VQUAAPDZ+8QDKvDxidQ+sGPnzu0sbGx8Kv10o0QCAAB8vkBABTZZV36Qt+MLS/Nnz5xCZjZ+BxcAAOATBwIqAAAAAGwCEFABAAAAYBOAgAoAAAAAmwAEVAAAAADYBCCgAgAAAMAmAAEVAAAAADYBCKibYhHWXldTWFHRvGZQYQAAAODLAQLqJlhZyAxTunSc+eJVvST6NAAAAODLAALqJuhNvXf9mtARKcdX2Z30aQAAAMCXAQTUTdD8UlTuuY9Z4eqUbwAAAMCXBgTUTdDmLaZg5v08/4OnEAUAAAA+eSCgboKhICEpYzfDLAR9AgAAAPDFAAH1T5oerkwx11Y19s9M7dz41KMAAADA5wYE1D8JPtvTEGxy64FbXEgDuIcKAADw5QIBdRMMBwlJPQFdvgAAAF80EFA3QYuXmKK5rzl4yhcAAOALBgLqJnjjISxl6v2sENxDBQAA+HKBgLoJhouMpC9f2HtO1zq0hj4NAAAA+DKAgLoJsKjyNP2b17lEJJ6k0acBAAAAXwYQUDcFGjUzPjYwPDy5SJ8CAAAAfBlAQAUAAACATQACKgAAAABsAhBQAQAAAGATgIAKAAAAAJsABFQAAAAA2AQgoH6eOsKUdPg4Dl6QuhXUPlcaZi3AcfqwiIZvJX2+jehOSDYXOMV54AA7HgfHYRn94OpGNE2GlflnCseJqQS8ombe9XMTNOn/UcjOUCf5iwc5xKTMCyFYdrzJ9UNcPAfuvaLP94GwZkIcB09fvOFQUjEP+cqcOHeQV8YyvRhOn+/d5iYag+z5zpzH7zvua1KupcXDdBlwVT4G6uzsh9gPHOA4aJw2PrlMl2Ez4FoaQnVucp32yhmHoElUoaW68LGD59TG4Vj6nAAAfCgQUD9PY2X+doKsv/7tq5+kQlFdqYHSjL8y/HWH5Ety8mxtbZS5iobqHVUlBRkKOQX52xoGvjlrCoLXF5jpqZ0REHqgr2eM9/SpiXdkad8ghppjer45UVxAQt7Y+DEhg7GNe2LBwNICTRl/AgZaaipJT5uZfWeQeeN+9uxfGRh+ElWJ6ZxI1FVg/QfDlmu3nAvp830gbMDtM3v+wfA3Xiv/mqUMfc49DAzfnn1s10yOQ5jZ3jevtGXkbiko3dFUVVZTs+mCcLg1JSzND5Wk272wMjYW4zvA+SgpvGVtOoTrLYgKMTY2MTLQF2ET8uvvnV+bvhkQrc4u1//9FcP3MW0I9ERdgfah3/79K8tFs3kkXWUAAPhwIKB+tiZy7I3ObPnnPk0END9b5fzs3G/b2W5Pk9KmSkp81bYy/PDL93sOnjvHfY7o5OGjTP/adfPFmlMsMsFJ7oHE1ch22oVrTCyUO5k4vFmNsJsLm+7z3HR6jn4xxZLthf/59ccj/Gb5jRAuRJ5t56/7zjwqHZrftIbXfEO0h+DOf22XvOvZgumL8hBhYmG+es26hZSKnmqv8ZLiOXPw6P5tDN/u/Ov/7oyYgubfEaSKXSTF7DNDm95dt1wD2ZCBrndu7IdaGauyvXRty19/PmG4AM0PJVnfYv3q+2M6Fimj9DkBAPgTQED9fE3n5T67sXf7qTIUPu509Qbd4t95KnkBu4w/3WNXVhCDT9hVdBQDcmZnJ2dhC3DYXHt+pcNlyYe2GHI8QCEXpvpr3AyU70lIedc3946Mjo5OTE0vYdCkDOjF+cnRof78sugnphapg6NkCzRDGuMWx6dGBvpJBsYnZpFvB5PFsWFqlkkYDIZAzcOW0StY9DJsZqh7qNHb7P694tJmco7+wQUETXczsvLsL1vYb7r7tmIx6KHL+7/+5rSaZTEOtvZtsMj52emJ8fHxyen3j7Tw+raXt47vPHLibhCEnZ1N0lHg4Np32mKBVBAWs4KAzbZGF3ip7FfzkJPi1U2Z7nhHRM1xEBe1ywx7864qoBDpD/ABtXu9gLqyMDVG2UvD4/NLlHdYnB4dHxkeHhkZHhpeJl/U4KAV+OAQcdnE3AwCi+n0eX6FaeeOCzd9OlbGEl/dO/j9FsZTRmmE3l8AADYPCKiftcXh0SLHnG7yGXy8NDK9HT1DDngzlpwGZvp5A4S/p/Ji6gcXxyfqYpIKKsjnamx/T0HQPWX+U0eOsbEL3L59V1NT857RC/v07k7SGX+2Ks/P+rGm3C3Rs+fOS2hSRDbAF0khb775loKAkJQSOUFOTJxXRehxSnY/tU9ztC3VQeyCkqwKKYe6Ij8r46+nfjxolVM5Pt2ZEW2oY6hy9fzxYwq37lCKNyh6M0VZHcINFjtENwxMETZpebTbKjgzpWedpvJEoCDL3xkIvhEepE/cADR8tsIjISWetFmzjZnFke4jq53QuLJgMyMZ2eiCHtj0sMglnbC8LnJPwFoZtmIivxNQ8RcoydrrBdRpZNtrEQExUUVNwjHQ1FQUuiYsrW0dX9e8DFWHWKocYNv/K/NZRf1u6pXGVIkI3+Ff/33wgtLLV28Q8Poo35CEV8WE+DlcFBfs7uSQ0z8EBvUCgM0GAuoXC2Z7/KaiwBOX+KjwCGNl2dBiwh3LtywkOBqZ39VIWXrnZK9D09Ue3n7N9Iuhpdk834sOhWmrzaDmJt8nYnw6ymHEZ6NwK4udXi6Khx4nTfRRclQ43bt1RkhYL7a2j3ITFpnu98J8fIr2Iaj3Nl9kr6t4jYfngthtp3VD3Z8U6GAio1s0Nkv4O0ZN/L5/dsp6Ff6wgLo8WttgL3XdPL2aUuR4keWTS2y8Mk5uZYSsDa7PXLR1/LsgzHh7S3lubv3w9BLUnu5wUyU0OQd06gLAfw8IqF+sRUduTs5vt+xgYdrF9KuAakwpvlFKnweC5uLtDc3U1JMW4Ot3Y0JQ/3il20ufxrULcRCuJd/K1DqtoXEKtkAyNz7W9DrbQZlD3Z2QBbPQ6n3lvtKFFmIcIsHA52bGJqZgCBSl3xlaSvWxMBsZQ65men9YJBw2Oz01NTUz+x94qhW3/EJf4ZptVXnH5PT0TMyjC3sVHR+lr/OY8wcFVExvdoqHiETWDGp1NXTfVKWjlpyJ4dNc/Ct49vNIR52nJdi+iKfKXKyHhJyS6xcbY4xkXCuT2taJ6wAA/IeAgPrFmrc9ISl/Sc8mLNDXT/+WDKGFus6EruNR1vomKqpxU9Pves62c7DYyc2zeu1CHLRckGAkdejkGW4e7rMk3Ly8PMd4D25l2H+XkAUDq7M9bvhAau4d8YUIBc0meD4z6Rv4Dzz5ujnwtW8Q2Pbd17uPHz5J2FJ2xn8xfCcr61w/Qp/zwwLqcG2wpwHr/bUtTTSEzXMT1n8g4k84ZM2uQc56Z5zK0p2e8fx4XuSIjFdGZ5wZz93w1uyxNasBAPAfBQLqF2vZ8biB2YO0tjUL4eOTM2t+9rGY5PT4hbpm2vI7m4gjs7WevgGtaxfii+iu8LS3SG7vQa1NgXU3tfYSciDnu8PFdeQu1NG0UCHc9GRHVUlpY+so6Zee+IAa66r/sGOS2hs9V1re3DSKoLZgNwI929/RXFddXdPQMrDORcOfsTw0FaWvnUMTA3ELw69EtLRUNcIm6fZZkYuUhGtxHGHr14fLMVCMnhlb26ocLs4MviWeOkG7weNTOcYayiZG9qQfFg9WZ6ea8j155O7xMCy3Mkjxnq2brZxt0egU/d3Y39UTrqSxl4GB4et/njClTwMAYANAQP0i4TCYlbFnB+/q3wkrWkIsIJAraBRyaWC+LeSpfRiG1IIi5EEu9QU/1zJUUAwfHJpdWlpCLC+jMDhyCwu7gkIuLy01dmRb2zsVL1Ggyckry32ZPMoePpk0AWS8ssZfTUjZgvA3DrsyFu2vLmqZ2t1BWRde9dJd+dyxU7f1Y0m/01mB5pP91TRCGofGCekTo40+bGe01WL7EOvc732n2bSHkrz7t21jPHLJaJ2u2A+ExaJRo9WlQdKir8Zow/Qcst3liYa2nGrc4MgcBoNGI5cQCELtE8wFr1kk+lXBCS+QaDSWFCNxqGXixi9MjcfclfBpfzNKfIlAktLRU3Xtwff0fCpJuwhvuCEv+Pbx2w9dvRtJIRszUFhrd1ZJ2iE0dWRqstH5oYagilLk0MTi+1x1QBV20lf/yvA/X3OLuZbTpwEAsAEgoH6RpsvLA7V2MPy85Ue2Y/z8l/lJuC+d3PX16fvk8/xUaYm/Lv95VsZft37/AzsP70V8DhFFLbuciT7SA0rNoS6P5Pj5T3Nz7mJiPkYug58/phNCkE/k024PxEUunaUm8Z+/dE7g9kOHJEo95oaqooS4L3FT0i9zCwqJ67h5JWS1kh4ewkIrwz3R9lx8PDyEdF4e3sOKlhkprXPkn+5szESw8L6viU/5fi/2IU/5rm+gOc7uIdcxlv/96oTQPRWr7L4JQmM8z/GaqvCRXb/u+OGbvReviucWZCQ84795g1D7g4xf/3PnoX0nifvbJC6midiPjYZb3SFtPN8Fjp//vY/7zAXiSxnd7hliWxUHWxkqlr58hrSL8M5fvH5R3vhlTmcfJY4vNxdEKvPKOhTgW/uYuSZfBXYR26Yx2PtcdECoEOUTW/9n6/eCbjHtS/SJAABsAAioX6TpysrQJ9K3ZKRlJcWEhISFSESERW/KmIZR8pSXBz8SEpG8ic8lKykiQsh1U03fOX+yn3Q7tTXS0+S2kJCoqPjNm1Ji5DKEhF53UwMqhKr2cDKQoiYJid+7bVs0NEt7ExHudldOkpIufMvOKemtkDffeFdORISYLqJwn74PeQPgtcF2xpq3b9/RfRYKo0/8YEOtCc5WYmJycnISEjoa9nkDk4SaFbpIqstKShN3mriMYkFxdoqlkCJxCyVuysvflJAUI+5vi4T4ZuKTzBi4wz3SxgsLS8jISYqKEjdVSMmoZ3Y1IoaZyZF2EZ6oso5x8lAP7XPXsDddWfYxhcQ7rRh06yurgPrF2ffq3UZPaR/55a+/Xbsc0NH7zgfQAAD4PSCgfplwOCwGi8NisYQuSQoMGoPFrt5BJeRBY/CLiNmI+fD/4duv5Bw40tqEZfi/qKWQG7i0hVBhsG/f+8TR1gFDN24fGe3706f9n8GR9h9+j2GI+4XcgUuoK3Wn4beHuBfJW0/c7ZQX1B1F3UOkPUneHZi1uwpHs5Pw2WiTyNbdcxuFg3WcZtyx9apdWC/mPQYqBgCABgioAABAWPj4q+y8rJ53PnsGAMAfAgEVAAAAADYBCKgAAAAAsAlAQAUAAACATQACKgAAAABsAhBQgf847MoyYmEO+V6/igQ+TTgMegG+RDvDHgB8OUBABf7jxsoSgh/KZvXTLwc+P/C+JgMr36DGlfV+2AMAnzkQUD9PI0UeIdZPTZ2DwmpnF9tLkuxNrF/4xVYO0+f7r+gIf66xh8Gljn755phvKg5zMzd184hrgbC9rZle5hZWBoGl9Nk+EDbe6fFTWzefwsFBNJTrYWZr7hKc0zmwyS2wFdRAXpTl40e6D/SeO3lXzqwZuPeTMlWbsZtHUT2NMtk58ElaKY1wx3+n3GOaYXBUe7a3+Qsrg4CS0v53TuIIkICA+nlCwYaL7ZSv7fzXt+csMYj2Om/pKz99vYXXhBoIED05l4/s3r2bmZmJadsOJsXnGbXrTt/2+zAV2SHOGncj6ZfTwSARsOnlTQ5CZAkav+3729c7r9kFDSxWWd44u/2XbQIOSdWbNs1KQ8hTJdZv/nlQyzJpdDD5gSzz1z8fVNZKnqHP9+HQYdpn+ThOy9sWpzR1lScZax/m4BG2si/b2Ph/Y/H+mteP72RiYdnNwrRz184d+D+ZWXYzs3Cx3HBKLP3vz4eKnZuHL6L+E1cEy9B0sttzx8fGOfQpG4GeQJfY6Uqe3o3fPUyMO/G7iokF/wXg1/EMaYfeNZXS+8NA8xkGD9Nm3m+cqo8Lsi+b7e//ZBSwDuhdXFpB8TD+su2K3euKEdjye58hvjQgoH620J0RAbIH//Wb2DCEwYxmp94/wrb9ajMlaqLn+qOCvH1t7mjI8TMcFtPRN/Trh2Dv/X0pTfU0FRb0p1/83zOkvPv//XxYWTtxdA5CGHB/980uHtmgyfcbxfZ34cbys3VP/fYz31XjPGjpTaU5z5mdpw7JJW7a5QFq7qEiP/e9V5kDxLGOMM0tfuo3r+s9sKmiz7mufn9jaakLJ1XdPLwtFDlFTv145o7NIxfvRyqi7Geehyd00uf/pC1Em2s9VVFNo1++Edgl7HBlXmKYt+MzC1n2Y3xXTqk5eXt7R+fWNc9Am3Y08ZCJ8gqv4Yv0iz8dIz3xBr8eUrwXPzyHv9LojPg303lp/zHSwNLA7wMB9fOF6uyMMJA4zBgyiA8LcGR9wAOuQ06d6GnaL8aAX7avyjnrfCejm+Je/cPz9F+alihvbwszihfZjZ2Zme3D/fP4E3/hSyfnp4rS13gPsN+gZjBzpQ58j4fMd3d0Iiy2sXL171t/SlNsmoe9FXl184TaSeqMY33FwbaWDrbOSYX1XcleDrbE8q3dg4gD4FKMRG39hVvcPL9qHsJN1m/bsXXrLa/MIYiucbfcU5AY6efp6RUcXbixdh8NzNB0joPaScYj0sZYfMjrirEWOMXFJjpIM6RwSegLyh4wc3hZ3rrOe8z1Z4RTslh4hUekZ7V1tRJnvlmBx6cmh7dRJ6OFQ5O+d+6ZShmsbYchhkZqkwJ8vDw9A7uWaALAQMiTexZ6jwrxfy6k3w8yOmOcj+qFoJ5cZ3kx57h40qQ9+AuPgqpXL8i1NHe0cS1qmKU51ssjkzUxFjaO3onlLfjDhOi2NsfnszLzzqmprHZ1dbMPLE1PyasMMH8RXlkxMAkNZEV52bpFpFZNk6uNRXXWRvp4ETbO0ie1rmGc9tIMBY2W50W7uviVtk90dzYlBRI+UVae8QV1q8cSAy211SUFUnaRmZmdt30O7R0KWMILYxsDCb5TPMeOy5DzmDtZBZXQ5IH6M208bQlVJ7CMz2icXq+dOLWQoKxr42JURLsQU/baw8LSzcGzsHmkJ+SFGfFTb+UWmUl3kYkcLU/xsCXuHzNzq9S4+NDSN5mVI/hc8OnO/BQbM1vDm5ycUgYPjcl19Mtv7KEMII0bGapOCLKyIFfR3OpFVF0Fdf4j5Oh0XYy1Y1RyQdvIfEPeK0/83jS3c4trmKKbImm0MDbihRmpEPeA4MzGlrScttZGSm8ErL071crVhpRuZWaZlNNGN4L13GhdcogVcRvN/RycU7NzAks66slbOhobqXdS9HlOBf6rONVY8/T4FgWPtAHo/aYu+lKBgPo5Qw6UFNlf9qolfVNwlS4aTmWokdXR5ZZbw+47ad9wyBxw0dc8I+1d20cbUdHL0+1Pzp8+uYeVYhe/lNaRcw4JKT34OOB+nYd3P+P2337+97+3UDIcYr1ovFoAtOByhZsHv5h5GyMzc1Q73TcSB2HnpvqzRY8c3k9efd8NDaeA6p5RBCFgVHjJH+dg+e3rMzfktIVPHTtAyMDEduhQUjtskXKSwzWHXLwbnN1A6IBd7KrkvvXUMH2d+dmmIhVOMv6FgYHhm91Kb8/7/Ycws931nkIGZqakGNoSZuaoLtlOaoLgVrAL3QrnmSmbwHqYXf1BcGXt+BJ1pN6VhcG+Wg8bET5KFpbzFznZT73w8KkhZ6GF6BoLeiiu56QY2bNm+Xh6rumpvxFmzPkqdARavZfVH2CoYqSmkbiMhgZj1TwfnNRPnmxYgmrjzIUFbKNiCNPd4pYGi/1V7vDtYifVct8hjj23NTwLy4cpzaiFpq5Ind3bvt17RljNLSvL69HWfays+4+wcj/ycfc5f2LPTztETp+Q0Dyzl4nvgaqRY4q57OXzh9hPXpP37q6ZQaEJk6PnR2uICeEL38vELGPzogi5GodwS1BLoPP9cz9/LXzfUv/xk5tn8Z+o/dsOX5bXDh1smSHtVBQ0kxVjLEvZRaz7D57ZJWc1MEXd0JFHB1mP7dn28w8/ff/9dnImdh5OOR/q+0Coiec3GU8c2EdOZbwmqhUW0zFDf3kz3z0YLqf5zOpBGu2gxSj/h3x7drF8/9fr6qYGPHvYiEVsP8grWjdOOxfwcoHTrRtsHLtJb7JN5DTH15c0rupm4bdisq/AxfT4oRN7t3/33bY9e8jVOCDpmlBK+dBh3tRHGMpzchA/zITEXVfuqXnnI1eIHxZ4c1/s/e3fcXJfVLfw1Ja7xs3Kunv/vp0XtYICq6Yp+xOLWRp1lbt6iYlcxJnzB4XkVdhPPbNyIF5bIMfaMqyMxbZzHSAdbHbWHcKSD2Nobn7iZloC/e9dPbmDdS8+y95LHNsv8Jz961WzF6SLD1xLWOhzxYxawnRPSz01r7QuG6T9928cfKpAQP1yISuNTZ69UPMlTpRWHxvzUJjfOSeul3w7aar0udMdDrfiedpJqpPdvP1jK9vHqOeomtwgW3nZCJos6xnPqvOS8Kld0w+LWUY1eeo9khAronmDtgR9AzlZUYOchi7SNXVW0FVGrl84SihNGVRr9h1d38QF6L36dJF9JWmxIX5+/hHxpfSn1z8FNtmQ4H9NMZm2UHhlrrWe2ENX7axBGAqab/QO0zt89prG0/gBahb0cKVPaEHNOm32Pu2rF0QkoxOqJ+mbVoiRsYa0sCB/P7/wniWazYd31ZbVlpUPorFQf5Squ84JvYSROhg03d+Ql9Pc14/fjQthIkpqT2Kjad9tpbHI0fCmnsMYfLWkhWQVjYvf/vXYTeVHlG4ABGxxCQkNBRuLionLuBZMQOOBoopHtx5UycyfgwpM1bh+vvs4oWXNo26YAXVzl0eZi2/Nr4fU//UfbEdu68T1EO9vL9Z7WGgevfYkrpkuH8USuvDebcOcNbMlLCc7GFnr6ObRLCJBYTFt+boPrLppF072xNkZahkKB1fTLoVmO/tDZTVMLXVS6NptmIU3dsa7/sl2QHKIvGS5PcTZILiqmhzN8FWpFPrhhnU5RAmxA825kSFxuRVDNJ9HTKaGZjpyg3MiDTuZ3xZp7109Nmkax3j/vf2MUkxcP/Fd55q8BYWVZJ6Rgv9i+6vEp0d1QzpWP0zTDcU+vj4BWaUds/idnKmhdV/B3mHNIRltfWUpFtFQOUL6ai+Zsx0UPmUaRY2x8Jqs+PBX2U3vfcMHeAsIqF+uemNescvcB5VsXzi5eRqJS1/cw3DS2iKT3MLr9BU2VT3R8fu3ghC5r92fSYrTtBLWg2uLy3cU8a2jDYIo5Fx7gIj6YzW3taGxtSzU9tZJ84RsfPsMsTz92vkc960rz6lNhLme/ufW/inzm3rT68P1dqRaKv12xdLH043Cw9M5+An/4QtSu3VyRpeg4ThtR5W9sgFvikkTvP4ObF9TjPk1kXt2hVMDH3RuowTU4TraiyBoUJ3xqvgNHQt8Jd2JVXT39HjpHmxy/cwlkY7x1dZXT5CYlsJxPs+OtrXPci42+2gq2bywJsw63hUg9EjjnEz4cCcMyrEyEGbSs01pW3P2nmy8/czZKOvtgDqiu+ustnVhKeUN26JeuUhI22e0UDKszLzJp+5Hdw9rV7PbBhaFNAF1HhqJMNcxuauRQF1EAcdMx9hdkjB86eniQdpIN7eXvv62t9Ulef5y3WNN3ncG1InuXGvD3ac0nqRQF3WnpNjEV9eQP234qvSb8wlLPrA0Jb2JV0h8w/TaLhEENBmrfDt6dGz9bw56tqUi4KU/+UA4ezrflxdT7R2k9n2vhEoL3Dqq5toEkT4vqPnFFC1NM30LUkCdyHzurbor/Z0tRpj5WVHBI0qPfb0o+8HD7aVfgLXC/wr7RteQikRm6qlq8cvImLnZEerg5RWekjdMveMA/CkgoH6x5p/zcR34mZFlz949e/D/drMwsvzynZCmP/mmVKefiJUWd9fvPyePD6gezyUlfemXr7VeQF1EzOa5nNcylA9c+03urQ5xvrfnoX9KO77JtDyV4nhW21AhnBo+Z7s6TS0DPpqA2tEeryfy0/Z9B/bvodi7bz8rGxvbcWUl68J5fOsuTttDg10zpptwR+qd0Nj55pZkC43zQtF9K2tuEr+PdwTUXtntTDt+3omv5F7CoSYebVIlj8qOza62pNr9hG10+R/lLFM6Kcjgzd73blk8MyPcpu30F35456xUYF/rHJT9Qv8Gk57NRgNqvwGLrmtEQx/ldUtEqIOYtF06PqDisGgYbCQp8oHEPspe3Lt/L9v+Xffsy2hKIAbUB6bq9xJpFpIsYAcCLfiPsxxg3buPvJH4I7GPlZWNg4/rlv+avO8MqMOd2T5Gex/YeVVQF3UmvraKowZUgjf+d85ysVHeYscBCROzhKGZZerWEgLq7Tsx4+sF1MWp6rIAXVUWVo7d5BqysTFtZ7rcO0Lt4lgOlDR4wOeWPo8mrY+cm0vQUDfVe0EKqOOZzwM0d+dNUrLTm33CfYT56227Odho98N+VtYzKqEV7bPkXP1x4Y8FSVXYg//iHzxyVjv0VfU8/RH7XTg0YmSgt7trcGB0fuWtg/3FAgH1S7XYwqNoKm2RUFVWVFhYUFBclh/v5yHPJvXImpTeEyRhosJFvDv5boicePdnEuJ/EFChjvhCJ1G/BtpvHQY1PxSpoPFEzXrNiQdTke1rIXPRMbNwAH8mX55Jczpr8FgpinpCm+vuMrUKTIO/X5fvf8xAV6bTPUap8OLiIqrikuKyquq6zt5hGAYLjSbpO93ZK+ZakknpRlwHvLrOW+PyyasCmgF/pkd6MFrN48EJ/aTRhjV9ySP6u6Xu3HYMWVPJ4uKyyuradtpTYYe/sIOBgEnBCl1AXWr10bplbkoJqAa3z0oF9LURAqqeIJO+bVrHmtvS029Unrs8zkG81cYeeLj7kWdUI3X6eGJAlbHPxF85IeBDcf7Sp+Wv3M1arV9iTvijR+aEN6XAB9RwM3wLVZP2wTeSRcx8iquAonNuYTbtZpZUlFc1NXWOr8kL6x4MI91Dpbt0GenOCXi8z9DJd/X56s6k19bxtXU0G4Od76mvKi0hlZ9v/+TaCTE+LecSakMfH1BjlFViJybevhTFZjwV0zjDr2aeHplDXr843drgzv3+IerdXGSQ5GP9S145Syuk7wUKRgqolqQPxlTuC5+7THFrb6/TWLDjUZDnMXIvLs6l3Q+lFc1dE4ur41fBYSMt5SVFxBwZCSE6dziPyqn5bbCXmgQ1VCF17shhTgXZ51ljs2DWPzIQUL80+BPo1GBVToDWPRG1J8+jsrOqh5BoCDXZ2l7oEeWswntUICTqdUH73DS2pynaWk7d0jxk1QPhc5f57ugF1zSTvpuYN9XeZhpc4k6ERD9/9ztyXFx3ItrGlghnoJWpjphwQkKw5V0D0f1ypkGEF6ERIdlNxJVXoNHUUBtdO2cvavmPFcXU1B74N6BG0dBYU2KI133RLdwXjqjWTi6j8Bfr3ZVp1lb8ggraEdnZHfOwDZ8AJkPF2L4lPM/D8DP19tgmwU5DbUHC8o8Cgynb4OfuqiN2Q0JDw7F0Bo7fD6OD+V7mgsKyckbUzQxxMrlyVuqOXVYVCsKhYLx//yfDt6J3XgaHRUWEhLgFWN08dUxBRiN5zRuNJmUYshO3gcGf/jHmJdhAbVl4mP2d41LcP/NoOJm+DEltnl4kPeqC1x1hrqdxTfqhrz+llgHennqSouJ3hqcJp0LUVEdHQYil3D7h80wXdX2tffCHKT4qp31sbgXCTobYyJ05cpVf4FFMUmWdr9C9y7+xK7paJLUXWCqf/eqCkJZzRO3IQHVsejSxZLfnXALiFx/4kHZIfs8SvvkJwdrqC3x4/84jcdsusLR7CA31F6d73lYU2c8hrP2icWJhYbggSs7g4S1jSv3cPc3FJVmYToibxyQ2dMCQxG6MZWi2MFZLU+6MvDfxnewfi1zZc8qmkNJem8nmF9a0sHUnl4FndldNRkxQJ5SQikVgR+uK02NCPK3tlQ6duiLIrfUSnyWxqKkNRvhWNBcHWuvKXfzqvLC0eT8Sh4amhyqy/DTUb9x9ap5RUzuGwyBn56Ol/37ZyNojkFx+UKjJnZv3dZ8E1VEjCgpaKLt1Uuaus5cnIYen4P4TbNctTbPxlUTnPrd8dlXnoZ+/Tyg+yT/IV0Ob58C2r/bYuuZU9i/gd9N8d64C+4VzjDf1ArMK+ucXx5pK/X0enDzJf/56XOPEOOGoT0xWhcpI6hr6hBC/TiEhrhbPbl0WOCMi/zyhAH8hNZ3+ylH3soiWjcPq1yrYVEVUP7q0hdhCHStjPHlhn7wNJTHU28VZX07IwCGc+nnZgKXhAr9//oPtvFFKFfERQoAEBNQvDb5pV59jrizByMi4i4n5sIyMWc7sEgSr8Q+6y3KclWn7tu1sJ/g0QjvqETgsalD/0nFWllVX77/CX+rOI1YoXyEMeqCo2Oo6EyGRmXkf6wkNXxgCjSV+Mxfqw06wE1dj2rlrx1bGXcS/9x5kueVJqcwKsj3hJAcztXwOGTOLrEk44ecpULmHAhcH044t27Zv2+deOwODZjtjTe4zM23fwchyUeFOeE83XY/du80k6dw4seO7737cd1Z3bWtlUyBsFA5RN4GFmZ2J28A2vB62iCLtBxx6aqHBx1qKZzXPXt6CmgHYIuHpTszirPCun3/6lZFpL95u/M5i3rV9C5ui+preTvxFQX6JoxDzbz9+992euHG6gQjGujNtDdn3MzFu27Fty/adTLuYWUS8G4cXqA0r1EKZh+sdrv17qJXcz3xKy8SvEkOs4nxDeLgmCxPj1h3b8aszM+EPyF4eLuXQ8s5FCF138iDTtm3bt2/fd+KqaXmikdmlLVv3cjGphLZH3BfZwbRj52lp28LMF2ckTpBK3rVt+w58IaT3UX89hl1ZgrqDHTR4t/+GP3RnRAxjchBQ2gMJQUbGHVu37tjJ5FKNw63Mo2pfWiidp9SP6Tgvt+pT4/07jpzidw7vniW2JXH4XblcHRBw7wSxdCbmYxcFLXPxu5mymegMcwGeo6sfJxY2UbFH8V0jxAY7YWAH2weSp1iYmfBbiq/kNmIlL+t4hnRDGBzOR5efaScjoZI7jqXOYZagxtyn8mI7d+7YuYtD3tK2HItELq3kG/+0decuwg4i2cOp7OBYNIug7fPEoSP1zh5kZyZmYr5skpLYDIcTn3pe6UtNMRdnZ91NXJd5P/s+WQM9VSWF/Szaz9L68bupL1aHcev27VuYWY+pmab2jJa7P+fiOETY+zvE3KoqSaOVYObdbvNzUauw+8whCeeU4p45+DJxOI0VVFdywtOLZ2g+kiwcNwfHF1Fo4o6abRE8yfjrdtK3kYD50NlLz5KSOt6nlYmur3K/+beTjwwzR9/qiviigYD6pcF/52bH3pSXpqRmpKakpJSUNI2h0NDKTHdPZVJ6alpmVkZyRk5V7zzpZ4odpTlpCavKOt66wYdbRI5WJRESExNTsgo7Kfdp8N/s2b6MZOJqyakp6dlppL8TU/ClrK6OnctJT6SWn1nX30dpfE11lKWnpqbnZGZkZXbMoFbwUWGgsSY5OSM9LS23rKIPvrDh5yjwbeWGquL8/IKy6s4NN2vfw1Bj1uo2JKYmFXYNz9KdZyYH6wqpWRJSCqkX9Tj0Sl1hTl5OelpSIrGQxMSktIyCxpbBtc8Ar8zODTSUFBXk55dOoOjGtEIsjLbUJyclpWamZ+ZkpiYlJyYUds0t0bY4kCPjzbnJxONEfJPkxPz2vilyLfBHqq8qITktOz0zOyMlMQlfj8TstPLeKXyrCTuTmZGB/1RkZKRn5DXOTvX0VOZkZWYmV/YiJlrrC7LSU3PKWiZG32QWpZNLzsLnTCHvj8pB/HUZBlroaa3Ky8jNTE/LLakbGMNAIzVFxWlp6dn41ZPbSc/KYId7Gguo9csqKGkZHs5Pz8zIbeuDo1YPNXp8srOQtKOSc8prxtb0/SMHygqyqBuZkJBeVd1F6U3FLmMnW2qKMhISk5LSsjIz0jNTCcXk1nT0wgnfiq7a/KSUNGIls4dROAw0N95YWoL/BKYmZ5Q2t0zhsFgsNNeTk55M2D9kidmNw4Nvde7O9hTnpJKPZuUwkiZSzc0NVGUkk5OSUzNqe/q6uttSk2qaRhbREHxxoDYtKwN/EDIyKpuG4YipjjcZqdmZmRmZGcXt09OUNxp9U5pDrUNSXmbNOIK2cYmdX+otyc2g2Q+EYdAo0EuNpVlZaaupiek5xb2L7zeoS09YsBL7GeOMrPdb7fMHAioAAADwHuZTtXV5vzHLHF69fAaIQEAFAAAA3gNmGTYPmwIzCr0NBFQAAAAA2AQgoAIAAADAJgABFQAAAAA2AQioAAAAALAJQEAFAAAAgE0AAurnCTHZ1d/e0to9ODyPRi9MjXS0dHQMjM6tHQ8AIMNCKFhbS2//2CIOh4Nw8La2jsbBuXmaKcg+HBa9PNU9QDwWKAhCL0yTjsX6P4dFL4/NwGbW/KiQAr/mYE97S0/vyAIELS1M9LS3tTf2//7IkAAA/FeBgPp56gi9dZ+Xnf28uFxA21xJqBU/+wmOG3e9V0f9BmiMT1c4s7MpqHs0oFEIaDCS/YjA4SfpBX2bcP2BW57rCFfW4WNnPyfWioDmysKtBQjHon7dUSnG6x97xfnUrBNtFxq8LcTOsbNL3bIrh8aTgvX4DhzhY9OLp88HAMD/HRBQP1tTeQ5Pzm75514NBLQwV+1qxrNlO6vyFCkN29GS+Hw7w4+//rDvCC8vDy8v75nD3Eev3jBJjGp550wWn6n5oeTHeocZ5Hwa+qAVVE+uHf8WEac3m9I6pZrKd356fpt5XD8CgsNq3c15t8j7DpCPBWFq9OLEqLSU2inYVIuqQ6RbPQqarq+IC6cO8gNBcJNTDD9t4RZxquiAsJ6iu7ZsOcpvXjO7CREfAIBNAwLq52smP/+58P4dJwkzUC719IUoC+w6mbiAJc40hcGgRp4eUH2gHJQHg03DYLCh3CI7+RNs56+b00zlgVsZ7u9Z1bt25kdiDszy3ER/LzF5qK9/ZmZmHL4CkcawJUIhpkcHyesPDE/AySEAi0LBRkcG+/oHxjGk0IVGIGaH+gaGRqcWFtE4wjIcGrs0NTbU19M3sEAYIw+7sjBOeKuBiQkYkjBYHBlmeWp0hFSFnt6RiclZxPLsLM1wcCsLfeQK4PXD14zkjcPBsuIMuA/+yJIwiMMg3nS+FD3M+C+fN2+N941bQS/NjoyMTkxTqvdeZgoLzUX5nycTZiVB4I/F7SPCHonzGFLn7vhrI3Fu/vPqQaEZaVKGzs/jckt87yqd5EwYIm8lbrGQ66ednCohEd04DKrrNMvXP1w0cKnG/ZmpaQAA2HQgoH7GFmbKA5xu7nCsxxFuE8Lag+TPmZajRsgdigjH4w/NdNPbKbmRb6K95BnlTdxWxxofKhY5d4Ti6BFO9W5KEkXnm1gTlZNHiRlunDhpqKdzNbQVIsY/opmMiIfSl8glnBdS84obggixDtbV/UrjzjWuY8flR0ijBo+VV3lKHz3OI3bPJ65vhTCOLWp4sdBG6yYP59Fj1rkz8wPV+S4KxziPHLmg89CrZnXeMVRZgra0BCfpLTil1O8Y+0bpPHxNqQE0X+FxilRBgnMvS4ZoZgvFoCotnkie2H726QIOmquKdhHc8vWxm1MrNPGaZLFtIPHxqVO8Uvd94/s/YMpS+ExFMJ+WpT1hJjAsNNchzi9mWoYcJh6L5eG6skQrIwVhbnaOH7ez7GQ7eu6clLpD1AjlqgBT77j1hIFH+uAcFlpsTv+W87qge+04km5EXwAA/o+BgPpZWxwZL3HN6yGfeCfKozM70LPku3czlpwGZvpZ5BiJ6+2MeKR6hvOWbSQ5lowXZIboyCipa5NpakuIytsVvlmiREtcb0PEg2c3zl8U0CCka2ipnTu35weGh0XQLGnEctzw/2fvLsCiyv7/gfP7f3O/2+uuu64N2NitYCK2gjQISkl3S3eKICCNKBiUhIC0dHd3dzdM3v8UwzCii7u41uf17POsc8+Ze+8MMO855557joU038ULQvykcmUlIdHLF67duO2c2IRMdnWnuTjrnj2641xdK2nlx6Gauhi7Kzv2nT4h41A6SVxXAzMwXRHqYXv7Ftf+rSeERa9e4uLgOCSqrCxqcOd+fCUaT3rasJf6RcEzggJi5JMUkuHesef3nf/vVyViIW4KUx/saHpdhnwCBAoSp7msjZ5Wzg7mwWEa4l+GPL7/oo7wYLS+KM7b3jYkl1JIazijzPYQAwPDPzbIWpbMUHtr38FkV3BcUtLszyI59CHhZzE4dyW1v9qd8+JGhpX/+QfTitU75SOSaMYb4ZpfOYdV9Y4Q39aJ1irbZ6nJbRCmAHx0IFC/WBMObHv2fP/rKiYmRibG31Yc3iPgnl05OE5cooTQ9sl4LKIow2rYNDA8QjE8MtDuYSjOqPLMK4e0Pgg+LUCQ++ZuaeuMHlKFgaHe1pbOXhSW3LzDlAX4GAcX5JLWRqWYKa+Ls7jBbU7JkcmXvpbGjU1zy7BlWJiYi8q7V4zTrlk9nmK68rqtTUzzwCiKsrYIDoMiNvSQzgiFS+axMY24uWOgJkZ7+vqHxgnfGAZqAq32iStK+8y9iJGBuue3pRUVd5qll3YtMPbnjfAY7PTYwMDg8OjkNOUFLqFpZDjuoYyq6AWnifGEIBWRa8c1nVK76GsBAD5uEKhfrBHbg3wiHCrmTwgCOJg3f7XzdkAdihQyk0jfUweuk9u/2cjKdvQIxdEjbCf3bGJiOGjqHt9B2sNQR9w95+snN+w9RCpnYz3Lc8uvdHb/jYnmVk8qB2n6VwkmUT3hJkdUqsiPhiM9TQ1pAzXFxNBEhD5Qu6N1BLyKUhda2KLJ/7pCZH/FwtcSO3szraSYt29etePo3Itg4zi8btW6Q7/yPy5tW/hpHwIWmWmryy3Pzegi3vFUWZQdm1PR9fGcHgBgUSBQv1jzunyzPOSFLnKzGqaktEwTPtORoeC7l88dWnb0pqTYTRqKmrbWvml1bdRriJ1dqfcUb5ELhYUEjx47IZTTjZBSuf2VtZ1/ac/8Bb2HJtpDb7OpNxH/jScEqoe5aWfr3MKfhfbWNjfkCIFKTmyyjiht7ef1OQsG6qPrt553li58SbOzJ9vu1rqDh3acv0n7ImQ1tAw8H0SWD48veOfKJ6w2zs7L0drS4uHDaOqVcQDA3wcC9Ys15XBA01Q1ppr8aCyvxF+L7aKs0cM8YtQhxVGqelrnLemiaqqnprCyrXuQuGTyTH9jdXsvdT1wInTag9O/G2Qhw6Qu0frwR4q+eTlz934gCKqqNlj1uogN6QEOGQ5z01IpaqJ2vY643BCVFdL0bUZojzuabKAd0VZMs0wzVW+iLrtSYEgldYQSweRUW1FWWt4wfmSoJdb3krK6gv9cIQG+t6upqrCmd+Kd7ozBTkz31eflFZTVdPRO4+nHAH8cfK8x/M7A8H8/XOWxTqcvAwC8fxCoXyRcXVWk2WqGn39btnkvp/glh1TiRnT3aLyk9MkNIj4ljSPEIUWtmd4XTrOy0+LRcAjIqmwl5l2j6+n9m79nWLHvxCly2ZlT7BdPi2pXDSIoyt0e/e4aPNfYD1OfffTU1ctydwILya1WPILpbg232rT38AFi4fGzl9l4zpw5smwFM9slHsdXSH9p3n0eaW72o9t+/XnTgV1s5H1wRWbTXlycjLeSvnGa/Qj1GGznTl+StrTx7ySfw0x1lr8++ynKKRKcOHqFV8Y+MLFuYG4s8iIMZ5bfYWVgYPhqq4J16QzpGvLHpvnCL98yMInIPK1bqDEPAHjvIFC/SLjG2lhnUQlREVFBflGl625ZpK1oZDQ/zl5N/nF58ygpjmbadWX5uGkYPqqkDAtCkKEcHy9jCTFhPh5qsaCo8sPC2XIidIHbPR1harmAioV9+tgAbZCNV6lI8PISC3lE5G7nvEp+oiJyQ0RExj0DGawo8hVTv8nNKygiKsTHTzmMaGzB/F7kkdRQMyUx6jGEb2t6l07SjhrqzxIRoBZz88h5PUl798krplt70j2kpRUN70amdmM+xsubvWFr/su8RiboWctCbXkAwPsHgfqlwlNakWQLlMw+wNGgKaDCU6vQ7WfW3B7eUE7eAc2zqadE/D/5WdSjLLiPuXOgmVNiDk3xws//DEwl6/6PUUgpuKGZvgQA8DeBQAXgM4Dveiq6+tbjFzXT1C4EAMDfDAIVAAAAWAIQqAAAAMASgEAFAAAAlgAEKgAAALAEIFDBB4dHT46Nj46Mzfz58TTYmcmJ0WH0gsOQAQDgbwGBCj40LLrEV89cQ8kkhnbCwXfTFOPhoiqSN/8OVQAA+DtBoH6eOlPu+Vno6tn7PMwfnKhOC7e+bW7iEZjdRl/vb9SW/vyhnrrGbTPbiLJ5BejpqFs72ZhXHbavmLf9XRTY3+Bf93/B9fTbl8IUqisr+r6toa4bDotGpsqyg+0MDW0qej+3qYABAH8RBOrnqe6plMz27/797erNGklj2Q9MDv73W4Zf96mE0FWb6agsfhkVExUVFZ2eXtg+jEz2N3WO4PHvo+u0OviO3hHGLWuWrZXym1eARRd5ahkpyeq/aJ+3nQiPYAa6Wlun/6g3uPGFq6MCfw5xGdWlNlNZ84j3zPf/ZPjfZTRqejJVX2r/dww/HE5/LxMSYSsTk+LTqlv7ZtcWBwB8OiBQP1uY+qd+Iju/++1aO4LFdie9VNm7beWFMtIyokTYLjWR/fvZBSRv+7r7+vo6GVtJcOw+vm3lt0cTcPh3WSn0XYxm13jzCVs+od/+FphodyODPprVtv9mBS4CV1b8a8UpA6uMofFUm+vb/vPtTmH16LkVcpYMbmam0JH5tK6pd3Z1B2n1dADAJwUC9fOFbqh/qs2/e/XDVkJLbxxV4qe+f6dDLWaQ1NibaMxlP8N+2SEqk/LR3TeSZa3KvXv1/+2JwyHU3swU37tWhrOMnOeWKZ3uvGdrZW77NPJVVedIkS2x2NjY2jGkpJ9ahagpKtzbnPxsu7CinPy0Sm8Bcduns8X9bdlhJoQdm9vYPoiMqZqXUkNNqdHWJtaa/BeOH1NS1p49Ccu8Gtq538dfWJkRz9DU0sLlUdfCMTQdaG1qQnm68cuaCepMvKUv3YyM7awdXubWNjy1NTUjVjC19QycnnsuzlZw2y+rLsv7VtRMI+FSjF+v3rxL63k23ez4qN6hipjHPvfv3XMrH8L+yaYrZmIsTIbNvbEL+pIB+DRBoH7OUG1ZGXfPeRRSGqX5zgqOWSji5zV+vDIi2DE0v3zexLajuJbnjiJGuVhyC3V0pCNTlPXA1m1kW7dt2ncnsbJ+hBQY4xWXjm9a9cMeNnZpMxfFXcQKG7ZuXseu+HAEQ1z+jQg7Gm3Jx3NsM/n5O3lvy2pZ3Ffj4DZ7NnvEpmJ/vV1bt25Z89PKw5zc3o2z24k6cj0sju47unn1il9+2bCRspNt2w4/S6HtGR4wO7LvCOHk1v+6asvuJPprxISvBv3tVSFnt2yfff5mfm3vZ+UtfSiE8L3ihTXn5g2MP//rlJCCytmdu1iIFdaxHDz2qmV8NnSx9lpSlzXDy9uJfbCu4qdY5V0cs+dWRKcYya10Pb/6awYCxwrUn2xOYyZGI5WEA9qb3kPrFwDwN4BA/azhUJjh5v4JSsBhRrr7xvFowiNUbpy39avs1y85To929U/hSYnYHR1uyCdkGRpeSlZUmunBfviKemBrJaEhiJ2qqfS1vbJv27+/XbPlaiSxQmLWYzXRfVdjBhBKE63xxZHLqobOUeTnB1mqCjOvWLty+QY56gKlM5P9bWUlhdkuwirywpye88YUocZ7OyuLKtMd9WSlX8ZmUs6itGJglLZDGtNRUV5BOLkAbTulsxF1NCUEuDGk5L4hP4fOs+wUytPTFU9tZ+fScspHhrDIcGdxerSRzLqVq77/0TCsKJ1Y4dlTY1EV16xiykVbfG9XZ0vfFHnO/d7Whobu0ZHXW5CjedXuV5mXEfL0Hy5VfzZQ8dMT0crCj9oahulLAACfBAjULxIqKcpBNyK97fVoICGESUfILS1tTmO6sTGNr+5LHdL3elBI7HXFpzzkPXdjn5wrZY1yZGZk/IW8zLMehPgsdFqggWFm87z0Q9rj0i0O8Bh60W5D8OiJWK07RlL8vg3zthOhkKHw+8aGza1/0GrD5t8PteKdH6jTQw3ZjifFjY0CabciSEGEjelNNvvU8j5C07Kvytts+2FJMW9qcVduvrlX1Ks/2W/750yNdeS8cnOykbnpnz/UDwOSAPg0QaB+kbAFyTaaZpFVrfQFZIQQzH/Ir6HGfodu4c+mFB/1jaoOrlnNhAe4VB9udVV2l/hJygKn00ODYTK3nvUixGuQUzG+Jga1LcSlyOe0JxfeuyhgRm2hkvxhoJoYtf6ZQB3uq4kw2ylnrBtBuxVBKuLMzeS2GQUXERro/b2VT023KxnfjqF2fndkZ5p5Rqf8rYE61JXvYnZk/xZG7u5RDExPAcAnCgL1yzRRE+oq5RgXTze4hoLwiT4So3Fbn09j/hAjpDTSXoTdMuBZOakRle7Lo6PB4ZE8QwnUmeEhQqAG9ZK6fHH5kSbGkRV9tEk4Uxkcqb3tqp4nzTaE2H0cr+1gfEvgQdP87QgpUMNcjQxb28fpS+bDF7qFWfO9mJfI6JHmcm/OmwZ63vPuuZlODDA3FLnkXlgziCADfdWBZts1zPXjqIHamZNl5vUy7Q2N9/cDPTPS2pCZHGcrbRrb0/EHrxUA8JGCQP1CTXaWKHAo6jvm0mTQNKbQw0bZvIJ4+yfSGWNvKytcOX/8zQMFdl792ATK1pIgIYPb5/2y58rxCcqKMZQxskPtoXfP3cuI65stHM1NtWZnY/l+i+Jrt81kG7vbKIoG0w7fJUMhw8FOUvJzo2qn8qWV79mndKPomnH1jxLuXX81//sBerSv3kPmprgm7ca2QLnbEkISLnUdg4SGOBrdFX1nt46tWRq1wmhVxZ0nGcU0T/lj0229Wb5WBurKypoZPVi6Zv07SFW74tlc+/rbAAD4FECgfrnQHRGP1blYGZkYmcj2MV+w8I+pnW2bYTEdmecOUsrI1EJauqZId7KOlZ09snnNylWrfmfcekC2B5npynAy3rNt56pV6w5d5HEtzO8lVMIkWLBxH5jd/X5pMQXLl6ZnOY+sE37SPjA6MRAhr32BWMK4bvWa1atWrllPqsZ5yPxVfufstVc8BlMVtm87I2kvjIw7D4aWTYzPYMkNyv5UO5aNpJ2vX7N29cq1pB0wsRxhUiTfmUOohZ4sfMCyiXwGpN3L3HfPHUeTBl6Fm3NtZFq7esWq1au3P26emkRaC10Vb6wjnM3azZxqWlG9fTQ30LzNWEn9o5tHtq746adVvnWoPzmoCDMxGqHA59/RuvDNPwCAjx0E6pdsbKCxMD06KjqKJDopNq99eN4gounsV8RplKhqqR24mJHUxPj45MTEV4mJiQXTCG66v64iITY5KSk+KS2rfmiQFEWo1syiFMruo5Iryup60d1llTnx2a2TKDQG1VlYmko8cHRsYkJiUnI86VjxGQmVvYNTNC1Q3HBqQjRpL9HRiRm0GTfTVxNL3v3L+LiE5Djyyb5MjCqkuTqM7ot7OXsOUVEp1X3ds6+xozLr5cu4hJSkxMSk1gksBpkcqi/Mj41NIOwso7ik6w8naJqFHZ/qri7MzUxPz+qewlN6wN8VdmI8UnGfXXH9nwxkAMAHBoEKwMcBj0Y3BGzceI1fPTi18k/eegMA+IAgUAH4ePRoH+U4we8c+l5mJQYAvF8QqAB8REa7u7t6RiamF9nXDAD4iECgAgAAAEsAAhUAAABYAhCoAAAAwBKAQAUAAACWAAQq+AB66ksqq6vresbGcchgc01tZU1T58j4B53Dtqe2pLy0orypp3d84QFBk33tJRXVdV2jY+9r+fU/Z2qsp6W2qra6sR9BUKjh9rqaytK6uYVrAQB/GwhU8AG4iWzZt5vlkEZgWDsSqXLmzJbtZ2V9nn/QFPAS3nl867atQqbmyQtPrFAeYMGy58Ap46io1+fw/4D6o5+oXd675SSb9DMEU5TnInzgwL4tfHfoqwEA3j8IVPABxJjwHfuJgWGLpM6LgTIPruNfMfxrjYBS0uzSNPgZpOkFLxEfn/DNGzdu8vMRH0gbuz2rmreft3h4m5efl49XUFRMVERS8XlM3dDbV0XL9NQx5dy055qU0FPirImv68p7Kc7ByKLgdy//gzal5+sI4xf8nYHhn4fPOhSO5biYHP+B4cdDV7RD6estAex0T6qEsNmd0CrMR/QGAPARgUAFHwC6qzhGdufKX9nYNV4h09mRyvv3rd6zRz6Z8kGNn0bqQ9gJTh0/tvWn31f8fOQ48ZGgxh2/svk7ejN3Rfazp4+dO7D+h5WMm1aeMnxRUvUHUwJiMLFyRqZa4oELBypBhSevoOUzx5w/2NHfaOah4DKm71fulnmeOoIk6HLsWv7zJrGQjOZFzkH8LkYrisOVmXYrmz4pg0AFYEEQqOCDQCODVTHa+6/xXeqcITzqzXHRkN6/LY1+oRUcJl7FykJzkLq4GoJ0J1rY8e/ef+L8FfvM5OQXJw7uJNt9hreM7unY/nZfDl07u3Kf6xdumKg8mF0JfdZjndN7dlGervQoL89PztrqtmTw7Po4M729UdqU4p07T2r6Z7nw3rQPcsolBWpT8CN97p27du/ee7ikta8rSv/6hYOEnZ1RDilrmm1q46YMuWcPQCji8QrvGJ+/0OooqvEZG6XKvp27lMycBO1Sm0vnXkh9dbix9OG9pAoX9u7VVJQ/61uODJMzvS2aaZew9J0s4uzEY53bWLZv1Igo7CWuZztPsaeV/Pn9+/cfPaPaTFe0aLhir1DzK8H19NsBAFQQqOCDmap8mhIbMExa3Waytaz4uXM93VKgqJGhcDljQ2Xa9cWHy0IjDLlEjq/Yc1GElVNOXUVFnURWUlLVOz65h1pxaKgm2laMx8YuYLQiSYVTWuX243pq2xI9PFHxiIdTQEWV/Gx17rNnuI+wHBJSlwkjLQI7Wlr+wkROiIdSrK4uKip1+fj2w9qB3iWkBlpvdupTO9Vbgle3MVzk4uM7xnaUX0pUXd1A+0FCQx/xLCbb+3JdzvOJUfcgwS5w6qa3V3rHbKaO9ZQFBMqdviJFLtdQvy72PfN/T94rTqGsQ9tSGqhhdvUYx0UFYrmyqiI7++ZlDCpJSB95SaD+SpfAnKIm4npx+KkRlwchgRULrR0XJ39lAwPJjhL6ssXClTyItuMJrqb5agMAmA8CFXzEFgpUor6sMoeTl9n2/HJEhzokF9dVdvWSus6D9hHSCunIdElTvJGQzMOH0cSJ5iss5fQ0DSxKyUujoac7ctI0rin41cw+GwmWPXJy1b+XHb8pF06oPzkY73qP79xBKW9qhbYoZ+aV32yQ8XtYTt1GiPfydP31/11z4Ayv5YPSceJp1pRXjI22ItNj5TEvlARc546ATCTfVbwgw2kRGdZOPo22oofSov9jyp+rUnhN6JZRRGs9JRaTfa/uvrSK06JgtrzJ30r+6pMq5N1GRJf7O2kLcHBwXOQxaKMvW7TGp0l3rgSUvdOBAfiyQKCCj9ibArUzKd3m7K4z8vIu1KghmLx7Vkld2C8NjUwTMrU2NNni/Dl1L6uotu6Oukp3AS4hof2W5Ppdrdl+hrsUimkuNU51lKYY7xOSEJAKGUbw5bEmJkp79H1zaAIIPeklvf6sjodr4dw2pCsnUZf5qmtx9+DEDLnxhsdi8Hgs0lIR4qixUSKto29wVk9dWrm3zKlbRpfcKkhVO8pDzDSZOF5SqgwM9ra39k9MoHCzqZUdJCEgvlPcPLGFVN470NXS0tWHftdQw0xPjo8MDQ0Nj7zhlqC3w89MDfV3Jzo/tRSOqH3XYwPwBYFABR+xNwVq/YuUu5ynTJ/fm9eDiQ8RUrwtYPxsABlHkBceiru2XOETlFSQkZSQlJKSU5HgYOM8xVlNKMPXVsfdET1oNruUOglucuAZv46OtETICIJOfKBrcOOUV3nb7NVQkhy743ymfk65c6Ey0fAqQXfDw0bicuXz4MvzfVSufL1HTFFGgkpK9paqvold8Mssmpzuj6WpceWygG1ARl/H3FXQ3oEcDy1FKVLpjRuibCdO8GZ0IJP0x3uPcDMl6fcM1bh4byqZNw7/jQcG4FMDgQo+ZgsMSiJqiU+2Yme+KHHNPoNm66TZJQ3lW5GlpAeuFtrsPnU1NJcUseUuzwxPJDcT/jkzUhbsdPRGFM0gJnRjnL8s8xmB6woxhDRryrY31TqoYBjXNFcD16fLtYJN+9FDml5cpCcv03hTQAfNForu+ng/h2PKOSPzN0+31FTXlDWSDjzW0dnWUNJL22icvLXyd377olekW2FR/fVVrd0N5O5hivwnF9dqpyA97zTQeKy9sbIgKysrJ7/67fcOvU3Vo1g7rqcV0EIF4I0gUMFHCI9gUWMEA+2tj8W1NW9VdhAfjU9Oz5DTpyM1w+wQy7qfv98h3t5PLCJqzJLSdTZ+MYTCo2cmxrWvS5tm9TXOderiMUOxcR7KT0IrxienpnrLy51FBHxL+4Ypz86wu8jO9M9v9gmKP27F4DAzeQ8eaV/bpeY7u/ex4SyP1b99v1Lkvnve1CQah0dPTU+MdZdEhausdSoYGyVXGqcGFhY9UNz0SFfTMx9NNdTQFKR6Q1xN2iGbUAOX73rf6Ppevci5CuhJnVNbpb1KyKOdu0LkBZU1udzL+sdQpFLU5GBzkNQh00ykd17j+o/k2GnwbF++fPnqLdfr6MsWrdo/zp4TAhWAt4BABR8f0n2opwlOHmPb8tOK35YdPkZ8xK9u/4Dc/GyOy3a4dPGmygUu/rPsxCKio6esQ4sqR/FTrVF+N/l+++bnrWxXjkm4Bqa0IdjxpjANC8mD+1gYt2zaL6h171n11HBnFtfpvSdPUp59gp1Pg3PH2V3Ll+0SyGzDIFNt7Xk++hKHZvd++uRJIbXzKxk3btx43kgzumcwwdBa4vTxgztYfmVgPHD6FLkSl94MhtqankT6c4TPHqTu4fSxU/tPCMoa+sfkEpu0uEwLK+5lDN8xzVU4feamRUBCzXA/qcu3zfPCMZbvGX7dzXqcsvuTp86dvK5ZNYDMvFOuJShf20oe5buX/P79CaRRvtwwyheAt4BABZ+gtoRCNx7BO9E+i544CfxV9c/D7bgU7mfXdY7hIVUBWAgEKvjU4HG4mrAU+0tcpk8/qlkAP3Oo9sY0s1XrRJTd89F/ZqwwAJ8/CFTwienPcvOT2X2U6etv1+3YcOSSoFt2URf91EDgfcCM1bo5Bkdkt2OhhQrAQiBQwSemL8PFR/MKFxcvL9dVzsvneV0yCzohUAEAHx4EKgAAALAEIFABAACAJQCBCgAAACwBCFQAAACfGzxmeqpvcGxsmjLJ9t8CAhWAeTCDDfaGevrukS+b8ZMYxFNXz+JuaGIjaSUZ8PFpTn98z8BMxy4qp258pirc846Bpvkj98y5Zfz+ipnOQgtDfcNHr9J6kOmpyboIdxv3uKxu1OuL5BUFOdqZujzK7OpecHZHTHd/2j15AhVLQ7+SwbF3/4zHlqf62FhbPQgpJs1L+bqp+qaXNsRDqDveCa7FvD45ZXvsSw8dQrmCSUhswRt28gfG3U0s74UUlQ7QF5DgkNqgxw4a8gqairZx+XWvv0lIZ5KDibYC8STV7CZolqZYtPHpIt/7FiryivpqLhkNbx3en+QjcWiXhIZLXt3cW4FHhnJ1FInvgYKavnX02+YNC7MyNreLSmganjf1J4LJDXQxum1n45fXOTjT/MrT2MRI1SUutpay8CQEKgDzoLqK2Jf/P4bVZ7h8OnvHcXw/Mvz7f0cF/CrLX/+E+tDQQ40vI0lepMQlVjX1ddT3o995LZoPBT083lLwKj4mMuplTFxiYtzL2OjIFzGxWbV9vfMXYX87L2GmHxh++u60Q2DRRJ4J66off/hpr4pqWDN9vT9lsj5+73cMDFtF5CImJkeHi5x4vlrBpRDT1Uy9E3eqs6Mi7UVkqOZpxs1bT520K857PconmuqTXG2kTuwl2M6677LmvZjFz0iCQ8aaG4qSQ+8pyBxcybiX95o3zfzSZHg8MlpbHm6hL3yYdIgTxwTN/DPnrdQ32ZYWdUdMlGMXoXznnms3jYOy26dQi7yfGDM83kr4SUVHPndgZd6wRfqJz+ur+KH6B6tePDbi4T6xc++u/SyHr6s4xxd0z58hc6zB7CbrsYPEc9i7/ZhnckPL6Lt8sZju7MwPcFc7f551597th1hOShsH5JT3v+k1oO/eOLfbKCqolhqIUyMt8ckOwlu2Ew6/e/fejSwXNOuGcegFT2G0bi/DP1d9I2kS39BJux03qLjjawaG7ftUY6p7ca58axi+Xr9e0M0njzItOAQqAPPgMTNBsoe3/LJ+882wqu7pIKVDO75buU0mOKh+wb+8DwWHna4qeKi1jYmE8fiuLZK37t/ViRkcfpc0+pDGyhqeKp07wsK0fu26NStXrl67Zj3TRpY9153SU/ro674RZlRw3f99s5pHLrixZQatc+in7zYLa3jk942/02THb4RHT3rxbVq5fA+bRurA+PR0/3PmH7cc1k9J7pj9ZeiIijC/ysy0SYzr3C0jvUvuldntdGGDmky1MbvFxXrdsYUgKzDEgv+IgtObcuA1KKQ+wFOdnXHNMVnhC6Im1nx+LXQ18KihgajbSsK87NLexEMkuXvo8x9QfURzCHyW03X2q/JK9i8J5VUBKtLy0uy2mZV9i/tdGS9reCZ/lvCTYtyloS3OYZvokU//RGxdWLgJz1FObUuflJaavHwPSW5ZjWv3S+f+ZrATIwmmJ8TvJ2bXEE8y1e+QkodtYvei3wcEXeTjpc51iMfM+3luS0lC0l0RdhkTqYAF/yzxCL5EYpeY8cu22tkD4Ccz4204L27b8ayYcPjauiJX8zN7NMO6+17vEZ7sbHum8NOP+7h/VPCOr6N9u9HdeXu+/teK44YulROjGPQlxmXLT5oGpLSMTFMOA4EKAL3xZAO5g5u+26bumjM4ku/ocGXj70wKMg9oV5n5sHA4fGmKhZDamQt3ffyI3BycbnD87/QtiZCB4bd1g31MUAMjtSnhQQEPLOW0uDdtvXSLX9/nYcCT2OLOjgV7TRcwgW2LZPpl2xH9tIJBBJnJY/r5x21yYS/bFv8p/ceGQmU5N2/9lc0ypBE9g4zpHN+wgsXQOKaV0mc63tSY98LP71FOuO1Tfys+76qMlnmBisWVv7A0MROzCc/oIm2YGCl5oSUklzOG0IfSwrDIcE152nO/R1FFEWauDxyvP6IL1ImJ0exnWrfN5V3jisntpP7mpAB5brniGWT2VLodr2s4OiWUdZA2jFeG2piKCOg9KiCf0h9BE35Sr8KC/P38QrJD9ERck1xz6Lpr8YVh7jaCOp7++c3kUxgs9NDSuilhPds3PImaLnxuaBCd3z97SiMqfHJaDhH5k8jiun4wqV72FsJG/i9q+4m/Hnh8a7rVLaVbqm6UzlZamGl0sfVBkafZrdOzfw246TwrZ5UzhyXcZk+9pzNaX1g1rqOP7rdtYLQ4wIadlVfORJlJ91FMVfNcUW9XkuVvW7jFAlr7CT+X1uc/rtpz9V5DK03fNgQqAAsYyfMMtrik4J1K+DeqtylWn9vEynX2j7OuJtJkFwvVdoE7UaVNAxOkGevv8+/Y/vW3P/34K8sVSdNE8uJtg5gse3XBPd98v41Z7klIBeETANedYWclcGInI8tWwg42Xdq5et+xE/+8YOc7e3ySdH1Jtq9Jk9ofmTep/Uz7TIYx9zmBs9KBNFunXdxdzJOGyYE61VucF2yocJ5t1zbSOW7bwXpOTi8wl9j/NVRV7XdD+OSqX5cdb+8nteTaU9Lvcq39ae3+CwbutWjiR+JMy1C8icTVw5vX/XLNKDTM09xQ6NDyTSwseyVUHVIGcMQPwam+ypJYU92TbEc2kd8HRo7zB85wSQeGVRP3icfix5sk2Bl3zL5NO5lFJe8mpLSM0sddQ1Sm0zU+61C3wrkoQveUptscX3mY56phgLOukOQ58stgYbkgI+eRNU2uOFRZ81RZ/yF5tXZ80X2VKy75VQOv9UYiKAvu30hvI/N5szj6wkXoTzLzMeVTflJe1IuM1OY817hi7Bz6on1+pYZHUT56l5yLkpvmNY7RlW7yt+8p3iuhzteIHW4psN5rkoF5x68+aKTc2dvVjMuzdv7mur6cu8LqniaP5q4ITrdmpxpsvFuEo5zKSNxF1chXJXOrFfbEGfgqbpF5UEDdskit4Vr8dpF30ulSDOPhbMOpk1jVNpctLU9vOCoeokQ8tnWs2FlC6z61lCDbjEVNX9M6D7uoVe/xY6YW9sKmWb0js28vZqra7ayp6uVmunPBDgw3eGoe40kcQt56lXZg8LnZ5QflrdQdIsQ/9fyHRlLH9wlaRVc9u6ezWdstomLu+0vjiyiHWyEZ3QixqVr/QveaUlg75VdxFgQqAAtBj04NtXQNUf5YZwbbBvoHZvuGZmZGu2trZlWX8Z47eFohqLSZmFYtOcl3Lp2XktB0KmhtHsNhMBg0Fo0f7+wod2fnsIpIbR6aInx+TDif2cbNoWgQWVNC2EN28BNlVua13+xS8Z89PEmWqQLHr8Qg+N/pctrt+CnMUJgT9yHOIxIt49MkqBk0bmJydHASR54XMNdZgm3P+fMaD54WVxCVBvppXbywhzV9kPj9fXqgpinXQVNcsa2DdIUJNTbe0+AhJqYooOxePd1L2IJDYUe7muur07xkflq2Zu2qHacEjaxTKyrCYnKTc3LxyCjhA9FdXHDvdi7FB95ppENURATpXzn1PaNvXDNxnxPtnaFqF62iCssp71PuPaXzh6Q59WMKcPM62fB1kemOXLxWIffzaUaPoKfGu8r0+TYxH+ZcfUrX3juGfIxAw5sSV88VEU+R9EKGuwZmP48n+zs7RrGvxynh5dldZyIF6k4umyT6wsWYGRwfbOsanppCE5fonepv7R8cGaWLw8aAJ85qW/ViI6rmLUo/k2xwVVid0yhlevZiHSFQC233yoYN0TeN3g6PQipcbay1d5nRrgFMeJ/LusLVWXn1Ze7NpeNMW/Yrg426idOURnB74GZ+z/BsYhKQ9SUYuckwXbF9Sd2ySPUh6gc1fLWj5l1YJH5l0ZDZcfNJYf3c8r/tgTfNpXZlktvA03XDsboc/Dq0P/gscxZRhVuqMeOji+mexw7J3VJkVXzRPjDbsMdM1nqe07h1spZmVWOi7uxCd/6Dgvpv7QAYGm6NvH9eLWoUNUnz2ziTdddM8spenrsxpUMVT+5pb9R1j6qauxY9Mzra3zmFItbHo2dGulpf/wlCoALwV91T5j580a2gYpD4ADVR6yzp6uYTMk6cxl9bXlnDt3KU8FUZFSVqV9ZF+eMfUvt1Kz+fdwJ1F305L8NCX+Q0UzcQ9ZcXJD8PCAh4HJhEt045HulvS7nvI8d15ux5kivXRGxpv+h73LjAq/nAt3Jk9mMFNVr94KEWr290M2UDJsHHwqy9fe7TP9fc2EpSxbtmmnZUDTbL/KvdXDzqXs/Tm4ndd9gp3Ngg4dOUsFtH6e2sfKau6SPUc5usy4j3elTXQ2imjA01xPlfFQ+iHRuNq8px1RVWtxGLaKDZunCgklkI71l3TEXLI7+J9NYSoOtDH2tdD0htn92wGLiqrMgAopi0qteHDC2RxoBHjsrr1COfl88bQDvzUpODU+asTgJtoBbY7BcL7O1dYBjsm5EC1cxcY6Ne8rzto8Udz+R2X1C7aU9cZJdspi0nWX+zWswk5aff5L/6slNIxlwK9scbu0gxnTENo25ZpNpgte1K7qphdN3OKCM5ESb+B3m1c6+9/Zm4sdiONHI7frJ6KFyV9bISbaBmmu3glxKXDR9eXKAOiguL774V0tY/2+zETNZ4XFC6eax63q/CeE+apzPbSS79ENqt8/W2JVkY8LBeuugyPxCnQuV5uDnkNGMnCF+W6kI89TcZPUxuWvwFfQQCFYA/ATde5WZHZSvKK35GwK+C/Gky1TURLXvb3k4huaurvXzL/2M+xeea3dDblaUj8XykjhIwky9uXZe8LCpiZmdF2IG9k/OTuNR3+sMlGS1+wn+FjOPSyfMWQWkFnThSKPXpnFDxrxmZnzqDY3UBVsYJpNYdBhl4fk/fsL1jrr8sQU/HWFyVEKjk5h9Zd6Qqm2160kLnZnJrv0RoX/X8uwpmtbenO8iuO2vg7EB9m+wdHTxunz9y8vJy8Qjaqm8MVOyUhhT/Cb20tnnfJqYaY4JsHmeVLaaf8O/UGODvpMKsFRVWMe90UVkWgiKa1/WTsHOB2lxkt5vQMht4a48kPVKgWlhobjVMmbd9prL7pf5ZXgN1x9y5bW1ZqUbMJmkoSiu6N2w/r3tc1lyg9iUYeMoz8zu9om5ZpLpgtd0qnuoR84YQE77n2OsoHhUNqKinCdRAURvZ3TnkLzCohpFXJlcFdamlBNkWW6XU5HUSp8bov0ctBDeiJqtyTj68by5QJ2o9OW7Ls9O0iglf5DJiPWTP7FKye0K67rCQ+jgnCx72yxduGIRVzitAdfKvW77sRzYe/btmDvbK/FeO/3yK66azX0bza8OW3ggCFYDFI/xlVSZbCskfPP40NZciJ9tISemK4MNKcqDip5HpJDc7X11Ozcy7fPp6VtF2osLO6crcJrGTCM39hyN9bZUFlF3EhtyXurltn7huOLX4Labb83PuXbLzfRpG2/GGaboqrnLQvrSH+IEzaXxRyiW7o5mmHEFaunJd79zJJCUgGhkIddIz7Oya+46eqKdjIqHmW4fqp25CkI4wZe3I9sJ5vZgUJpJ7BLyrCmhrz+nuzPPU3iQYkJOTM/s+EeUXFpXUNbTNvwmScg31uXvh/A8u7JSKisg+67zSXtp+3K6yIA/H4MK6xX/I/T2anzx2VmXWjqHr8sVOxDpf1dLgfpAz2w6b6esKlxF42oVMvNtLwCJVbpaWWluN0uZvHxppC7VgVTeQf069LjBSW/ZE9GrkEDL7raNWeauez4saap9vhb/rHX5um4R5XQWL0RCqvkfVW+NFx/zN+BgzM8Xd5qElPdT+11x7A0vRm82UH93o1ECkPYdGEfGrHEWwBLehqUtI3yIHZ6Eey+opH78b3zVO+Q6InknSlTWWVe2bextxCVri0gfEdOK76hds9c7UdDzXZRO+41PQS9dPTISdaaotLS4uyM/JIvza+hmpCq8W1bKLSeug6x56GwhUABaP8AGV5sd7hXvFLZqNM6JsF45dD2qhDIch/H0PJjlH6G/l0uI7EVuRVhhy66yoxr5Nuv2k5xP1lRmHl2fSdoc2h7ns/teFm3doNiFIU2zwfT15eXlFdRfa4ZgzLanRCj8eZdl11oj2iiBO20BRKLC7j9Qq8VfnO6kRHtM4147DNsdFap18lEUOQEKgBt0VF46qny2eyLmyZfsZAYvHvdShoaTNidp6CSPzh8FQ+CieOnpc3+nV4FyAoKuqnuqZBZXU4Kcn+osKjbVs0ud3a06kRD/1snw0fyxMf0q5F//1e/GPqCdDhkOpX1n9HxbO83Y5+dS2dl9ojKN0SP7Qwg3jhWGTHpkSJxOQt/ZOXPClLIXhiHAf3U1GaUnzLy/i8e0l5vL6Ehq6+eTP+OGZ0oDrYkbNKNrRrXikPzcr0JJwivdflNWiiL9DC+h86OhouN26eP5WNHq0IlNDRE3RyorSKmtvf+V+VdisHUvdz7i/4DVpt1dR5EG3U1mP7phziLtFz+8tHSnwv2OiJi+vpG8bvNA3KKL+OL39uk/0X9G//e2hDvcFBOSCqnLJP/ChBCs9o0tK/rP1MNjphjw9CeMy6kChXl5REw3PrFY07e8bFunJJP2krLziqxvmtVxx9R76NsISKgk9DcRXhUHaIlQVDQUNwufyGDOuKHr9hIB/XifmtZDGI23xsY5qcldlAiup32QanwYUDr/hPrPBhKdW22yeF5LGFC8aBCoAi0fIp7rMu3cszsk7e5O5e3vIrf+G8ZdNovqWkalVlL7R5icPlXfuW7ObbwAZbU2xvXFk7W8bxeZ2U/f86z0XDkrZUfbh7eNgbqIkwmPoM3dRleiV5vU9pME0DDuKaDbPtGW+VPrp2JqvVh+Rd/WicHe01brjEt2KTJI+LaoirHn5JOXVzWfLvcw1FCR5eYson3BYZCI/0VjsoqqdBbHQ8Z6N2OZff2facI7f6uGDrBZkvL0l81HIIy9rycOskhbajqRdeAfU0XQRV4U76J/jFJY00p87hooS10kNv7xy4jlMIq1BF/lUnF09Zt8qFycVXm5eSSmbZOLzUf3D1UkhT/y8TKXVOTdsviDBo+Ph4/courCjjfwZhkdZCG3+bQvbOg5RFVPyGXjd17yhrq5a827z/MwYnicPlv71mF40feFfhOvtLEuK8PH2MhcV4Tryn2MyUoZOPk/Cokp6iZeSyVWq/J85KfPImBJfwF19W7mbxy3puiLwSI2bI/8ywinulX8SNU6bMTgE3d6YE+Pl5eZlyH3u3LGv2VUJu/ENjo2vHqFkAWZqpsTN1VKZW86WeAhbdQM5qWOOr+b2Qfhu9tJQQVVTXNudWOG2mJCKCU9IY8fYvH7zdq9L678ivU8rr8//VjA+0ZH/KtD/gZeXqTjr90f4WW9ZE3bzLK2mhjpQryutKEjrpoKuoqGnl/tdL1WRS1qOUtE0DVksFlPuwyNrYe1E+kHe0Tlm99K3hC64UUjZHdIZ/MKqG5lA1yXe9CLRV1VQ1kDX0svLxdJVQYTdwO/2K2oPCR43WsklrCYY3jlKGjc0H77zmfSNVf9iYDjm+fiRn4+3t5er1x3RY5wPWmh+pcmwU2NN6eG61znZ/nOSR9rzWSH1puM/BoEKwDvBYbtepTlcZ2ImT6nAtHETs4KCzPHVWzYySmk9LqFUKvZ1V+fZL+RK+PdIVZqv2KFr8tZz++jKOLZz7aq1jJRdMDEzH77I7ZSZ1Tn/alLBXT3BHb/88stvjHy0V4Sm2gsy7VhtLG+Iyalvmd0F06Zdjqnd1KW/8UO1lQ8kRE5vopZvPCV007t87pMaj8VUhuzeykg6CcadJy7fNzOUZVnLtH3/SZN4pCMtwWj3uT1MjOvWrFnHuJ68C+b9IelzH5F4TGdfluPti4dZqMfYevm88rOJGczs5zTGXe7Alo3U4s1MR5QMvXPHiYNliRM7ND5VOnd0O+EY69euXr123dr1TBu3771+b3ZiB/ykvaXWNaswN82T4idm36sdgqLm8Yv/gCNB3Vc4/AsRu4RLOn3hX4QuyvJS5N68gfAq1q1ds3LN+nWMTBuPXhF0Ly6cuxaNbk19an1pA/H8Gffs3Kd3N6OVZhcIMVBbgh5rnyCcopD1y7TJ+Y228dRoyxuk565dSzoE4Z9bzopJP2lspHZG4lHVz510yO8S4+HDHHa+NfNan+iRzhhDft7tpPdw/TVhg6h0DP0NoD3PlS4eWvfLLyt2cejNv2je3p1ur35q/zYm4u/DqjXrCL8ShN0c1w16VkU9U+x4W/lT+dPniL+Rm5nW3ZC/n1lKd50bjzbmYNxF/jky7r9f1NVHPyYbjdT5k35Sp8ScU3PobyvC9Je/chfed5z4G7V9wwYF/dDyBuoh0D1dJW7iEj4vBpEFu3uLPNSld/62YsXajRs3bCD/8TKuvawZ1UUdNjxruq8tWvfqeuKPk3HtOlF5pwz603wzCFQAwEfqno2qePjUO1zCAl+sgeq6lEfJbfQh/DeDQAUAfHRwU4M9xc95rhzbK+3q+CA0NKn4HVulAHwAEKgAgI8Ours4zerI7yt+Xb5q3br1TExXDD6ZSf/BFwwCFQDw0cFN9ncVhz9/Hh4R8uzZ0ydPXubPn14JgI8RBCoAAACwBCBQAQAAgCUAgQoAAAAsAQhUAAAAYAlAoIIPBvxJIzcAAFwSSURBVI/H4WCoCQDgcwGBCj4MPHqyJMBEj18ic3B6MatNAADARw4CFXwYeNRkoa+uNMt6q5yuDz29CQAALAEIVPCh4LGo6eZQTXn/khTaFTgBAODTBIEKPqTeOKOzZhEh721NLQAA+NtAoIIPqSdK+4xN8sse+u0AAPDJgUAFH1J/6h1u4wDftO7ewUn6VZQAAOCTAoEKPiT0SIeN8Am2HZyiBnH5MPs5AOBTBoEKPqSel3pnreNe0C23DAAAnyAIVPAhEQPVKjYSAhUA8OmDQAUfUl+80TnzyFAY5QsA+PRBoIIPaSbLkv/uq8hm+u0AAPDJgUAFHwQKM5kUJHORbRWjW/XAAAxHAgB8+iBQwQeBxaEbysL8vO/5Nk5jYIJ8AMBnAAIVAAAAWAIQqAAAAMASgEAFAAAAlgAEKgAAALAEIFABAACAJQCBCgAAACwBCFQAAABgCUCgfs6G67L8RA9yakZkYxEMfSEAAIClBIH6OUONdFe/fCguq3ivChlE05cCAABYQhConz8D5fNy4WOtE/TbAQAALCEI1M8dakxe4ozQo7amUfoSAAAASwgC9XM3MywhelIoZGyAvgAAAMBSgkD93GGmH1jdEr9lYGgaGlPaQ18KAABgiUCgfu7wuLwAY9l9W3ZtkrsdXEVfCgAAYIlAoH7uUOOm6jyi1tEvXtU19U3SlwIAAFgiEKifu5kRWfEzAg9bYVASAAC8VxCon70ZFakzIgFdTWP0BQAAAJYQBOrnDjdhqMqlGY/qmKIvAQAAsIQgUD9j4wN1kQGykpzSJv5dyBiWvhgAAMASgkD9jOGw6Imxvr7RSSyOvggAAMASg0AFAAAAlgAEKgAAALAEIFABAACAJQCBCgAAACwBCFQAAABgCUCgAgAAAEsAAvWvwuOwWCyCp98MAADgywKB+le1JvsdWXtU2ie1YIK+CAAAwJcDAvWvwmMxYSrrZW28fGvpiwAAAHw5IFCXQNLttXyaFpZZMB8RAAB8uSBQl0CUxvpLyiamqTBbLgAAfLkgUJdAotlhYTV9/dCWzu5RGJ0EAABfJgjUJTDUmP1Yl/fCZtbz/F6T9IUAAAC+CBCoS6A5zdtBW0yQU0nXLHqargw90Zf3INTF+LZzYmUzrPENAACfLQjUJRChvOKiqoVVHv12AtzkQJ7FgXPfMyzn9k4oH6QvBgAA8LmAQF0CURrrLy88KGlkouqxyfE1//vPzrIR5PViAAAAnw0I1CWQbrhaRM/WLv+122amapqe3Lj420//26U081ohAACAzwkE6l80MdxSYc29Uc7paWg7fRmuJfal+uZVv+7cpxgKzVMAAPi8QaD+FXgEqcl2kd2wXEAztLQRQ188VR74WH7dOk4VhZAO+jIAAACfFwhUAAAAYAlAoAIAAABLAAIVAAAAWAIQqAAAAMASgEAFAAAAlgAEKgAAALAEIFABAACAJQCBuiRG+gtTk8Lj4nJb6UsAAAB8GSBQl0B9mPTZq/yHpHxeZrfQlwEAAPgyQKAugaK7F9jUnNSSUfQFAAAAvhgQqEugwu2aqKmnWSoEKgAAfLkgUJdAjec1ERMP41cz9AUAAAC+GBCof1Fvc+ozLRlZk0fJyU2vzY4PAADgiwGB+leQVpu5J7PzzG3v+Lr+STx9OQAAgC8GBOpfNDXWWR9ifl3hbqBnAVxDBQCALxcE6hJo97vKr++sHT9FXwAAAOCLAYG6BMpcrvIYehilwTVUAAD4ckGgLoESlysHZcwlQnroCwAAAHwxIFCXQHeOsdgZ1vV7pW67Z9GXAQAA+DJAoC4FbNErI0nBk0IipvH0RQAAAL4MEKgAAADAEoBABQAAAJYABCoAAACwBCBQAQAAgCUAgQoAAAAsAQjUz9NEV3ltcX5BRX3jIBo93N1ckl9SXNvcP0lfbzFwI2OdpfnZmZkZJJmlNZ0jY/PnLW6rycsil2Zk5BU3tI9h/r5pGDEjvY2VRQUVFY1DhNc92lldVFSUVdNNX+1PwjeV5uaXVtb0TE7ikY6KwpKiyvqusT/1Pr5XOAQ1VJRfWdU8jMXiEGSsqLA4q7a3fwJLXxEA8N5AoH6eah6KyB9lZjpwicejYjj9ofkppp3MHDddMijFeBwOi8EQ/sOg0SgqNBpN+DSmm+Ifj68KCrl9cvf2jSSbN2/lU3mQW0w7K9TMoA7fjg3k8o0bWa8Y3S8a7qUp/2vwBPTbaExVelpeO8jEdJHTKAUZiHqicZJp66ENMo/p6/1JWMNzzMw7D522eJUxhLjz7NjPuP+qQUTyKKUYj8di0eh57yPh4dvO9z3pGylwYmK6JmSTNTYxg3SGMm09tkElJKrm44t+AD5fEKifp76iQBf+PWu++u8ybl90S8JTyU2rGf61ktuZUjyQk/NIh1eYn4//GuelWVc4r/IIyzhFz9vRWF6cnor4ES5hY3PzOwQODnefRBW0d+GoNfqGS0P4rogp3LljR6xwx/1RQk7n1DjNPv4CDDJRlBT2vH/gjfMkFznsP/RPBoZVQopRzZ1BCgIbv2JYy6vomUNf70/CP1Hk2PENw7+PmXnmjL8yOsrCwPD9YS3LEvIXirHB+nA/CWE+fj7uK5cuk97Fy3yiiv6lRcN0+3m/sP2ZGWYs/2SW0klqn5jBNj8U+9cGEQ3/opo+NH1VAMB7A4H62RpKdzI+sfIrJukJZGK0xN2GY+XqTaKUhiMhUB8qr2VY/vvPLAcvXDh/geTUYbZN3zEKmM9rX6HCHUTU+S6HttBunKdvPOeuqVMN/eYlE+tpbDg0Qr911rjZUYZffj102S67BsF78TH//uu2E0YF3RP09f60ycowH26m736/Ju5Uiu+I8BXcsHHd2TMmJaRCYqD6ivKtWrZi07Hzp0nvIse5iyeuyWs9SM8dpNvT+zPSGW+uu4+Bz7WwEcHiOzIcL6+6aFM2+vd1uwMAiCBQP2OTw/kBbjfW3SnEE5duHW95InnaOBPVMUMunb6zX9NUNaaaWn2itsOfT9L4LuWyG6686LEWy6ZVy39Z/tOytVs3b922bRvL8auCbgX55Fjujnyoyn18G/PG9b+tXMm0fRuFSeLQ8OxHeaHzBbGTswXbOHnkQ1KncPMv6004nWOjVrmhpaps+1hZNaK6arAjz8Pi6L6jm1ev+OWXDRs3z1Y5/CylnfpkfIX76iOaTpFNo3hkuj7jt30Xz94r7Echc+1nkuEEE4mrh1hYdp7kNuubX7QIMzONr57Jbb4kqUhs7k13x+oJiZ04VkWT2RYKBk97kenZh1NtT52FeYVPGD8sIXYN4/rLs++wCx2bfQXbeIU1IilnONM6nGDMsv0Sr5hrZN4DO3UeYjnLdgGryJhOco3e5mRHowO7d+w4dEbA0qd8YgBB2pNtVU8d2rN9+/ZTN+qHcEiNs40Y65pjBuOEH3L5S0/edcsO8Q6i6d8EAMD7BoH6WZvq7c/3zWylfLQOFEWlNmJHKJc/By33aJpqJLcS/90V7ZfbONXfX/kyKbeE0kLFdbTmhBipcZ8+fGz3Hl4NjduGhoZGti6eKS3N5CuIIyVZgW62hvLKN8+euyBpOCuyamKSfIihQh7Ra7ySapQCxesi7DfOyAdF1lH7Q1tLg4yvXVSW0STX0Jc9v3nVD7t/2GGVkNcz3JwabW1ircl/4fgxJWXt2d1b5tUMzT4dwXfm+8TUdA0TjzfT2+oelpHSvkCO9PpdZv4vA9G3XG30hYuAnRorDUh4FUvp561JL4h61EP5XoLgZmaMpLUfNGEH5p4wUeogpn7soHhADTKSmxuiwynMLXhLnfIK5IQET4vHt5LGdaEHJysjhA7v2vTfjUeOnb4ooWxoqGkoc+zCKVExvShSN/dof3VggMi+3xi5pN0TUrtQ44TvB5XPguWP/frb5p8OqfVO4JCe3MzY5w/i6gm1JzvqMgI93CJz584FAPB3gUD9Yo3aHuQRPqVs7uvhel9ZRMg/jRAc9HUIkfzCUc9STiEW9caLcd0jxe7eD+YaurPG++LcL7jmUcfvIEhT/RNT0fPKIn6ZxEd41GiFo73IdpO4YUpjDEGK3bXlzwmJGEaWtM1ehMUlPLC2HPxrlyTHsu4bKAhevcolpuI+l8ZLZKFARYbjNB1Vj5x3zB6Iu3dX7MYl7/LcuavA1WXeBuLP8jN6KG3aHJsr5/7xj9/WS2q+aCY+Hk93vXL56nGV2R2OoeqDzlzRcyynZDh+vG3g0fVrIrqS3rWUKgCAjwAE6hdrwoF1z57vV6xhYly//rfzt4IzifdevGYw1E7L5JZMxMjoAmlL0tydfe++R/H8jXgEX5ZormcZnp3b3N5B1tbUmB8UZyeySfwusQp2rPL+aSWJM/VziUsI2anJsfGJafTsYGM8Mh7lYWbS0fXGQUmLgceipqcmJyYmJqdQSz4Cd8FAnUk39zPl4/PKTzPWkd6mZBdXWNBCfR8aG3L8mSRcdCIpfdfxuheFVx2Udq/OGyM9xqNiNVVv31Cb652e6rx4eM9JmeDGPizhx9BXlugickBK3zOggVoDAPDhQaB+sWi7fAdSnpe2LdhC7Qm01jCUvBXaP0C9REinri39rvP9/Pkb8QgqPVz7BpeknIKGqiKVqram4R1HnyRiDdRQkc1+NSWugbety45ChsLvmxl3tNGk7kdmwUCtctOwFzlnkd4ZoSRw8tujPLKKChoqc++Dmo6TX2p5A7ndjXuuYqq61z6ydZA89AqPQcfpaBpJatBe7m1/eEv90PZ9mmmvBpEgVf6LbvnR3Qt8/3kLTF9FRbihjvZ9t9CKyZl3ey4AYDEgUL9YqLsHtMzUXs4fnjvS1tEz77bPP9nlS9hFc4G3o3FEbRNdSo9U5xcTj4lHjTUFCakJncztpynFdXUWJ0bHZBa0kMOFEKghTqoa1f3Uc+qLicvLbhnHvktLE91XU5yTmpycnJFX+z6GvlopGgYOIHPv0GhVqJmxqqz986ahgnu2Juy3zeOaqd3aZLnFtXUdlG7teG0LrX13XvZOU5vh6Ub6VnJ681rlzaFPjC7t2HfL3T9FVlAjoLCbbod/aLQ0yOsyA8MPnLz2mcNTC3x3AgD8RRCoXyQcCjXRortVQumGd1x/f3f/4PDw4EBfVVeBm6qZD4bcesGhZiaG+ys9b8uoCgj51NS29/f3DwwOj83gKBMXoCfHRwb7+3OKI00srOP7Z01hiHFKaO6iO5KPi9g7hZaOUdUnpdy7cU7EhFiOx2MHIv2V+Y1Cyopmn9vz6q698OE9B8XVg8kJjUbGYh7Kynvk1DYSy5vrsx03HFKSCm5+p0QYjFS+fGDVd9/9uPGo6lJNoUSCx2Gmxrq71ITlHAt6asmvoaWyyl9e29BUJbijexqHbo5JuKNyTNTRO6py7n2ojuEQtXIIrUPwWNzM2ANJFYnNOj55Ta1TGBx2eqKvJ1heRk1Apm4ChaK+THxXdZyxGtMqSbZTh81Tq/vete8a15nip7eTYYeYb3D7NPodnwwAWAwI1C9SX3q6h9QKhp9++ZGJhZX1CCvJ0b2Hd/7+1WElyuXLvtQUN1nW/Uwrli3/7nvmAwcOE6pw8Emax/Y0kptOpb52KtdYWXfv3bpy1WoW8j4IntQgk5QOxZEHOjxcJ/dSi1j3Hz94Xs7ELWH2PMZ6yiM5D7Lumy0/euDSVSH9R08TMyndoXgE09se6bTryIEDxPKD+w/vUHRJf9Uw9k6zEfX5c2/7gTTK9xe+uXtulsBof03g/Wvnl3//87o9R0lnSDhH1r1H+DRc4kop96EOjtREeqpdvXKc+ioJ78NJa9/UYsJrRLWPpNgx/7T8J4bfNx6U0g+uHGkO8xG4xPoz4U1fxueSlkpzixCqPTFRdufxH5fr5E+Nvcv3CZKGIi/Zsz9/pxDc+PH2ngPwiYNABeAT0ZmWZszDruZOv30RJhI0NU78/NUG0T9z1xAAYHEgUAH4uOGxWNTU5GRzeYS1ztazkgZhb53beEH4rmc3pbm2MCkEwWAkAN4fCFQAPmoz7dmpjlxnz7Ie2LLiB4b/rly371k1Mv6OwTjekJqZHhVZSTsSGQCwxCBQAfiozXTkZdwX4uLi5uEXui5+47oQX0jtOwcqAOBvAIEKAAAALAEIVAAAAGAJQKACAAAASwACFbx3mKnx0b6uiTfOtQQAAJ8DCNTPU3uCjfttRWVTZ/es/vGKpEBDJV1NB7/UZvp6f4vaxyZyGxiciui3L42h/Hh3C3VlS2v/UgRbUxJmq66hI+WSTF/tT8IFmMgp6ZnbxzU2oZBoG3U9dTPXFxUNS/zlYHqqIcpXW15GXExCzfROam/nO8/bQIRtSS1KevIoq71+gSV1+rpynzrr3I4uJJRNIE3RfvaaStpOQ1PvfAsOAOBNIFA/T/VB8nI7v//X/1YwK8eN5/qZH/7vNwzLdioEUitgRztiQp89CwoNfR4eExmWUz1Ms2D2ouEGe1sbSkr+YPah7uyIR9rXE1roty+JrhcSfL//H8M/jpy1ypoucdA79SPD/7ZtlZ97pX8NzvjUb9/+6z8/CfiGNGK8r61YzvCPNVx3/f7gFb+brlK/AI1zJ7ce3L7/8O6DO/ddM7MLr22YXb9u8bBpFr4GnOcccmKb6Itw/aHB8ttWMHzlkjqETNU3Ol5gWf6/bzbdJC6nCgBYIhConyfM5FC+qzwP8/ffHzHBopsq/SW5Vn67gk2XOjX8VEPimV1MTIxr1qxe+ePyVcL6Ebn4hVabeTtcVtwDewmxx/TbX4NDTVGmCF5iuCCJZcz/+XEjr2tg73SG4bmDv69Yf809qWLJbrisDraS3/X919tkTULbexL1pLZ+/yuLqHQI7Uowfw0e7St7kI3lhKRrcWpTT0Wypc4+lmMXTa1SyWu5LQJ2empksLd/DJvr8MRCgOt+cUo7fqivf2QSOztnL7olSFxm6//7dvn5OhR6OC/I6vTyHxkvS9zJeqc1BgAAbweB+tnCNgUFiO394berLQgO15uapHVox8qzRXjKoqfYsc6XYUEhbipat67+4/ANLS01t3pk+J0TNS3SxfDqZS/6zX+fluvr/v3bAXmt2P5xZFzx8LdfM3OIPx0aWcLw7ktL1Tm+8pcTHLpxyHRNid25E+sPsfAGLVmnL2pYW+rqaa3IVPLyMbiahqdq1zk1VCyy6Sq+UW9SrI3CBW7DzpIH4Q4S133Li5rLZDhFTcPba8izLg8k+d/csm3Z+t3KMQi+NNuei2X5V+uFPB/XvG3lPADAu4JA/ZyhO/Py7nN5F1HipdhLwyUH1TW3gNlYia+irTyXa3K7s6YSG69zXuMoTU6gJrqK1VlZj2zdNYv5xEXxTQesQyIbCft2v8Zxbgfz+lW//fDD6tkKB3ZdMJ7bATLueuU0B2HzpjWMjGufVNG1hggt4v/f3n2ANZXl/QNn/+/uuzvv7s7s7Dh9HCtYAaXaG3ZRUQRRUSnSe+/Sm4iKKNWCHemCCCggIL333ntNIIH05P5TIck4M6iZEfX3eZ59nuGec2/OvXHzzTn35J7h3vonhySlRNm7i8prel7LqunAIvQ2Foerb5IU+f4fMnsUzx3cuGEto4KI+FrRqKrR6byk1T88bBGVU8dY622ytXSvvo/bS/Yz6bkNP1RZ+y3j2fh//Um1l7/w91EnuuojTjpf8GRdueYYvxDLs02sIXIqgYyqUdkiIs65BNKrzulcz87twnDaSCaimuuzfV0PynGqLN+xU2zRmvNXQvgWkWWaauoMslC2DNCO5x0iH0h+7iDBfMD/XyJ6kSmeMjoMof72f/79mdDfvvrPX4Q++1o2d3Jmufi+JAc9IyezYMYi8E2RXlanjxzwzyrogzQFQMAgUD9qNDJlcmCcszQ4ZWoMjaPNrNMy8uSao6Ou/oMBNK3sRpCLknpAVkfTdFYRS7IDTihaPn5Q2saRKvfl0m+kXO6/7KGXo3q6uuruh7iYHNjnyanQ3tbFPRZKHevu7Gpra00LvGe3M6ycr/9LpjZGBGjsNb1XkMvevdZNce32raccn4134Wk4dHtzVbDLBpHF//i3TUx5PqNCZs4NEzWHhGwcJy0ImAEUnjWYTCXi+0cx3N8Ipo3G6sit+uIvf/nrD2v0+/kLZ4WGG0KPj7GuHBU/MYkaJDJelEYbrWuM0D1xPbejq5ulMMBol6yeindGJZnxzF0apaE20uis9PL96gGcq/TqRZDGF0sMvSL5FpFlaMm66SFr4eafXsi3QN3QiyzvnfP+769/+cu3kf0Iz1KpLKjqdfLyCw5aGqz/bruyLXfikrGjw6PjqEnGAYkTY8ODg4NY8hst1wMAmA0I1E8XLtfG0cVd+xbzdmNlVJTNoa2+KZFN7M/qoZf2fudEbxZPcU+OyXoQFfu8pmOUE9FI8Ytbvqonf+8ean9aabBSWBlPQlBwhLJLZrYqJ4u5XqA93cVZS+2oybPyBuZEVVra7X0L1v0oU8LJB0Jjtq5V+BMM8kbdK2Jfec6LxNjYuOT0iummCwJqoCw2eKdGGoFr21RF4VWrY1aXtBLbUUQEXRoYYSq6RcnG69nMSqzUoZroxOJazgLjXJq0tm85ovYkuRrFP/pOGBppfJWUEBcb+7QH/8u73YOosgdKBjcjymsqHuid26qUi0K4GwUA+BNAoH6yaEWWmw5ukhRRsrN0cvHQ2yu/caGQuLtrCvtzvznskLPOupbXdIW44DLir7koHwvj386L1hD78tKRcJ4eKpGArg0/qGenHcTbU2ouenBRXcol5nkr/ei4kfgrW3ZoyHtPdzvRbV2uPjefTrxZoP5h2hqT3M58s93Gx92Fw93D+YrRpuXrjyw2TBuYQnpjjS9riZy525D/mp+y8CI3Ft60O3LaPqgIzbqd+iaG0HXJkU86iAgNGS9KcLuQB4EKwJ8OAvVTha3Zqu2tHpDZWFdVWVlRUV1Xnh55R2e1irUnq7z9noqzplTZCO9eNAqZTKZQOQuI4dLjrjofO8o1KYleYbp0WnN8zpWjN6u4N1GJEwMxmvoOuh48P9chvkoNcT2x72p6bg+CTBJQKVc2W9mrP56Oz/G2VhefiGdcNwhnhzaNv+Sd9LSmXzNfohpXUVXDpbqmprauvXMAQ6EiA0+tr2iJKFzMfMZ7S5R9HVl/jOXmB5zbJn3wkPXjmRvcv2zqH3IKM/pSHLyPCAsvXS2804O/DAAwCxConyhcU6He3eI0nqFDElJubajvzPoD3xxyw1DuysuxCa4albfMNFStnB9XNrJ2JD6POW+yW8yHU16X52lkHtcyxPe4gIHnZaHHH7XxbKOSiL0x9hbntEa4OpsDSfY+GvtV/Suqe3HMWUvZodtsXbTipysQh4e8r0Rlz+wxK9jSiAsOeurqmqbn76L5C98FDtOdX+RocSWPdyB58MndsOsedyvGp6i4nthEl31bZfTsH7Zy1eg0Pm1ofj2rnJGfxNtWWsf3m+oGpeWwbkCTKhIfJEU9ruaqjyATdY1PLxhpa6qrGxehGZO2BK76+gmlz4SEhL4T0bjHXwYAmAUI1E8NPeoG2rITAs+q7VU1tgyLi81ux5MQQn95ZbJXuPvJdau3XQ2787RqdIja3ZAYcFLNzipghs7BHYcOGjk+rGhgpSC1oeKWl9m6wy6MQj9/zxNHJdYZRzezApU4UB1+nVFwxUZVd++iI2aXGX8EBgXEFzN3JiHD6dGXrZ1dfaaPb3RCUdvQ4UE9eZCC9BQ/DLygvvcr6fUrTuX34wgIbrT+ZYyd7Ra5o5qh8QnVqLFZj2kO3VEQ+Sdzhux/FLv5C98NDY20RSocN7h0hXMOfp6uWgqHjpuYXy9EMR6bMNSff8dfWfGUsvH0aQa4WBzapWZ8NbOMSO+qozf95a9Cn+075XctKCwoIMDd3/aA2OoTynqJPC/U/yTFchnzHITCu385y/fdUZ5a7RP/yz//JWFxOZ9vXAIAMCsQqJ8aeteyIt1DU2XJ0qXCwiJrT6m6Z6CmkPGyW3f0hNetFl6yeInohl0G95sq6Z/Z1EGHAxtFhWcctk5o78MQydTpucC0voKiAMWlrOKVYpstHhDI7JFMTOWDDaydly5dSj8uq9KKNcLqwZzG0KjtKZvWco4uLCyhdsEvZ4LV3SsIUpNZI0Lfb8ni1dfLxsYRVHOsi6nw0iVLlizfrabzsL2V8WOZWUE9szm+Y8X8+Qskd9sP8Re+O1KAlpTIzEmIL5VzvBpbTyRR2KOztHFC093LZ3bNVFmxu7h+mECi0C8jZRKlsnLhgkVLRZYvX76MfpilwksXL5LUMQ0s4nmRkVcF11TEhBfMn78mcQgR6NQqJtqEx86Ff/+3zAqnrLKhuXGHGoAPDQQqAAChDJYtWS620iS5DvvLKcQAgFmBQAUAIJTRJgOvi56ZMNgLwNuDQAUAIAiVMokn4KFzCsA7gEAFAAAABAACFQAAABAACFQAAABAACBQAQAAAAGAQAUAAAAEAAL149R4R1V//eJFUvuOBtegX0W4b18kukju9NVXnHIqlUIikohEIoGAZyEQSJxHy35y+oZyvBYuOq4ZWEEm4pC2iIXLd6y0SX7ZIYDHJ9Dw6KZ7Zww3Ll4kubd6EkHn3fXYwXgvSl778MCBUvOrkdeKXlM2XnLZfo/EwkUKJ3zykd7oUL11C5dvWmoSw18PAPD+QKB+nEYqYoJOSC38v3/898hNUld6pPaKBUJ/+/HoVXYxtaXh6UXF44pHFQ8f3Me0/9hpk/CkbuqsH+f38SD3paVZLfynmIVX4RARj20MVPyXuL57fH0HWhAPDCLjRyvjQlRlFv/zH08b8KTuzCjdlfT3Ioz3ycZs3VkKtoH26a8J1FeuK8WEhP4mouOQ1dt+W+3Awn/+7zI12weMNcMBAHMEBOpHC5171W37T58t1p5EpjBVYX57f5ovcnqQVUZtbXzms0jo2x+/Fttw6JD8oUOHdsvulN6z2+LR7bK3W4H7w4XqiLM0XCWkebehDyESm5Ldt887HtQs2B9kovOue+yc7/S4HYtMYWtuXNz70/FrrdPro2Jr0+6HPX6UOzA62qB7Kep6FQEZzM+8HVQ382zFcVtJof/O36USXNGBUC7J//jNDzLyF2owr1tNHQDwvkCgfrzQubk+yuILJF9OIQi+qy/K8PBimWgUdYrxHF4ajTriLm5goxOZTyLhSCTSWGHptXObV63b5xw3cwQqvqmmsoKtsqKKdwUyZg0ydqCTXaehqravr68NhUe4xo6nJnpb6tlHqG3sHMOwNlPw+JHWlvrqmtp2EoVZm4jBDjRW1za0dI+iiTRmG4mUid62xprK6toRRseZjB9pZ7xUXUfn0BTjIf9sJGx3SzO7mVXNnV0DE9j+Aa41cvAj1dMnUVEzRuQe2KbRxpIema5fPm9laj9CwZTXXNq3fP5/7jQi/FFFJRDH+5ubWzp6R8dZzXsj6Lz8CypyTnEZkwhC6Ka/F2sOXIwaozDfC2QwwV55y67N50JC42KOmvrY30t8HqChuk7qSS/7LGkTL8S/El5vGBXXhVCnGiQW/XvefqfQqj/iEfkAgLcHgfpRww+Nlt7O7+Isu1mRnNNGGWcPZI55SVi5WT5vYf1Fbqy9ZXpaWuaMXwy7dm9qYrjBORM7zsrZDi6aKornn5diOVlDay6+oWu/d+s+JXtmub3Vvm0iXwrZ5CAoVuBQO21VFfYc0tR0YB7AWUdXcd8hJUPfpCYENzRcFBHhpbhL9mBzJ5ZRebytPTPklOzGfXI6l6qmGL03CprQ9OxBiK/VmS3CsoeOyMnt33VQzsjFxcAzOPxFFRlhZvPoFR05pb0a6qasRupanFgrMW+50DdGzAZMEevueDmp2tg7s0/C0XTHfhfLmxXsnjpCpXTmZKU8uZfB+K6A7ajNjgwLTeFZuJUNnVvtt15ISOivInpeVYS3eUAffvhZTl5eFzuLC1Jjc9rJXIPK6JYbigqr/9/if/195YLFUuZpOVzrzFG7CyKet45hGfvi+lpCnxYXDnyq97sBmMMgUD9ZExdkFU9u13MMDw8Nv3H/isN5teMqxwICX9CjhcoYCA13sFfT6+PZpURBwdHkRRO9l8f4i5YSJCe6f8EJ/0ZOeedDP/OT8a0IjvkXpvGZzBYdnfvVnI7tUEeyjbncWjkdznKblIz7F9zb2maio8TX0/uMfkgttnd6E71W2ZV/fPXzgjWK+t7JRfQ0H+2f7GipoiL0TiiuN3qj2E7tkKpqdk5N9r646rZf6ZjuDXqfl4CqKXRQO2V4getgSICGzj7t65caUaP4N+lnTrX2vrhw5MgJQ5dHqb1k5lcAAaIgxN5ify2dg3uC3dUdFPcesk552QH9TwA+MBCon6zJS5skJL747qclDF99Jb1aOay0DUNg9HwICDnrzgn9c+vsazq7utm6ujubgx1O/6h7LziP2UOj5UWqqZyT0nJNa2ZW6OzqaG0bnL7vR6yMCPd+WlPJPXhKae7K8dc84sae+oR9dtPTpa195lbhKw8X9zMG9EDlDvKJTJeF565dzR6aInDubNKoFObKrr1xeocv5qR3cdWmkgjYySkcPfJHR+ofuq1V09cM7pg+ie7Oumjrc3q6yx0yK/veZAIWjUojE6emcHgCiUzlGm8WDDyCTrtrYK2pEEIk5sRbn1PZYXU1+1O7mQ3ABw8C9ZM17itzSvOgY2BqalpqyjGxVf8StQyrnpxkFE0hQ48uHd2y8rMFayXWrpkmIbNq8VKh9e430lkdSMzIq9BQzR2LVomxitdu3KMSmM85fssLd6+HdaMozt9Mk4TBBLd1prWsv9CJYW7n27kCNcvN2e00f6AOJNuevlX1imsIdFr7vdNGiSO1zEb/Qu9Qrtc54RVLvhVZO3MSEhvW/PT9z+t/PvmwpmfudAGpCGmwu7a1rnKU/kUE3d5YU1DbNiKAH+0AAP5MEKifLPxlGWt389Qm9l/VDVEOOw+o2d3IZf5d+9zW2f6gF9+HOqGv6lVpa9cwY0wX119d0txTzzP6WfZw13d2uQiK2YPrSL53LiiPJwjxNbV3dU+qXWT+QUHQ8cEWhsVt033YEV9lJQ0Vm9tdCHdEYl+et0nqreKfJsQwkn1++7nbD6uIXKO3GExTVkrii2EaZrwn46GSmbkRZ4SZbaCnqeJVVd8E7k1m8pInJnurnj/PyCtr7Zmkvq4t71+YvNA8ISGh/ygo+09/rQEA/HkgUD9NJNJUp+0KdcPTYSlDo30TeMY01o7MRFsxJT3zQSyRTCMTGyLvuBgn5baguUQ4ntiuERSZzehAdj1QP6BlfCCgpG+YVYgaaK+6qybrV8KelEQZzFp/zN3rXsEgR/mTMD9lKd2LScw2UJDJF5GmJ2wflRczCttaSoOEP/9SZKOBe3Z3E71JVCIBMzw6PFh5V08jOOdJHesYXAO/jEYXKokp6vmmpA9wXqM08pHFzg3i8kUUGo0yis/xN9Exb+0emj6FvuTzNjpnD1olNvS9SRcQU958W/Wf//xmrbzHjSbi63rL7x3VXkzoX0LfrNGMiO19k9FsAICAQKB+kqgNtbFO3//ly3n/Wbxq14kd3hmMjeShySwjw+1LFYPLWhiJMdhfcm/3Jsn1XLYfdwqPL2/tZ3Qg24P3bFjxudDXq6RlWYUbZDds33L2fNs4QmL/2gN930Hp6La107tLbJaXNwtNqB5lFSOUkf4Uf2GxNaKMQuktuzaeOXx4+7yvF0jvOOD7AhkuL7iy78y+9RJLv/pykdgKdkN2x+ZyjwfjcwONNLdvmWml1M6th8yuBScMs9pAaq+Idt24nt1EOmkZBRWToJSCTvTkm/RQ0fk1l7fRu3+fi5n4VRNYJzDHtOz66nOh5eeMYtrZv00CAPy5IFA/SdSO1swbRuZGhsa62gYO+hHFzK1kBFudHexsE9PQjWHGEWnQ01pLncuFGPavbOjGyx899Dc309fS0GCXaugYOkazb4+yUGvu3PTUm95d2+lKcDEOzT27dqrFyezcOUahpoGtV0VB/hNnQ2MDA6s7RQiqseaRsbOx+jldIyM9LW1N1jEMMyuHufZHkMnCZ5cdTDhtUNfzcnvYwPOoIXSZgfZ0sbqG7YP4It4bu7NB6B0uumdj4+gX/rxgmMKaxjy39Ef/9Nmypcbxsb1zc0AagI8fBCoAHwFa32N1YeOYtBbCm/wYCAAgSBCoAHwMsO25zxrGxuHmKQDvDwQqAAAAIAAQqAAAAIAAQKACAAAAAgCBCgAAAAgABCp472h49NDI4MDw9Do2b46ERY0N9OIEsSI4AAC8HQhU8L5RiCXXTe10NazjuR9y/2Za4wP8tA7nwfPkAQDvDwTqx6k7zeu6jZ7B+SvXc4cxNemPHPStzPxuvmznr/cn6sh4EGyoqWVg6fiolKeAhH+qvWbL0p/WX+R5KMQbKb2odnzRX6JnHjshQJOE7sxoXwdjPT8KmYhgSzJvOxmbOFQO8Dw9AgAAIFA/TmTceFmIkbLwF1+sd6GQO+ofaB+b//kPm2y5QoA6NpQe7Xhacf4S4SVLlizavO2gQ8Cr226qTq/I1Dd5yu2sUfC4isepHnsOnb/PX4RQqGQiifK6VdFwaRF+vgNDv59eNDKR+roDvKPxkpDAg3/79h9L1hlHE0fbEnQkhL9bLq0TTXxta98JjUasOfTt6uU7fR684l2IFgDwIYBA/WhROqIfaEp9+d2hDoRKHX710m6D+I+7y2gI+wm25B5dRVHxnWcMfeIi4+Li7lwMNNgtJiv8zf+tS6fSfj++3g4qvz5c6aTXQ/7tvwGfFHTeoX/o7W+vvqOCy4p7v/ts/n6vS8WY8ecux5b/7+eS6nbPX79i3DuhEvBFF4QPel55XNk+NHeWlgMAzBYE6seL3Nke66Qu88ONNvofOHJDtMNG8Qt1pBFmomKaCvYePKwSmlHKfrYOClt+1fns+iV/lUqjItOBmhLgamPEYmxk7NnJ2Y7gujwcbCztwx4lV3SO5tszKpiY2LpGFA5MV2FojLp/yZK1v+P9/JcFOXU3VDT9HnGKB9uzHpgZGRtb2NlffRRTybOIy2hzWoyduZ32gW2yMmpqOuxWGNm8quV+ND0mytbSlt44c2srr+vdPGvJTZu6aWtuxt7dNLZqYvrZ8SWxviamjjbnY7Kr68MdzC0YFczs/W9wpRnVU3nVVwuUrB40thGRx2fm/32BuIxTcjnfcjOE/tHymODLXm5uPqUjlLfs35MnMXG628I7B2BqFQAfJgjUjxmpv7Q05NitCvbjXatuWgcVEQfonT3qeHXco6DEat57jjhkMCVcz7eUQmP0B2ljI60vVDZtEJdgWSshJuMRX1QzSmbkDbbu6K5VC74Qk9142sZHW4pRYdWa1Qu3a4WMkBD265FHH59XPLpVlLW/5DErTUN7P/0dh10jOa/YUfnQZZ3EWvFF//1p3cHDYa2c7Qy9JTcu7Ni4Q3zJ/O+/X72a0wqJbdE5rOXNWca8t23cRm+cyPcLV4q94J/VREEIfc0ld3eJSnL2F1c0vnKzsLEHj9Bj69lFJbFVS7/+fxuPqp/bJSnLrLB0jezG1KZxTuhSrp43UXFObR5gfO8I1T+41/pWWNkvuqfjBbUBct/8VYjOv+Zt16IhT04kGp++38O14DoA4EMCgfpJwr9IDHUuLeLtTfKqjfD0UlF4Psi9xhk20ExV/tzDZ/ms2bRlSefWyv136U7zF+xydH344SP3+hHmYiw9VWE++jfyKzgru1B6qrIuaGrv+FLWOJi9aVre+SBPneO3eAKVIz3C1xs1wb+VX1NE2mWVBPZq6Wz4kcFcZ3UjVb1mrpOoT7A0Oaunap/dNcD4YkAduusv8V+JZfs5r00behltcjEp841GvclobGdRRkpifHxSO+Ydlh/PMDtyo6P5zdfCAQDMBRConyRixtOLNnE5Xb/yKHV6560zStPK+pA7X4WO7BAdKfvQm6WMThgtK0JJXl3GZLpjiR+fTDLUjRxkBiox66HT+eIuLM+io/3p+b4blJ1vcG9DaKTJVGt/Z63XBSoRQSUEuZzv6PqdRKWUBMV6Kz1p5t42Ndbyyn+zpotzDPdWBKl46uuusd43o3qY3rUcrr/pJrpFRytiuri/uMTzxtOXv3Jp/hhT451ZyT5u9qfPxFWNo95yyBgA8J5BoH6SqBVZF6ydE+o6+AtY6L2z0jsqluY7/fkGN9uzbpovM78UlN9B/4OafVPRynxX0AvO8xTwY2PxulqRQwgjEXApt12cmjp517ruySy7ul/F/S7Pxt8NVDfn7rcJVPRIY6LHGn0XuwTe+bi1qR4eequdYyroHfSRobpHbqKmrvYp03V68/PcwpKz/tRARQ2UBntuXS8qfKwXTSK+ycLnAIC5AwL104RvSQzV8nuazD/oS6WQyVSEHi6TaXYOTsfNeNfyRsrjvE/tvfAwup4ZN7m3j9la7g7N5CQAcRydoKsdNcyc00Qtf+buGlU5OMa1+2Tlg2jzZQftw7i20dEIL2wvu2qrRHTwbkeYgRp//bxTZ+9MspNI9Cb+4icr5SHxvspPGdOvplEmOhsilNQc7UN5Egr77I6bo+qRm5WModWxkcYoDzFLD6fn0+X9RQUeN1JfvenMIBqV5Rctmw0yaXKwr7q04JqeXVJ/N++XEADAhwIC9ZNFSTU7Z7LntKazv7c/k7u9par84W36VQgjUZGJwlf3Xc0snViFLBpqBmGFox0kBCEM3g7WP7xIWvJbee3LsViEjOnMT/X11BBdrex7N6KwrxdL7/4VHjxz8pSxC2tfPyt97Z3CG5d9Pk/2aFTV+BSBONWQmHrH3/+ir5ea7K5Nq5co2DDqBd0Pftnei2GFIAXBVWT72J6wd3FllLm7WB9eq+Dr9qKPtY72VMergEvMgxseOLF9saoV85UCQv2TqhjFtEmkNznE1djd04fVBjotxcOGDleedCITVKT+ZaiLhdKWzyQ2r9OqQJFJCLqvMClcT3fLwTN6Ec9SG7GTs4xVdG71xQ3/ZMxJEvKuIozwF88OeXIiyeTsg542mJQEwIcJAvXTRRt7HuukskOEY9n6FUcvxWZ3s+fo0g2VHNq0bLqczv7p0Chrtg6mZv9mUWG6pSvWbDAYRAj9eYFu0mLSwsIimw4dDyovHWLUyvffeXITZ+cNxrpWATmXFE/JiZx+1DM6MTmaaGQnzyxiHIiO+d/rjm7wzCrtm54URKO1PduwlnMQqa1pbTM91JEcf/EVrIKZA4iIbxYxmZ5ITCPXPlyzirO7iMhG09u3K0ms/RM9lVYuo58CfU/JR524KaSrPMhEg3ksUUVL2+ShkVnezsRWt0Xq75ZdtnDhyvutpLcMRHqgJhgo3u3tYc7pAgB8cCBQP2W4ib7GyrxctrySgrphLE+fjFhTls8pZuieHnmlYMuLi4pKS0rKiouLG4gIlYDubisqoG8oLKmo7sFMMAORPFjVWMZ5gdK21h4UZay1o7aoZgBPIlNIww3N5YySvIKS4uKS0iLmaxVVFrejJlg9UBYatqIoj3mUvLziKu7ptyRUZwHr8AVFhcWlhazG5hfnNnKNZVPQ7O1M5Z3oMc45DrdX5+cXFpczXn0AR6UgeExPY31BQXFRYVFVU/MIkcjVit9CwRHGOhvrqisrq0cJtLe8B0qZwj41kfAsrBt6ywMAAN4vCFQA5gYamdwZtXzBngO6915UveWwMQDgPYJABWAOIWAmJjA4AnmWXWMAwBwCgQoAAAAIAAQqAAAAIAAQqAAAAIAAQKACAAAAAgCBCj5pJMxYQ8qdmCepJJgGBAB4NxCo4D3orMwpKC4p70ShKMhgXWlZYUlN2zD6ffz8EttZc/voz+t3KmNm+VAkwA+Laq99SZeTX1DT1ol6i7V2qAhhpKe+oii/ikKhIrTxkY7KosKSrPpB/ooAzG0QqOA9uKayeJXIglV6dyI7kATDTZvmL9hw5voj/tVMqWT8FG6SCUciU8hUGuN/M+U0KoXyriE82V3/QHX1rsNqvE+0eGdUMpmIm8LhSZTpFlNwU1NTOAKeDoef9TN/qVTG85Vfd5o0+kvg6cfD0Y/Lukp0zJcgkF5X/w9BP436vACjZUuXLl28aOVhU8tE5iOy3szgWKGf1Xax+QuO0FuPdD0IPCf9s8imJaZx/BUFgUy/YDgiiTLbNwCA2YNABe8BZbgm01Ry/jcbtpo8R0jlL2w2rv9ZXFQzlWvYdSLSUvG49KF9B48wSOzfJf3tSmWlA2Fcz7/Hx/mYnZ91Mv25OtMzrp5SlPhK6KeDJ+8NEhiNrDHZvXndz0Kff/vtD7stm6cf1/Q7il/edleQ513wjoGGDOZkhhsuEPpu4QLprcyLxLB7/ZbVXwtrXOOv/ifIsrzgaXL6QQ//9t/T/dTJYo3QfxceOH2jhtKZ4bv3u3k/bVS43IAT+LcC+jew3sTV87dvOx3ypJh/XQgA3h0EKngfyH2TL1xPrl0pvM+Wscx35TVv+fVLFqr3slOGjEy+PLzqkGtCf9MUvRdKwWd7GW778osVu+VD2xGEhEP1dJS9Kk/11D+pmZ6RV8JSWoXCzIw3jvU0lJaWlVfVtg5NIcTh7qaqMkad6gn2A+/pEYdpoG9g1Klr6B7hyWX8yFBHbVl5TVXdwCSmt6W8lLFvSfkw/3AmjjDUWF1RWlJSWd3QM0LCY0cHqyurmgcnMRQabapxNFbnf/66dsOpwOIODI6K4LuK0u2FFXX1zVKwXC83XlnKPoGS0lrG1WCjDNRVV+eHXLHXlttmyz5Hep2qdk4FGo024LTc0MUpuYJCZfe42jOKL+894hg6fRR6taYaRhMZO1fWTNJ7xwMN9TVV5U0DvYODVVVV1fXd/cwlWGnYwcG2ytKysoqa5smZrzb4lspydgNLSsqah/q4mjiDMol5auTmYvwrgUrEDrVzzrKpurZ7CDM+znmGZKzN1tXzlm0yi0vsQZquHRJb+MXXh91u1LKWqZ9BGu/raG1saGhs7XzbZzNSibg069XOWQVdBNrc/B4GPnAQqOC9ICPjrZkuG0+eOtRHoH8co8rCHU03i+WwFnujTiA1VySPBldODx9S+5sj1Ez01ZRvdSLIUEvaRTvxVVLCP37933nCIsuWs6zcnFIyc9ftma/KqhV0Kw85RQ6meegqyDDqrNjyvIy1JB0FoRUfZ2xhkNXy5354MNIWfdd+74oV0itWWkQ9tlESXbma+Qre2bh+7kztTH3utX+LFL1EctMBE//spJseZmukNmverCyipw6llfjScZW0vPbODeeCC17Re0TougL3lSdNze2ypl9sbLL2JuMAbFuTBhDOSqyToUfl5Jb9PP/7rz//93ecCqLLt9ty9qWb8BK1uuCdM52xyGhx441jpz1uzVTB1shvXcvaeYXMjqfJMcmOm6VkZVacCbsUcWerjOgKWTPXu4zFecgVN2+ZrWdej325WITTxFbdDRKinJdfruRuk9TzmjwjTqATDV2dXxuoJASdHueiyjmE8gYZDfuY+IQOdrGH+pZFcq73X/VP0ZBgxYXzNqmeimhAk5lLHnHpi7c8umPNsmViO0/6ca8J+AaoBOxT00O3O1tggTzwx4BABe8NsTWpKCd+ghlR+P7G+rQ7HazeDw2P9EdulDK4X83VTcHVddTkpjdi6T3L4YaMRB8XP9vjuzdtt3dw8WDxvFLfNfNJWZd+28PRQmvLv9asFt8vvXH7KUMteh1b96SKjg5GOf3juus2fYujmeWhJdInzLk6t/RYqihOumitu09SaJHcCXVVM09nxguc2a1wOTizi5UYtNbI2+7qhw+pWtud9/CwctJXVNi3YekP8/ZZXAwv6O2kpyKmauSZw1kPn3hLebktlwLTBsj9ZdlOy5UNjCzTmOdJqKmOdtM6fNDQnXUC7h5O546ctg3OHe1mRBYx70ZgoIvmGQU50VWH2efo4eVx9QlXQwddVln7XShmfkdoffqorBPbP1yXllHWyC7veRLjqilvamfH3NnZ6bzuPvHDe9f9eMDi3PW8zKIiP4v9oqIaOo6Z9B4btbegMO6So7n54aUycSiEcz1GIi/5enNe3ljtwL4TZ6xDslsHeRfi+dVAJeJGc9IcD53bedCJdQhbK50Nwot0A0I4bcxPT3yQ2T4+xUjw/NhbN1PKS183G6nl6vavmAvkCc1Xe8vhWnqgpliq3u2oH+UvAUAgIFDBHNWd7e+4VkxyKdPinafcY5I6Ryfw0307PDIS7WvlMj7xmv4S20RHqffabQp7u8aIZE5/h4bQeH4gM9UzGHnW1NmVtTwOl4n+Yj974UURrZTp+pcOHnV7mFfIeMFxPzlTK/X7hSSE8/LjpLYI9127QhpIKPaGqsFES70kDNJXkOMhKSF/crSrqsBd7DgjUOnfE/BZHu4ux3QDi3jSozze66T8hbuPatnNoeam3fJQUQrnrsNl3F1speh/f1y4dPHCn79XtkspZ35TYMKSxlOuyptbKIZzR1/plXN6+2QPBpQVMHv/xOabpupuDucZgcoy1df7WO1swhhzlXgmbF9XT0c7S1tl+CUbowOK4WXVvGvP/2qgYsa7YgK3HtA46tbAPkRLW3vHbBea5UKjkIhEAh1x5s2cPQoZjxpubai6aWwa293CfocAEDAIVDBXUYa78l7mvHhOl3LDUm+37Ib9RvZJ/ZxiLDIQ6W1xfnTsV9csJQ035ruL6dmY8Bdwm+jofXDa+PwvA3WwIyfEXuRMNdem68eUvKLyixgB26d3yNnVOYf3kz33/gmV4Oop9kA1M1A1o0YRChbXE2Ant+pacsUTJ0k1UyOrNHr3r/qRuq3pVu9kNE+2DJTetVpl5uefzR7FJWQ9C3dTVgzhrsNlxHX1Sd0zfnefJ8XcdzYxTShl/AaFZRjfetNcycnWKp17B3yWb6j14SOBJVndjD+n6sOM1VzpgTqdw5ie7kdnz3AFKvby7s07xNnWSqxYKrxDXOlGRTNvKP1qoFIohN6BaGcrhfWirEOskZQ+oN46vQ7gn2R8pOaW/95tkssU2seI+DePcwBmAwIVzDnUqbHuzIBSnkkptcWXlffuVFx2Pp+zhRmo1i4Tvx6oRGagOrnbTf1Gj+ZXA7WvPSfCXsSmlWtTwBElz8esQB0yk7N3tnjOdTOOgFAzbigrBVVPsftuzEDVeMj6MdBg01Xl9fp3bhsvM7E3s0ylv1hXnL6D1W7H+AHOPVOmroKb+lK2gYH57FSmB+pN9+PHf62Hyhzy9SthVh7Mf869DOwYofe+vby9lVYi99mT81zvOO06eq34JSdQjTS9nN1fTVegTWKStDXjxxBm6PQ3Jl84tVdf08iCydLB4ayKwsmtyjcr+IZNfzVQWZoqnl61ZB3DQlfjtJxTSFEZmv8u6R9paqIrM9Hd0VxZNbF2fBSWcAd/DAhUMOdQ0B2FbivOhDU0cN/XrHK/7KYh6VPO+RuL9N9zVbfom65D7I5LKSns4ZqESuyv8Vvr4u00s+U1xrAJmlZevvybEcxoeaTbchtm7rCFKZ+8lFRdx/hPfJSyls4Jv8DO6V/C4sbS7HXEVl2rxbOjhtiKy3DQTeRMoBl+LrZSTmPTF4eM7e1eMD7R6yIu+Kif1n/QxK7AlBmgoah5KzqdE0vEjKTLtvJbAzjl2JHi9NS6UQw7/qd8xKwv+uZ2coqZRls76MFKoBDKEs7qWan4cl/F5+7bFXev2nupKJ/Z1Z+qvqorb6BnnIxmltJGG/JCrptvOZDJPquiKI1dHrlUVikdqS7cR1frwMkHzd38k31pGRa+3laaCbwTfnAjY50Vr1pR/VzhSWm8vf/ExaCWNwtUXF91fvaL1NQXOUVN/F9+Zi/LWiGspYZ3uBoAQYFABXMOZby7yENs3X61TWu2bVzHJCO7cseJc9eTuWYdURDiYGek1woZaSlGjbVrZCUc75YWcwL16rl16yREl38j9NXXX0nLMg+yTUfrQhZ7Z1RreagSY6OU+JoF//ry62+kZJh1lOx0oruQweTHHsfEl/08T+hLBauHqWMUPNJceNn0h8/+79uFyyX1Ll7KxSKYhrxIK60DwhtkGXtu2LVty1nlrQs3hzVSGIHalvjUbdfm5f/990JxOUVNt9ThNhJS4L1D6n+F/iZlYZvB7CJRh4cqYq4b7WWdIssJ16hXXfjx6aihoceKY+5rbhdnFErLygqL7tROq2cGam/a04snvxb68puvhVevW8c6xXWyohKr5v9tqz17d0xTwUPPjZLTh9+mr7DFRl/5yPXKV73MJmDaq6+d096y+Hsxeqmo3FHV41pXVGVWCsvrGD5ub8ZMDJXHbdi6Tpq9u8xhhT3bNmz96R8iouJG9APQyOi2SD17+oWUkZJc8p9vvv7yXwvWMCoe1FMKKWtBUZGu5xkOq7754avPfmaeAcN6qa3y9/O6X//zm1/XGrT3p/9lzEn6TET7dZOWZoExKcni5B2YlAT+KBCoYM6h4sZ7s4PjU5MDzE1NtZi0dfUup0U3/OLe10SllaG2NqOGjp6dH/dtvWhvLV0dPX1TGzNTM2YFLS1DX58HFaxSKqa3KcGRdWRdIwszU1PWUbQcQy68HEBQ+RkR7rr6RvS9Pa49L5ygEpGe2scBxpYWJkb65hcfRlYx02CgsOy2vpUBY099Oxvflw899p8JrCYyPu57c/PuOZmampkb6Rrbe90uRPeSEEJ3RtwlT7+wlBftnE4jZQxbGMRqHUtk4/QsJw7y0FhxsA6zrdr65s6xnLu6I0V5D70Y52dqoDdzAF0dfQvz4LTpvafaK6yYOzMLzTNvOCZfVVcJrcic7tUO5mTfczDSZRQ7hSQlt9Gqkm4Z2PleyuhnfjnpdTDX5xxA+3p8YlLqk0BLayPdwGHGRCFsX7pfqCOjaTqG9HfLzIJ5IC1rP8f4xh4MDcF2d2eFXHc3NTOcboSWrq1n35v3MdHlUdf9XBwcnC+Gpb7lHVgqYTLJaHNIa8ev3iUA4J1AoAIgKClXlY9HN+Hm9BzSmsAov7PHbzayfmrzaaGSiMUXlx7xuRRV2T70hh1kAGYBAhWAd0L/lKYjYLvxL91OnzAYxJDn7ro1NALqucs1uyP7L2QnNRDwb/Hzkw8bjUaoOfTdSuEtLjcz+J8cDcC7g0AF4K31DxRFXNRVU6Y7fkb5VMijgrd85MCfgNBT8CpI9fgptTNqmufUNU55Rj+smJ5sBAAQAAhUAAAAQAAgUAEAAAABgEAFAAAABAACFQDwWyYGewZG0Gjmmq4AgN8AgQoA+C2Rpge0nENvVvH/PhYAwAcCFQAe5JFGFxMDQ7/I2GYaloRc1jewdrmb1Dgh6BmxbeWP/WzPqtLp+cfEdfAXzx3uEkKL9xibZ/Cvri4IZARfZ2Fgb3Uls3UAjyDd1pYmGu4xjyvH+Su+lYmamARvDSMzswoMQhzuyAm0dTAwr8DOLKQDeIxmPvawtne/G8u9zj0b450quH/B6nJmC/Od6koP1HCPjqwU9P8tPnAQqADwIA1U7flWSOjbrfIhXUNYqspXQv/zV+mjN2qqBBkopKpHRib71ouKbt64ebPohgOHzR4/q0eP/uJJUK+F6S7Nio2JjouOjnt8l+1RZELhHzQm+9Rd0+7Ko6iGP6CHSp2YLLIXEhJZbZBU0U8jd0YKfTZ/ybGrIQVvuYI4H1TxzZCTwvP/V+hSMZ46UJtiuna5kJBXFWXmyY4fCSpCHGhvbKqs7OMvmQ0aARmuLkqPCbZVPi763YLtRpoxI/x1mO+U2Zq/r9ZPKu+jkbse3zjx82LFgJACeIojDwhUAPjhct1NN638YoWRf+7IZFVIsPKq+Qu0NEK5V3J7J7Su1D1nHa0ed7E+jYhdUY+dtPYqBj/JfO1SLfwmB8oKkz20V+zZt1o7OpEp6vIto0OHPZPzsb94cuHcNTiY5W0q/k+1B/0oGhXpivI5PF8+oKkZy1/vnUy1tF1TWq16O5vxuEJU/0P1nzddvV039ssu2IdtMuGKrcOpU4/5t88GjYSgmmsKn6ckp7c9c/YIDdeOZq91xEF/p3zM1vzz++VHUFQq0h3le2T+Fz+KNfGugwAQCFQAXgNbne5+dK/ksr0BeQipuzPeS3WR8G6tyzMdSPygv52+Hpt+6JPXLFlNHsp76mjOqmBoZB6elPQktgo9yvgkpw3VPC7prZkZ1yypeOYiqXT9dvL0A3aZenKe3fd3dnZ29brL9wmHIMX3FRzOH3s0s6Elfr+GzdUGBMt6UBMZPfTC/ZqjAbuNhpeuRtbzP1Me12xvzjoLSwe/xxXPY2/YWlpb21/PoDeDRJ4sz7ri7qqnZ2Tp6P24sKjvdQ+AwhSlXHG2Yl8Glysx1W2s7fjuobxwdzvLOwkl7aN5CUFuNnp6BhYO4bm9M6v3DL3I8Nq++If1efSvFZN9FT5y4ovnRTdSJ/i6j9RJpDMj4baf+4WHz+pHf9F1+l3jtOZEqb3HTV5OjNC/a4zlb1soq/2gqpJAf5dbPexMLWxCbqY24+hv7WBpeZSztYm+iZVb5Tj3sHBXdWKQp5Ee60o5Ot9JSPJLrq6unnXfjNIYkxZgqM/aX9/eyjmleIx7LGIozM7ciHUN6W/UxSeP6n85UoF/4GJpxj6CTVjY5ZSCRxntFDQJGa57+sjC0FJ97yZJqeXLd7GPom+l7/2E/xi/j4xU+FwJCtSN473MQy8yvXcs+XHdLpNYxjvlK7dm6bx/Kfryv1MAAhWA18JW3E26fNzqbi79v0ljvS+9z1y4FM7+kCX0dRaEb5NZI8Umueuwz4Xsjl78dORgBmuTYn3VTq2QZVaQkJFddPjwtg37wuqbXjOYiS26d8/KaJtfemw973f+bFs12b8yFlgRkqrkKZiiEDJC9lnbKt7nbCETGlO0LO2DOIHaV/7AR2etnIw4u42rtu7Y6+qW1jxzDGxz3ROvTTISzGLprXIKJ3dIrvjHN4vW7dd/UE/vNpPGMx7rKR+Tklr5838Wn77sm8c/5D3a8iLhiv6JLZvWsl5ijYycgonz43xGV3CyoTvB5vh+MSmZE5ae55Tld0rTr4Logq3qgVczeoZY17E742WIibL5bfp/UtF96Z7qKtrWjGDjQx5EXpgoitIvwma1+3W1/MWzQMEH+Fm5pw0PMZ+J/8juhF98XRn9iw2q8sT2Bd/M2yWnGz+CoSKdL9IvHt25XmLxl4tudSATnJ27nru5KG5bs1yKdaUkfxKTkhba7nHjNs+ye7+KjKpKuKSism25pCRz/7UysqvOavg95xpI6LLev20D6xpKSa3epnzAKSKjomcMO30tJsfanxwQlV7F+hcnuVVysZD0qS16T3FtU0h3QZjPjo30iPv5+x/mzVvMPor0TmnVoJlXmCXSGFLk6XrJ/+Q97kULGe9UVqjpcYtbj18N0N+pDC91FR1rs8RZjaZ8aiBQAXgdCo40OYLCstclIWNHMRgM8xs5lVwUFuZ08nZ26yBb36Wzp6V2+Fwp6Rum0BAantIfG6a1bofUXv3gim6Gts7WeyEq6yVU79V0/XJAEx9j7mixzfdu3WA/38N1C33MDy3629/+9tm8A8xFWKdNkfHpoQeMTfZe7h0dHR1DoVrSM7xPHHd5WkJCmHlKfeh6UsY8NPB5M7uN5bdDdc9KbXFjvwQJNZpoY3BCMb+8ldnC/OJIi8///u/FG008c7paGYvD0WjUKezQQH9393PP3Uftrzln8i/REmd7RGzNsdNX0jIYR+jsrn8cZrB9t+TO8nEqQiWSJ4cG+uLW/M9nPy49qn0j52V3d+MzN12ZA0dPX49n9ZTJODwGNTLOPCyVMoUaGR7jpBg38jCS46K9a/7nPyqaxzfPLsX4TWJQ6CkKhXnqhInhiSkS40dAVMJARaClhsXpc9Ejo3iEPDWF6u9qabqtrnarncr54oP137Ts6B5Lr6zBduaFfOq4e7XItzKWj+KYoUMlYqfGR/mNocewRCIjM2mNEXoKBjYnggu6+5j7d2RXhJrtl9UtIVFZ7WFk7vAQ+20aHKy4e077oLisanh2zfSoR326u6KGf2Ea619cX5Pmlnk/bD5mmYrrISBk/Diqt7W3KszFyFRZ+Trz3aTr7R6YGQChEqfG+JvI+GcziuVZ3J4ZqF76Ts4b/adXHWbivFMEMvOdQo8MoybGYWbX60CgAjB7JGQq9aa6ys55u22dHOw53O3OGCmsFdrgZBfdjqBbc52W61oYOJcg/H06fpOY2pgI/WO6l2Nfot/o3ieBSkqPUD584CfZk6qqqgfFV3/1g9AyO04pBSG83P0fOVUTK5vznEY6urrZa1oprdW704UgY7jWCNNt9GZnch2TFq5wVHmddVg9gW8sszb02Bm3ENeX3IFK/2TttJZ3TUQjzJVdpw305IUHhRQxRwzpJ5SjIW0U2oSwZoISMLhkEwM3C/eHbzV15g8x8Njb4ry2TuzIKPs8KDjcM3OTOx3TgYp7YaqudeD4EQt7a9Z7HRz7jLmULBNtpCD8vovqGcZkbS5aVprhRaV99KvUffb7bQf2aJi5OXH+sTg5Ojtc0N+wQDe5a4z9DyQv0Ofi9BvlqHHqyKlNR0ILKljD/PTU7auLurhfzViHXccxNKuL994AHhmNC3A4r64eybOZA13+QIO/iaqqmiZngrJ56jEDVcfBSfZCCc92MGsQqADMHhFBP7mhsWv1334QWyO2mkN0jaSkzJ6NZ4IS8vpoqNY855Vm9ibelQj+N24y0YZ7au9fNz59cJ1uI3/Z72L0UEP2W1gdvsEYFhxJT3E7sX6t/CsUK5SpCDZ17f98LywqJraW00hRUVFxCQkZuYdZ9O7hIKY2ROegi7f7K65jEm8fO36WGah89ylfF6j07km5+Y4LqeMk3h73QGfubf+rrzoY/01PixxzucA0DJE1A4iARj/R1z1v6jGnAtXLylVXP2EcNfPF4KWtJVeg0r85RIZYHhQTZV/IZdLrdhjfjy0ZQ/3e1yWmlmPfLlr0k4io1BpR9hFERcXExSVlTa7korD09wuP6S8xXiMtvYJ9/LWSy0WWbV5xODi/mut9IDfu3ybJacKqVfLGVhF1neNUIvsfGDNQnZw1NKNmdnkLEKjvDAIVgNkjI5T8KH0TDVHTgvqGRi4N9Y31rQMoDJGCaiv2ltDQUTV4guaZeoJQ8QQSiUJjfgbSKGVBTip7xbebuCa1s4ppVCqNVTiNvolCZuKMDrLhaaSXYfutbY/eZf5JJvW8yA3Usbtbza5GLT23zMAnITu3jq+RDaMT9CxEY3pivbea2ulGcR120l1u1+6NtqH1RL7bvA3hSmc9wtxzuE+Gvt/U+eMmITUYnuV1qNWVCT73I2uZI4n0tMiz3BmUPkVihRUJg0k01Hcx93rMPznq99CoFMZ1oPziAr2zgUhPU8dzWrEj7HikkcbRT4wN73cj7AFT+gtSsaihrpamxibmNXx+x1h7xarTFlHxs/pa0Guz7KyJ5e34mnruN4L+TnT2Y5hj0C05l85quafFlbFL6kpuXLE3lT8WXszuoTLbgBC72luaOVX8jkgrrjvjkT7VzR53pQdq7GU7p7NnZ2b50khEIt+/mt9Fm0BKffScnNdd5B3yBbMGgQrA7NE/oVBdz0JDdCwaeLpm/YNZATYXHifk91MJqNFcOyv5nTuOhiRxf+Z2xyqr+YQWDjMW9sbUWCmcUVD3D8huZ46vjgzVpoUEpJWX867+1pJw18/o1KlTp7V8eWeA0JtRePewvaPiA84WPNL2TMXE7V4D68/xu/pmx7yzSnhWEUdh8q89fNlFjzYSrqXM6eypUxYzvx4hDm776sulO5yDG8l8v9XvuX9Sy+/ehTLerQhyxVh1q116CVc6jheE3tDdmtYwPbWqwm5P+Csa67YuIxhemJl42/onMqYtzRplAmmIDvfUV9e7dLd4oJ+/+N0M3PdSOr5ni88z1g3RgbQHZ49tW7giZvoSDJZZPCh+wT3Huj3xuvRnBzUuBXFN8Pp1+HJ3q7OGwRde8vXk451vlaNx9C8eVTF6p4PrZgb8+6KtNNfvkDp6u6KD+T2EPDlVejvoDuubE1uZ9Wa1tWKa0ZhG9vtHD9TH/mcMDm4NZdcYy4wzUvPI6ON0YWeJhjRcNvbw2njt7W5VAwhUAN4Cuv6k3Ipl01Yf3G0SU9+JoXcy2RWo9bVRtmclVnNqLBfZaELvY1GYfazBoqeywsLCy5avWLFiOaNURGTZxtVKQaklvL+OKb/uprFh8eLFwuJnuT+9u9K9jbZIrhJhWGZ4/34Fay4PJcbqgOSqXRL2yZmdBGSyve2hnua+VTONXLlns/Y9ynQLERqqKFiaUy66fYuGjJLxJuuweiI9hfGdWWnnJQ9IsxrHwqx3zM06qZvd8xmuKA85eXTLzHUQU7S0TWJ+J8DWdUabH9q2RkRk5Zp1eq7J7f0I0XOdhCzrQBvli2YfjJQxpOiS7UnZldLabqnt7J/lCA6tISrafvtaUfrpicgcPGMZ2Rzh7bhMevuBi7mv6BdirGTfepGlwqyTZ1i++fCJ4LKSwdn3lan4kpBgg/Uzl0lEXGSn08ygw3ip3Hqx6cJTVpY2TraHhCVWLmO96URclrfnmbXs68+0Ti/wWuEUf1i2JD513cOsJbJMdudhv5dc7/VvwyODSXctFJm7zrzZ4sq2DikjI/xz0cBvgUAF4C1QGqsK86cV1VZ38k3fpVKxPS2l03UK8itm5pEQMei66vLy0iJOcWFRcXVly9D4FO+vRqaG+jsaqqura+rauT/W8GOdTWWlpeVlpeUl+Y0DAxj2XhPdjVUlFcWtoyjGD3hoyER7S00RpwH0F6muaON9pB9htKykqLCIoaSq5PrhEzqyVqx7qFQ8arStqLKYuV8JvaklpawjVbe3jEzfGiZRx5rqKmauQ3FDVzer90mZxA81V5aVlFWUlpY0to/S+2LUjpLi8rKy0rLS4tJKxsDzLNHIyORgT1t9bX1n/wSBd1qqIFAxmP7aiuIC+ntUUtNCbz9mdKikpKyyaxxNbyRlqrmmtLSoYPocC8prG0cps28+A2lkrKN85hD5RQXV3GMXhKqymRdo7OntHx5orSgvLqxn9j9pVOzAQFtVIdf+ZW0jw79sAQ0zOVjLrFVQUFbbMDqre7xMVIQ4MtBczfhXWkh/f0orShjvaWF1S+soifS6nx+DXwOBCgBgsDp6apdCSPkQGfokALwdCFQAPlnotHu3boQxXfPdq+1r+aiONttxQgAAPwhUAD5Zk+Uv05+nMqVldIz9chgRAPAGIFABAAAAAYBABQAAAAQAAhUAAAAQAAhUAAAAQAAgUAEAAAABgEAF7wuNQsThJnHww3EAwMcBAhW8HzTiVOlNW9N9SpnDuNk/0wUAAOYsCFTwftBIuMoH7qbSwh55vR2Cf6AcAAD82SBQwfs0nuV+yDc1vpV/OwAAfHAgUMH7NJTmvMcjMRZWiwIAfPggUMH7NPDUeueFl2k8y3YCAMAHCQIVvE9juYHHnW4Ep7S290280bLTAAAw10Cggvdpqv2VlZ62hvaFwMjKVvgBDQDgQwaBCt6nwWTb3b7pz/r5twMAwAcHAhW8T0Mpjnu8Up508G8HAIAPDgQqeJ+Gn7vshVm+AICPAgQqeC+oNPJgd0l2lKOSdWJz2Th/MQAAfHAgUMF7QSRPZTzW3rfxJ+Hw5jEUTEcCAHz4IFDBe0GhkrqbXsRF34vtJlBo/KUAAPDhgUAFAAAABAACFQAAABAACFQAAABAACBQAQAAAAGAQAUAAAAEAAIVAAAAEAAI1I8ZAd1flxqZUTGK4S8BAAAgYBCoHzN0c37EGVl50+gcEkLiLwQAACBIEKgfMxJmtD0nXsdA71I1MgKJCgAAfyQI1I8dcUJfY9eJO93tE/wlAAAABAgC9WNHGNdV33nywUAPjr8EAACAAEGgfuwIaK2zO05GoYfggbkAAPBHgkD92FEIj/wNzqkamphGRBX38ZcCAAAQEAjUjx0R42iicPpydmZp78A4nr8UAACAgECgfuzwaM3T20/GYsf4CwAAAAgSBOrHjjCup75L5U5XG8zyBQCAPxIE6kePZK6968yDgXZ4WhIAAPyRIFA/YhMj9dE3VI8f1PGOHEImqfzFAAAABAgC9SM2PlRz75riEYeblW38RQAAAAQMAvUjRqNRiITJSQIZfoIKAAB/OAhUAAAAQAAgUAEAAAABgEAFAAAABAACFQAAABAACFQAAABAACBQ3xWVhMdOkkgU/u0AAAA+KRCo76rzxY2jRwJvFA7Ao/0AAOBTBoH6rnpePZJbKqsdllEIz/YDAIBPGASqACRbLtTzCQlvgOcnAADApwsCVQCeWi6SN3F1y4b7qAAA8OmCQBWAeP0v95h6+1bzbwcAAPDpgEAVgKwLO9Ut7Gzv1ja1DsOaLgAA8GmCQBWA8a7ySDvFvYuldxwJnuQvBAAA8EmAQBWABMOv95l6+VTwbwcAAPDpgEAVgESzn+RN3T3z+bcDAAD4dECgCkCy1aJDpm5uOTDLFwAAPl0QqALwynm+mtNF/zL4HSoAAHy6IFDfBT1BG/IDdUR+ULN7UtsFE3wBAOATBoH6jlADVS+jY2rqhvBk/iIAAACfEAhUAAAAQAAgUAEAAAABgEAFAAAABAACFQAAABAACFQAAABAACBQAQAAAAGY84GKbmqOsti+dsFyMXEZt5wXXfzlAAAAwFww5wOVRqEQp1CZvhHnj8hfynvawl8OAAAAzAVzPlBZ6sKTLqocuZr/tJm/BAAAAJgLPoxAJRcHRnkpKwTkJ0MPFQAAwJwEgQoAAAAIAAQqAAAAIAAQqAAAAIAAQKACAAAAAgCBCgAAAAgABCoAAAAgAB9GoCI1YYl+8DtUAAAAc9fcD1QajUrB519+6K548DI8KQkAAMAcNecDdbylLcHp0EZhcQlxadec55385QAAAMBcMOcDlUalkgk4HB5PIJEpNBp/MQAAADAnzPlABQAAAD4EEKgAAACAAECgAgAAAAIAgQoAAAAIAAQqAAAAIAAQqAAAAIAAsAOVgJ2YmMDhiPC7FAAAAOBtsAM1wf7U0WXCCsZXYoZ5ywEAAAAwC+xApWIHyv2kba3OOuWQeSsAAAAA4Pdx7qESUXUB6/R1FM7FjPGUAwAAAGAWOD1UTH/5xXUaGofPRg7xVgAAAADA7+ME6uRIwx1VO9MTGpez+9B4Em8lAAAAAPw2zpAvlYwfbX8VZqW+ZpVnSusgTx0AAAAA/A52oNKI2IH8m7c8ddTPWifXDE/wVgIAAADAb+MM+U70lniuPq12SCOJwFsBAAAAAL+P00PFDlT4r9PUVFCDSUkAAADAm5t+9CC+LUjWyuSYSfIUdzEAAAAAZoMVqPji+zd9lVdpWdgEN/FVAAAAAMDvYwXqkO3y1SI/7DzhkVJK4asAAAAAgN8Hq80AAAAAAgCBCgAAAAjA/wfEl5OJ+k/sMAAAAABJRU5ErkJggg==>