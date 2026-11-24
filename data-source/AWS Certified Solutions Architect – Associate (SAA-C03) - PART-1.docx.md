**Question**  1

A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.

The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.

Which solution meets these requirements?

A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket. ✅

B. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.

C. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.

D. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.

---

**Question**  2

A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.

Which solution will meet these requirements?

A. Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.

B. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing. ✅

C. Use an API Gateway authorizer to block any requests while the application processes an order.

D. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.

---

**Question**  3

A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.

B. Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.

C. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3. ✅

D. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.

---

**Question**  4

A company currently stores 5 TB of data in on-premises block storage systems. The company's current storage solution provides limited space for additional data. The company runs applications on premises that must be able to retrieve frequently accessed data with low latency. The company requires a cloud-based storage solution.

Which solution will meet these requirements with the MOST operational efficiency?

A. Use Amazon S3 File Gateway. Integrate S3 File Gateway with the on-premises applications to store and directly retrieve files by using the SMB file system.

B. Use an AWS Storage Gateway Volume Gateway with cached volumes as iSCSI targets. ✅

C. Use an AWS Storage Gateway Volume Gateway with stored volumes as iSCSI targets.

D. Use an AWS Storage Gateway Tape Gateway. Integrate Tape Gateway with the on-premises applications to store virtual tapes in Amazon S3.

---

**Question**  5

A company operates a food delivery service. Because of recent growth, the company's order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes Amazon EC2 instances in an Auto Scaling group that collect orders from an application. A second group of EC2 instances in an Auto Scaling group fulfills the orders.

The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event.

A solutions architect must ensure that the order collection process and the order fulfillment process can both scale adequately during peak traffic hours.

Which solution will meet these requirements?

A. Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups. Configure each Auto Scaling group's minimum capacity to meet its peak workload value.

B. Use Amazon CloudWatch to monitor the CPUUtilization metric for each instance in both Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic to create additional Auto Scaling groups on demand.

C. Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues. Scale the Auto Scaling groups based on notifications that the queues send.

D. Provision two Amazon Simple Queue Service (Amazon SQS) queues. Use one SQS queue for order collection. Use the second SQS queue for order fulfillment. Configure the EC2 instances to poll their respective queues. Scale the Auto Scaling groups based on the number of messages in each queue. ✅

---

**Question**  6

An online gaming company is transitioning user data storage to Amazon DynamoDB to support the company's growing user base. The current architecture includes DynamoDB tables that contain user profiles, achievements, and in-game transactions.

The company needs to design a robust, continuously available, and resilient DynamoDB architecture to maintain a seamless gaming experience for users.

Which solution will meet these requirements MOST cost-effectively?

A. Create DynamoDB tables in a single AWS Region. Use on-demand capacity mode. Use global tables to replicate data across multiple Regions.

B. Use DynamoDB Accelerator (DAX) to cache frequently accessed data. Deploy tables in a single AWS Region and enable auto scaling. Configure Cross-Region Replication manually to additional Regions.

C. Create DynamoDB tables in multiple AWS Regions. Use on-demand capacity mode. Use DynamoDB Streams for Cross-Region Replication between Regions.

D. Use DynamoDB global tables for automatic multi-Region replication. Deploy tables in multiple AWS Regions. Use provisioned capacity mode. Enable auto scaling. ✅

---

**Question**  7

A company runs its media rendering application on premises. The company wants to reduce storage costs and has moved all data to Amazon S3. The on-premises rendering application needs low-latency access to storage.

The company needs to design a storage solution for the application. The storage solution must maintain the desired application performance.

Which storage solution will meet these requirements in the MOST cost-effective way?

A. Use Mountpoint for Amazon S3 to access the data in Amazon S3 for the on-premises application.

B. Configure an Amazon S3 File Gateway to provide storage for the on-premises application. ✅

C. Copy the data from Amazon S3 to Amazon FSx for Windows File Server. Configure an Amazon FSx File Gateway to provide storage for the on-premises application.

D. Configure an on-premises file server. Use the Amazon S3 API to connect to S3 storage. Configure the application to access the storage from the on-premises file server.

---

**Question**  8

A company hosts its enterprise resource planning (ERP) system in the us-east-1 Region. The system runs on Amazon EC2 instances. Customers use a public API that is hosted on the EC2 instances to exchange information with the ERP system. International customers report slow API response times from their data centers.

Which solution will improve response times for the international customers MOST cost-effectively?

A. Create an AWS Direct Connect connection that has a public virtual interface (VIF) to provide connectivity from each customer's data center to us-east-1. Route customer API requests by using a Direct Connect gateway to the ERP system API.

B. Set up an Amazon CloudFront distribution in front of the API. Configure the CachingOptimized managed cache policy to provide improved cache efficiency.

C. Set up AWS Global Accelerator. Configure listeners for the necessary ports. Configure endpoint groups for the appropriate Regions to distribute traffic. Create an endpoint in the group for the API. ✅

D. Use AWS Site-to-Site VPN to establish dedicated VPN tunnels between Regions and customer networks. Route traffic to the API over the VPN connections.

---

**Question**  9

A company tracks customer satisfaction by using surveys that the company hosts on its website. The surveys sometimes reach thousands of customers every hour. Survey results are currently sent in email messages to the company so company employees can manually review results and assess customer sentiment.

The company wants to automate the customer survey process. Survey results must be available for the previous 12 months.

Which solution will meet these requirements in the MOST scalable way?

A. Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Create an AWS Lambda function to poll the SQS queue, call Amazon Comprehend for sentiment analysis, and save the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future. ✅

B. Send the survey results data to an API that is running on an Amazon EC2 instance. Configure the API to store the survey results as a new record in an Amazon DynamoDB table, call Amazon Comprehend for sentiment analysis, and save the results in a second DynamoDB table. Set the TTL for all records to 365 days in the future.

C. Write the survey results data to an Amazon S3 bucket. Use S3 Event Notifications to invoke an AWS Lambda function to read the data and call Amazon Rekognition for sentiment analysis. Store the sentiment analysis results in a second S3 bucket. Use S3 lifecycle policies on each bucket to expire objects after 365 days.

D. Send the survey results data to an Amazon API Gateway endpoint that is connected to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the SQS queue to invoke an AWS Lambda function that calls Amazon Lex for sentiment analysis and saves the results to an Amazon DynamoDB table. Set the TTL for all records to 365 days in the future.

---

**Question**  10

A company uses AWS Systems Manager for routine management and patching of Amazon EC2 instances. The EC2 instances are in an IP address type target group behind an Application Load Balancer (ALB).

New security protocols require the company to remove EC2 instances from service during a patch. When the company attempts to follow the security protocol during the next patch, the company receives errors during the patching window.

Which combination of solutions will resolve the errors? (Choose two.)

A. Change the target type of the target group from IP address type to instance type. ✅

B. Continue to use the existing Systems Manager document without changes because it is already optimized to handle instances that are in an IP address type target group behind an ALB.

C. Implement the AWSEC2-PatchLoadBalanacerInstance Systems Manager Automation document to manage the patching process. ✅

D. Use Systems Manager Maintenance Windows to automatically remove the instances from service to patch the instances.

E. Configure Systems Manager State Manager to remove the instances from service and manage the patching schedule. Use ALB health checks to re-route traffic.

---

**Question**  11

A medical company wants to perform transformations on a large amount of clinical trial data that comes from several customers. The company must extract the data from a relational database that contains the customer data. Then the company will transform the data by using a series of complex rules. The company will load the data to Amazon S3 when the transformations are complete.

All data must be encrypted where it is processed before the company stores the data in Amazon S3. All data must be encrypted by using customer-specific keys.

Which solution will meet these requirements with the LEAST amount of operational effort?

A. Create one AWS Glue job for each customer. Attach a security configuration to each job that uses server-side encryption with Amazon S3 managed keys (SSE-S3) to encrypt the data.

B. Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses client-side encryption with a custom client-side root key (CSE-Custom) to encrypt the data.

C. Create one AWS Glue job for each customer. Attach a security configuration to each job that uses client-side encryption with AWS KMS managed keys (CSE-KMS) to encrypt the data. ✅

D. Create one Amazon EMR cluster for each customer. Attach a security configuration to each cluster that uses server-side encryption with AWS KMS keys (SSE-KMS) to encrypt the data.

---

**Question**  12

A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics application is highly resilient and is designed to run in stateless mode.

The company notices that the application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.

Which solution will meet these requirements MOST cost-effectively?

A. Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load across the two EC2 instances.

B. Create an Amazon Machine Image (AMI) of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.

C. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization is more than 75%.

D. Create an Amazon Machine Image (AMI) of the web application. Apply the AMI to a launch template. Create an Auto Scaling group that includes the launch template. Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group. ✅

---

**Question**  13

A company runs an environment where data is stored in an Amazon S3 bucket. The objects are accessed frequently throughout the day. The company has strict data encryption requirements for data that is stored in the S3 bucket. The company currently uses AWS Key Management Service (AWS KMS) for encryption.

The company wants to optimize costs associated with encrypting S3 objects without making additional calls to AWS KMS.

Which solution will meet these requirements?

A. Use server-side encryption with Amazon S3 managed keys (SSE-S3).

B. Use an S3 Bucket Key for server-side encryption with AWS KMS keys (SSE-KMS) on the new objects. ✅

C. Use client-side encryption with AWS KMS customer managed keys.

D. Use server-side encryption with customer-provided keys (SSE-C) stored in AWS KMS.

---

**Question**  14

A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.

What should the solutions architect do to enable Internet access for the private subnets?

A. Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ. ✅

B. Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.

C. Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.

D. Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.

---

**Question**  15

A company runs multiple workloads on virtual machines (VMs) in an on-premises data center. The company is expanding rapidly. The on-premises data center is not able to scale fast enough to meet business needs. The company wants to migrate the workloads to AWS.

The migration is time sensitive. The company wants to use a lift-and-shift strategy for non-critical workloads.

Which combination of steps will meet these requirements? (Choose three.)

A. Use the AWS Schema Conversion Tool (AWS SCT) to collect data about the VMs.

B. Use AWS Application Migration Service. Install the AWS Replication Agent on the VMs. ✅

C. Complete the initial replication of the VMs. Launch test instances to perform acceptance tests on the VMs. ✅

D. Stop all operations on the VMs. Launch a cutover instance. ✅

E. Use AWS App2Container (A2C) to collect data about the VMs.

F. Use AWS Database Migration Service (AWS DMS) to migrate the VMs.

---

**Question**  16

A company hosts an application in a private subnet. The company has already integrated the application with Amazon Cognito. The company uses an Amazon Cognito user pool to authenticate users.

The company needs to modify the application so the application can securely store user documents in an Amazon S3 bucket.

Which combination of steps will securely integrate Amazon S3 with the application? (Choose two.)

A. Create an Amazon Cognito identity pool to generate secure Amazon S3 access tokens for users when they successfully log in. ✅

B. Use the existing Amazon Cognito user pool to generate Amazon S3 access tokens for users when they successfully log in.

C. Create an Amazon S3 VPC endpoint in the same VPC where the company hosts the application. ✅

D. Create a NAT gateway in the VPC where the company hosts the application. Assign a policy to the S3 bucket to deny any request that is not initiated from Amazon Cognito.

E. Attach a policy to the S3 bucket that allows access only from the users' IP addresses.

---

**Question**  17

A company has a three-tier web application that processes orders from customers. The web tier consists of Amazon EC2 instances behind an Application Load Balancer. The processing tier consists of EC2 instances. The company decoupled the web tier and processing tier by using Amazon Simple Queue Service (Amazon SQS). The storage layer uses Amazon DynamoDB.

At peak times, some users report order processing delays and halls. The company has noticed that during these delays, the EC2 instances are running at 100% CPU usage, and the SQS queue fills up. The peak times are variable and unpredictable.

The company needs to improve the performance of the application.

Which solution will meet these requirements?

A. Use scheduled scaling for Amazon EC2 Auto Scaling to scale out the processing tier instances for the duration of peak usage times. Use the CPU Utilization metric to determine when to scale.

B. Use Amazon ElastiCache for Redis in front of the DynamoDB backend tier. Use target utilization as a metric to determine when to scale.

C. Add an Amazon CloudFront distribution to cache the responses for the web tier. Use HTTP latency as a metric to determine when to scale.

D. Use an Amazon EC2 Auto Scaling target tracking policy to scale out the processing tier instances. Use the ApproximateNumberOfMessages attribute to determine when to scale. ✅

---

**Question**  18

A company's production environment consists of Amazon EC2 On-Demand Instances that run constantly between Monday and Saturday. The instances must run for only 12 hours on Sunday and cannot tolerate interruptions. The company wants to cost-optimize the production environment.

Which solution will meet these requirements MOST cost-effectively?

A. Purchase Scheduled Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday. ✅

B. Purchase Convertible Reserved Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.

C. Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Standard Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.

D. Use Spot Instances for the EC2 instances that run for only 12 hours on Sunday. Purchase Convertible Reserved Instances for the EC2 instances that run constantly between Monday and Saturday.

---

**Question**  19

A digital image processing company wants to migrate its on-premises monolithic application to the AWS Cloud. The company processes thousands of images and generates large files as part of the processing workflow.

The company needs a solution to manage the growing number of image processing jobs. The solution must also reduce the manual tasks in the image processing workflow. The company does not want to manage the underlying infrastructure of the solution.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 Spot Instances to process the images. Configure Amazon Simple Queue Service (Amazon SQS) to orchestrate the workflow. Store the processed files in Amazon Elastic File System (Amazon EFS).

B. Use AWS Batch jobs to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon S3 bucket. ✅

C. Use AWS Lambda functions and Amazon EC2 Spot Instances to process the images. Store the processed files in Amazon FSx.

D. Deploy a group of Amazon EC2 instances to process the images. Use AWS Step Functions to orchestrate the workflow. Store the processed files in an Amazon Elastic Block Store (Amazon EBS) volume.

---

**Question**  20

A company's image-hosting website gives users around the world the ability to upload, view, and download images from their mobile devices. The company currently hosts the static website in an Amazon S3 bucket.

Because of the website's growing popularity, the website's performance has decreased. Users have reported latency issues when they upload and download images.

The company must improve the performance of the website.

Which solution will meet these requirements with the LEAST implementation effort?

A. Configure an Amazon CloudFront distribution for the S3 bucket to improve the download performance. Enable S3 Transfer Acceleration to improve the upload performance. ✅

B. Configure Amazon EC2 instances of the right sizes in multiple AWS Regions. Migrate the application to the EC2 instances. Use an Application Load Balancer to distribute the website traffic equally among the EC2 instances. Configure AWS Global Accelerator to address global demand with low latency.

C. Configure an Amazon CloudFront distribution that uses the S3 bucket as an origin to improve the download performance. Configure the application to use CloudFront to upload images to improve the upload performance. Create S3 buckets in multiple AWS Regions. Configure replication rules for the buckets to replicate users' data based on the users' location. Redirect downloads to the S3 bucket that is closest to each user's location.

D. Configure AWS Global Accelerator for the S3 bucket to improve network performance. Create an endpoint for the application to use Global Accelerator instead of the S3 bucket.

**Question**  21

A company runs an application in a private subnet behind an Application Load Balancer (ALB) in a VPC. The VPC has a NAT gateway and an internet gateway. The application calls the Amazon S3 API to store objects.

According to the company's security policy, traffic from the application must not travel across the internet.

Which solution will meet these requirements MOST cost-effectively?

A. Configure an S3 interface endpoint. Create a security group that allows outbound traffic to Amazon S3.

B. Configure an S3 gateway endpoint. Update the VPC route table to use the endpoint. ✅

C. Configure an S3 bucket policy to allow traffic from the Elastic IP address that is assigned to the NAT gateway.

D. Create a second NAT gateway in the same subnet where the legacy application is deployed. Update the VPC route table to use the second NAT gateway.

**Question**  22

A company has an application that runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2 instances. The application has a UI that uses Amazon DynamoDB and data services that use Amazon S3 as part of the application deployment.

The company must ensure that the EKS Pods for the UI can access only Amazon DynamoDB and that the EKS Pods for the data services can access only Amazon S3. The company uses AWS Identity and Access Management (IAM).

Which solution meals these requirements?

A. Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach both IAM policies to the EC2 instance profile. Use role-based access control (RBAC) to control access to Amazon S3 or DynamoDB for the respective EKS Pods.

B. Create separate IAM policies for Amazon S3 and DynamoDB access with the required permissions. Attach the Amazon S3 IAM policy directly to the EKS Pods for the data services and the DynamoDB policy to the EKS Pods for the UI.

C. Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Attach the AmazonS3FullAccess policy to the data services account and the AmazonDynamoDBFullAccess policy to the UI service account. ✅

D. Create separate Kubernetes service accounts for the UI and data services to assume an IAM role. Use IAM Role for Service Accounts (IRSA) to provide access to the EKS Pods for the UI to Amazon S3 and the EKS Pods for the data services to DynamoDB.

**Question**  23

A company needs to give a globally distributed development team secure access to the company's AWS resources in a way that complies with security policies.

The company currently uses an on-premises Active Directory for internal authentication. The company uses AWS Organizations to manage multiple AWS accounts that support multiple projects.

The company needs a solution to integrate with the existing infrastructure to provide centralized identity management and access control.

Which solution will meet these requirements with the LEAST operational overhead?

A. Set up AWS Directory Service to create an AWS managed Microsoft Active Directory on AWS. Establish a trust relationship with the on-premises Active Directory. Use IAM rotes that are assigned to Active Directory groups to access AWS resources within the company's AWS accounts.

B. Create an IAM user for each developer. Manually manage permissions for each IAM user based on each user's involvement with each project. Enforce multi-factor authentication (MFA) as an additional layer of security.

