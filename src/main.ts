import * as core from '@actions/core';
import { changedPackages } from './changed-packages';

(async function run() {
  try {
    const cwd = core.getInput('cwd') || process.cwd();
    const changed = await changedPackages(cwd);

    process.stdout.write(changed);

    core.setOutput('scope', changed);
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
})();
