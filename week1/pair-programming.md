 # Pair programming
 > Pair programming is an agile software development technique in which two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.

 ## Methods:

**1. Ping pong.** One student starts by creating a single failing test and then each student takes it in turns to first write code to make the test pass and then to write a new failing test before passing the keyboard back to their partner.  

**2. The driving test.** One student sits at the computer and the other student acts as examiner. the student being examined should explain their thinking as they work. Whenever the examiner thinks the other student is being too quiet or does not understand something, she can ask for more information, but otherwise should offer no advice nor provide any feedback.  

**3. The back-seat driver.** This is similar to the driving test, but in this case the examiner sits at the keyboard and follows the instructions of the other student. Again, the examiner should provide no advice, but can request clarification or an explanation of why she is being asked to do something.

**4. The driving instructor.** In this case, the person not at the keyboard should lead a discussion about the code through a series of questions. If desired, she can use the coding questions crib sheet for assistance.

## Tips

1. Communicate well with your partner.

2. Before you start coding discuss the best workflow for both of you.

3. Read through and discuss the problem to make sure you understand it.

4. Solve the problem with pseudo-code by identifying the steps you need to take in order to get from the given inputs to the expected result.

5. Create your actual solution.

6. When explaining things: Ask questions to guide your partner’s thoughts instead of just showing the answer right away. This will let him or her think about the problem and make it easier for them to learn.

7. Finally, be open to your partner’s ideas, respect each other and have fun!

## [Exercise: Reverse words](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

>Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

```javascipt

Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

```

## Solution:

```javascript

function reverseWords(str) {
    let arr = [];
    arr = str.split(' ');
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        reversed.push(word.split('').reverse().join(''));
    }
    return reversed.join(' ');
  }

```

### Partner: Collete [@coletterbox](https://github.com/coletterbox)
