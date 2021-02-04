# 100 Days Of Code - Log

<!-- ### Day 0: February 30, 2016 (Example 1)
##### (delete me or comment me out)

**Today's Progress**: Fixed CSS, worked on canvas functionality for the app.

**Thoughts:** I really struggled with CSS, but, overall, I feel like I am slowly getting better at it. Canvas is still new for me, but I managed to figure out some basic functionality.

**Link to work:** [Calculator App](http://www.example.com)

### Day 0: February 30, 2016 (Example 2)
##### (delete me or comment me out)

**Today's Progress**: Fixed CSS, worked on canvas functionality for the app.

**Thoughts**: I really struggled with CSS, but, overall, I feel like I am slowly getting better at it. Canvas is still new for me, but I managed to figure out some basic functionality.

**Link(s) to work**: [Calculator App](http://www.example.com) -->

### Day 1: 11 January 2021 (Monday)

**Today's Progress**: I learned how to use Redux Toolkit with Redux and TypeScript.

**Thoughts**: The toolkit provides a much better dev experience when using React, Redux, and TypeScript together, especially in terms of seting up. I might keep using it for situations when the toolkit would do.

([Link](https://github.com/caldric/react-redux-practice/tree/main/redux-typescript))

### Day 2: 12 January 2021 (Tuesday)

**Today's Progress**: I learned how to create my own Promise.

**Thoughts**: I was unable to use async/await with an async function that didn't return a Promise. When taking breaks and reading the docs, creating a Promise is suprisingly easy. Take more breaks!

(Source code: [`promises.ts`](https://github.com/caldric/100-days-of-code/blob/master/exercises/promises.ts))

### Day 3: 13 January 2021 (Wednesday)

**Today's Progress**: I worked on converting my work-in-progress Jira project from MERN to MERN + TypeScript + Redux + Jest + Enzyme.

**Thoughts**: I became stuck at trying to write a unit test for the `onChange` function of the input element. I'm glad that I stepped away from it because I definitely would not have been productive otherwise.

([GitHub repo](https://github.com/caldric/jira-clone))

### Day 4: 14 January 2021 (Thursday)

**Today's Progress**: I learned more on how to use mock functions and simulate user actions in Jest + Enzyme on a React + TS + Redux app.

**Thoughts**: React class components seem to be much easier to test than their function component counterparts. Is it because it's been around longer and support for function components isn't as readily available? In any case, I'm glad I know class components and can easily switch back and forth between the two.

([GitHub repo](https://github.com/caldric/jira-clone))

### Day 5: 16 January 2021 (Saturday)

**Today's Progress**: I did a HackerRank challenges in the dictionaries and hashmaps category using Python.

**Thoughts**: While I'm not new to this problem pattern, I'm noticing that I'm getting just a little bit faster and better, whether it's from generating the algorithm for the solution, or remembering the necessary methods for given step.

(Source code: [`ransom_note.py`](https://github.com/caldric/dsa/blob/main/ransom_note.py))

### Day 6: 17 January 2021 (Sunday)

**Today's Progress**: I built a "Pomodoro timer" bash script with more bite.

**Thoughts**: I built this in order to help with my tendency to ignore the Pomodoro timers I set. The script automatically sends the computer to sleep after a variable number of minutes based on my input (e.g., `./sleep.sh 50`). I learned more about functions, function arguments, and sending processes to the background using "&".

(Source code: [`sleep.sh`](https://github.com/caldric/config/blob/main/scripts/sleep.sh))

### Day 7: 18 January 2021 (Monday)

**Today's Progress**: I learned client-side form validation using React and TypeScript.

**Thoughts**: I haven't done any sort of form validation before and forms in the real world typically have validation. Since Atlassian's Jira has it, I needed to learn it in order to incorporate it into my clone. I think I got the basics down, and I will most likely be implementing both client-side and server-side validation if not just the latter.

([GitHub repo](https://github.com/caldric/100-days-of-code/tree/master/exercises/client-side-form-validation/src))

### Day 8: 20 January 2021 (Wednesday)

**Today's Progress**: I solved a [CodeSignal challenge](https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB/description) on arrays using Python 3. The task is to rotate an image. The input is a 2D n x n array.

**Thoughts**: This challenged me a bit and reinforced that practicing will make me faster at doing code challenges. I especially felt frustrated when I felt that I was moving slow and I saw the one line solution of others. However, from what I know the top solutions do not fulfill the O(1) additional space requirement.

(Source code: [`rotate_image.py`](https://github.com/caldric/dsa/blob/main/rotate_image.py))

### Day 9: 21 January 2021 (Thursday)

**Today's Progress**: I originally set out to recreate the Array.prototype.map method on JavaScript. I didn't feel challenged, so I recreated it on TypeScript.

**Thoughts**: I didn't know until now that there there was an `array` parameter in the callback function and a `thisArg` parameter in the map method. I still don't know when I would use these. I'm also not sure what `U` means. My guess is that it's a way to reference the return value of the callback function and assign `U[]` as the return value of the map method without having to use the `ReturnType<Type>` utility type.

(Source code: [`arrayMap.ts`](https://github.com/caldric/100-days-of-code/blob/master/exercises/arrayMap.ts))

### Day 10: 22 January 2021 (Friday)

**Today's Progress**: Today, I learned more about ECMAScript.

**Thoughts**: I became curious about ECMAScript (ES) and its relationship to JavaScript. There are different version of JavaScript and not all browsers are compatible with later versions of JavaScript. I also see the ES versions a lot when working with TypeScript. Simply put, JS is an ES dialect that conforms to the ES spec (called the ECMA-262).

([Proof of work completed](https://www.linkedin.com/feed/update/urn:li:share:6758566287993032704))

### Day 11: 24 January 2021 (Sunday)

**Today's Progress**: I learned about tmux + Neovim and tried to set up an IDE with it.

**Thoughts**: tmux + Neovim shows some promise, however, it is very hard to set up. Now, I'm appreciating VS Code more. While I may prefer using tmux + Neovim in the future, as a complete configuration enables you to have a much more efficient workflow without using the mouse, as of now I haven't replicated VS Code features on my tmux + Neovim environment.

([Proof of work completed](https://www.linkedin.com/feed/update/urn:li:share:6759545762801094656))

### Day 12: 26 January 2021 (Tuesday)

**Today's Progress**: Today, I built an Express API for my next project: Divs Against Hoomanity (an online version of the game _Cards Against Humanity_).

**Thoughts**: I haven’t been working on projects for a while, so this is a good exercise on working on both the back and front end, deployment, project/time management, testing, WebSockets, and so on. It’s a good way for me to get back into building projects since this is something I’m inherently excited to build. I’m a bit rusty and I began to get overwhelmed with what I needed to start working on, so I just decided to start somewhere and organize my plan and thoughts once I get the ball rolling.

([Last push of the day](https://github.com/caldric/divs-against-hoomanity-api/commit/525787e86ce9816ab8bc31b654d997fe99c78ccb))

### Day 13: 28 January 2021 (Thursday)

**Today's Progress**: Today, I added TypeScript and some automated tests for Divs Against Hoomanity. I'm using Mocha, Chai, and Supertest for testing.

**Thoughts**: Since I've already gained some experience at writing automated tests, I wanted to take a crack at it for my API instead of doing manual testing with Postman. I read somewhere that a smaller project will probably not benefit much from TypeScript. In fact, it will even be detrimental to the development speed. I definitely notice this. Despite that, I intend to keep using it to gain proficiency across as many contexts as I can. Like when I was first learning Vim or learning to type on Colemak, I wouldn't have gotten better if I didn't force myself to use it. I'm new to testing APIs and this definitely stretched my brain for today.

([Last push of the day](https://github.com/caldric/divs-against-hoomanity-api/commit/b8089b513326a4d9981f97780e25950fd9901625))

### Day 14: 29 January 2021 (Friday)

**Today's Progress**: Today, I worked more on the DAH project. I added an interface for the black cards and completed writing the tests for all of the endpoints so far.

**Thoughts**: I feel the pain of using TypeScript with Express again. It feels as if Express and any other libraries/frameworks connected to it are not optimized for TypeScript. Even the Mongoose docs does not return results when you search TS within it. Writing the remaining test for the POST request presented a bit of a challenge, but not as much as using TS with Mongoose. The challenge from writing the test just came from the fact that I had to submit some data unlike a GET request and that I'm not familiar with the different Chai assertions.

([Last push of the day](https://github.com/caldric/divs-against-hoomanity-api/commit/a01b73933eb972d3cc6f210b7f45484fc49415c5))

### Day 15: 2 February 2021 (Tuesday)

**Today's Progress**: I implemented my own Array in JavaScript.

**Thoughts**: I wanted to better learn and understand arrays by implementing my own Array class. Since one implementation of a stack seemed to rely on Array methods, I wanted to implement an array first.

(Source code: [`Array.js`](https://github.com/caldric/100-days-of-code/blob/master/exercises/Array.js))

### Day 16: 2 February 2021 (Tuesday)

**Today's Progress**: I implemented my own Stack in JavaScript using Linked Lists.

**Thoughts**: Since I used Linked Lists, I'll do Linked Lists next.

(Source code: [`Stack.js`](https://github.com/caldric/100-days-of-code/blob/master/exercises/Stack.js))

### Day 17: 3 February 2021 (Wednesday)

**Today's Progress**: I switched my shell from zsh to fish, installed fisher, some fish plugins, Tide (fish's P10k) and the Hyper and Alacritty terminal emulators.

**Thoughts**: Fucking awesome. I'm loving it. Not quite the productivity I had in mind, but sometimes you just gotta let go and dive down the rabbit hole.