C. Use AD Connector in AWS Directory Service to connect to the on-premises Active Directory. Integrate AD Connector with AWS IAM Identity Center. Configure permissions sets to give each AD group access to specific AWS accounts and resources. ✅

D. Use Amazon Cognito to deploy an identity federation solution. Integrate the identity federation solution with the on-premises Active Directory. Use Amazon Cognito to provide access tokens for developers to access AWS accounts and resources.

**Question**  24

A company is developing an application in the AWS Cloud. The application's HTTP API contains critical information that is published in Amazon API Gateway. The critical information must be accessible from only a limited set of trusted IP addresses that belong to the company's internal network.

Which solution will meet these requirements?

A. Set up an API Gateway private integration to restrict access to a predefined set of IP addresses.

B. Create a resource policy for the API that denies access to any IP address that is not specifically allowed. ✅

C. Directly deploy the API in a private subnet. Create a network ACL. Set up rules to allow the traffic from specific IP addresses.

D. Modify the security group that is attached to API Gateway to allow inbound traffic from only the trusted IP addresses.

**Question**  25

A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.

Which combination of steps should a solutions architect take to automate this task? (Choose two.)

A. Launch the EC2 instance into the same Availability Zone as the EFS file system.

B. Install an AWS DataSync agent in the on-premises data center. ✅

C. Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.

D. Manually use an operating system copy command to push the data to the EC2 instance.

E. Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server. ✅

**Question**  26

A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.

What should the solutions architect do to prevent AWS Glue from reprocessing old data?

A. Edit the job to use job bookmarks. ✅

B. Edit the job to delete data after the data is processed.

C. Edit the job by setting the NumberOfWorkers field to 1\.

D. Use a FindMatches machine learning (ML) transform.

**Question**  27

A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website.

Which actions should the solutions architect take to protect the website from such an attack? (Choose two.)

A. Use AWS Shield Advanced to stop the DDoS attack. ✅

B. Configure Amazon GuardDuty to automatically block the attackers.

C. Configure the website to use Amazon CloudFront for both static and dynamic content. ✅

D. Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.

E. Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.

**Question**  28

A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.

Which solution meets these requirements?

A. Add an execution role to the function with lambda:InvokeFunction as the action and \* as the principal.

B. Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.

C. Add a resource-based policy to the function with lambda:\* as the action and Service: events.amazonaws.com as the principal.

D. Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal. ✅

**Question**  29

A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.

Which solution meets these requirements and is the MOST operationally efficient?

A. Server-side encryption with customer-provided keys (SSE-C)

B. Server-side encryption with Amazon S3 managed keys (SSE-S3)

C. Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation

D. Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation. ✅

**Question**  30

A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.

Which action meets these requirements for storing and retrieving location data?

A. Use Amazon Athena with Amazon S3.

B. Use Amazon API Gateway with AWS Lambda. ✅

C. Use Amazon QuickSight with Amazon Redshift.

D. Use Amazon API Gateway with Amazon Kinesis Data Analytics.

**Question**  31

A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.

Which design should a solutions architect recommend?

A. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.

B. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.

C. Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.

D. Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets. ✅

**Question**  32

A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability 10 delete the objects.

What should a solutions architect do to meet these requirements?

A. Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.

B. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.

C. Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.

D. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects. ✅

**Question**  33

A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.

What should a solutions architect do to accomplish this goal?

A. Use AWS Secrets Manager. Turn on automatic rotation. ✅

B. Use AWS Systems Manager Parameter Store. Turn on automatic rotation.

C. Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.

D. Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.

**Question**  34

A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website.

The company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads.

Which combination of actions should the solutions architect take to meet these requirements? (Choose two.)

A. Configure the application to upload images to S3 Glacier.

B. Configure the web server to upload the original images to Amazon S3.

C. Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL. ✅

D. Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image. ✅

E. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.

**Question**  35

A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.

Which architecture offers the HIGHEST availability?

A. Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.

B. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.

C. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.

D. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled. ✅

**Question**  36

A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests. ✅

B. Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.

C. Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.

D. Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.

**Question**  37

A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible.

The data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.

B. Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.

C. Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.

D. Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application. ✅

**Question**  38

A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata.

The application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.

Which solution meats these requirements?

A. Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.

B. Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.

C. Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata. ✅

D. Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.

**Question**  39

A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access.

A new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.

Which change to the network architecture should a solutions architect recommend to meet this requirement?

A. Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.

B. Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.

C. Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets. ✅

D. Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.

**Question**  40

A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants anew solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security.

Which combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Configure Amazon CloudFront in front of the website to use HTTPS functionality. ✅

B. Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.

C. Create and deploy an AWS Lambda function to manage and serve the website content.

D. Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled. ✅

E. Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.

**Question**  41

A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.

Which solution will meet this requirement with the LEAST operational overhead?

A. Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service). ✅

B. Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).

C. Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.

D. Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).

**Question**  42

A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.

Which storage solution meets these requirements MOST cost-effectively?

A. Amazon Elastic Block Store (Amazon EBS)

B. Amazon Elastic File System (Amazon EFS)

C. Amazon OpenSearch Service (Amazon Elasticsearch Service)

D. Amazon S3. ✅

**Question**  43

A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.

Which solution will meet these requirements with the LEAST amount of administrative effort?

A. Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.

B. Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules. ✅

C. Set up AWS Shield in bath Regions. Associate Regional web ACLs with an API stage.

D. Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.

**Question**  44

A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53\.

What should a solutions architect do to meet these requirements?

A. Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution. ✅

B. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.

C. Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.

D. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.

**Question**  45

A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.

Which solution can the company use to route traffic to all the EC2 instances?

A. Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.

B. Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups. ✅

C. Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.

D. Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.

**Question**  46

A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.

What should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?

A. Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot. ✅

B. Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.

C. Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore encrypted snapshot to an existing DB instance.

D. Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).

**Question**  47

A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.

What should a solutions architect do to reduce the operational burden?

A. Use multi-factor authentication (MFA) to protect the encryption keys.

B. Use AWS Key Management Service (AWS KMS) to protect the encryption keys. ✅

C. Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.

D. Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.

**Question**  48

A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination.

There has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.

What should a solutions architect do to increase the application's performance?

A. Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.

B. Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.

C. Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.

D. Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM. ✅

**Question**  49

A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.

What should the solutions architect recommend?

A. Implement EC2 Spot Instances. ✅

B. Purchase EC2 Reserved Instances.

C. Implement EC2 On-Demand Instances.

D. Implement the processing on AWS Lambda.

**Question**  50

A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available.

Which combination of configuration options will meet these requirements? (Choose two.)

A. Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets. ✅

B. Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.

C. Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.

D. Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet. D. Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.

**Question**  51

A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.

Which solution will meet these requirements?

A. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.

B. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years. ✅

C. Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.

D. Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.

**Question**  52

A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore.

Which set of services should a solutions architect recommend to meet these requirements?

A. Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage

B. Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage

C. Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage

D. Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage. ✅

**Question**  53

A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead.

What should a solutions architect do to meet these requirements?

A. Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers. ✅

B. Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.

C. Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.

D. Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.

**Question**  54

A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure.

Which combination of actions should the solutions architect take to accomplish this? (Choose two.)

A. Migrate the PostgreSQL database to Amazon Aurora. ✅

B. Migrate the web application to be hosted on Amazon EC2 instances.

C. Set up an Amazon CloudFront distribution for the web application content.

D. Set up Amazon ElastiCache between the web application and the PostgreSQL database.

E. Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS). ✅

**Question**  55

A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.

Which solution will meet these requirements with the LEAST operational overhead?

A. Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule. ✅

B. Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.

C. Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.

D. Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.

**Question**  56

An application runs on Amazon EC2 instances across multiple Availability Zonas. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.

What should a solutions architect do to maintain the desired performance across all instances in the group?

A. Use a simple scaling policy to dynamically scale the Auto Scaling group.  
B. Use a target tracking policy to dynamically scale the Auto Scaling group. ✅  
C. Use an AWS Lambda function ta update the desired Auto Scaling group capacity.  
D. Use scheduled scaling actions to scale up and scale down the Auto Scaling group.

---

**Question**  57

A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.

What should a solutions architect do to meet these requirements?

A. Write individual policies for each S3 bucket to grant read permission for only CloudFront access.  
B. Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.  
C. Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).  
D. Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission. ✅

---

**Question**  58

A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.

Which combination should a solutions architect recommend to meet these requirements?

A. Amazon CloudFront and Amazon S3 ✅  
B. AWS Lambda and Amazon DynamoDB  
C. Application Load Balancer with Amazon EC2 Auto Scaling  
D. Amazon Route 53 with internal Application Load Balancers

---

**Question**  59

A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system.

Which solution will meet these requirements?

A. Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.  
B. Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.  
C. Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region. ✅  
D. Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.

---

**Question**  60

A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.  
B. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.  
C. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data. ✅  
D. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.

---

**Question**  61

A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC.

Which solution will mast these requirements?

A. Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.  
B. Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.  
C. Create a NAT gateway in a public subnet of the company’s VPUpdate the route table to connect to the target service.  
D. Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service. ✅

---

**Question**  62

A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database.

Which combination of actions must a solutions architect take to meet these requirements? (Choose two.)

A. Create an ongoing replication task. ✅  
B. Create a database backup of the on-premises database.  
C. Create an AWS Database Migration Service (AWS DMS) replication server. ✅  
D. Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).  
E. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.

---

**Question**  63

A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.

Which solution will meet these requirements?

A. Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.  
B. Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically. ✅  
C. Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.  
D. Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.

---

**Question**  64

A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone.

The company needs to redesign its architecture to provide the highest availability with the least operational overhead.

What should a solutions architect do to meet these requirements?

A. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.  
B. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL. ✅  
C. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.  
D. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.

---

**Question**  65

A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket.

The reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.

What should a solutions architect do to meet these requirements with the LEAST operational overhead?

A. Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.  
B. Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.  
C. Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.  
D. Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule. ✅

---

**Question**  66

A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.

The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.

Which solution will meet these requirements?

A. Use Amazon Redshift with a single node for leader and compute functionality.  
B. Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.  
C. Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas. ✅  
D. Use Amazon ElastiCache for Memcached with EC2 Spot Instances.

---

**Question**  67

A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture.

The EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year.

Which combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)

A. Use Spot Instances for the data ingestion layer ✅  
B. Use On-Demand Instances for the data ingestion layer.  
C. Purchase a 1-year Compute Savings Plan for the front end and API layer. ✅  
D. Purchase 1-year All Upfront Reserved instances for the data ingestion layer.  
E. Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.

---

**Question**  68

A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.

How should a solutions architect design the application to ensure the LEAST amount of latency for all users?

A. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin. ✅  
B. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.  
C. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.  
D. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.

---

**Question**  69

A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.

What should a solutions architect do to meet these requirements?

A. Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.  
B. Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.  
C. Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group. ✅  
D. Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.

---

**Question**  70

A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.

Which solution will meet these requirements?

A. Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.  
B. Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.  
C. Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.  
D. Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target. ✅

---

**Question**  71

A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are spiking when monthly reports run.

What is the MOST cost-effective solution?

A. Migrate the monthly reporting to Amazon Redshift.  
B. Migrate the monthly reporting to an Aurora Replica. ✅  
C. Migrate the Aurora database to a larger instance class.  
D. Increase the Provisioned IOPS on the Aurora instance.

---

**Question**  72

A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.

Which solution will meet these requirements MOST cost-effectively?

A. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.  
B. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.  
C. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.  
D. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group. ✅

---

**Question**  73

A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends.

The company wants to minimize its EC2 costs without affecting the availability of the application.

Which solution will meet these requirements?

A. Use Spot Instances for the entire workload.  
B. Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs. ✅  
C. Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.  
D. Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.

---

**Question**  74

A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.

Which storage option meets these requirements MOST cost-effectively?

A. Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.  
B. Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive. ✅  
C. Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.  
D. Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.

---

**Question**  75

A company has a data ingestion workflow that includes the following components:

An Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries

An AWS Lambda function that processes and stores the data

The ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.

What should a solutions architect do to ensure that all notifications are eventually processed?

A. Configure the Lambda function for deployment across multiple Availability Zones.  
B. Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.  
C. Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries. ✅  
D. Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.

---

**Question**  76

A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.

How should a solutions architect accomplish this?

A. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue. ✅  
B. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.  
C. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.  
D. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.

---

**Question**  77

A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.

Which solution will meet these requirements?

A. Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.  
B. Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.  
C. Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC. ✅  
D. Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC.

---

**Question**  78

A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.

What should the solutions architect do to meet these requirements?

A. Create Amazon CloudWatch composite alarms where possible. ✅  
B. Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.  
C. Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.  
D. Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.

---

**Question**  79

A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet.

Which solutions will meet these requirements? (Choose two.)

A. Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3. ✅  
B. Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.  
C. Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3. ✅  
D. Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.  
E. Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.

---

**Question**  80

A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.

What should a solutions architect do to meet these requirements?

A. Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.  
B. Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.  
C. Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.  
D. Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules. ✅

---

**Question**  81

A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.

Which action should the company take to meet these requirements MOST cost-effectively?

A. Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.  
B. Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.  
C. Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.  
D. Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days. ✅

---

**Question**  82

A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.

Which solution will meet these requirements?

A. Use S3 Object Lock in governance mode with a legal hold of 1 year.  
B. Use S3 Object Lock in compliance mode with a retention period of 365 days. ✅  
C. Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.  
D. Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.

---

**Question**  83

A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.

Which solution will meet these requirements?

A. Use AWS DataSync to connect the S3 buckets to the web application.  
B. Deploy AWS Global Accelerator to connect the S3 buckets to the web application.  
C. Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers. ✅  
D. Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.

---

**Question**  84

A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).

Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs. ✅  
B. Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.  
C. Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.  
D. Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.  
E. Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format. ✅

---

**Question**  85

A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Take a manual snapshot of the DB cluster. ✅  
B. Create a lifecycle policy for the automated backups.  
C. Configure automated backup retention for 5 years.  
D. Configure an Amazon CloudWatch Logs export for the DB cluster. ✅  
E. Use AWS Backup to take the backups and to keep the backups for 5 years.

---

**Question**  86

A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.

Which service will improve the performance of both the real-time and on-demand streaming?

A. Amazon CloudFront ✅  
B. AWS Global Accelerator  
C. Amazon Route 53  
D. Amazon S3 Transfer Acceleration

---

**Question**  87

A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.

Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)

A. Create a usage plan with an API key that is shared with genuine users only. ✅  
B. Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.  
C. Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out. ✅  
D. Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.  
E. Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.

---

**Question**  88

A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.

Which solution will meet these requirements?

A. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.  
B. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups. ✅  
C. Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.  
D. Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

---

**Question**  89

An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.

Which solution meets these requirements MOST cost-effectively?

A. Amazon OpenSearch Service (Amazon Elasticsearch Service)  
B. Amazon S3 Glacier  
C. Amazon S3 Standard ✅  
D. Amazon RDS for PostgreSQL

---

**Question**  90

A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.

Which solution will meet these requirements?

A. Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.  
B. Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster. ✅  
C. Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.  
D. Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.

---

**Question**  91

A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.

The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.

Which combination of AWS services meets these requirements?

A. Amazon FSx for Lustre integrated with Amazon S3 ✅  
B. Amazon FSx for Windows File Server integrated with Amazon S3  
C. Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)  
D. Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume

---

**Question**  92

A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.

Which solution will meet these requirements?

A. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand. ✅  
B. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.  
C. Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.  
D. Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.

---

**Question**  93

A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.

Which solution meets these requirements and is the MOST operationally efficient?

A. Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.  
B. Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).  
C. Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process. ✅  
D. Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.

---

**Question**  94

A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.

How should the solutions architect comply with these requirements?

A. Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.  
B. Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.  
C. Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.  
D. Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution. ✅

---

**Question**  95

Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.

Which action should the solutions architect take to accomplish this?

A. Generate presigned URLs for the files.  
B. Use cross-Region replication to all Regions.  
C. Use the geoproximity feature of Amazon Route 53\.  
D. Use Amazon CloudFront with the S3 bucket as its origin. ✅

---

**Question**  96

A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.

Which solution meets these requirements MOST cost-effectively?

A. Use Spot Instances exclusively to handle the maximum capacity required.  
B. Use Reserved Instances exclusively to handle the maximum capacity required.  
C. Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity. ✅  
D. Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.

---

**Question**  97

A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.

What should a solutions architect do to accomplish this?

A. Create an ACL to provide access to the services or actions.  
B. Create a security group to allow accounts and attach it to user groups.  
C. Create cross-account roles in each account to deny access to the services or actions.  
D. Create a service control policy in the root organizational unit to deny access to the services or actions. ✅

---

**Question**  98

A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.

What should the solutions architect do to meet this requirement?

A. Add an Amazon Inspector agent to the ALB.  
B. Configure Amazon Macie to prevent attacks.  
C. Enable AWS Shield Advanced to prevent attacks. ✅  
D. Configure Amazon GuardDuty to monitor the ALB.

---

**Question**  99

A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.

What should the solutions architect do to meet this requirement?

A. Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances. ✅  
B. Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.  
C. Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.  
D. Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.

---

**Question**  100

A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.

Which configuration will meet this requirement?

A. Configure the security group for the EC2 instances.  
B. Configure the security group on the Application Load Balancer.  
C. Configure AWS WAF on the Application Load Balancer in a VPC. ✅  
D. Configure the network ACL for the subnet that contains the EC2 instances.

---

**Question**  101

A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.

What should the solutions architect do to accomplish this?

A. Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.  
B. Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations. ✅  
C. Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.  
D. Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.

---

**Question**  102

A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications.

Which action should the solutions architect take?

A. Configure a CloudFront signed URL.  
B. Configure a CloudFront signed cookie.  
C. Configure a CloudFront field-level encryption profile. ✅  
D. Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.

---

**Question**  103

A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.

The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.

Which solution meets these requirements MOST cost-effectively?

A. Deploy an AWS Global Accelerator accelerator in front of the web servers.  
B. Deploy an Amazon CloudFront web distribution in front of the S3 bucket. ✅  
C. Deploy an Amazon ElastiCache for Redis instance in front of the web servers.  
D. Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.

