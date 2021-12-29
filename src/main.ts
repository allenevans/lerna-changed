import * as core from '@actions/core';
import { changedPackages } from './changed-packages';

(async function run() {
  try {
    const cwd = core.getInput('cwd') || process.cwd();
    const include = core.getInput('include') || process.cwd();

    const changed = await changedPackages({ cwd, include });

    core.setOutput('scope', changed);

    process.stdout.write(changed);
  } catch (error: unknown) {
    core.setFailed((error as Error).message);
    process.exit(1);
  }
})();
