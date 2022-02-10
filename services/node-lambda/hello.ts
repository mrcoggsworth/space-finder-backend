import { v4 } from 'uuid';
import { S3 } from 'aws-sdk'


async function handler(event: any, context: any) {
    console.log('Got and event:');
    console.log(event);
    const s3client = new S3()
    const listBuckets = await s3client.listBuckets().promise();

    return {
        statusCode: 200,
        body: `Here are the buckets ${JSON.stringify(listBuckets)}`
    }
}

export { handler };
