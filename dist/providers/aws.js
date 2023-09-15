"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = void 0;
const core = __importStar(require("@actions/core"));
const client_eks_1 = require("@aws-sdk/client-eks");
async function getKubeconfig(clusterName, kubeconfigFile) {
    const region = process.env.AWS_REGION || 'us-east-1';
    const client = new client_eks_1.EKSClient({ region: region });
    const descReq = new client_eks_1.DescribeClusterCommand({ name: clusterName });
    const descResp = await client.send(descReq);
    core.debug(`cluster: ${JSON.stringify(descResp)}`);
    return "";
}
exports.provider = {
    getKubeconfig
};
