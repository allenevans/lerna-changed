declare type ChangedPackagesArgs = {
    cwd: string;
    include?: string;
};
/**
 * Get the list of changed packages as a string
 */
export declare const changedPackages: ({ cwd, include }: ChangedPackagesArgs) => Promise<string>;
export {};
//# sourceMappingURL=changed-packages.d.ts.map