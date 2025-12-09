console.log('Start');
setTimeout(() => {console.log('ss');},0)
process.nextTick(() => {
  console.log('Next tick callback');
});
console.log('End');
