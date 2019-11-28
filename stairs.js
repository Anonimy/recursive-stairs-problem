(function () {
  function num_ways(n, steps) {
    if (n === 0) {
      return 1;
    }

    let total = 0;
    steps.forEach(step => {
      const currentStep = n - step;
      if (currentStep >= 0) {
        total += num_ways(currentStep, steps);
      }
    });

    return total;
  }

  console.log( num_ways(4, [1, 2]) );
})();