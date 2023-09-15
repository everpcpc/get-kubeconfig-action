async function getKubeconfig(clusterName: string, kubeconfigFile: string): Promise<string> {
    // const kubeconfig = await getKubeconfig(clusterName);
    // fs.writeFileSync(kubeconfigFile, kubeconfig);
    return "";
}

export const provider = {
    getKubeconfig
};
