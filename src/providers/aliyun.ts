import * as core from '@actions/core';
import { default as Client, DescribeClustersRequest, DescribeClustersResponse } from '@alicloud/cs20180418';
import { Config } from '@alicloud/openapi-client';
import { default as Credential } from '@alicloud/credentials';

async function getKubeconfig(clusterName: string, kubeconfigFile: string): Promise<string> {
    const config = new Config({
        credential: new Credential(),
        regionId: process.env.ALIBABACLOUD_REGION_ID || 'cn-hangzhou',
        protocol: 'https',
        timeout: 30000,
        accessKeyId: process.env.ALIBABACLOUD_ACCESS_KEY_ID,
        accessKeySecret: process.env.ALIBABACLOUD_ACCESS_KEY_SECRET,
        securityToken: process.env.ALIBABACLOUD_SECURITY_TOKEN,
    });
    const client = new Client(config);
    const req = new DescribeClustersRequest({ name: clusterName });
    const resp: DescribeClustersResponse = await client.describeClusters(req);
    core.info(`cluster: ${JSON.stringify(resp)}`);
    return "";
}

export const provider = {
    getKubeconfig
};
