import * as core from '@actions/core';
import { changedPackages } from './changed-packages';

(async function run() {
  try {
    const cwd = core.getInput('cwd') || process.cwd();
    const envVar = core.getInput('variable');
    const changed = await changedPackages(cwd);

    process.stdout.write(changed);
    if (envVar) {
      core.exportVariable(envVar, changed);
    }
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
})();
