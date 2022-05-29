# PROPS PATTERN

> Another way of making components very reusable, is by using the render prop pattern. A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.
> Imagine that we have a Title component. In this case, the Title component shouldn't do anything besides rendering the value that we pass. We can use a render prop for this! Let's pass the value that we want the Title component to render to the render prop.

```
<Title render={() => <h1>I am a render prop!</h1>} />
```

Within the Title component, we can render this data by returning the invoked render prop!

```
const Title = props => props.render();

```

# Temperature in Celsius

![Props pattern](./public/props_pattern.png)
