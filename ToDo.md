## Technical Support Representative Decision-Tree App ##

- App initialization: only the top level of the decision tree is displayed.

- Each level is either a problem description or a solution description.

- Create a reusable component to represent an option of the decision tree. The component will recieve as props it's title and it's sub-tree. 

- Use an external library to render components as a tree chart (learn about gojs or d3)

- When a component is clicked: 
  - Expand it's sub-tree whole level (render components to the screen) 
  - Disable it's siblings

- Show a Breadcrumbs string on the buttom of the page. When a component is clicked add it's step to the string.

- Final step options: 
  - It worked. 
  - Did not work - Try new path - return to the second step (_or to the last problem description step_). Another new breadcrumbs string will appear under the existing one.

- Create a component which will be a "done" button. When it is clicked the app returns to the initial state.

CRUD operations:
- Add the ability to ADD a new option on each level of the tree with user's input. Update the database and render accordingly.
- Add the ability to DELETE an option. Update the database and render accordingly.
- _Extra: Add the ability to EDIT an option. Update the database and render accordingly._

Database:
- Use firebase to mock a backend server (which will give “realtime” updates to data as it changes in the database).


_Extra features when a component is clicked:_
  - Count and save the number of times an option was clicked. Save it to the database and render on each option the number of times it was ever clicked. Purpose: to know which decision path is more common, what is less common. 
  
  - Calculate the time elapsed between this component was clicked until the next step.
  - Calculate a branch amount of time: how much time on avarage each branch has taken - from the current step until a resolution was found. Save this info for each option to the database. Display this information on each option.



 
