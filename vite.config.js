import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { exec } from 'node:child_process'

function openInChrome() {
  return {
    name: 'open-in-chrome',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address()
        const port = typeof address === 'object' && address ? address.port : 5173
        const url = `http://localhost:${port}/`

        exec(`start chrome "${url}"`, (err) => {
          if (err) exec(`start "" "${url}"`)
        })
      })
    },
    configurePreviewServer(server) {
      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address()
        const port = typeof address === 'object' && address ? address.port : 4173
        const url = `http://localhost:${port}/`

        exec(`start chrome "${url}"`, (err) => {
          if (err) exec(`start "" "${url}"`)
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), openInChrome()],
  server: {
    open: false,
    port: 5173,
  },
  preview: {
    open: false,
    port: 4173,
  },
})
