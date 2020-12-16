# Getting Started with React Native

This is a starter guide for **React Native** - *A framework for building native apps using React*.
The guide will get you started with react native in no time. It covers the following:
  - Simple Layout of components.
  - Working with App State and Event Listeners.
  - Navigation between different screens.

Note: React now uses [Hooks](https://reactjs.org/docs/hooks-intro.html), which makes it possible to write the entire React Native Application using functional components instead of class components. This is what we will do in this tutorial.

# Prerequisites
This guide assumes that you have a good understanding of JavaScript fundamentals. The code examples will be written in [JSX](https://reactjs.org/docs/introducing-jsx.html) - *a syntax extension to JavaScript*.  If you haven't worked with React before, we recommend looking at some examples of JSX. 

# Create the app
Before getting started, make sure you have your development environment set up. 
You can follow [this](https://reactnative.dev/docs/environment-setup) guide to setup your development environment.

The instructions are slightly different depending on your development operating system and whether you want to start developing for iOS or Android. In the following examples, we create and run the app on Windows, with Android as our target.

Now, let's create our app:

    $ npx react-native init AwesomeProject

then start the application:

    $ npx react-native run-android

The app should now be up and running!

## Project structure

Start by opening index.js.

```javascript
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, () => App);
```

This is where we import our app. As can be seen, we import it from `./App`. So let's focus on that component now. When initializing the project, this file comes with some boilerplate code. Let's remove that and replace it with the following.

```javascript
import React from 'react';
import {View,Text} from 'react-native';

const App = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);

export default App;
```

We import View and Text, which are the most fundamental components for building a UI in React Native, and then we render a text saying "Hello World". The last row is exporting the App, which, as you remember, we then imported in the index.js file to run the app.

Now it is time to talk about folder structure. There are, of course, many ways you can structure your project. But I recommend the following initial setup:

    -src
        - assets
        - components
        - styles
        - navigation
        - screens
    
In the components folder, we keep the components that we use to build or different screens in the app. The navigation folder contains different stacks to navigate between screens. We will talk more about Screen navigation later. But first, let's look into layout in React Native.

## Layout with Flexbox

Looking at our `App.js` we see that we wrap our content with a View container. The View container is designed to be nested so that it can have 0 to many children of any type. In our `App.js` we currently only have one child, the Text container holding our "Hello World" string. Now, this text will be rendered in the top left corner of our app. But what if we want to place it in the center?

Well, View supports [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), which we can use for this purpose. Using Flexbox, it is possible to specify the layout of children easily. To center our text we can just add `justifyContent: 'center' ` and `alignItems: 'center'` like so

```
const App = () => (
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>Hello World</Text>
  </View>
);
```

Justify content describes how to align children within their container's main axis, and align-items tell how to align children along the container's cross axis.

If we instead want to place the text at the bottom of the page, we could use `justifyContent: 'flex-end'`.

Using flexbox it is also easy to handle the layout of many children. For example, if we add two more Text containers with "Hello world" like this:
```
const App = () => (
  <View>
    <Text>Hello World</Text>
    <Text>Hello World</Text>
    <Text>Hello World</Text>
  </View>
);
```

We can choose to either layout them next to each other, using `flexDirection: "row"`, or on top of each other, using `flexDirection: "column"`. Furthermore, we can justify the content to place one Text child at the top, one in the middle, and one at the bottom, using `justifyContent: 'space-between'` like so:

```
const App = () => (
  <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
    <Text>Hello World</Text>
    <Text>Hello World</Text>
    <Text>Hello World</Text>
  </View>
);
```

There exist many properties for justifyContent and alignitems, and we will not cover them all here. For more information, see [Layout with Flexbox](https://reactnative.dev/docs/flexbox).

## Working with App State and Event Listeners

React uses states to preserve and update values belonging to components. When these values change, the component is re-rendered again. The good thing is that if the updated state value is used for one component, only that component is re-rendered instead of re-rendering the whole web page.

Hooks is a new add-on in React 16.8 that allows you to use state and other functions without having to program with classes. Probably one of the most common hooks in react is the useState-hook. Below is an example of how it can be used.

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <button onPress={() => setCount(count + 1)}>
        Click me
      </button>
    </View>
  );
}
```

Here we see an example of how to use the `useState-hook` but also how events are handled in react. When the button is pressed, we handle that event by running the arrow function, which updates count by 1, using `setCount`. When `count` is updated, it triggers our return function to re-render, and the new count-value will be displayed to the user.

But what if we want to add some listener for when `count` is updated? Well, there is, of course, a hook for that.

The [useEffect hook](https://reactjs.org/docs/hooks-effect.html) are executed after the component has rendered. We can use it simply like this:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
  console.log("effect runs")
  })

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <button onPress={() => setCount(count + 1)}>
        Click me
      </button>
    </View>
  );
}
```

However, now we will print "effect runs" every time the component is re-rendered, regardless of if it was the `count` update that caused it. What if we have other states that can be updated and only want to listen for when `count` is updated?

The useEffect can use a `dependency array` to only run when that dependency is updated. Like this:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log("count was updated to " + count)
    }, [count])

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <button onPress={() => setCount(count + 1)}>
        Click me
      </button>
    </View>
  );
}
```

Now we will only print to the console whenever `count` is updated. Great!

## Navigation between screens

Routing and navigation in your react app can be done with [React Navigation](https://reactjs.org/docs/hooks-effect.html), a community solution recommended by React.

It is used  as the following:

```javascript
...
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function SecondScreen() {
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
```

The stack navigator is one type of navigator. There are other types of navigators, such as the [BottomTabNavigator](https://reactjs.org/docs/hooks-effect.html). They make it possible to navigate to the different `Stack.Screens`. For now, we only have two screens: the HomeScreen and the SecondScreen. But an app can grow big with many screens and many stacks. Stacks can also be nested. That is why I recommend the folder structure that I mentioned earlier.

Let's move the `Stack.Navigation` to the navigation folder and the screens to the screen folder.

    -src
        - assets
        - components
        - styles
        - navigation
          - HomeStack.js
        - screens
          - HomeScreen.js
          - SecondScreen.js
          
          
Now we have an excellent structure also to add more stacks. For example, if we maybe want to see if the user is logged in before it can go to the HomeStack, we could do something like this in our `App.js`:

```javascript
....
    return (
      <NavigationContainer>
        {state.isAuthenticated ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    );
```

Moving from `HomeScreen` to `SecondScreen` can easily be dine by the following:

```javascript
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}
```

Where "Second" is the name property of the Stack.Screen we created earlier.

# Final words
You now know how to get started with your react native app using layouts, app state, listeners, and navigation. Great!












