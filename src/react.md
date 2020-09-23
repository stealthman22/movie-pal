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
 
- always avoicd infinite loops (using dependency arrays help)

- Always specify your dependencies in your useEffect

- Custom hooks should always have the prefix use in the filename,followed by name of primary component using it.

 <!-- How do we use momoization to optimize a react app? -->


 ### Styled Components
 - Learn how to create a styled basic styled component
 - Learn how to handle props in styled component
 - Create a global style with styled components

 Look up tagged functions

 Props in  a way behave like dynamic properties
When content could change, you can use a prop

styled components isolate your styles to one component at a time and prevents things from getting messy

I would prefer to destructure my props

Use { } around imports when they are not coming in as default.

Use styled components create global style to create a syle for the entire application

we must always provide a key in react when we loop through things 

Props in jsx default to true unless we gve it a value

If you do not want to keep typing out state, it makes sense to destructure it further, using mulitlevel destructuring


### Controlled components

 When state value and input value are always insync. That means they direclty affect each other.

 When creating input fields in html, there is a inbuilt state function that controls things.
 In react we can take over from this state and assign that job ot our own state.

 ### useref
- when you have a value that you want to mutate, or keep between rendrs, you use a ref


### Never create functional state as an object, else this will make setstate a funtion, and throw an error

- Reach router,  should be used for mid level apps with less complex routing systems.


- Learn to scaffold pages before building