### Toast Implementation notes:

In addition to comments in the code this document outlines thoughts, goals and challenges.

#### General thoughts:
Conceptually the challenge seemed generally easy. Where I faced challenges was getting back into React and thinking in React, i.e., re-renders on state changes or prop updates, setting state being async, etc., plus some things have changed in regards to lifecycle methods (some I used are now a bad practice, for others they recommend better ways, like memoization). The container/component separation is new since I worked in React. 

Also, the idea of side effects in a reducer isn't something I've done, so I have no idea if my implementation is on the right track or not. I have some trouble believing what I did there is a good pattern, it reminds me of pub/sub apps where there is a lot going on that can be a challenge to find and understand. I'm definitely interested in feedback about this.

Hopefully I didn't leave any semicolons--after 20+ years of requiring them and they are a habit. Same for trailing commas in objects--my linter config requires them but I tried to match your style. 

#### What I aimed for:

- a notification component (_toast_) at the global level so it could be utilized by any component
- context-specific toasts: success, error, warning, info, differentiated by color and icons
- a text field that persists user input on error but clears on success
- toast and transformation results dismiss at appropriate times (don't persist across routes)
- a bit of styling, mostly via `material-ui`


#### Particular challenges:

- I'm not happy with how I clear the text field. To achieve it I added `input` to the `store` and reset `error` to `null` in the `TRANSFORM_VALUE_SUCCESS` reducer, then used all of that in `componentDidUpdate`. This feels like a bit of an issue where we rely on both `store` and component `state`. I'd at least want to explore moving this all to the `store` so that on each submit we could set a property that indicates the current state to display (clear the text field or not, error or not, etc.). Or, the UX I'd want to explore here would be to disable the form (maybe with a "We're transforming..." message or animated progress indicator) and then enable the form once a response is received, either by clearing the input on success or leaving it as is on error.

- I'm not sure the dispatching I do to control the transform and toast state is the best way. I played with adding a function to the reducer like you did with `transformToLowerCase` but that's an approach I'm not familiar with and it feels a bit odd to me--calling a function to dispatch an action that calls a reducer. I like it but wasn't sure if it's a best practice.

- I'm curious what role hooks, if any, could have played here. The version of React installed in this repo doesn't support hooks. But [this section](https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components) and [this section](https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components) of the official docs reflect some of the concerns I had doing this so I'm excited to dig in and learn more.

- As you'll see I brought in `material-ui`. I manually handled some bits that it can natively do, such as button colors and icons based on type (`warning`, `success`), etc. That wouldn't be my final solution but I'd need to spend more time in their docs. I've used `material-ui` before but it's been some time.
