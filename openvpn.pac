function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.t-mobile.com") || shExpMatch(host, "roccstarwireless.com") || shExpMatch(host, "*.roccstarwireless.com")) {
    return "PROXY 10.32.7.75:3128"; // Use Squid proxy
  } else {
    return "DIRECT"; // Use direct connection for everything else
  }
}
