const command = (config, opt) => {
  const args = [
    '--terse',
    '--fields',
    'active,ssid,bssid,mode,chan,freq,signal,security,wpa-flags,rsn-flags,bars',
    'device',
    'wifi',
    'list'
  ];

  if (config.iface) {
    args.push('ifname');
    args.push(config.iface);
  }
  
  if (opt.rescan === true) {
    args.push('--rescan');
    args.push('yes');
  }
  return {
    cmd: 'nmcli',
    args
  };
};

module.exports = command;
