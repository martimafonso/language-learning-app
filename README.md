# About

This application is created using React, using hooks, styled-components, and react-router-dom.
My Goal for this is to become something that people can actually use to get them started in their prefered language.

# Development

To run locally, execute `npm start`, application will open under `localhost:3000`


# Some Difficulties

Firstly, I had to learn react-router-dom. Initially I had just used a hook to change the page to render the wanted components.
But luckily, before this gets too big, I implemented the routes and it was actually extremely easy to understand how to use it.

Secondly, I hadn't had to much exposure to using state (I'm new to React) and I've gotten somewhat comfortable using hooks.
I've used class state, you know, this.state, so it made sense it wouldn't be too difficult. One thing that did annoy me was
the fact you couldn't use the setWhatever too many times or it would throw you an error but I learned how to make the 
app more efficient and use less.

Another difficulty was making styles be dynamic corresponding to state. I set up definers like isCorrect and isCurrent into the state
in order for this to work. This makes it so, in the matching game components, you can only select 2 items and a style appears per selected 
item and fully disappears when that second item gets selected. Also when 2 items are selected and the items DO NOT MATCH a component appears
telling you what you selected was wrong. Also if you choose 2 correct items the opacity on each item gets changed to be more invisible, letting
the user know you got them correct.
