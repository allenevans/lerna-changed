# Lerna Changed

A github action for returning the list of changed packages in a lerna monorepo.

Example usage:-

```
name: example-pipline
on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: changed packages
        id: changed_packages
        uses: allenevans/lerna-changed@master

      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJson(steps) }}
        run: |
          echo "$STEPS_CONTEXT"
          echo "scope=${{steps.changed_packages.outputs.scope}}"
```
