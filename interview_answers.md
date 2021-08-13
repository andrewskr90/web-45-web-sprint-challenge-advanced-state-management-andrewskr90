# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    While working in applications with numerous components, it becomes cumbersome to pass down data via props. Context API replaces prop drilling with a root source that can be accessed anywhere within the app.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -Actions are objects containing information to be dispatched to a reducer. Each action object contains a specific type, making a dispatch to the reducer unique.
    -Reducers take in a dispatched action, and returns a new state unique to that action.
    -The store holds the state values returned from the reducer, any component that is connected to the store can access these state values.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    Redux-thunk allows asynchronous flow in our action creators, opposed to vanilla redux action-creators being exlusively synchronous. This makes our action-creators capable of making API calls.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux is my favorite state management system. I like how it's logically organized, with the store linked to the whole application with the connect function. It organizes the dispatching of action creators with connect's second parameter, and the first parameter mapStateToProps clearly passes the slices of state you need within each component.