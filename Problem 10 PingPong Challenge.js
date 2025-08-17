function findPingPong(number) {
  const pingPong = [];
  for (let i = 1; i <= number + 1; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      pingPong.push("PingPong");
    } else if (i % 5 === 0) {
      pingPong.push("Pong");
    } else if (i % 3 === 0) {
      pingPong.push("Ping");
    } else {
      pingPong.push(i);
    }
  }
  return pingPong.join(",");
}
const a = findPingPong(20);
console.log(a);