---

**Question**  104

A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.

Which architecture should the solutions architect choose that provides high availability?

A. Create an Auto Scaling group that uses three instances across each of two Regions.  
B. Modify the Auto Scaling group to use three instances across each of two Availability Zones. ✅  
C. Create an Auto Scaling template that can be used to quickly create more instances in another Region.  
D. Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.

---

**Question**  105

An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.

A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.

Which solution will meet these requirements?

A. Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.  
B. Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint. ✅  
C. Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.  
D. Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.

**Question**  81

A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.

Which action should the company take to meet these requirements MOST cost-effectively?

A. Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.

B. Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.

C. Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.

D. Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days. ✅

**Question**  82

A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.

Which solution will meet these requirements?

A. Use S3 Object Lock in governance mode with a legal hold of 1 year.

B. Use S3 Object Lock in compliance mode with a retention period of 365 days. ✅

C. Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.

D. Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.

**Question**  83

A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.

Which solution will meet these requirements?

A. Use AWS DataSync to connect the S3 buckets to the web application.

B. Deploy AWS Global Accelerator to connect the S3 buckets to the web application.

C. Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers. ✅

D. Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application.

**Question**  84

A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).

Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs. ✅

B. Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.

C. Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.

D. Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.

E. Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format. ✅

**Question**  85

A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Take a manual snapshot of the DB cluster. ✅

B. Create a lifecycle policy for the automated backups.

C. Configure automated backup retention for 5 years.

D. Configure an Amazon CloudWatch Logs export for the DB cluster. ✅

E. Use AWS Backup to take the backups and to keep the backups for 5 years.

**Question**  86

A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.

Which service will improve the performance of both the real-time and on-demand streaming?

A. Amazon CloudFront ✅

B. AWS Global Accelerator

C. Amazon Route 53

D. Amazon S3 Transfer Acceleration

**Question**  87

A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.

Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)

A. Create a usage plan with an API key that is shared with genuine users only. ✅

B. Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.

C. Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out. ✅

D. Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.

E. Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.

**Question**  88

A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.

Which solution will meet these requirements?

A. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.

B. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups. ✅

C. Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

D. Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

**Question**  89

An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.

Which solution meets these requirements MOST cost-effectively?

A. Amazon OpenSearch Service (Amazon Elasticsearch Service)

B. Amazon S3 Glacier

C. Amazon S3 Standard ✅

D. Amazon RDS for PostgreSQL

**Question**  90

A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.

Which solution will meet these requirements?

A. Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.

B. Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster. ✅

C. Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.

D. Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.

**Question**  91

A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.

The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.

Which combination of AWS services meets these requirements?

A. Amazon FSx for Lustre integrated with Amazon S3 ✅

B. Amazon FSx for Windows File Server integrated with Amazon S3

C. Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)

D. Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume

**Question**  92

A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.

Which solution will meet these requirements?

A. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand. ✅

B. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.

C. Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.

D. Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.

**Question**  93

A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.

Which solution meets these requirements and is the MOST operationally efficient?

A. Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.

B. Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).

C. Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process. ✅

D. Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.

**Question**  94

A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.

How should the solutions architect comply with these requirements?

A. Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.

B. Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.

C. Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.

D. Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution. ✅

**Question**  95

Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.

Which action should the solutions architect take to accomplish this?

A. Generate presigned URLs for the files.

B. Use cross-Region replication to all Regions.

C. Use the geoproximity feature of Amazon Route 53\.

D. Use Amazon CloudFront with the S3 bucket as its origin. ✅

**Question**  96

A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.

Which solution meets these requirements MOST cost-effectively?

A. Use Spot Instances exclusively to handle the maximum capacity required.

B. Use Reserved Instances exclusively to handle the maximum capacity required.

C. Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity. ✅

D. Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.

**Question**  97

A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.

What should a solutions architect do to accomplish this?

A. Create an ACL to provide access to the services or actions.

B. Create a security group to allow accounts and attach it to user groups.

C. Create cross-account roles in each account to deny access to the services or actions.

D. Create a service control policy in the root organizational unit to deny access to the services or actions. ✅

**Question**  98

A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.

What should the solutions architect do to meet this requirement?

A. Add an Amazon Inspector agent to the ALB.

B. Configure Amazon Macie to prevent attacks.

C. Enable AWS Shield Advanced to prevent attacks. ✅

D. Configure Amazon GuardDuty to monitor the ALB.

**Question**  99

A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.

What should the solutions architect do to meet this requirement?

A. Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances. ✅

B. Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.

C. Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.

D. Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.

**Question**  100

A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.

Which configuration will meet this requirement?

A. Configure the security group for the EC2 instances.

B. Configure the security group on the Application Load Balancer.

C. Configure AWS WAF on the Application Load Balancer in a VPC. ✅

D. Configure the network ACL for the subnet that contains the EC2 instances.

**Question**  101

A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.

What should the solutions architect do to accomplish this?

A. Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.

B. Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations. ✅

C. Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.

D. Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.

**Question**  102

A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications.

Which action should the solutions architect take?

A. Configure a CloudFront signed URL.

B. Configure a CloudFront signed cookie.

C. Configure a CloudFront field-level encryption profile. ✅

D. Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.

**Question**  103

A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.

The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.

Which solution meets these requirements MOST cost-effectively?

A. Deploy an AWS Global Accelerator accelerator in front of the web servers.

B. Deploy an Amazon CloudFront web distribution in front of the S3 bucket. ✅

C. Deploy an Amazon ElastiCache for Redis instance in front of the web servers.

D. Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.

**Question**  104

A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.

Which architecture should the solutions architect choose that provides high availability?

A. Create an Auto Scaling group that uses three instances across each of two Regions.

B. Modify the Auto Scaling group to use three instances across each of two Availability Zones. ✅

C. Create an Auto Scaling template that can be used to quickly create more instances in another Region.

D. Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.

**Question**  105

An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.

A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.

Which solution will meet these requirements?

A. Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.

B. Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint. ✅

C. Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.

D. Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.

**Question**  106

An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.

What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?

A. Use a VPC endpoint for DynamoDB. ✅  
B. Use a NAT gateway in a public subnet.  
C. Use a NAT instance in a private subnet.  
D. Use the internet gateway attached to the VPC.

**Question**  107

An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.

What should a solutions architect recommend to meet this requirement?

A. Use Amazon ElastiCache for Redis.  
B. Use Amazon DynamoDB Accelerator (DAX). ✅  
C. Replicate data by using DynamoDB global tables.  
D. Use Amazon ElastiCache for Memcached with Auto Discovery enabled.

**Question**  108

A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Backup to copy EC2 backups and RDS backups to the separate Region. ✅  
B. Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.  
C. Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.  
D. Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.

**Question**  109

A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.

What should the solutions architect do to meet this requirement?

A. Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance. ✅  
B. Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.  
C. Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.  
D. Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.

**Question**  110

An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.

A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.

Which combination of actions will meet these requirements? (Choose two.)

A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket. ✅  
B. Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue. ✅  
C. Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.  
D. Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.  
E. Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.

**Question**  111

A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.

Which combination of solutions provides the MOST protection? (Choose two.)

A. Use AWS WAF to protect the NLB.  
B. Use AWS Shield Advanced with the NLB. ✅  
C. Use AWS WAF to protect Amazon API Gateway. ✅  
D. Use Amazon GuardDuty with AWS Shield Standard  
E. Use AWS Shield Standard with Amazon API Gateway.

**Question**  112

A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.

The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).

What should a solutions architect recommend for communication between the microservices?

A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue. ✅  
B. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.  
C. Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.  
D. Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.

**Question**  113

A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.

Which solution meets these requirements?

A. Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.  
B. Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data. ✅  
C. Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.  
D. Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.

**Question**  114

A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.

Which solution will meet these requirements?

A. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content. ✅  
B. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.  
C. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.  
D. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.

**Question**  115

A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.

A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.

Which solution will meet these requirements?

A. Configure the Lambda function to run in the VPC with the appropriate security group. ✅  
B. Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.  
C. Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.  
D. Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.

**Question**  116

A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.

How can a solutions architect ensure that the application has permission to access Amazon S3?

A. Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.  
B. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition. ✅  
C. Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.  
D. Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.

**Question**  117

A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone:

What should a solutions architect do to meet this requirement?

A. Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.  
B. Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance. ✅  
C. Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.  
D. Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.

**Question**  118

A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible.

Which solutions meet these requirements? (Choose two.)

A. Create an Amazon RDS DB instance in Multi-AZ mode. ✅  
B. Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.  
C. Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.  
D. Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load. ✅  
E. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.

**Question**  119

A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.

Which solution will meet these requirements?

A. Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination. ✅  
B. Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.  
C. Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.  
D. Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.

**Question**  120

A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year.

Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)

A. Store the documents in Amazon S3. Use S3 Object Lock in governance mode.  
B. Store the documents in Amazon S3. Use S3 Object Lock in compliance mode. ✅  
C. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.  
D. Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation. ✅  
E. Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.

**Question**  121

A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.

A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.  
B. Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.  
C. Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.  
D. Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance. ✅

**Question**  122

A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.

Which solution will meet these requirements?

A. Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.  
B. Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing. ✅  
C. Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.  
D. Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.

**Question**  123

A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries.

What should a solutions architect do to meet these requirements?

A. Create a read replica. Move reporting queries to the read replica. ✅  
B. Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.  
C. Migrate the ordering application to Amazon DynamoDB with on-demand capacity.  
D. Schedule the reporting queries for non-peak hours.

**Question**  124

A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud.

A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency.

Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

A. Write the document information to an Amazon EC2 instance that runs a MySQL database.  
B. Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data. ✅  
C. Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.  
D. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.  
E. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text. ✅

**Question**  125

A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability.

What should the solutions architect do to meet this requirement?

A. Add Amazon RDS read replicas.  
B. Use Amazon ElastiCache for Redis. ✅  
C. Use Amazon Route 53 DNS caching  
D. Use Amazon ElastiCache for Memcached.

**Question**  126

A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs.

Which solution will meet these requirements?

A. Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication. ✅  
B. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.  
C. Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.  
D. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.

**Question**  127

A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs.

What should a solutions architect do to meet these requirements?

A. Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.  
B. Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.  
C. Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue. ✅  
D. Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.

**Question**  128

A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort.

Which solution meets these requirements?

A. Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.  
B. Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.  
C. Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.  
D. Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute. ✅

**Question**  129

A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available.

Which combination of actions should the company take to meet these requirements? (Choose two.)

A. Refactor the application as serverless with AWS Lambda functions running .NET Core.  
B. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment. ✅  
C. Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).  
D. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.  
E. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment. ✅

**Question**  130

A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead.

Which solution meets these requirements?

A. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.  
B. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage.  
C. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.  
D. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage. ✅

**Question**  131

A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes.

Which solution will meet these requirements?

A. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.

B. Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis. ✅

C. Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.

D. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.

---

**Question**  132

A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.

What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?

A. Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.

B. Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.

C. Use Amazon Athena directly with Amazon S3 to run the queries as needed. ✅

D. Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.

---

**Question**  133

A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.

A solutions architect needs to minimize the time that is required to clone the production data into the test environment.

Which solution will meet these requirements?

A. Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.

B. Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.

C. Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.

D. Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment. ✅

---

**Question**  134

A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts.

Which solution will meet these requirements with the LEAST operational overhead?

A. Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.

B. For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.

C. Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.

D. Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request. ✅

---

**Question**  135

A company is developing a marketing communications service that targets mobile app users. The company needs to send confirmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis.

What should a solutions architect do to meet these requirements?

A. Create an Amazon Connect contact flow to send the SMS messages. Use AWS Lambda to process the responses.

B. Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving. ✅

C. Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses.

D. Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving.

---

**Question**  136

A company is planning to move its data to an Amazon S3 bucket. The data must be encrypted when it is stored in the S3 bucket. Additionally, the encryption key must be automatically rotated every year.

Which solution will meet these requirements with the LEAST operational overhead?

A. Move the data to the S3 bucket. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use the built-in key rotation behavior of SSE-S3 encryption keys.

B. Create an AWS Key Management Service (AWS KMS) customer managed key. Enable automatic key rotation. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. ✅

C. Create an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior to use the customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.

