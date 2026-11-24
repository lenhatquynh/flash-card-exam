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
