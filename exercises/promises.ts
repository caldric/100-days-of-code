// Create a "waitOneSecond" function that returns a Promise that uses setTimeout
const waitOneSecond = (elapsedSeconds: number) =>
  new Promise((resolve, reject) => {
    // Make Promise randomly fail at times
    const threshold: number = 0.8;
    const randomNumber: number = Math.random();
    const units: string = elapsedSeconds === 1 ? 'second' : 'seconds';

    // Call either the resolve or reject function after one second
    setTimeout(
      () =>
        randomNumber < threshold
          ? resolve(
              `Resolved at ${elapsedSeconds} ${units}; number: ${randomNumber}`
            )
          : reject(
              `Rejected at ${elapsedSeconds} ${units}; number: ${randomNumber}`
            ),
      1000
    );
  });

// Create a function that calls the waitOneSecond function
const callWaitOneSecond = async () => {
  for (let s = 1; s <= 10; ++s) {
    try {
      console.log(await waitOneSecond(s));
    } catch (error) {
      console.log(error);
    }
  }
};

// Invoke the caller function
callWaitOneSecond();