D. Encrypt the data with customer key material before moving the data to the S3 bucket. Create an AWS Key Management Service (AWS KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.

---

**Question**  137

The customers of a finance company request appointments with financial advisors by sending text messages. A web application that runs on Amazon EC2 instances accepts the appointment requests. The text messages are published to an Amazon Simple Queue Service (Amazon SQS) queue through the web application. Another application that runs on EC2 instances then sends meeting invitations and meeting confirmation email messages to the customers. After successful scheduling, this application stores the meeting information in an Amazon DynamoDB database.

As the company expands, customers report that their meeting invitations are taking longer to arrive.

What should a solutions architect recommend to resolve this issue?

A. Add a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.

B. Add an Amazon API Gateway API in front of the web application that accepts the appointment requests.

C. Add an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.

D. Add an Auto Scaling group for the application that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of the SQS queue. ✅

---

**Question**  138

An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. The company collects purchase data for customers and stores this data in Amazon S3. Additional customer data is stored in Amazon RDS.

The company wants to make all the data available to various teams so that the teams can perform analytics. The solution must provide the ability to manage fine-grained permissions for the data and must minimize operational overhead.

Which solution will meet these requirements?

A. Migrate the purchase data to write directly to Amazon RDS. Use RDS access controls to limit access.

B. Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. Create an AWS Glue crawler. Use Amazon Athena to query the data. Use S3 policies to limit access.

C. Create a data lake by using AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake Formation. Use Lake Formation access controls to limit access. ✅

D. Create an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to Amazon Redshift. Use Amazon Redshift access controls to limit access.

---

**Question**  139

A company hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An administrator updates the website content infrequently and uses an SFTP client to upload new documents.

The company decides to host its website on AWS and to use Amazon CloudFront. The company’s solutions architect creates a CloudFront distribution. The solutions architect must design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin.

Which solution will meet these requirements?

A. Create a virtual server by using Amazon Lightsail. Configure the web server in the Lightsail instance. Upload website content by using an SFTP client.

B. Create an AWS Auto Scaling group for Amazon EC2 instances. Use an Application Load Balancer. Upload website content by using an SFTP client.

C. Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website content by using the AWS CLI. ✅

D. Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by using the SFTP client.

---

**Question**  140

A company wants to manage Amazon Machine Images (AMIs). The company currently copies AMIs to the same AWS Region where the AMIs were created. The company needs to design an application that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation is called within the company’s account.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call is detected.

B. Configure AWS CloudTrail with an Amazon Simple Notification Service (Amazon SNS) notification that occurs when updated logs are sent to Amazon S3. Use Amazon Athena to create a new table and to query on CreateImage when an API call is detected.

C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Configure the target as an Amazon Simple Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call is detected. ✅

D. Configure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. Create an AWS Lambda function to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic when a CreateImage API call is detected.

---

**Question**  141

A company owns an asynchronous API that is used to ingest user requests and, based on the request type, dispatch requests to the appropriate microservice for processing. The company is using Amazon API Gateway to deploy the API front end, and an AWS Lambda function that invokes Amazon DynamoDB to store user requests before dispatching them to the processing microservices.

The company provisioned as much DynamoDB throughput as its budget allows, but the company is still experiencing availability issues and is losing user requests.

What should a solutions architect do to address this issue without impacting existing users?

A. Add throttling on the API Gateway with server-side throttling limits.

B. Use DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.

C. Create a secondary index in DynamoDB for the table with the user requests.

D. Use the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. ✅

---

**Question**  142

A company needs to move data from an Amazon EC2 instance to an Amazon S3 bucket. The company must ensure that no API calls and no data are routed through public internet routes. Only the EC2 instance can have access to upload data to the S3 bucket.

Which solution will meet these requirements?

A. Create an interface VPC endpoint for Amazon S3 in the subnet where the EC2 instance is located. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

B. Create a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 instance is located. Attach appropriate security groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access. ✅

C. Run the nslookup tool from inside the EC2 instance to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

D. Use the AWS provided, publicly available ip-ranges.json file to obtain the private IP address of the S3 bucket’s service API endpoint. Create a route in the VPC route table to provide the EC2 instance with access to the S3 bucket. Attach a resource policy to the S3 bucket to only allow the EC2 instance’s IAM role for access.

---

**Question**  143

A solutions architect is designing the architecture of a new application being deployed to the AWS Cloud. The application will run on Amazon EC2 On-Demand Instances and will automatically scale across multiple Availability Zones. The EC2 instances will scale up and down frequently throughout the day. An Application Load Balancer (ALB) will handle the load distribution. The architecture needs to support distributed session data management. The company is willing to make changes to code if needed.

What should the solutions architect do to ensure that the architecture supports distributed session data management?

A. Use Amazon ElastiCache to manage and store session data. ✅

B. Use session affinity (sticky sessions) of the ALB to manage session data.

C. Use Session Manager from AWS Systems Manager to manage the session.

D. Use the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.

---

**Question**  144

An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.

B. Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.

C. Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.

D. Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB. ✅

---

**Question**  145

A company offers a food delivery service that is growing rapidly. Because of the growth, the company’s order processing system is experiencing scaling problems during peak traffic hours. The current architecture includes the following:

• A group of Amazon EC2 instances that run in an Amazon EC2 Auto Scaling group to collect orders from the application

• Another group of EC2 instances that run in an Amazon EC2 Auto Scaling group to fulfill orders

The order collection process occurs quickly, but the order fulfillment process can take longer. Data must not be lost because of a scaling event.

A solutions architect must ensure that the order collection process and the order fulfillment process can both scale properly during peak traffic hours. The solution must optimize utilization of the company’s AWS resources.

Which solution meets these requirements?

A. Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure each Auto Scaling group’s minimum capacity according to peak workload values.

B. Use Amazon CloudWatch metrics to monitor the CPU of each instance in the Auto Scaling groups. Configure a CloudWatch alarm to invoke an Amazon Simple Notification Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.

C. Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Scale the Auto Scaling groups based on notifications that the queues send.

D. Provision two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. Configure the EC2 instances to poll their respective queue. Create a metric based on a backlog per instance calculation. Scale the Auto Scaling groups based on this metric. ✅

---

**Question**  146

A company hosts multiple production applications. One of the applications consists of resources from Amazon EC2, AWS Lambda, Amazon RDS, Amazon Simple Notification Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All company resources are tagged with a tag name of “application” and a value that corresponds to each application. A solutions architect must provide the quickest solution for identifying all of the tagged components.

Which solution meets these requirements?

A. Use AWS CloudTrail to generate a list of resources with the application tag.

B. Use the AWS CLI to query each service across all Regions to report the tagged components.

C. Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.

D. Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag. ✅

**Question**  147

A company needs to export its database once a day to Amazon S3 for other teams to access. The exported object size varies between 2 GB and 5 GB. The S3 access pattern for the data is variable and changes rapidly. The data must be immediately available and must remain accessible for up to 3 months. The company needs the most cost-effective solution that will not increase retrieval time.

Which S3 storage class should the company use to meet these requirements?

A. S3 Intelligent-Tiering. ✅

B. S3 Glacier Instant Retrieval

C. S3 Standard

D. S3 Standard-Infrequent Access (S3 Standard-IA)

**Question**  148

A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment.

What should a solutions architect recommend to meet these requirements?

A. Configure AWS WAF rules and associate them with the ALB. ✅

B. Deploy the application using Amazon S3 with public hosting enabled.

C. Deploy AWS Shield Advanced and add the ALB as a protected resource.

D. Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party firewall, which then passes the traffic to the current ALB.

**Question**  149

A company’s reporting system delivers hundreds of .csv files to an Amazon S3 bucket each day. The company must convert these files to Apache Parquet format and must store the files in a transformed data bucket.

Which solution will meet these requirements with the LEAST development effort?

A. Create an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. Use EMR File System (EMRFS) to write files to the transformed data bucket.

B. Create an AWS Glue crawler to discover the data. Create an AWS Glue extract, transform, and load (ETL) job to transform the data. Specify the transformed data bucket in the output step. ✅

C. Use AWS Batch to create a job definition with Bash syntax to transform the data and output the data to the transformed data bucket. Use the job definition to submit a job. Specify an array job as the job type.

D. Create an AWS Lambda function to transform the data and output the data to the transformed data bucket. Configure an event notification for the S3 bucket. Specify the Lambda function as the destination for the event notification.

**Question**  150

A company has 700 TB of backup data stored in network attached storage (NAS) in its data center. This backup data need to be accessible for infrequent regulatory requests and must be retained 7 years. The company has decided to migrate this backup data from its data center to AWS. The migration must be complete within 1 month. The company has 500 Mbps of dedicated bandwidth on its public internet connection available for data transfer.

What should a solutions architect do to migrate and store the data at the LOWEST cost?

A. Order AWS Snowball devices to transfer the data. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive. ✅

B. Deploy a VPN connection between the data center and Amazon VPC. Use the AWS CLI to copy the data from on premises to Amazon S3 Glacier.

C. Provision a 500 Mbps AWS Direct Connect connection and transfer the data to Amazon S3. Use a lifecycle policy to transition the files to Amazon S3 Glacier Deep Archive.

D. Use AWS DataSync to transfer the data and deploy a DataSync agent on premises. Use the DataSync task to copy files from the on-premises NAS storage to Amazon S3 Glacier.

**Question**  151

A company has a serverless website with millions of objects in an Amazon S3 bucket. The company uses the S3 bucket as the origin for an Amazon CloudFront distribution. The company did not set encryption on the S3 bucket before the objects were loaded. A solutions architect needs to enable encryption for all existing objects and for all objects that are added to the S3 bucket in the future.

Which solution will meet these requirements with the LEAST amount of effort?

A. Create a new S3 bucket. Turn on the default encryption settings for the new S3 bucket. Download all existing objects to temporary local storage. Upload the objects to the new S3 bucket.

B. Turn on the default encryption settings for the S3 bucket. Use the S3 Inventory feature to create a .csv file that lists the unencrypted objects. Run an S3 Batch Operations job that uses the copy command to encrypt those objects. ✅

C. Create a new encryption key by using AWS Key Management Service (AWS KMS). Change the settings on the S3 bucket to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Turn on versioning for the S3 bucket.

D. Navigate to Amazon S3 in the AWS Management Console. Browse the S3 bucket’s objects. Sort by the encryption field. Select each unencrypted object. Use the Modify button to apply default encryption settings to every unencrypted object in the S3 bucket.

**Question**  152

A company runs a global web application on Amazon EC2 instances behind an Application Load Balancer. The application stores data in Amazon Aurora. The company needs to create a disaster recovery solution and can tolerate up to 30 minutes of downtime and potential data loss. The solution does not need to handle the load when the primary infrastructure is healthy.

What should a solutions architect do to meet these requirements?

A. Deploy the application with the required infrastructure elements in place. Use Amazon Route 53 to configure active-passive failover. Create an Aurora Replica in a second AWS Region. ✅

B. Host a scaled-down deployment of the application in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora Replica in the second Region.

C. Replicate the primary infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-active failover. Create an Aurora database that is restored from the latest snapshot.

D. Back up data with AWS Backup. Use the backup to create the required infrastructure in a second AWS Region. Use Amazon Route 53 to configure active-passive failover. Create an Aurora second primary instance in the second Region.

**Question**  153

A company has a web server running on an Amazon EC2 instance in a public subnet with an Elastic IP address. The default security group is assigned to the EC2 instance. The default network ACL has been modified to block all traffic. A solutions architect needs to make the web server accessible from everywhere on port 443\.

Which combination of steps will accomplish this task? (Choose two.)

A. Create a security group with a rule to allow TCP port 443 from source 0.0.0.0/0. ✅

B. Create a security group with a rule to allow TCP port 443 to destination 0.0.0.0/0.

C. Update the network ACL to allow TCP port 443 from source 0.0.0.0/0. ✅

D. Update the network ACL to allow inbound/outbound TCP port 443 from source 0.0.0.0/0 and to destination 0.0.0.0/0.

E. Update the network ACL to allow inbound TCP port 443 from source 0.0.0.0/0 and outbound TCP port 32768-65535 to destination 0.0.0.0/0.

**Question**  154

A company’s application is having performance issues. The application is stateful and needs to complete in-memory tasks on Amazon EC2 instances. The company used AWS CloudFormation to deploy infrastructure and used the M5 EC2 instance family. As traffic increased, the application performance degraded. Users are reporting delays when the users attempt to access the application.

Which solution will resolve these issues in the MOST operationally efficient way?

A. Replace the EC2 instances with T3 EC2 instances that run in an Auto Scaling group. Make the changes by using the AWS Management Console.

B. Modify the CloudFormation templates to run the EC2 instances in an Auto Scaling group. Increase the desired capacity and the maximum capacity of the Auto Scaling group manually when an increase is necessary.

C. Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Use Amazon CloudWatch built-in EC2 memory metrics to track the application performance for future capacity planning.

D. Modify the CloudFormation templates. Replace the EC2 instances with R5 EC2 instances. Deploy the Amazon CloudWatch agent on the EC2 instances to generate custom application latency metrics for future capacity planning. ✅

**Question**  155

A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.

Which storage option meets these requirements?

A. S3 Standard

B. S3 Intelligent-Tiering ✅

C. S3 Standard-Infrequent Access (S3 Standard-IA)

D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**Question**  156

A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made.

Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?

A. An AWS Glue job

B. An AWS Lambda function ✅

C. A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)

D. A containerized service hosted in Amazon ECS with Amazon EC2

**Question**  157

A company runs an application on a group of Amazon Linux EC2 instances. For compliance reasons, the company must retain all application log files for 7 years. The log files will be analyzed by a reporting tool that must be able to access all the files concurrently.

Which storage solution meets these requirements MOST cost-effectively?

A. Amazon Elastic Block Store (Amazon EBS)

B. Amazon Elastic File System (Amazon EFS)

C. Amazon EC2 instance store

D. Amazon S3 ✅

**Question**  158

A company has hired an external vendor to perform work in the company’s AWS account. The vendor uses an automated tool that is hosted in an AWS account that the vendor owns. The vendor does not have IAM access to the company’s AWS account.

How should a solutions architect grant this access to the vendor?

A. Create an IAM role in the company’s account to delegate access to the vendor’s IAM role. Attach the appropriate IAM policies to the role for the permissions that the vendor requires. ✅

B. Create an IAM user in the company’s account with a password that meets the password complexity requirements. Attach the appropriate IAM policies to the user for the permissions that the vendor requires.

C. Create an IAM group in the company’s account. Add the tool’s IAM user from the vendor account to the group. Attach the appropriate IAM policies to the group for the permissions that the vendor requires.

D. Create a new identity provider by choosing “AWS account” as the provider type in the IAM console. Supply the vendor’s AWS account ID and user name. Attach the appropriate IAM policies to the new provider for the permissions that the vendor requires.

**Question**  159

A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the internet.

Which combination of steps should the solutions architect take to accomplish this goal? (Choose two.)

A. Attach an IAM role that has sufficient privileges to the EKS pod. ✅

B. Attach an IAM user that has sufficient privileges to the EKS pod.

C. Allow outbound connectivity to the DynamoDB table through the private subnets’ network ACLs.

D. Create a VPC endpoint for DynamoDB. ✅

E. Embed the access keys in the Java Spring Boot code.

**Question**  160

A company recently migrated its web application to AWS by rehosting the application on Amazon EC2 instances in a single AWS Region. The company wants to redesign its application architecture to be highly available and fault tolerant. Traffic must reach all running EC2 instances randomly.

Which combination of steps should the company take to meet these requirements? (Choose two.)

A. Create an Amazon Route 53 failover routing policy.

B. Create an Amazon Route 53 weighted routing policy.

C. Create an Amazon Route 53 multivalue answer routing policy. ✅

D. Launch three EC2 instances: two instances in one Availability Zone and one instance in another Availability Zone.

E. Launch four EC2 instances: two instances in one Availability Zone and two instances in another Availability Zone. ✅

**Question**  161

A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL.

Which solution will meet these requirements with the LEAST operational overhead?

A. Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket. ✅

B. Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster.

C. Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket.

D. Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database.

**Question**  162

A company collects data from thousands of remote devices by using a RESTful web services application that runs on an Amazon EC2 instance. The EC2 instance receives the raw data, transforms the raw data, and stores all the data in an Amazon S3 bucket. The number of remote devices will increase into the millions soon. The company needs a highly scalable solution that minimizes operational overhead.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Use AWS Glue to process the raw data in Amazon S3. ✅

B. Use Amazon Route 53 to route traffic to different EC2 instances.

C. Add more EC2 instances to accommodate the increasing amount of incoming data.

D. Send the raw data to Amazon Simple Queue Service (Amazon SQS). Use EC2 instances to process the data.

E. Use Amazon API Gateway to send the raw data to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to use the data stream as a source to deliver the data to Amazon S3. ✅

**Question**  163

A company needs to retain its AWS CloudTrail logs for 3 years. The company is enforcing CloudTrail across a set of AWS accounts by using AWS Organizations from the parent account. The CloudTrail target S3 bucket is configured with S3 Versioning enabled. An S3 Lifecycle policy is in place to delete current objects after 3 years.

After the fourth year of use of the S3 bucket, the S3 bucket metrics show that the number of objects has continued to rise. However, the number of new CloudTrail logs that are delivered to the S3 bucket has remained consistent.

Which solution will delete objects that are older than 3 years in the MOST cost-effective manner?

A. Configure the organization’s centralized CloudTrail trail to expire objects after 3 years.

B. Configure the S3 Lifecycle policy to delete previous versions as well as current versions. ✅

C. Create an AWS Lambda function to enumerate and delete objects from Amazon S3 that are older than 3 years.

D. Configure the parent account as the owner of all objects that are delivered to the S3 bucket.

**Question**  164

A company has an API that receives real-time data from a fleet of monitoring devices. The API stores this data in an Amazon RDS DB instance for later analysis. The amount of data that the monitoring devices send to the API fluctuates. During periods of heavy traffic, the API often returns timeout errors.

After an inspection of the logs, the company determines that the database is not capable of processing the volume of write traffic that comes from the API. A solutions architect must minimize the number of connections to the database and must ensure that data is not lost during periods of heavy traffic.

Which solution will meet these requirements?

A. Increase the size of the DB instance to an instance type that has more available memory.

B. Modify the DB instance to be a Multi-AZ DB instance. Configure the application to write to all active RDS DB instances.

C. Modify the API to write incoming data to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function that Amazon SQS invokes to write data from the queue to the database. ✅

D. Modify the API to write incoming data to an Amazon Simple Notification Service (Amazon SNS) topic. Use an AWS Lambda function that Amazon SNS invokes to write data from the topic to the database.

**Question**  165

A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations.

Which solution meets these requirements?

A. Migrate the databases to Amazon Aurora Serverless for Aurora MySQL. ✅

B. Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL.

C. Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances.

D. Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment.

**Question**  171

A company is building a new web-based customer relationship management application. The application will use several Amazon EC2 instances that are backed by Amazon Elastic Block Store (Amazon EBS) volumes behind an Application Load Balancer (ALB). The application will also use an Amazon Aurora database. All data for the application must be encrypted at rest and in transit.

Which solution will meet these requirements?

A. Use AWS Key Management Service (AWS KMS) certificates on the ALB to encrypt data in transit. Use AWS Certificate Manager (ACM) to encrypt the EBS volumes and Aurora database storage at rest.

B. Use the AWS root account to log in to the AWS Management Console. Upload the company’s encryption certificates. While in the root account, select the option to turn on encryption for all data at rest and in transit for the account.

C. Use AWS Key Management Service (AWS KMS) to encrypt the EBS volumes and Aurora database storage at rest. Attach an AWS Certificate Manager (ACM) certificate to the ALB to encrypt data in transit. ✅

D. Use BitLocker to encrypt all data at rest. Import the company’s TLS certificate keys to AWS Key Management Service (AWS KMS) Attach the KMS keys to the ALB to encrypt data in transit.

**Question**  172

A company is moving its on-premises Oracle database to Amazon Aurora PostgreSQL. The database has several applications that write to the same tables. The applications need to be migrated one by one with a month in between each migration. Management has expressed concerns that the database has a high number of reads and writes. The data must be kept in sync across both databases throughout the migration.

What should a solutions architect recommend?

A. Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a change data capture (CDC) replication task and a table mapping to select all tables.

B. Use AWS DataSync for the initial migration. Use AWS Database Migration Service (AWS DMS) to create a full load plus change data capture (CDC) replication task and a table mapping to select all tables.

C. Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a memory optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select all tables. ✅

D. Use the AWS Schema Conversion Tool with AWS Database Migration Service (AWS DMS) using a compute optimized replication instance. Create a full load plus change data capture (CDC) replication task and a table mapping to select the largest tables.

**Question**  173

A company has a three-tier application for image sharing. The application uses an Amazon EC2 instance for the front-end layer, another EC2 instance for the application layer, and a third EC2 instance for a MySQL database. A solutions architect must design a scalable and highly available solution that requires the least amount of change to the application.

Which solution meets these requirements?

A. Use Amazon S3 to host the front-end layer. Use AWS Lambda functions for the application layer. Move the database to an Amazon DynamoDB table. Use Amazon S3 to store and serve users’ images.

B. Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS DB instance with multiple read replicas to serve users’ images.

C. Use Amazon S3 to host the front-end layer. Use a fleet of EC2 instances in an Auto Scaling group for the application layer. Move the database to a memory optimized instance type to store and serve users’ images.

D. Use load-balanced Multi-AZ AWS Elastic Beanstalk environments for the front-end layer and the application layer. Move the database to an Amazon RDS Multi-AZ DB instance. Use Amazon S3 to store and serve users’ images. ✅

**Question**  174

An application running on an Amazon EC2 instance in VPC-A needs to access files in another EC2 instance in VPC-B. Both VPCs are in separate AWS accounts. The network administrator needs to design a solution to configure secure access to EC2 instance in VPC-B from VPC-A. The connectivity should not have a single point of failure or bandwidth concerns.

Which solution will meet these requirements?

A. Set up a VPC peering connection between VPC-A and VPC-B. ✅

B. Set up VPC gateway endpoints for the EC2 instance running in VPC-B.

C. Attach a virtual private gateway to VPC-B and set up routing from VPC-A.

D. Create a private virtual interface (VIF) for the EC2 instance running in VPC-B and add appropriate routes from VPC-A.

**Question**  175

A company wants to experiment with individual AWS accounts for its engineer team. The company wants to be notified as soon as the Amazon EC2 instance usage for a given month exceeds a specific threshold for each account.

What should a solutions architect do to meet this requirement MOST cost-effectively?

A. Use Cost Explorer to create a daily report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.

B. Use Cost Explorer to create a monthly report of costs by service. Filter the report by EC2 instances. Configure Cost Explorer to send an Amazon Simple Email Service (Amazon SES) notification when a threshold is exceeded.

C. Use AWS Budgets to create a cost budget for each account. Set the period to monthly. Set the scope to EC2 instances. Set an alert threshold for the budget. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded. ✅

D. Use AWS Cost and Usage Reports to create a report with hourly granularity. Integrate the report data with Amazon Athena. Use Amazon EventBridge to schedule an Athena query. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive a notification when a threshold is exceeded.

**Question**  191

A solutions architect needs to design a system to store client case files. The files are core company assets and are important. The number of files will grow over time.

The files must be simultaneously accessible from multiple application servers that run on Amazon EC2 instances. The solution must have built-in redundancy.

Which solution meets these requirements?

