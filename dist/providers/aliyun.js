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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.provider = void 0;
const core = __importStar(require("@actions/core"));
const cs20180418_1 = __importStar(require("@alicloud/cs20180418"));
const openapi_client_1 = require("@alicloud/openapi-client");
const credentials_1 = __importDefault(require("@alicloud/credentials"));
async function getKubeconfig(clusterName, kubeconfigFile) {
    const config = new openapi_client_1.Config({
        credential: new credentials_1.default(),
        regionId: process.env.ALIBABACLOUD_REGION_ID || 'cn-hangzhou',
        protocol: 'https',
        timeout: 30000,
        accessKeyId: process.env.ALIBABACLOUD_ACCESS_KEY_ID,
        accessKeySecret: process.env.ALIBABACLOUD_ACCESS_KEY_SECRET,
        securityToken: process.env.ALIBABACLOUD_SECURITY_TOKEN,
    });
    const client = new cs20180418_1.default(config);
    const req = new cs20180418_1.DescribeClustersRequest({ name: clusterName });
    const resp = await client.describeClusters(req);
    core.info(`cluster: ${JSON.stringify(resp)}`);
    return "";
}
exports.provider = {
    getKubeconfig
};
