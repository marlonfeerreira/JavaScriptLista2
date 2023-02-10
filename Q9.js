function ipv4_bits(ip) {
    let parts = ip.split('.');
    let result = '';
    for (let i = 0; i < parts.length; i++) {
      let part = parseInt(parts[i]);
      let bits = part.toString(2);
      while (bits.length < 8) {
        bits = '0' + bits;
      }
      result += bits;
    }
    return result;
  }
console.log(ipv4_bits("192.168.0.1"))
console.log(ipv4_bits("172.16.0.254"))