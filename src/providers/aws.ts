import fs from 'fs';
import * as core from '@actions/core';
import { EKSClient, DescribeClusterCommand, DescribeClusterResponse } from '@aws-sdk/client-eks';


async function getKubeconfig(clusterName: string, kubeconfigFile: string): Promise<string> {
    const region = process.env.AWS_REGION || 'us-east-1';
    const client = new EKSClient({ region: region });

    const descReq = new DescribeClusterCommand({ name: clusterName });
    const descResp: DescribeClusterResponse = await client.send(descReq);
    core.debug(`cluster: ${JSON.stringify(descResp)}`);
    return "";
}

export const provider = {
    getKubeconfig
};
