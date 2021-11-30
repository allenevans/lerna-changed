import collectUpdates from '@lerna/collect-updates';
import PackageGraph from '@lerna/package-graph';
import Project from '@lerna/project';

type LernaPackage = {
  name: string;
};

type Updated = {
  pkg: LernaPackage;
};

type ChangedPackagesArgs = {
  cwd: string;
  include?: string;
};

const unique = <T>(value: T, index: number, self: T[]) => self.indexOf(value) === index;

/**
 * Get the list of changed packages as a string
 */
export const changedPackages = async ({ cwd, include }: ChangedPackagesArgs): Promise<string> => {
  const project = new Project(cwd);
  const packageGraph = new PackageGraph(await project.getPackages());
  const execOptions = { cwd };
  const options = {};

  const updates: string[] = (<Updated[]>collectUpdates(packageGraph.rawPackageList, packageGraph, execOptions, options))
    .map((node) => node.pkg)
    ?.map(({ name }) => name);

  const includedPackages = (include ?? '').replace(/^["']?{|}["']?$/g, '').split(',');

  const changed = [...includedPackages, ...updates].filter(unique);

  if (changed.length === 1) {
    return changed[0];
  }

  return changed.length ? `{${changed.join(',')}}` : '';
};
