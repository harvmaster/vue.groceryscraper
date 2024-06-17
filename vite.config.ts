import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Component({
      dts: true,
      resolvers: [
        RadixVueResolver({
          prefix: 'Rd',
        })
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
    // host: process.env.VITE_HOST || 'localhost',
    port: (process.env.VITE_PORT && parseInt(process.env.VITE_PORT)) || 3000,
  }
})
