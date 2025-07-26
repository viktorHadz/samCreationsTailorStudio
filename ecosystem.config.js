module.exports = {
  apps: [{
    name: 'sam-creations',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/home/vik-usr/prod/samCreations',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 4270
    }
  }]
}