A.Amazon Elastic File System (Amazon EFS) ✅

B.Amazon Elastic Block Store (Amazon EBS)

C.Amazon S3 Glacier Deep Archive

D.AWS Backup

**Question**  192

A solutions architect has created two IAM policies: Policy1 and Policy2. Both policies are attached to an IAM group.

![Question][image1]

![Question][image2]

A cloud engineer is added as an IAM user to the IAM group. Which action will the cloud engineer be able to perform?

1. Deleting IAM users

B. Deleting directories

C. Deleting Amazon EC2 instances

D. Deleting logs from Amazon CloudWatch Logs

**Question**  196

A company is building a solution that will report Amazon EC2 Auto Scaling events across all the applications in an AWS account. The company needs to use a serverless solution to store the EC2 Auto Scaling status data in Amazon S3. The company then will use the data in Amazon S3 to provide near-real-time updates in a dashboard. The solution must not affect the speed of EC2 instance launches.

How should the company move the data to Amazon S3 to meet these requirements?

A. Use an Amazon CloudWatch metric stream to send the EC2 Auto Scaling status data to Amazon Kinesis Data Firehose. Store the data in Amazon S3. ✅

B. Launch an Amazon EMR cluster to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.

C. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a schedule. Configure the Lambda function to send the EC2 Auto Scaling status data directly to Amazon S3.

D. Use a bootstrap script during the launch of an EC2 instance to install Amazon Kinesis Agent. Configure Kinesis Agent to collect the EC2 Auto Scaling status data and send the data to Amazon Kinesis Data Firehose. Store the data in Amazon S3.

---

**Question**  197

A company has an application that places hundreds of .csv files into an Amazon S3 bucket every hour. The files are 1 GB in size. Each time a file is uploaded, the company needs to convert the file to Apache Parquet format and place the output file into an S3 bucket.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Lambda function to download the .csv files, convert the files to Parquet format, and place the output files in an S3 bucket. Invoke the Lambda function for each S3 PUT event.

B. Create an Apache Spark job to read the .csv files, convert the files to Parquet format, and place the output files into an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the Spark job.

C. Create an AWS Glue table and an AWS Glue crawler for the S3 bucket where the application places the .csv files. Schedule an AWS Lambda function to periodically use Amazon Athena to query the AWS Glue table, convert the query results into Parquet format, and place the output files into an S3 bucket.

D. Create an AWS Glue extract, transform, and load (ETL) job to convert the .csv files to Parquet format and place the output files into an S3 bucket. Create an AWS Lambda function for each S3 PUT event to invoke the ETL job. ✅

---

**Question**  198

A company is implementing new data retention policies for all databases that run on Amazon RDS DB instances. The company must retain daily backups for a minimum period of 2 years. The backups must be consistent and restorable.

Which solution should a solutions architect recommend to meet these requirements?

A. Create a backup vault in AWS Backup to retain RDS backups. Create a new backup plan with a daily schedule and an expiration period of 2 years after creation. Assign the RDS DB instances to the backup plan. ✅

B. Configure a backup window for the RDS DB instances for daily snapshots. Assign a snapshot retention policy of 2 years to each RDS DB instance. Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule snapshot deletions.

C. Configure database transaction logs to be automatically backed up to Amazon CloudWatch Logs with an expiration period of 2 years.

D. Configure an AWS Database Migration Service (AWS DMS) replication task. Deploy a replication instance, and configure a change data capture (CDC) task to stream database changes to Amazon S3 as the target. Configure S3 Lifecycle policies to delete the snapshots after 2 years.

---

**Question**  199

A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.

What should a solutions architect do to accomplish this goal?

A. Turn on AWS Config with the appropriate rules. ✅

B. Turn on AWS Trusted Advisor with the appropriate checks.

C. Turn on Amazon Inspector with the appropriate assessment template.

D. Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).

---

**Question**  200

A company’s compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file share. A self-managed on-premises Active Directory controls access to the files and folders.

The company wants to use Amazon FSx for Windows File Server as part of the solution. The company must ensure that the on-premises Active Directory groups restrict access to the FSx for Windows File Server SMB compliance shares, folders, and files after the move to AWS. The company has created an FSx for Windows File Server file system.

Which solution will meet these requirements?

A. Create an Active Directory Connector to connect to the Active Directory. Map the Active Directory groups to IAM groups to restrict access.

B. Assign a tag with a Restrict tag key and a Compliance tag value. Map the Active Directory groups to IAM groups to restrict access.

C. Create an IAM service-linked role that is linked directly to FSx for Windows File Server to restrict access.

D. Join the file system to the Active Directory to restrict access. ✅

**Question**  201

a company recently announced the deployment of its retail website to a global audience. The website runs on multiple Amazon EC2 instances behind an Elastic Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones.

The company wants to provide its customers with different versions of content based on the devices that the customers use to access the website.

Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

A. Configure Amazon CloudFront to cache multiple versions of the content.

B. Configure a host header in a Network Load Balancer to forward traffic to different instances.

C. Configure a Lambda@Edge function to send specific objects to users based on the User-Agent header. ✅

D. Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up host-based routing to different EC2 instances.

E. Configure AWS Global Accelerator. Forward requests to a Network Load Balancer (NLB). Configure the NLB to set up path-based routing to different EC2 instances.

---

**Question**  202

A company plans to use Amazon ElastiCache for its multi-tier web application. A solutions architect creates a Cache VPC for the ElastiCache cluster and an App VPC for the application’s Amazon EC2 instances. Both VPCs are in the us-east-1 Region.

The solutions architect must implement a solution to provide the application’s EC2 instances with access to the ElastiCache cluster.

Which solution will meet these requirements MOST cost-effectively?

A. Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the ElastiCache cluster’s security group to allow inbound connection from the application’s security group. ✅

B. Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC. Configure an inbound rule for the ElastiCache cluster's security group to allow inbound connection from the application’s security group.

C. Create a peering connection between the VPCs. Add a route table entry for the peering connection in both VPCs. Configure an inbound rule for the peering connection’s security group to allow inbound connection from the application’s security group.

D. Create a Transit VPC. Update the VPC route tables in the Cache VPC and the App VPC to route traffic through the Transit VPC. Configure an inbound rule for the Transit VPC’s security group to allow inbound connection from the application’s security group.

---

**Question**  203

A company is building an application that consists of several microservices. The company has decided to use container technologies to deploy its software on AWS. The company needs a solution that minimizes the amount of ongoing effort for maintenance and scaling. The company cannot manage additional infrastructure.

Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)

A. Deploy an Amazon Elastic Container Service (Amazon ECS) cluster.

B. Deploy the Kubernetes control plane on Amazon EC2 instances that span multiple Availability Zones.

C. Deploy an Amazon Elastic Container Service (Amazon ECS) service with an Amazon EC2 launch type. Specify a desired task number level of greater than or equal to 2\.

D. Deploy an Amazon Elastic Container Service (Amazon ECS) service with a Fargate launch type. Specify a desired task number level of greater than or equal to 2\. ✅

E. Deploy Kubernetes worker nodes on Amazon EC2 instances that span multiple Availability Zones. Create a deployment that specifies two or more replicas for each microservice.

---

**Question**  204

A company has a web application hosted over 10 Amazon EC2 instances with traffic directed by Amazon Route 53\. The company occasionally experiences a timeout error when attempting to browse the application. The networking team finds that some DNS queries return IP addresses of unhealthy instances, resulting in the timeout error.

What should a solutions architect implement to overcome these timeout errors?

A. Create a Route 53 simple routing policy record for each EC2 instance. Associate a health check with each record.

B. Create a Route 53 failover routing policy record for each EC2 instance. Associate a health check with each record.

C. Create an Amazon CloudFront distribution with EC2 instances as its origin. Associate a health check with the EC2 instances.

D. Create an Application Load Balancer (ALB) with a health check in front of the EC2 instances. Route to the ALB from Route 53\. ✅

---

**Question**  205

A solutions architect needs to design a highly available application consisting of web, application, and database tiers. HTTPS content delivery should be as close to the edge as possible, with the least delivery time.

Which solution meets these requirements and is MOST secure?

A. Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin.

B. Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.

C. Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin. ✅

D. Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin.

---

**Question**  206

A company has a popular gaming platform running on AWS. The application is sensitive to latency because latency can impact the user experience and introduce unfair advantages to some players. The application is deployed in every AWS Region. It runs on Amazon EC2 instances that are part of Auto Scaling groups configured behind Application Load Balancers (ALBs). A solutions architect needs to implement a mechanism to monitor the health of the application and redirect traffic to healthy endpoints.

Which solution meets these requirements?

A. Configure an accelerator in AWS Global Accelerator. Add a listener for the port that the application listens on, and attach it to a Regional endpoint in each Region. Add the ALB as the endpoint. ✅

B. Create an Amazon CloudFront distribution and specify the ALB as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.

C. Create an Amazon CloudFront distribution and specify Amazon S3 as the origin server. Configure the cache behavior to use origin cache headers. Use AWS Lambda functions to optimize the traffic.

D. Configure an Amazon DynamoDB database to serve as the data store for the application. Create a DynamoDB Accelerator (DAX) cluster to act as the in-memory cache for DynamoDB hosting the application data.

---

**Question**  207

A company has one million users that use its mobile app. The company must analyze the data usage in near-real time. The company also must encrypt the data in near-real time and must store the data in a centralized location in Apache Parquet format for further processing.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data. Invoke an AWS Lambda function to send the data to the Kinesis Data Analytics application.

B. Create an Amazon Kinesis data stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data. Invoke an AWS Lambda function to send the data to the EMR cluster.

C. Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon EMR cluster to analyze the data.

D. Create an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Create an Amazon Kinesis Data Analytics application to analyze the data. ✅

---

**Question**  208

A gaming company has a web application that displays scores. The application runs on Amazon EC2 instances behind an Application Load Balancer. The application stores data in an Amazon RDS for MySQL database. Users are starting to experience long delays and interruptions that are caused by database read performance. The company wants to improve the user experience while minimizing changes to the application’s architecture.

What should a solutions architect do to meet these requirements?

A. Use Amazon ElastiCache in front of the database. ✅

B. Use RDS Proxy between the application and the database.

C. Migrate the application from EC2 instances to AWS Lambda.

D. Migrate the database from Amazon RDS for MySQL to Amazon DynamoDB.

---

**Question**  209

An ecommerce company has noticed performance degradation of its Amazon RDS based web application. The performance degradation is attributed to an increase in the number of read-only SQL queries triggered by business analysts. A solutions architect needs to solve the problem with minimal changes to the existing web application.

What should the solutions architect recommend?

A. Export the data to Amazon DynamoDB and have the business analysts run their queries.

B. Load the data into Amazon ElastiCache and have the business analysts run their queries.

C. Create a read replica of the primary database and have the business analysts run their queries.

D. Copy the data into an Amazon Redshift cluster and have the business analysts run their queries. ✅

---

**Question**  210

A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.

Which solution will meet these requirements?

A. Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager. ✅

B. Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.

C. Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.

D. Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.

---

**Question**  211

A company is using a centralized AWS account to store log data in various Amazon S3 buckets. A solutions architect needs to ensure that the data is encrypted at rest before the data is uploaded to the S3 buckets. The data also must be encrypted in transit.

Which solution meets these requirements?

A. Use client-side encryption to encrypt the data that is being uploaded to the S3 buckets. ✅

B. Use server-side encryption to encrypt the data that is being uploaded to the S3 buckets.

C. Create bucket policies that require the use of server-side encryption with S3 managed encryption keys (SSE-S3) for S3 uploads.

D. Enable the security option to encrypt the S3 buckets through the use of a default AWS Key Management Service (AWS KMS) key.

---

**Question**  212

A solutions architect observes that a nightly batch processing job is automatically scaled up for 1 hour before the desired Amazon EC2 capacity is reached. The peak capacity is the ‘same every night and the batch jobs always start at 1 AM. The solutions architect needs to find a cost-effective solution that will allow for the desired EC2 capacity to be reached quickly and allow the Auto Scaling group to scale down after the batch jobs are complete.

What should the solutions architect do to meet these requirements?

A. Increase the minimum capacity for the Auto Scaling group.

B. Increase the maximum capacity for the Auto Scaling group.

C. Configure scheduled scaling to scale up to the desired compute level. ✅

D. Change the scaling policy to add more EC2 instances during each scaling operation.

---

**Question**  213

A company serves a dynamic website from a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The website needs to support multiple languages to serve customers around the world. The website’s architecture is running in the us-west-1 Region and is exhibiting high request latency for users that are located in other parts of the world.

The website needs to serve requests quickly and efficiently regardless of a user’s location. However, the company does not want to recreate the existing architecture across multiple Regions.

What should a solutions architect do to meet these requirements?

A. Replace the existing architecture with a website that is served from an Amazon S3 bucket. Configure an Amazon CloudFront distribution with the S3 bucket as the origin. Set the cache behavior settings to cache based on the Accept-Language request header.

B. Configure an Amazon CloudFront distribution with the ALB as the origin. Set the cache behavior settings to cache based on the Accept-Language request header. ✅

C. Create an Amazon API Gateway API that is integrated with the ALB. Configure the API to use the HTTP integration type. Set up an API Gateway stage to enable the API cache based on the Accept-Language request header.

D. Launch an EC2 instance in each additional Region and configure NGINX to act as a cache server for that Region. Put all the EC2 instances and the ALB behind an Amazon Route 53 record set with a geolocation routing policy.

---

**Question**  214

A rapidly growing ecommerce company is running its workloads in a single AWS Region. A solutions architect must create a disaster recovery (DR) strategy that includes a different AWS Region. The company wants its database to be up to date in the DR Region with the least possible latency. The remaining infrastructure in the DR Region needs to run at reduced capacity and must be able to scale up if necessary.

Which solution will meet these requirements with the LOWEST recovery time objective (RTO)?

A. Use an Amazon Aurora global database with a pilot light deployment.

B. Use an Amazon Aurora global database with a warm standby deployment. ✅

C. Use an Amazon RDS Multi-AZ DB instance with a pilot light deployment.

D. Use an Amazon RDS Multi-AZ DB instance with a warm standby deployment.

---

**Question**  215

A company runs an application on Amazon EC2 instances. The company needs to implement a disaster recovery (DR) solution for the application. The DR solution needs to have a recovery time objective (RTO) of less than 4 hours. The DR solution also needs to use the fewest possible AWS resources during normal operations.

Which solution will meet these requirements in the MOST operationally efficient way?

A. Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS Lambda and custom scripts.

B. Create Amazon Machine Images (AMIs) to back up the EC2 instances. Copy the AMIs to a secondary AWS Region. Automate infrastructure deployment in the secondary Region by using AWS CloudFormation. ✅

C. Launch EC2 instances in a secondary AWS Region. Keep the EC2 instances in the secondary Region active at all times.

D. Launch EC2 instances in a secondary Availability Zone. Keep the EC2 instances in the secondary Availability Zone active at all times.

---

**Question**  216

A company runs an internal browser-based application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales up to 20 instances during work hours, but scales down to 2 instances overnight. Staff are complaining that the application is very slow when the day begins, although it runs well by mid-morning.

How should the scaling be changed to address the staff complaints and keep costs to a minimum?

A. Implement a scheduled action that sets the desired capacity to 20 shortly before the office opens. ✅

B. Implement a step scaling action triggered at a lower CPU threshold, and decrease the cooldown period.

C. Implement a target tracking action triggered at a lower CPU threshold, and decrease the cooldown period.

D. Implement a scheduled action that sets the minimum and maximum capacity to 20 shortly before the office opens.

---

**Question**  217

A company has a multi-tier application deployed on several Amazon EC2 instances in an Auto Scaling group. An Amazon RDS for Oracle instance is the application’ s data layer that uses Oracle-specific PL/SQL functions. Traffic to the application has been steadily increasing. This is causing the EC2 instances to become overloaded and the RDS instance to run out of storage. The Auto Scaling group does not have any scaling metrics and defines the minimum healthy instance count only. The company predicts that traffic will continue to increase at a steady but unpredictable rate before leveling off.

What should a solutions architect do to ensure the system can automatically scale for the increased traffic? (Choose two.)

A. Configure storage Auto Scaling on the RDS for Oracle instance. ✅

B. Migrate the database to Amazon Aurora to use Auto Scaling storage.

C. Configure an alarm on the RDS for Oracle instance for low free storage space.

D. Configure the Auto Scaling group to use the average CPU as the scaling metric. ✅

E. Configure the Auto Scaling group to use the average free memory as the scaling metric.

---

**Question**  218

A company provides an online service for posting video content and transcoding it for use by any mobile platform. The application architecture uses Amazon Elastic File System (Amazon EFS) Standard to collect and store the videos so that multiple Amazon EC2 Linux instances can access the video content for processing. As the popularity of the service has grown over time, the storage costs have become too expensive.

Which storage solution is MOST cost-effective?

A. Use AWS Storage Gateway for files to store and process the video content.

B. Use AWS Storage Gateway for volumes to store and process the video content.

C. Use Amazon EFS for storing the video content. Once processing is complete, transfer the files to Amazon Elastic Block Store (Amazon EBS).

D. Use Amazon S3 for storing the video content. Move the files temporarily over to an Amazon Elastic Block Store (Amazon EBS) volume attached to the server for processing. ✅

---

**Question**  219

A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum-latency response to high-traffic queries for the employee data and must protect any sensitive data. The company also needs to receive monthly email messages if any financial information is present in the employee data.

Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month.

B. Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month. ✅

C. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly events to AWS Lambda.

D. Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight to publish analysis dashboards and share the dashboards with users.

E. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription. ✅

---

**Question**  220

A company has an application that is backed by an Amazon DynamoDB table. The company’s compliance requirements specify that database backups must be taken every month, must be available for 6 months, and must be retained for 7 years.

Which solution will meet these requirements?

