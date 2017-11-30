let http_api = 'http://apidev.swisstimevip.com:8000'
let http_url = 'http://wapdev.swisstimevip.com:8000'
let version = 'v1'
module.exports = {
  prov_url: {
    // // 测试
    FRIENDS: `"${http_url}/friends"`,
    MARKET: `"${http_url}/market"`,
    NEWS: `"${http_url}/news"`,
    USER: `"${http_url}/user"`,
    VIP: `"${http_url}/vip"`
  },
  dev_url: {
    FRIENDS: '"http://192.168.10.104:8071"',
    MARKET: '"http://192.168.10.104:8055"',
    NEWS: '"http://192.168.10.104:8074"',
    USER: '"http://192.168.10.104:8073"',
    VIP: '"http://192.168.10.104:8075"'
  },
  prov_api: {
    DICT: `"${http_api}/dict/${version}"`,
    FINANCE: `"${http_api}/finance/${version}"`,
    FRIENDS: `"${http_api}/friends/${version}"`,
    MARKET: `"${http_api}/market/${version}"`,
    NEWS: `"${http_api}/news/${version}"`,
    SYSTEM: `"${http_api}/system/${version}"`,
    USER: `"${http_api}/user/${version}"`,
    VIP: `"${http_api}/vip/${version}"`
  },
  dev_api: {
    DICT: `"${http_api}/dict/${version}"`,
    FINANCE: `"${http_api}/finance/${version}"`,
    FRIENDS: `"${http_api}/friends/${version}"`,
    MARKET: `"${http_api}/market/${version}"`,
    NEWS: `"${http_api}/news/${version}"`,
    SYSTEM: `"${http_api}/system/${version}"`,
    USER: `"${http_api}/user/${version}"`,
    VIP: `"${http_api}/vip/${version}"`
  }
}
