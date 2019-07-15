const keys = require('./keys');
console.log(keys)
const redis = require('redis');

const redisClient = redis.createClient({
  host: 'clustermulti-docker-redis.0l33fx.0001.apse1.cache.amazonaws.com',
  port: 6379,
  retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
	console.log('channel', channel);
		console.log('message', message);
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