A. Create an AWS Backup plan to back up the DynamoDB table on the first day of each month. Specify a lifecycle policy that transitions the backup to cold storage after 6 months. Set the retention period for each backup to 7 years. ✅

B. Create a DynamoDB on-demand backup of the DynamoDB table on the first day of each month. Transition the backup to Amazon S3 Glacier Flexible Retrieval after 6 months. Create an S3 Lifecycle policy to delete backups that are older than 7 years.

C. Use the AWS SDK to develop a script that creates an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the script on the first day of each month. Create a second script that will run on the second day of each month to transition DynamoDB backups that are older than 6 months to cold storage and to delete backups that are older than 7 years.

D. Use the AWS CLI to create an on-demand backup of the DynamoDB table. Set up an Amazon EventBridge rule that runs the command on the first day of each month with a cron expression. Specify in the command to transition the backups to cold storage after 6 months and to delete the backups after 7 years.

---

**Question**  221

A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.

Which solution will meet these requirements?

A. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory. ✅

B. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.

C. Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.

D. Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.

---

**Question**  222

A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the company’s Amazon S3 buckets. The company needs to perform advanced analyses on the logs and build visualizations.

What should a solutions architect do to meet these requirements?

A. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.

B. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight. ✅

C. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.

D. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.

---

**Question**  223

A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases.

Which solution meets these requirements?

A. Enable a Multi-AZ deployment for the DB instance.

B. Enable auto scaling for the DB instance in one Availability Zone.

C. Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.

D. Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks. ✅

---

**Question**  224

A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC. An Application Load Balancer (ALB) that extends across the public subnets directs web traffic to the EC2 instances. The company wants to implement new security measures to restrict inbound traffic from the ALB to the EC2 instances while preventing access from any other source inside or outside the private subnet of the EC2 instances.

Which solution will meet these requirements?

A. Configure a route in a route table to direct traffic from the internet to the private IP addresses of the EC2 instances.

B. Configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB. ✅

C. Move the EC2 instances into the public subnet. Give the EC2 instances a set of Elastic IP addresses.

D. Configure the security group for the ALB to allow any TCP traffic on any port.

---

**Question**  225

A research company runs experiments that are powered by a simulation application and a visualization application. The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The visualization application is a Windows desktop application that displays the simulation output and requires an SMB file system.

The company maintains two synchronized file systems. This strategy is causing data duplication and inefficient resource usage. The company needs to migrate the applications to AWS without making code changes to either application.

Which solution will meet these requirements?

A. Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the applications.

B. Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File Gateway for storage.

C. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between the applications.

D. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage. ✅

**Question**  226

As part of budget planning, management wants a report of AWS billed items listed by user. The data will be used to create department budgets. A solutions architect needs to determine the most efficient way to obtain this report information.

Which solution meets these requirements?

A. Run a query with Amazon Athena to generate the report.  
B. Create a report in Cost Explorer and download the report. ✅  
C. Access the bill details from the billing dashboard and download the bill.  
D. Modify a cost budget in AWS Budgets to alert with Amazon Simple Email Service (Amazon SES).

**Question**  227

A company hosts its static website by using Amazon S3. The company wants to add a contact form to its webpage. The contact form will have dynamic server-side components for users to input their name, email address, phone number, and user message. The company anticipates that there will be fewer than 100 site visits each month.

Which solution will meet these requirements MOST cost-effectively?

A. Host a dynamic contact form page in Amazon Elastic Container Service (Amazon ECS). Set up Amazon Simple Email Service (Amazon SES) to connect to any third-party email provider.  
B. Create an Amazon API Gateway endpoint with an AWS Lambda backend that makes a call to Amazon Simple Email Service (Amazon SES). ✅  
C. Convert the static webpage to dynamic by deploying Amazon Lightsail. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.  
D. Create a t2.micro Amazon EC2 instance. Deploy a LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack to host the webpage. Use client-side scripting to build the contact form. Integrate the form with Amazon WorkMail.

**Question**  228

A company has a static website that is hosted on Amazon CloudFront in front of Amazon S3. The static website uses a database backend. The company notices that the website does not reflect updates that have been made in the website’s Git repository. The company checks the continuous integration and continuous delivery (CI/CD) pipeline between the Git repository and Amazon S3. The company verifies that the webhooks are configured properly and that the CI/CD pipeline is sending messages that indicate successful deployments.

A solutions architect needs to implement a solution that displays the updates on the website.

Which solution will meet these requirements?

A. Add an Application Load Balancer.  
B. Add Amazon ElastiCache for Redis or Memcached to the database layer of the web application.  
C. Invalidate the CloudFront cache. ✅  
D. Use AWS Certificate Manager (ACM) to validate the website’s SSL certificate.

**Question**  229

A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application has three tiers: an application tier, a business tier, and a database tier with Microsoft SQL Server. The company wants to use specific features of SQL Server such as native backups and Data Quality Services. The company also needs to share files for processing between the tiers.

How should a solutions architect design the architecture to meet these requirements?

A. Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing between the tiers.  
B. Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File Server for file sharing between the tiers. ✅  
C. Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers.  
D. Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for file sharing between the tiers.

**Question**  230

A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application.

What should a solutions architect do to meet these requirements?

A. Create an Amazon S3 Standard bucket with access to the web servers.  
B. Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin.  
C. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers. ✅  
D. Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers.

**Question**  231

A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.

Which solution will meet these requirements?

A. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.  
B. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory. ✅  
C. Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.  
D. Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.

**Question**  232

A company is using Amazon CloudFront with its website. The company has enabled logging on the CloudFront distribution, and logs are saved in one of the company’s Amazon S3 buckets. The company needs to perform advanced analyses on the logs and build visualizations.

What should a solutions architect do to meet these requirements?

A. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.  
B. Use standard SQL queries in Amazon Athena to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight. ✅  
C. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with AWS Glue.  
D. Use standard SQL queries in Amazon DynamoDB to analyze the CloudFront logs in the S3 bucket. Visualize the results with Amazon QuickSight.

**Question**  233

A company runs a fleet of web servers using an Amazon RDS for PostgreSQL DB instance. After a routine compliance check, the company sets a standard that requires a recovery point objective (RPO) of less than 1 second for all its production databases.

Which solution meets these requirements?

A. Enable a Multi-AZ deployment for the DB instance. ✅  
B. Enable auto scaling for the DB instance in one Availability Zone.  
C. Configure the DB instance in one Availability Zone, and create multiple read replicas in a separate Availability Zone.  
D. Configure the DB instance in one Availability Zone, and configure AWS Database Migration Service (AWS DMS) change data capture (CDC) tasks.

**Question**  234

A company runs a web application that is deployed on Amazon EC2 instances in the private subnet of a VPC. An Application Load Balancer (ALB) that extends across the public subnets directs web traffic to the EC2 instances. The company wants to implement new security measures to restrict inbound traffic from the ALB to the EC2 instances while preventing access from any other source inside or outside the private subnet of the EC2 instances.

Which solution will meet these requirements?

A. Configure a route in a route table to direct traffic from the internet to the private IP addresses of the EC2 instances.  
B. Configure the security group for the EC2 instances to only allow traffic that comes from the security group for the ALB. ✅  
C. Move the EC2 instances into the public subnet. Give the EC2 instances a set of Elastic IP addresses.  
D. Configure the security group for the ALB to allow any TCP traffic on any port.

**Question**  235

A research company runs experiments that are powered by a simulation application and a visualization application. The simulation application runs on Linux and outputs intermediate data to an NFS share every 5 minutes. The visualization application is a Windows desktop application that displays the simulation output and requires an SMB file system.

The company maintains two synchronized file systems. This strategy is causing data duplication and inefficient resource usage. The company needs to migrate the applications to AWS without making code changes to either application.

Which solution will meet these requirements?

A. Migrate both applications to AWS Lambda. Create an Amazon S3 bucket to exchange data between the applications.  
B. Migrate both applications to Amazon Elastic Container Service (Amazon ECS). Configure Amazon FSx File Gateway for storage.  
C. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon Simple Queue Service (Amazon SQS) to exchange data between the applications.  
D. Migrate the simulation application to Linux Amazon EC2 instances. Migrate the visualization application to Windows EC2 instances. Configure Amazon FSx for NetApp ONTAP for storage. ✅

**Question**  236

A company has an on-premises volume backup solution that has reached its end of life. The company wants to use AWS as part of a new backup solution and wants to maintain local access to all the data while it is backed up on AWS. The company wants to ensure that the data backed up on AWS is automatically and securely transferred.

Which solution meets these requirements?

A. Use AWS Snowball to migrate data out of the on-premises solution to Amazon S3. Configure on-premises systems to mount the Snowball S3 endpoint to provide local access to the data.  
B. Use AWS Snowball Edge to migrate data out of the on-premises solution to Amazon S3. Use the Snowball Edge file interface to provide on-premises systems with local access to the data.  
C. Use AWS Storage Gateway and configure a cached volume gateway. Run the Storage Gateway software appliance on premises and configure a percentage of data to cache locally. Mount the gateway storage volumes to provide local access to the data.  
D. Use AWS Storage Gateway and configure a stored volume gateway. Run the Storage Gateway software appliance on premises and map the gateway storage volumes to on-premises storage. Mount the gateway storage volumes to provide local access to the data. ✅

**Question**  237

An application that is hosted on Amazon EC2 instances needs to access an Amazon S3 bucket. Traffic must not traverse the internet.

How should a solutions architect configure access to meet these requirements?

A. Create a private hosted zone by using Amazon Route 53\.  
B. Set up a gateway VPC endpoint for Amazon S3 in the VPC. ✅  
C. Configure the EC2 instances to use a NAT gateway to access the S3 bucket.  
D. Establish an AWS Site-to-Site VPN connection between the VPC and the S3 bucket.

**Question**  238

An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally identifiable information (PII). The company wants to use the data in three applications. Only one of the applications needs to process the PII. The PII must be removed before the other two applications process the data.

Which solution will meet these requirements with the LEAST operational overhead?

A. Store the data in an Amazon DynamoDB table. Create a proxy application layer to intercept and process the data that each application requests.  
B. Store the data in an Amazon S3 bucket. Process and transform the data by using S3 Object Lambda before returning the data to the requesting application. ✅  
C. Process the data and store the transformed data in three separate Amazon S3 buckets so that each application has its own custom dataset. Point each application to its respective S3 bucket.  
D. Process the data and store the transformed data in three separate Amazon DynamoDB tables so that each application has its own custom dataset. Point each application to its respective DynamoDB table.

**Question**  239

A development team has launched a new application that is hosted on Amazon EC2 instances inside a development VPC. A solutions architect needs to create a new VPC in the same account. The new VPC will be peered with the development VPC. The VPC CIDR block for the development VPC is 192.168.0.0/24. The solutions architect needs to create a CIDR block for the new VPC. The CIDR block must be valid for a VPC peering connection to the development VPC.

What is the SMALLEST CIDR block that meets these requirements?

A. 10.0.1.0/32  
B. 192.168.0.0/24  
C. 192.168.1.0/32  
D. 10.0.1.0/24 ✅

**Question**  240

A company deploys an application on five Amazon EC2 instances. An Application Load Balancer (ALB) distributes traffic to the instances by using a target group. The average CPU usage on each of the instances is below 10% most of the time, with occasional surges to 65%.

A solutions architect needs to implement a solution to automate the scalability of the application. The solution must optimize the cost of the architecture and must ensure that the application has enough CPU resources when surges occur.

Which solution will meet these requirements?

A. Create an Amazon CloudWatch alarm that enters the ALARM state when the CPUUtilization metric is less than 20%. Create an AWS Lambda function that the CloudWatch alarm invokes to terminate one of the EC2 instances in the ALB target group.  
B. Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set a target tracking scaling policy that is based on the ASGAverageCPUUtilization metric. Set the minimum instances to 2, the desired capacity to 3, the maximum instances to 6, and the target value to 50%. Add the EC2 instances to the Auto Scaling group. ✅  
C. Create an EC2 Auto Scaling group. Select the existing ALB as the load balancer and the existing target group as the target group. Set the minimum instances to 2, the desired capacity to 3, and the maximum instances to 6\. Add the EC2 instances to the Auto Scaling group.  
D. Create two Amazon CloudWatch alarms. Configure the first CloudWatch alarm to enter the ALARM state when the average CPUUtilization metric is below 20%. Configure the second CloudWatch alarm to enter the ALARM state when the average CPUUtilization matric is above 50%. Configure the alarms to publish to an Amazon Simple Notification Service (Amazon SNS) topic to send an email message. After receiving the message, log in to decrease or increase the number of EC2 instances that are running.

**Question**  246

A university research laboratory needs to migrate 30 TB of data from an on-premises Windows file server to Amazon FSx for Windows File Server. The laboratory has a 1 Gbps network link that many other departments in the university share.

The laboratory wants to implement a data migration service that will maximize the performance of the data transfer. However, the laboratory needs to be able to control the amount of bandwidth that the service uses to minimize the impact on other departments. The data migration must take place within the next 5 days.

Which AWS solution will meet these requirements?

A. AWS Snowcone  
B. Amazon FSx File Gateway  
C. AWS DataSync ✅  
D. AWS Transfer Family

**Question**  247

A company wants to create a mobile app that allows users to stream slow-motion video clips on their mobile devices. Currently, the app captures video clips and uploads the video clips in raw format into an Amazon S3 bucket. The app retrieves these video clips directly from the S3 bucket. However, the videos are large in their raw format.

Users are experiencing issues with buffering and playback on mobile devices. The company wants to implement solutions to maximize the performance and scalability of the app while minimizing operational overhead.

Which combination of solutions will meet these requirements? (Choose two.)

A. Deploy Amazon CloudFront for content delivery and caching. ✅  
B. Use AWS DataSync to replicate the video files across AW'S Regions in other S3 buckets.  
C. Use Amazon Elastic Transcoder to convert the video files to more appropriate formats. ✅  
D. Deploy an Auto Sealing group of Amazon EC2 instances in Local Zones for content delivery and caching.  
E. Deploy an Auto Scaling group of Amazon EC2 instances to convert the video files to more appropriate formats.

**Question**  248

A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster and is using the Fargate launch type for ECS tasks. The company is monitoring CPU and memory usage because it is expecting high traffic to the application upon its launch. However, the company wants to reduce costs when utilization decreases.

What should a solutions architect recommend?

A. Use Amazon EC2 Auto Scaling to scale at certain periods based on previous traffic patterns.  
B. Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger an Amazon CloudWatch alarm.  
C. Use Amazon EC2 Auto Scaling with simple scaling policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm.  
D. Use AWS Application Auto Scaling with target tracking policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm. ✅

**Question**  249

A company recently created a disaster recovery site in a different AWS Region. The company needs to transfer large amounts of data back and forth between NFS file systems in the two Regions on a periodic basis.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS DataSync. ✅  
B. Use AWS Snowball devices.  
C. Set up an SFTP server on Amazon EC2.  
D. Use AWS Database Migration Service (AWS DMS).

**Question**  250

A company is designing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed.

Which AWS solution meets these requirements?

A. Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server.  
B. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.  
C. Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the file system. ✅  
D. Create an Amazon S3 bucket. Assign an IAM role to the application to grant access to the S3 bucket. Mount the S3 bucket to the application server.

**Question**  251

A company wants to run an in-memory database for a latency-sensitive application that runs on Amazon EC2 instances. The application processes more than 100,000 transactions each minute and requires high network throughput. A solutions architect needs to provide a cost-effective network design that minimizes data transfer charges.

Which solution meets these requirements?

A. Launch all EC2 instances in the same Availability Zone within the same AWS Region. Specify a placement group with cluster strategy when launching EC2 instances. ✅  
B. Launch all EC2 instances in different Availability Zones within the same AWS Region. Specify a placement group with partition strategy when launching EC2 instances.  
C. Deploy an Auto Scaling group to launch EC2 instances in different Availability Zones based on a network utilization target.  
D. Deploy an Auto Scaling group with a step scaling policy to launch EC2 instances in different Availability Zones.

**Question**  252

A company that primarily runs its application servers on premises has decided to migrate to AWS. The company wants to minimize its need to scale its Internet Small Computer Systems Interface (iSCSI) storage on premises. The company wants only its recently accessed data to remain stored locally.

Which AWS solution should the company use to meet these requirements?

A. Amazon S3 File Gateway  
B. AWS Storage Gateway Tape Gateway  
C. AWS Storage Gateway Volume Gateway stored volumes  
D. AWS Storage Gateway Volume Gateway cached volumes ✅

**Question**  253

A company has multiple AWS accounts that use consolidated billing. The company runs several active high performance Amazon RDS for Oracle On-Demand DB instances for 90 days. The company’s finance team has access to AWS Trusted Advisor in the consolidated billing account and all other AWS accounts.

The finance team needs to use the appropriate AWS account to access the Trusted Advisor check recommendations for RDS. The finance team must review the appropriate Trusted Advisor check to reduce RDS costs.

Which combination of steps should the finance team take to meet these requirements? (Choose two.)

A. Use the Trusted Advisor recommendations from the account where the RDS instances are running. ✅  
B. Use the Trusted Advisor recommendations from the consolidated billing account to see all RDS instance checks at the same time.  
C. Review the Trusted Advisor check for Amazon RDS Reserved Instance Optimization. ✅  
D. Review the Trusted Advisor check for Amazon RDS Idle DB Instances.  
E. Review the Trusted Advisor check for Amazon Redshift Reserved Node Optimization.

**Question**  254

A solutions architect needs to optimize storage costs. The solutions architect must identify any Amazon S3 buckets that are no longer being accessed or are rarely accessed.

Which solution will accomplish this goal with the LEAST operational overhead?

