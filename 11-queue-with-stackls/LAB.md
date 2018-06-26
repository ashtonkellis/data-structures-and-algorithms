Code Challenge
Implement a Queue using two Stacks.

Implement the following methods for the Queue class:

enqueue(value) which inserts value into the Queue using a first-in, first-out approach.
dequeue() which extracts a value from the Queue using a first-in, first-out approach.
You have access to 2 Stack instances with push and pop methods.

Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

Example
enqueue(value)
Input	Args	Output
[10]->[15]->[20]	5	[5]->[10]->[15]->[20]
 	5	[5]
dequeue()
Input	Output	Internal State
[5]->[10]->[15]->[20]	20	[5]->[10]->[15])
[5]->[10]->[15]	15	[5]->[10]
Documentation: Your README.md
# Implement a Queue using two Stacks.
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Solution
<!-- Embedded whiteboard image -->

Submission Instructions
Take a photo of your completed whiteboard, matching the example whiteboard layout
Copy your photo into an /assets directory in your repo
Give the image file the same name as the branch you are working on
Embed the image in your README.md documentation
Create a pull request from your branch to your master branch
In your open pull request, leave as a comment a checklist of the specifications and tasks above, with the actual steps that you completed checked off
Submitting your completed work to Canvas:
Copy the link to your open pull request and paste it into the corresponding Canvas assignment
Leave a description of how long this assignment took you in the comments box
Add any additional comments you like about your process or any difficulties you may have had with the assignment
Merge your branch into master, and delete your branch (don’t worry, the PR link will still work)