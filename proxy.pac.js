function FindProxyForURL(url, host) {
  var direct = 'DIRECT';
  var http_proxy = 'PROXY http-server.net:8080';
  var socks_proxy = 'SOCKS5 socks-server.net:1080';
  var blocked_list = [
    ///////////////////////
    // self inspired list
    ///////////////////////
    'dropbox',
    'twitter',
    'bit\.ly',
    'bitly',
    'mobilepicture',
    'tinypic',
    'twitpic',
    'yfrog',
    'twimg',
    '^t\.co$', // 因为这个域名太短实在是个特例，所以必需头尾匹配，否则会把microsoft.com都给翻墙
    'wordpress',
    'google',
    'goo\.gl',
    'blogspot',
    'gstatic',
    'ggpht',
    'appspot',
    'blogger',
    'keyhole',
    'feedburner',
    'gmail',
    'android\.com',
    'panoramio',
    'youtube',
    'ytimg',
    'facebook',
    'fbcdn',
    'quora',
    'godaddy',
    'instagram',
    'flickr',
    'optimizely',
    'geotrust',
    'digicert',
    'torproject',
    'sstatic',
    'wiki', // 管它哪个wiki，一律翻
    'github',
    'boxun',
    'epochtimes',
    'dajiyuan',
    'aboluowang',
    'shadowsocks',
    'minghui',
    'noip',
    'no-ip',
    'dyndns',
    '6park',
    'dongtaiwang',
    'ntdtv.com',
    'kanzhongguo',
    'zhengjian',
    'wujie',
    'voanews',
    '\.hk', // 香港
    '\.tw', // 台湾
    'yahoo',
    'linkedin',
    'imgur',
    'fangzhouzi',
    'fangshimin',
    'typekit', // adobe typekit.com, typekit.net
    'sourceforge',
    'wp\.com',
    'wsj', // wsj.com, wsj.net
    'qz\.com',
    'gravatar',
    'j\.mp', // bitly 另一个短网址服务
    'cloudfront',
    'amazonaws\.com',

    /////////////////////////////////////
    // GREAT FIRE WALLed hot domain list
    /////////////////////////////////////
    'facebook.com',
    'youtube.com',
    'twitter.com',
    'blogspot.com',
    'blogger.com',
    'netflix.com',
    'blogspot.in',
    'dailymotion.com',
    'youporn.com',
    'nytimes.com',
    'nyt.com',
    'pixnet.net',
    'slideshare.net',
    'hootsuite.com',
    'soundcloud.com',
    'archive.org',
    'blogspot.com.br',
    'hardsextube.com',
    'mobile01.com',
    'bloomberg.com',
    'elpais.com',
    'blogspot.de',
    'adultfriendfinder.com',
    'xing.com',
    'eyny.com',
    'istockphoto.com',
    'swagbucks.com',
    'macys.com',
    'drtuber.com',
    'liveleak.com',
    'lemonde.fr',
    'turbobit.net',
    'blogspot.jp',
    'cam4.com',
    'spankwire.com',
    'nuvid.com',
    'sex.com',
    'subito.it',
    'bitshare.com',
    'yourlust.com',
    'pastebin.com',
    'pchome.com.tw',
    'redtube.com',
    'vimeo.com',
    'wordpress.com',
    'dropbox.com',
    'xvideos.com',
    'blogspot.com.es',
    'fc2.com',
    'tube8.com',
    'ck101.com',
    'hidemyass.com',
    'wsj.com',
    'xtube.com',
    '123rf.com',
    'xhamster.com',
    'change.org',
    'bet365.com',
    'theguardian.com',
    'pornhublive.com',
    'feedburner.com',
    'pornhub.com'
  ];

  // is in blocked_list?
  blocked = function(host_name) {
    for (i = 0; i < blocked_list.length; i++) {
      if ((new RegExp(blocked_list[i])).test(host_name)) {
        return true;
      }
    }
    return false;
  }

  // debugPAC ="PAC Debug Information\n";
  // debugPAC +="-----------------------------------\n";
  // debugPAC +="Machine IP: " + myIpAddress() + "\n";
  // debugPAC +="Hostname: " + host + "\n";
  // if (isResolvable(host)) {resolvableHost = "True"} else {resolvableHost = "False"};
  // debugPAC +="Host Resolvable: " + resolvableHost + "\n";
  // debugPAC +="Hostname IP: " + dnsResolve(host) + "\n";
  // if (isPlainHostName(host)) {plainHost = "True"} else {plainHost = "False"};
  // debugPAC +="Plain Hostname: " + plainHost + "\n";
  // debugPAC +="Domain Levels: " + dnsDomainLevels(host) + "\n";
  // debugPAC +="URL: " + url + "\n";

  // // Protocol can only be determined by reading the entire URL.
  // if (url.substring(0,5)=="http:") {protocol="HTTP";} else
  //     if (url.substring(0,6)=="https:") {protocol="HTTPS";} else
  //         if (url.substring(0,4)=="ftp:") {protocol="FTP";}
  //             else {protocol="Unknown";}
  // debugPAC +="Protocol: " + protocol + "\n";

  // alert(debugPAC);
  // if (blocked(host) == true) {
  //   alert("PROXYED!! :: " + host );
  // } else {
  //   alert("No! -_-! " + url);
  // }

  return blocked(host) ? http_proxy + '; ' + socks_proxy + '; ' + 'DIRECT' : direct;
};