A. Analyze bucket access patterns by using the S3 Storage Lens dashboard for advanced activity metrics. ✅  
B. Analyze bucket access patterns by using the S3 dashboard in the AWS Management Console.  
C. Turn on the Amazon CloudWatch BucketSizeBytes metric for buckets. Analyze bucket access patterns by using the metrics data with Amazon Athena.  
D. Turn on AWS CloudTrail for S3 object monitoring. Analyze bucket access patterns by using CloudTrail logs that are integrated with Amazon CloudWatch Logs.

**Question**  255

A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift clusters are configured with tags. The company wants to minimize the effort of configuring and operating this check.

What should a solutions architect do to accomplish this?

A. Use AWS Config rules to define and detect resources that are not properly tagged. ✅  
B. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.  
C. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.  
D. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.

**Question**  256

A company sells datasets to customers who do research in artificial intelligence and machine learning (AI/ML). The datasets are large, formatted files that are stored in an Amazon S3 bucket in the us-east-1 Region. The company hosts a web application that the customers use to purchase access to a given dataset. The web application is deployed on multiple Amazon EC2 instances behind an Application Load Balancer. After a purchase is made, customers receive an S3 signed URL that allows access to the files.

The customers are distributed across North America and Europe. The company wants to reduce the cost that is associated with data transfers and wants to maintain or improve performance.

What should a solutions architect do to meet these requirements?

A. Configure S3 Transfer Acceleration on the existing S3 bucket. Direct customer requests to the S3 Transfer Acceleration endpoint. Continue to use S3 signed URLs for access control.

B. Deploy an Amazon CloudFront distribution with the existing S3 bucket as the origin. Direct customer requests to the CloudFront URL. Switch to CloudFront signed URLs for access control. ✅

C. Set up a second S3 bucket in the eu-central-1 Region with S3 Cross-Region Replication between the buckets. Direct customer requests to the closest Region. Continue to use S3 signed URLs for access control.

D. Modify the web application to enable streaming of the datasets to end users. Configure the web application to read the data from the existing S3 bucket. Implement access control directly in the application.

---

**Question**  257

A company is using AWS to design a web application that will process insurance quotes. Users will request quotes from the application. Quotes must be separated by quote type, must be responded to within 24 hours, and must not get lost. The solution must maximize operational efficiency and must minimize maintenance.

Which solution meets these requirements?

A. Create multiple Amazon Kinesis data streams based on the quote type. Configure the web application to send messages to the proper data stream. Configure each backend group of application servers to use the Kinesis Client Library (KCL) to pool messages from its own data stream.

B. Create an AWS Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic for each quote type. Subscribe the Lambda function to its associated SNS topic. Configure the application to publish requests for quotes to the appropriate SNS topic.

C. Create a single Amazon Simple Notification Service (Amazon SNS) topic. Subscribe Amazon Simple Queue Service (Amazon SQS) queues to the SNS topic. Configure SNS message filtering to publish messages to the proper SQS queue based on the quote type. Configure each backend application server to use its own SQS queue. ✅

D. Create multiple Amazon Kinesis Data Firehose delivery streams based on the quote type to deliver data streams to an Amazon OpenSearch Service cluster. Configure the application to send messages to the proper delivery stream. Configure each backend group of application servers to search for the messages from OpenSearch Service and process them accordingly.

---

**Question**  258

A company has an application that runs on several Amazon EC2 instances. Each EC2 instance has multiple Amazon Elastic Block Store (Amazon EBS) data volumes attached to it. The application’s EC2 instance configuration and data need to be backed up nightly. The application also needs to be recoverable in a different AWS Region.

Which solution will meet these requirements in the MOST operationally efficient way?

A. Write an AWS Lambda function that schedules nightly snapshots of the application’s EBS volumes and copies the snapshots to a different Region.

B. Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application’s EC2 instances as resources. ✅

C. Create a backup plan by using AWS Backup to perform nightly backups. Copy the backups to another Region. Add the application’s EBS volumes as resources.

D. Write an AWS Lambda function that schedules nightly snapshots of the application's EBS volumes and copies the snapshots to a different Availability Zone.

---

**Question**  259

A company is building a mobile app on AWS. The company wants to expand its reach to millions of users. The company needs to build a platform so that authorized users can watch the company’s content on their mobile devices.

What should a solutions architect recommend to meet these requirements?

A. Publish content to a public Amazon S3 bucket. Use AWS Key Management Service (AWS KMS) keys to stream content.

B. Set up IPsec VPN between the mobile app and the AWS environment to stream content.

C. Use Amazon CloudFront. Provide signed URLs to stream content. ✅

D. Set up AWS Client VPN between the mobile app and the AWS environment to stream content.

---

**Question**  260

A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minimal downtime. A database administrator wants to migrate this database to AWS without selecting a particular instance type in anticipation of more users in the future.

Which service should a solutions architect recommend?

A. Amazon Aurora MySQL

B. Amazon Aurora Serverless for MySQL ✅

C. Amazon Redshift Spectrum

D. Amazon RDS for MySQL

---

**Question**  261

A company experienced a breach that affected several applications in its on-premises data center. The attacker took advantage of vulnerabilities in the custom applications that were running on the servers. The company is now migrating its applications to run on Amazon EC2 instances. The company wants to implement a solution that actively scans for vulnerabilities on the EC2 instances and sends a report that details the findings.

Which solution will meet these requirements?

A. Deploy AWS Shield to scan the EC2 instances for vulnerabilities. Create an AWS Lambda function to log any findings to AWS CloudTrail.

B. Deploy Amazon Macie and AWS Lambda functions to scan the EC2 instances for vulnerabilities. Log any findings to AWS CloudTrail.

C. Turn on Amazon GuardDuty. Deploy the GuardDuty agents to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings.

D. Turn on Amazon Inspector. Deploy the Amazon Inspector agent to the EC2 instances. Configure an AWS Lambda function to automate the generation and distribution of reports that detail the findings. ✅

---

**Question**  262

A company uses an Amazon EC2 instance to run a script to poll for and process messages in an Amazon Simple Queue Service (Amazon SQS) queue. The company wants to reduce operational costs while maintaining its ability to process a growing number of messages that are added to the queue.

What should a solutions architect recommend to meet these requirements?

A. Increase the size of the EC2 instance to process messages faster.

B. Use Amazon EventBridge to turn off the EC2 instance when the instance is underutilized.

C. Migrate the script on the EC2 instance to an AWS Lambda function with the appropriate runtime. ✅

D. Use AWS Systems Manager Run Command to run the script on demand.

---

**Question**  263

A company uses a legacy application to produce data in CSV format. The legacy application stores the output data in Amazon S3. The company is deploying a new commercial off-the-shelf (COTS) application that can perform complex SQL queries to analyze data that is stored in Amazon Redshift and Amazon S3 only. However, the COTS application cannot process the .csv files that the legacy application produces.

The company cannot update the legacy application to produce data in another format. The company needs to implement a solution so that the COTS application can use the data that the legacy application produces.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Glue extract, transform, and load (ETL) job that runs on a schedule. Configure the ETL job to process the .csv files and store the processed data in Amazon Redshift. ✅

B. Develop a Python script that runs on Amazon EC2 instances to convert the .csv files to .sql files. Invoke the Python script on a cron schedule to store the output files in Amazon S3.

C. Create an AWS Lambda function and an Amazon DynamoDB table. Use an S3 event to invoke the Lambda function. Configure the Lambda function to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in the DynamoDB table.

D. Use Amazon EventBridge to launch an Amazon EMR cluster on a weekly schedule. Configure the EMR cluster to perform an extract, transform, and load (ETL) job to process the .csv files and store the processed data in an Amazon Redshift table.

---

**Question**  264

A company recently migrated its entire IT environment to the AWS Cloud. The company discovers that users are provisioning oversized Amazon EC2 instances and modifying security group rules without using the appropriate change control process. A solutions architect must devise a strategy to track and audit these inventory and configuration changes.

Which actions should the solutions architect take to meet these requirements? (Choose two.)

A. Enable AWS CloudTrail and use it for auditing. ✅

B. Use data lifecycle policies for the Amazon EC2 instances.

C. Enable AWS Trusted Advisor and reference the security dashboard.

D. Enable AWS Config and create rules for auditing and compliance purposes. ✅

E. Restore previous resource configurations with an AWS CloudFormation template.

---

**Question**  265

A company has hundreds of Amazon EC2 Linux-based instances in the AWS Cloud. Systems administrators have used shared SSH keys to manage the instances. After a recent audit, the company’s security team is mandating the removal of all shared keys. A solutions architect must design a solution that provides secure access to the EC2 instances.

Which solution will meet this requirement with the LEAST amount of administrative overhead?

A. Use AWS Systems Manager Session Manager to connect to the EC2 instances. ✅

B. Use AWS Security Token Service (AWS STS) to generate one-time SSH keys on demand.

C. Allow shared SSH access to a set of bastion instances. Configure all other instances to allow only SSH access from the bastion instances.

D. Use an Amazon Cognito custom authorizer to authenticate users. Invoke an AWS Lambda function to generate a temporary SSH key.

---

**Question**  266

A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.

Which method is the MOST cost-effective for hosting the website?

A. Containerize the website and host it in AWS Fargate.

B. Create an Amazon S3 bucket and host the website there. ✅

C. Deploy a web server on an Amazon EC2 instance to host the website.

D. Configure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.

---

**Question**  267

A company is using a fleet of Amazon EC2 instances to ingest data from on-premises data sources. The data is in JSON format and ingestion rates can be as high as 1 MB/s. When an EC2 instance is rebooted, the data in-flight is lost. The company’s data science team wants to query ingested data in near-real time.

Which solution provides near-real-time data querying that is scalable with minimal data loss?

A. Publish data to Amazon Kinesis Data Streams, Use Kinesis Data Analytics to query the data. ✅

B. Publish data to Amazon Kinesis Data Firehose with Amazon Redshift as the destination. Use Amazon Redshift to query the data.

C. Store ingested data in an EC2 instance store. Publish data to Amazon Kinesis Data Firehose with Amazon S3 as the destination. Use Amazon Athena to query the data.

D. Store ingested data in an Amazon Elastic Block Store (Amazon EBS) volume. Publish data to Amazon ElastiCache for Redis. Subscribe to the Redis channel to query the data.

---

**Question**  268

What should a solutions architect do to ensure that all objects uploaded to an Amazon S3 bucket are encrypted?

A. Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set.

B. Update the bucket policy to deny if the PutObject does not have an s3:x-amz-acl header set to private.

C. Update the bucket policy to deny if the PutObject does not have an aws:SecureTransport header set to true.

D. Update the bucket policy to deny if the PutObject does not have an x-amz-server-side-encryption header set. ✅

---

**Question**  269

A solutions architect is designing a multi-tier application for a company. The application's users upload images from a mobile device. The application generates a thumbnail of each image and returns a message to the user to confirm that the image was uploaded successfully.

The thumbnail generation can take up to 60 seconds, but the company wants to provide a faster response time to its users to notify them that the original image was received. The solutions architect must design the application to asynchronously dispatch requests to the different application tiers.

What should the solutions architect do to meet these requirements?

A. Write a custom AWS Lambda function to generate the thumbnail and alert the user. Use the image upload process as an event source to invoke the Lambda function.

B. Create an AWS Step Functions workflow. Configure Step Functions to handle the orchestration between the application tiers and alert the user when thumbnail generation is complete.

C. Create an Amazon Simple Queue Service (Amazon SQS) message queue. As images are uploaded, place a message on the SQS queue for thumbnail generation. Alert the user through an application message that the image was received. ✅

D. Create Amazon Simple Notification Service (Amazon SNS) notification topics and subscriptions. Use one subscription with the application to generate the thumbnail after the image upload is complete. Use a second subscription to message the user's mobile app by way of a push notification after thumbnail generation is complete.

---

**Question**  270

A company’s facility has badge readers at every entrance throughout the building. When badges are scanned, the readers send a message over HTTPS to indicate who attempted to access that particular entrance.

A solutions architect must design a system to process these messages from the sensors. The solution must be highly available, and the results must be made available for the company’s security team to analyze.

Which system architecture should the solutions architect recommend?

A. Launch an Amazon EC2 instance to serve as the HTTPS endpoint and to process the messages. Configure the EC2 instance to save the results to an Amazon S3 bucket.

B. Create an HTTPS endpoint in Amazon API Gateway. Configure the API Gateway endpoint to invoke an AWS Lambda function to process the messages and save the results to an Amazon DynamoDB table. ✅

C. Use Amazon Route 53 to direct incoming sensor messages to an AWS Lambda function. Configure the Lambda function to process the messages and save the results to an Amazon DynamoDB table.

D. Create a gateway VPC endpoint for Amazon S3. Configure a Site-to-Site VPN connection from the facility network to the VPC so that sensor data can be written directly to an S3 bucket by way of the VPC endpoint.

---

**Question**  271

A company wants to implement a disaster recovery plan for its primary on-premises file storage volume. The file storage volume is mounted from an Internet Small Computer Systems Interface (iSCSI) device on a local storage server. The file storage volume holds hundreds of terabytes (TB) of data.

The company wants to ensure that end users retain immediate access to all file types from the on-premises systems without experiencing latency.

Which solution will meet these requirements with the LEAST amount of change to the company's existing infrastructure?

A. Provision an Amazon S3 File Gateway as a virtual machine (VM) that is hosted on premises. Set the local cache to 10 TB. Modify existing applications to access the files through the NFS protocol. To recover from a disaster, provision an Amazon EC2 instance and mount the S3 bucket that contains the files.

B. Provision an AWS Storage Gateway tape gateway. Use a data backup solution to back up all existing data to a virtual tape library. Configure the data backup solution to run nightly after the initial backup is complete. To recover from a disaster, provision an Amazon EC2 instance and restore the data to an Amazon Elastic Block Store (Amazon EBS) volume from the volumes in the virtual tape library.

C. Provision an AWS Storage Gateway Volume Gateway cached volume. Set the local cache to 10 TB. Mount the Volume Gateway cached volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance.

D. Provision an AWS Storage Gateway Volume Gateway stored volume with the same amount of disk space as the existing file storage volume. Mount the Volume Gateway stored volume to the existing file server by using iSCSI, and copy all files to the storage volume. Configure scheduled snapshots of the storage volume. To recover from a disaster, restore a snapshot to an Amazon Elastic Block Store (Amazon EBS) volume and attach the EBS volume to an Amazon EC2 instance. ✅

---

**Question**  272

A company is hosting a web application from an Amazon S3 bucket. The application uses Amazon Cognito as an identity provider to authenticate users and return a JSON Web Token (JWT) that provides access to protected resources that are stored in another S3 bucket.

Upon deployment of the application, users report errors and are unable to access the protected content. A solutions architect must resolve this issue by providing proper permissions so that users can access the protected content.

Which solution meets these requirements?

A. Update the Amazon Cognito identity pool to assume the proper IAM role for access to the protected content. ✅

B. Update the S3 ACL to allow the application to access the protected content.

C. Redeploy the application to Amazon S3 to prevent eventually consistent reads in the S3 bucket from affecting the ability of users to access the protected content.

D. Update the Amazon Cognito pool to use custom attribute mappings within the identity pool and grant users the proper permissions to access the protected content.

---

**Question**  273

An image hosting company uploads its large assets to Amazon S3 Standard buckets. The company uses multipart upload in parallel by using S3 APIs and overwrites if the same object is uploaded again. For the first 30 days after upload, the objects will be accessed frequently. The objects will be used less frequently after 30 days, but the access patterns for each object will be inconsistent. The company must optimize its S3 storage costs while maintaining high availability and resiliency of stored assets.

Which combination of actions should a solutions architect recommend to meet these requirements? (Choose two.)

A. Move assets to S3 Intelligent-Tiering after 30 days. ✅

B. Configure an S3 Lifecycle policy to clean up incomplete multipart uploads. ✅

C. Configure an S3 Lifecycle policy to clean up expired object delete markers.

D. Move assets to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days.

E. Move assets to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days.

---

**Question**  274

A solutions architect must secure a VPC network that hosts Amazon EC2 instances. The EC2 instances contain highly sensitive data and run in a private subnet. According to company policy, the EC2 instances that run in the VPC can access only approved third-party software repositories on the internet for software product updates that use the third party’s URL. Other internet traffic must be blocked.

Which solution meets these requirements?

A. Update the route table for the private subnet to route the outbound traffic to an AWS Network Firewall firewall. Configure domain list rule groups. ✅

B. Set up an AWS WAF web ACL. Create a custom set of rules that filter traffic requests based on source and destination IP address range sets.

C. Implement strict inbound security group rules. Configure an outbound rule that allows traffic only to the authorized software repositories on the internet by specifying the URLs.

D. Configure an Application Load Balancer (ALB) in front of the EC2 instances. Direct all outbound traffic to the ALB. Use a URL-based rule listener in the ALB’s target group for outbound access to the internet.

---

**Question**  275

A company is hosting a three-tier ecommerce application in the AWS Cloud. The company hosts the website on Amazon S3 and integrates the website with an API that handles sales requests. The company hosts the API on three Amazon EC2 instances behind an Application Load Balancer (ALB). The API consists of static and dynamic front-end content along with backend workers that process sales requests asynchronously.

The company is expecting a significant and sudden increase in the number of sales requests during events for the launch of new products.

What should a solutions architect recommend to ensure that all the requests are processed successfully?

A. Add an Amazon CloudFront distribution for the dynamic content. Increase the number of EC2 instances to handle the increase in traffic.

B. Add an Amazon CloudFront distribution for the static content. Place the EC2 instances in an Auto Scaling group to launch new instances based on network traffic.

C. Add an Amazon CloudFront distribution for the dynamic content. Add an Amazon ElastiCache instance in front of the ALB to reduce traffic for the API to handle.

