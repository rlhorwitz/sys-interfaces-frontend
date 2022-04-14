
// @fixme - Make businessOwner required
export type SystemInterfaceGraphNode = {
    id: string;
    sysAdmin: string;
    businessOwner?: string;
    [x: string]: string | undefined;
}