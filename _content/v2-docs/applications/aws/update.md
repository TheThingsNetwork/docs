---
title: Update
zindex: 50
---

# Update the Integration

Since the integration runs in your AWS account and within your security context, it is not being updated automatically. This guide walks you through updating the integration that runs as an AWS Elastic Beanstalk application.

1. Log in to the [AWS Management Console](http://console.aws.amazon.com)
2. In **Services** under **Compute**, go to **Elastic Beanstalk**
3. In the menu bar, select your application and click **Application Versions**

   ![EBS go to versions](ebs-go-to-versions.png)

4. [Download the latest version](https://s3.amazonaws.com/thethingsnetwork/builds/integration-aws/dist/integration-aws-latest.zip)
   You can find the latest version here:
   ```
   https://s3.amazonaws.com/thethingsnetwork/builds/integration-aws/dist/integration-aws-latest.zip
   ```
   > Safari users: the downloaded zip may be extracted automatically and moved to Trash. Since you need to upload the original zip file, copy the file from Trash 🤔
5. Click **Upload**
6. Enter a version label, e.g. `update-<date>`
7. At **Upload application**, select the zip file you downloaded in step 4
8. Click **Upload**

   ![EBS versions](ebs-versions.png)

9. Select the uploaded version, and click **Deploy**

   ![EBS version deploy](ebs-version-deploy.png)

10. Click **Environments** in the menu left and select your environment (gray or green)
11. Verify that the update succeeds

    ![EBS updated](ebs-updated.png)

12. Click the **URL** link in the top of the page
13. Verify that you see the info page, with the current version in the footer

    ![Info page](info-page.png)
