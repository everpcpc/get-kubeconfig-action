import fs from 'fs';
import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { provider as GCP } from './providers/gcp';
import { provider as AWS } from './providers/aws';
import { provider as ALIYUN } from './providers/aliyun';

const token = core.getInput('token');
const octokit = new Octokit({ auth: `token ${token}` });
const context = github.context;

interface Provider {
  getKubeconfig(clusterName: string, kubeconfigFile: string): Promise<string>;
}

async function run() {
  let cloudProvider = core.getInput('provider');
  let clusterName = core.getInput('cluster-name');
  let kubeconfigFile = core.getInput('kubeconfig');

  let provider: Provider;
  switch (cloudProvider) {
    case 'aws':
      provider = AWS;
      break;
    case 'gcp':
      provider = GCP;
      break;
    case 'aliyun':
      provider = ALIYUN;
      break;
    default:
      core.setFailed(`Unsupported cloud provider: ${cloudProvider}`);
  }
  // const kubeconfig = await getKubeconfig(clusterName);
  // fs.writeFileSync(kubeconfigFile, kubeconfig);
}

run()
