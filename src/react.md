// 1. JSX is a syntactic sugar for React.createElement
// 2. JSX can selfclose <div />
// 3. User defined components should start with a capital letter
// 4. You can use Js expressions inside of JSX using {}
// 5. You can nest components just like you can in html
// 6. Nested content can be accessed in props.children

// 7. Before the hooks API, we use class components for every components
    that must have state or some logic in them. It gave access to 
    the lifecyle method.
    This is now achieved with UseState

    With hooks we can vreate functional components and have state in them
    Which makes them stateful components.


    Practical
    1 When building apps first decide what components you will be needing
    and then scaffold them up before you start building them up,

    2. Every tiny component for a page should go into an element subfolder in the 
    components folder, for example tiny parts of the home page are elements 
    while the home page is a component.

    3. Because you have to return only one component, you moslty wrap everything in a div
    But if you don't wanna use a div, use a react fragment



### Hooks
- With hooks you can have as many state as you want in your functional components.

- // Set initial state to an empty array,
	// Else is we loop before receiving data from api, app throws an erros
N.B: Check out what finally means in try catch blocks
- Never have state as  dependency of setstate, else you will run into an infinityloop.
 

 <!-- How do we use momoization to optimize a react app? -->