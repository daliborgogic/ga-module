export default async function ({ app: { router } }) {
  if (process.env.NODE_ENV !== 'production') return

  const KEY = 'ga:user'
  const UID = (localStorage[KEY] = localStorage[KEY] || Math.random() + '.' + Math.random())

  function encode(obj) {
    let k
    let str = 'https://www.google-analytics.com/collect?v=1'
    for (k in obj) {
      if (obj[k]) {
        str += `&${k}=${encodeURIComponent(obj[k])}`
      }
    }
    return str
  }

  class GA {
    constructor(ua, opts = {}) {
      this.args = Object.assign({ tid: ua, cid: UID }, opts)
      this.send('<%= options.type %>')
    }

    send(type, opts) {
      if (type === 'pageview' && !opts) {
        opts = { dl: location.href, dt: document.title }
      }
      let obj = Object.assign({ t: type }, this.args, opts, { z: Date.now() })
      new Image().src = encode(obj)
    }
  }

  router.onReady(() => {
    const ga = new GA('<%= options.trackingID %>')
    router.afterEach(to => ga.send('<%= options.type %>', { dp: to.fullPath }))
  })
}
