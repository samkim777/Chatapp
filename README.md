#Troubleshooting
The point of this file is to figure out what types of problems I encountered while working on this project, and what steps I took to solve such problems.

### 1. Unable to import functions

I could not import components and encountered error like 'Object not defined' when trying to import them. This was because I did not call the components inside of my view.

### 2. Pressable components with image and text

While trying to make a component that a user could see its image and text and be able to press it, I realized I should be using a button, not a sectionlist.

### Aligning image and text

I couldn't put image and text on one line, so this was frustrating because my project wasn't advancing due to something so simple. Turns out the solution is equally simple: Just put the image inside text component

### 3. Putting image and text beside each other in a pressable component

I can't figure out how to put text and image next to each other in a neat way inside pressable. I got the pressable to work, but I can't figure out the layout of this component.
I wasn't able to move elements inside view how I wanted, so I ended up putting them in seperate view elements and moving those around to achieve the goal.

### 4. Unable to render multiple of the same view stack inside chatlist.js file

When trying to render the same bit of code, I get an error saying '.. jsx expressions must have one parent element'. It is because the chatlist function can only return one thing at a time, and I was trying to return multiple things at once. To bypass this, I read a bit about props, and implemented that into the code. Each profile with their respective messages will be under 'Profile.js', which will then be called inside the 'Chatlist.js' function.

### 5. Unable to execute JS call: \_\_fbBatchedBridge is undefined

This error popped up when trying to use props. Turns out, the problem was with the Image element where I needed another 'require()' inside ChatList.js that used Profile.js
