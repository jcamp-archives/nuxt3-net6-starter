import https from 'https'
// require('process')

// const { env } = process

// const target = env.ASPNETCORE_HTTPS_PORT
//   ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
//   : env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:5001'

// Not sure why, but this does seem to work.
// https://stackoverflow.com/questions/53914519/http-proxy-middleware-to-modify-port-only

const proxy = {
  target: 'https://[::1]:5001',
  secure: false,
  agent: new https.Agent(),
}

export default {
  '/weatherforecast': proxy,
  '/api': proxy,
}
