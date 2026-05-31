import { defineCliConfig } from 'sanity/cli'
import path from 'path'

export default defineCliConfig({
  api: {
    projectId: 'iymmq5x6',
    dataset: 'production'
  },
  studioHost: 'leanity-labs',
  vite: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: [
        ...(config.resolve?.alias || []),
        {
          find: 'yoastseo/src/config/content/default.js',
          replacement: path.resolve('node_modules/yoastseo/src/config/content/default.js')
        }
      ]
    }
  })
})
