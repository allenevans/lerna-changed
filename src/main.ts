import * as core from '@actions/core';
import { changedPackages } from './changed-packages';

(async function run() {
  try {
    const cwd = core.getInput('cwd') || process.cwd();
    const changed = await changedPackages(cwd);

    core.setOutput('scope', changed);

    process.stdout.write(changed);
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
})();
