const CounterV1 = {
    count: 0,
    counter: function() {
      setInterval(() =>{
        // this.count++;
        console.log(this.count++);
      }, 1000);
    },
  };
  CounterV1.counter();