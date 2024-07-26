function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.t-mobile.com")) {
    return "PROXY 10.32.7.64:3128"; // Use Squid proxy
  } else {
    return "DIRECT"; // Use direct connection for everything else
  }
}
