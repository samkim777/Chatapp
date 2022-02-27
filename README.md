#Troubleshooting
The point of this file is to figure out what types of problems I encountered while working on this project, and what steps I took to solve such problems.

##1. Unable to import functions
I could not import components and encountered error like 'Object not defined' when trying to import them. This was because I did not call the components inside of my view.

##2. Pressable components with image and text
While trying to make a component that a user could see its image and text and be able to press it, I realized I should be using a button, not a sectionlist.

### Aligning image and text

I couldn't put image and text on one line, so this was frustrating because my project wasn't advancing due to something so simple. Turns out the solution is equally simple: Just put the image inside text component

##3. Putting image and text beside each other in a pressable component
I can't figure out how to put text and image next to each other in a neat way inside pressable. I got the pressable to work, but I can't figure out the layout of this component.
