import fs from 'fs';
import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';

const token = core.getInput('token');
const octokit = new Octokit({ auth: `token ${token}` });
const context = github.context;



async function run() {
    let provider = core.getInput('provider');

}

run()
