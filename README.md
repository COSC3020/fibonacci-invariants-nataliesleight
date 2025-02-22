# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Invariant: The elements in the $arr[0, length-n+1]$ (where length is the input value and n is 
the length decremented by the number of recursive loops) hold numbers of the Fibonacci sequence
up to length-n+1 (with the first element 0 counting as the "zeroth" value). 

The array is what is being built so the array is what I believe will be the invariant.
Once the loop is reached, an array holding $[0,1]$ already exists and n will equal length because 
n is decremented during the loop. Thus length-n will just equal 0 so 1 must be added to account 
for the other already existing value in the array.

As each loop occurs, n is decremented by one so length-n+1 will be one value larger, 
accounting for each item each recursive call adds to the array. Once n==1, the loop will
terminate and at the beginning of the loop length-n+1 will equal just the length. Accounting
for the 0 index, length will correspond to the position in the array desired by the input, 
completing Fibonaccu sequence to the desired amount.

### Sources:

I used this link to learn how to append items to the end of an array: https://www.geeksforgeeks.org/how-to-add-elements-to-the-end-of-an-array-in-javascript/

I used the note slides for Insertion Sort and this link to help me understand invariants: https://www.geeksforgeeks.org/loop-invariant-condition-examples-sorting-algorithms/# 

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” - Natalie Sleight
