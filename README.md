# Jetti API

under construction

## Heroku

**important note**

Prisma generates code in `node_modules/@generated` and Heroku removes it automatically because it thinks that it is a devDependency. Set env `NPM_CONFIG_PRODUCTION` to `false` and it will not prune devDependencies.