D. Add an Amazon CloudFront distribution for the static content. Add an Amazon Simple Queue Service (Amazon SQS) queue to receive requests from the website for later processing by the EC2 instances. ✅

---

**Question**  276

A security audit reveals that Amazon EC2 instances are not being patched regularly. A solutions architect needs to provide a solution that will run regular security scans across a large fleet of EC2 instances. The solution should also patch the EC2 instances on a regular schedule and provide a report of each instance’s patch status.

Which solution will meet these requirements?

A. Set up Amazon Macie to scan the EC2 instances for software vulnerabilities. Set up a cron job on each EC2 instance to patch the instance on a regular schedule.

B. Turn on Amazon GuardDuty in the account. Configure GuardDuty to scan the EC2 instances for software vulnerabilities. Set up AWS Systems Manager Session Manager to patch the EC2 instances on a regular schedule.

C. Set up Amazon Detective to scan the EC2 instances for software vulnerabilities. Set up an Amazon EventBridge scheduled rule to patch the EC2 instances on a regular schedule.

D. Turn on Amazon Inspector in the account. Configure Amazon Inspector to scan the EC2 instances for software vulnerabilities. Set up AWS Systems Manager Patch Manager to patch the EC2 instances on a regular schedule. ✅

---

**Question**  277

A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.

What should a solutions architect recommend to meet these requirements?

A. Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.

B. Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.

C. Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream. ✅

D. Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3.

---

**Question**  278

A company is planning to store data on Amazon RDS DB instances. The company must encrypt the data at rest.

What should a solutions architect do to meet this requirement?

A. Create a key in AWS Key Management Service (AWS KMS). Enable encryption for the DB instances. ✅

B. Create an encryption key. Store the key in AWS Secrets Manager. Use the key to encrypt the DB instances.

C. Generate a certificate in AWS Certificate Manager (ACM). Enable SSL/TLS on the DB instances by using the certificate.

D. Generate a certificate in AWS Identity and Access Management (IAM). Enable SSL/TLS on the DB instances by using the certificate.

---

**Question**  279

A company must migrate 20 TB of data from a data center to the AWS Cloud within 30 days. The company’s network bandwidth is limited to 15 Mbps and cannot exceed 70% utilization.

What should a solutions architect do to meet these requirements?

A. Use AWS Snowball. ✅

B. Use AWS DataSync.

C. Use a secure VPN connection.

D. Use Amazon S3 Transfer Acceleration.

---

**Question**  280

A company needs to provide its employees with secure access to confidential and sensitive files. The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees’ devices.

The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity.

Which solution will meet these requirements?

A. Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees’ IP addresses.

B. Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN. ✅

C. Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.

D. Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM Identity Center (AWS Single Sign-On).

**Question**  281

A company’s application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. On the first day of every month at midnight, the application becomes much slower when the month-end financial calculation batch runs. This causes the CPU utilization of the EC2 instances to immediately peak to 100%, which disrupts the application.

What should a solutions architect recommend to ensure the application is able to handle the workload and avoid downtime?

A. Configure an Amazon CloudFront distribution in front of the ALB.

B. Configure an EC2 Auto Scaling simple scaling policy based on CPU utilization.

C. Configure an EC2 Auto Scaling scheduled scaling policy based on the monthly schedule. ✅

D. Configure Amazon ElastiCache to remove some of the workload from the EC2 instances.

**Question**  282

A company wants to give a customer the ability to use on-premises Microsoft Active Directory to download files that are stored in Amazon S3. The customer’s application uses an SFTP client to download the files.

Which solution will meet these requirements with the LEAST operational overhead and no changes to the customer’s application?

A. Set up AWS Transfer Family with SFTP for Amazon S3. Configure integrated Active Directory authentication. ✅

B. Set up AWS Database Migration Service (AWS DMS) to synchronize the on-premises client with Amazon S3. Configure integrated Active Directory authentication.

C. Set up AWS DataSync to synchronize between the on-premises location and the S3 location by using AWS IAM Identity Center (AWS Single Sign-On).

D. Set up a Windows Amazon EC2 instance with SFTP to connect the on-premises client with Amazon S3. Integrate AWS Identity and Access Management (IAM).

**Question**  283

A company is experiencing sudden increases in demand. The company needs to provision large Amazon EC2 instances from an Amazon Machine Image (AMI). The instances will run in an Auto Scaling group. The company needs a solution that provides minimum initialization latency to meet the demand.

Which solution meets these requirements?

A. Use the aws ec2 register-image command to create an AMI from a snapshot. Use AWS Step Functions to replace the AMI in the Auto Scaling group.

B. Enable Amazon Elastic Block Store (Amazon EBS) fast snapshot restore on a snapshot. Provision an AMI by using the snapshot. Replace the AMI in the Auto Scaling group with the new AMI. ✅

C. Enable AMI creation and define lifecycle rules in Amazon Data Lifecycle Manager (Amazon DLM). Create an AWS Lambda function that modifies the AMI in the Auto Scaling group.

D. Use Amazon EventBridge to invoke AWS Backup lifecycle policies that provision AMIs. Configure Auto Scaling group capacity limits as an event source in EventBridge.

**Question**  284

A company hosts a multi-tier web application that uses an Amazon Aurora MySQL DB cluster for storage. The application tier is hosted on Amazon EC2 instances. The company’s IT security guidelines mandate that the database credentials be encrypted and rotated every 14 days.

What should a solutions architect do to meet this requirement with the LEAST operational effort?

A. Create a new AWS Key Management Service (AWS KMS) encryption key. Use AWS Secrets Manager to create a new secret that uses the KMS key with the appropriate credentials. Associate the secret with the Aurora DB cluster. Configure a custom rotation period of 14 days. ✅

B. Create two parameters in AWS Systems Manager Parameter Store: one for the user name as a string parameter and one that uses the SecureString type for the password. Select AWS Key Management Service (AWS KMS) encryption for the password parameter, and load these parameters in the application tier. Implement an AWS Lambda function that rotates the password every 14 days.

C. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system in all EC2 instances of the application tier. Restrict the access to the file on the file system so that the application can read the file and that only super users can modify the file. Implement an AWS Lambda function that rotates the key in Aurora every 14 days and writes new credentials into the file.

D. Store a file that contains the credentials in an AWS Key Management Service (AWS KMS) encrypted Amazon S3 bucket that the application uses to load the credentials. Download the file to the application regularly to ensure that the correct credentials are used. Implement an AWS Lambda function that rotates the Aurora credentials every 14 days and uploads these credentials to the file in the S3 bucket.

**Question**  285

A company has deployed a web application on AWS. The company hosts the backend database on Amazon RDS for MySQL with a primary DB instance and five read replicas to support scaling needs. The read replicas must lag no more than 1 second behind the primary DB instance. The database routinely runs scheduled stored procedures.

As traffic on the website increases, the replicas experience additional lag during periods of peak load. A solutions architect must reduce the replication lag as much as possible. The solutions architect must minimize changes to the application code and must minimize ongoing operational overhead.

Which solution will meet these requirements?

A. Migrate the database to Amazon Aurora MySQL. Replace the read replicas with Aurora Replicas, and configure Aurora Auto Scaling. Replace the stored procedures with Aurora MySQL native functions. ✅

B. Deploy an Amazon ElastiCache for Redis cluster in front of the database. Modify the application to check the cache before the application queries the database. Replace the stored procedures with AWS Lambda functions.

C. Migrate the database to a MySQL database that runs on Amazon EC2 instances. Choose large, compute optimized EC2 instances for all replica nodes. Maintain the stored procedures on the EC2 instances.

D. Migrate the database to Amazon DynamoDB. Provision a large number of read capacity units (RCUs) to support the required throughput, and configure on-demand capacity scaling. Replace the stored procedures with DynamoDB streams.

**Question**  286

A solutions architect must create a disaster recovery (DR) plan for a high-volume software as a service (SaaS) platform. All data for the platform is stored in an Amazon Aurora MySQL DB cluster.

The DR plan must replicate data to a secondary AWS Region.

Which solution will meet these requirements MOST cost-effectively?

A. Use MySQL binary log replication to an Aurora cluster in the secondary Region. Provision one DB instance for the Aurora cluster in the secondary Region.

B. Set up an Aurora global database for the DB cluster. When setup is complete, remove the DB instance from the secondary Region.

C. Use AWS Database Migration Service (AWS DMS) to continuously replicate data to an Aurora cluster in the secondary Region. Remove the DB instance from the secondary Region.

D. Set up an Aurora global database for the DB cluster. Specify a minimum of one DB instance in the secondary Region. ✅

**Question**  287

A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application must be made more secure with the least amount of programming effort.

What should a solutions architect do to meet these requirements?

A. Use AWS Key Management Service (AWS KMS) to create keys. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation.

B. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Create an AWS Lambda function that rotates the credentials in Secret Manager.

C. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager. ✅

D. Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Parameter Store.

**Question**  288

A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.

What should a solutions architect do to meet these requirements?

A. Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.

B. Use AWS Config to track configuration changes and AWS CloudTrail to record API calls. ✅

C. Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.

D. Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.

**Question**  289

A media company hosts its website on AWS. The website application’s architecture includes a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) and a database that is hosted on Amazon Aurora. The company’s cybersecurity team reports that the application is vulnerable to SQL injection.

How should the company resolve this issue?

A. Use AWS WAF in front of the ALB. Associate the appropriate web ACLs with AWS WAF. ✅

B. Create an ALB listener rule to reply to SQL injections with a fixed response.

C. Subscribe to AWS Shield Advanced to block all SQL injection attempts automatically.

D. Set up Amazon Inspector to block all SQL injection attempts automatically.

**Question**  290

A company has an Amazon S3 data lake that is governed by AWS Lake Formation. The company wants to create a visualization in Amazon QuickSight by joining the data in the data lake with operational data that is stored in an Amazon Aurora MySQL database. The company wants to enforce column-level authorization so that the company’s marketing team can access only a subset of columns in the database.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon EMR to ingest the data directly from the database to the QuickSight SPICE engine. Include only the required columns.

B. Use AWS Glue Studio to ingest the data from the database to the S3 data lake. Attach an IAM policy to the QuickSight users to enforce column-level access control. Use Amazon S3 as the data source in QuickSight.

C. Use AWS Glue Elastic Views to create a materialized view for the database in Amazon S3. Create an S3 bucket policy to enforce column-level access control for the QuickSight users. Use Amazon S3 as the data source in QuickSight.

D. Use a Lake Formation blueprint to ingest the data from the database to the S3 data lake. Use Lake Formation to enforce column-level access control for the QuickSight users. Use Amazon Athena as the data source in QuickSight. ✅

**Question**  291

A transaction processing company has weekly scripted batch jobs that run on Amazon EC2 instances. The EC2 instances are in an Auto Scaling group. The number of transactions can vary, but the baseline CPU utilization that is noted on each run is at least 60%. The company needs to provision the capacity 30 minutes before the jobs run.

Currently, engineers complete this task by manually modifying the Auto Scaling group parameters. The company does not have the resources to analyze the required capacity trends for the Auto Scaling group counts. The company needs an automated way to modify the Auto Scaling group’s desired capacity.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create a dynamic scaling policy for the Auto Scaling group. Configure the policy to scale based on the CPU utilization metric. Set the target value for the metric to 60%.

B. Create a scheduled scaling policy for the Auto Scaling group. Set the appropriate desired capacity, minimum capacity, and maximum capacity. Set the recurrence to weekly. Set the start time to 30 minutes before the batch jobs run.

C. Create a predictive scaling policy for the Auto Scaling group. Configure the policy to scale based on forecast. Set the scaling metric to CPU utilization. Set the target value for the metric to 60%. In the policy, set the instances to pre-launch 30 minutes before the jobs run. ✅

D. Create an Amazon EventBridge event to invoke an AWS Lambda function when the CPU utilization metric value for the Auto Scaling group reaches 60%. Configure the Lambda function to increase the Auto Scaling group’s desired capacity and maximum capacity by 20%.

**Question**  292

A solutions architect is designing a company’s disaster recovery (DR) architecture. The company has a MySQL database that runs on an Amazon EC2 instance in a private subnet with scheduled backup. The DR design needs to include multiple AWS Regions.

Which solution will meet these requirements with the LEAST operational overhead?

A. Migrate the MySQL database to multiple EC2 instances. Configure a standby EC2 instance in the DR Region. Turn on replication.

B. Migrate the MySQL database to Amazon RDS. Use a Multi-AZ deployment. Turn on read replication for the primary DB instance in the different Availability Zones.

C. Migrate the MySQL database to an Amazon Aurora global database. Host the primary DB cluster in the primary Region. Host the secondary DB cluster in the DR Region. ✅

D. Store the scheduled backup of the MySQL database in an Amazon S3 bucket that is configured for S3 Cross-Region Replication (CRR). Use the data backup to restore the database in the DR Region.

**Question**  293

A company has a Java application that uses Amazon Simple Queue Service (Amazon SQS) to parse messages. The application cannot parse messages that are larger than 256 KB in size. The company wants to implement a solution to give the application the ability to parse messages as large as 50 MB.

Which solution will meet these requirements with the FEWEST changes to the code?

A. Use the Amazon SQS Extended Client Library for Java to host messages that are larger than 256 KB in Amazon S3. ✅

B. Use Amazon EventBridge to post large messages from the application instead of Amazon SQS.

C. Change the limit in Amazon SQS to handle messages that are larger than 256 KB.

D. Store messages that are larger than 256 KB in Amazon Elastic File System (Amazon EFS). Configure Amazon SQS to reference this location in the messages.

**Question**  294

A company wants to restrict access to the content of one of its main web applications and to protect the content by using authorization techniques available on AWS. The company wants to implement a serverless architecture and an authentication solution for fewer than 100 users. The solution needs to integrate with the main web application and serve web content globally. The solution must also scale as the company's user base grows while providing the lowest login latency possible.

Which solution will meet these requirements MOST cost-effectively?

A. Use Amazon Cognito for authentication. Use Lambda@Edge for authorization. Use Amazon CloudFront to serve the web application globally. ✅

B. Use AWS Directory Service for Microsoft Active Directory for authentication. Use AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally.

C. Use Amazon Cognito for authentication. Use AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally.

D. Use AWS Directory Service for Microsoft Active Directory for authentication. Use Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally.

**Question**  295

A company has an aging network-attached storage (NAS) array in its data center. The NAS array presents SMB shares and NFS shares to client workstations. The company does not want to purchase a new NAS array. The company also does not want to incur the cost of renewing the NAS array’s support contract. Some of the data is accessed frequently, but much of the data is inactive.

A solutions architect needs to implement a solution that migrates the data to Amazon S3, uses S3 Lifecycle policies, and maintains the same look and feel for the client workstations. The solutions architect has identified AWS Storage Gateway as part of the solution.

Which type of storage gateway should the solutions architect provision to meet these requirements?

A. Volume Gateway

B. Tape Gateway

C. Amazon FSx File Gateway

D. Amazon S3 File Gateway. ✅

**Question**  296

A company has an application that is running on Amazon EC2 instances. A solutions architect has standardized the company on a particular instance family and various instance sizes based on the current needs of the company.

The company wants to maximize cost savings for the application over the next 3 years. The company needs to be able to change the instance family and sizes in the next 6 months based on application popularity and usage.

Which solution will meet these requirements MOST cost-effectively?

A. Compute Savings Plan. ✅

B. EC2 Instance Savings Plan

C. Zonal Reserved Instances

D. Standard Reserved Instances

**Question**  297

A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and predictable. The company wants to stay at or below its forecasted budget for DynamoDB.

Which solution will meet these requirements MOST cost-effectively?

A. Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve capacity for the forecasted workload. ✅

B. Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs).

C. Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to accommodate changes in the workload.

D. Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved capacity.

**Question**  298

A company stores confidential data in an Amazon Aurora PostgreSQL database in the ap-southeast-3 Region. The database is encrypted with an AWS Key Management Service (AWS KMS) customer managed key. The company was recently acquired and must securely share a backup of the database with the acquiring company’s AWS account in ap-southeast-3.

What should a solutions architect do to meet these requirements?

A. Create a database snapshot. Copy the snapshot to a new unencrypted snapshot. Share the new snapshot with the acquiring company’s AWS account.

B. Create a database snapshot. Add the acquiring company’s AWS account to the KMS key policy. Share the snapshot with the acquiring company’s AWS account. ✅

C. Create a database snapshot that uses a different AWS managed KMS key. Add the acquiring company’s AWS account to the KMS key alias. Share the snapshot with the acquiring company's AWS account.

D. Create a database snapshot. Download the database snapshot. Upload the database snapshot to an Amazon S3 bucket. Update the S3 bucket policy to allow access from the acquiring company’s AWS account.

**Question**  299

A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.

Which solution meets these requirements?

A. Enable Amazon GuardDuty on the account.

B. Enable Amazon Inspector on the EC2 instances.

C. Enable AWS Shield and assign Amazon Route 53 to it.

D. Enable AWS Shield Advanced and assign the ELB to it. ✅

**Question**  300

A company uses a 100 GB Amazon RDS for Microsoft SQL Server Single-AZ DB instance in the us-east-1 Region to store customer transactions. The company needs high availability and automatic recovery for the DB instance.

The company must also run reports on the RDS database several times a year. The report process causes transactions to take longer than usual to post to the customers’ accounts. The company needs a solution that will improve the performance of the report process.

Which combination of steps will meet these requirements? (Choose two.)

A. Modify the DB instance from a Single-AZ DB instance to a Multi-AZ deployment. ✅

B. Take a snapshot of the current DB instance. Restore the snapshot to a new RDS deployment in another Availability Zone.

C. Create a read replica of the DB instance in a different Availability Zone. Point all requests for reports to the read replica. ✅

D. Migrate the database to RDS Custom.

E. Use RDS Proxy to limit reporting requests to the maintenance window.

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>