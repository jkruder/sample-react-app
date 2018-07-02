This repo is a sample React based web application started from *create-react-app*.

## Background
This application is a sample/work-in-progress application around the [scryfall API](https://scryfall.com). It is a publicly available API and provides a lot of data that have relationships so there is opportunity to build a non-trivial application. Scryfall is a web application (and API) that serves information about Magic the Gathering (c) trading cards.

In MTG there are **sets** that contain one or more **card**. A **card** contains information describing what the card does, what rules apply to the card, the casting cost, artist, etc. The API also provides an endpoint to assist with processing *casting cost* information.

There is not much else you should need to know about MTG to understand what this app is doing. MTG is some context to drive a discussion/investigation into React and related technologies.

## Code Organization
The goal is to organize by feature rather than function. A *views*, *controllers*, *templates*, etc structure is not desired. Instead, the codebase should be organized by feature. Consider *src/sets*. This directory describes the feature of *sets* within the application and will contain the application route(s), data, and display needs. The main benefit of this organization is that the result is modular code that can be moved/edited with minimal impact to other features of the application. Each feature contains an **index.js** file that specifies the API of the module. Any other module should leverage what is exposed by this file and should not traverse into the module. When files depend on resources outside of their scope the code base tends to be brittle and results in long import paths that need to be maintained.

### A Module
A given module can have the following directory structure:
```
# components that are specific to a feature are stored here
components/

# the data needs are specified here; this model is for a redux/redux-thunk based application
data/
  actions.js
  reducer.js
  selectors.js

# feature's route(s)
routes.js

# layout of the feature
Layout.js

# HOC that connects Layout.js to application data
LayoutContainer.js

# module contract
index.js
```

### Data
**data** describes the data needs of a part of the application. *src/data* describes and configures the application(s) data needs and pulls in exposed data contributors from each module. For a redux/redux-think based application, you will have an *actions.js*, *reducer.js*, and a *selectors.js* file.

#### actions.js
This file describes the actions that a module produces. It typically has a listing of ```const``` variables that describe the type of actions that can be emitted. These values are used to differentiate one action from another and can be likened to different types of events. This file also contains functions that UI components can use to start/trigger an update to the application state. These kinds of functions are used by the *LayoutContainer.js* to link a component's event handler so that it triggers a change in application state.

Consider the *sets* module. On the page */sets* there is a dropdown with a listing of set types. When a set type is selected, it triggers an action describing the newly selected event type. Without a function in the *actions.js* file, the UI component would need to know how the application's data is stored and how to affect change within that store. This is a lot of information that a UI component does not need to know. So, we put this information in an *actions.js* file to separate concerns and facilitate testing of our actions and simplify UI component testing.

#### reducer.js
This file describes how state should be changed given a particular action. A reducer receives each action that an application emits but only handles actions that relative to the state slice that a reducer manages. In the *sets* module, that is **sets** and **setTypes**. The *sets* module is currently configured to be two related modules; you could argue there is not much benefit to separating them and that they should be merged so there is only a single reducer file that manages both sets and set types.

#### selectors.js
This file provides simple functions that can *select* information from the application state. This helps to further isolate UI components from having knowledge of the relationships between various parts of the application state. UI components typically do not care how the data it needs is stored/organized; just that it needs the data. Selectors to the rescue! Each selector should be a pure function! This important because it makes application of a selector repeatable and testable. The following is the signature of a selector:
```javascript
function getSets(state) {
  return state.sets.data
}
```
So, given the application state, select the *sets*. Some selectors may be more complex and require the input of other selectors. For example, a selector could be created that filters the *sets* based on the *active set type*. This would be very useful because we can *memoize* (think cache) the result of the filter AND each UI component that needs the filtered list of sets does not need to know how to filter sets. AND, because our selectors are pure functions, testing the filtering logic is a breeze; our UI component test are also kept simplified because they don't care about filtering sets. They just want to display data!

## Storybook
First, storybook is AWESOME. Storybook has been a great resource when designing/developing new UI components. I would like to see a majority of the reusable components documented in storybook. Storybook also serves as a playground for existing components so developers get a listing/preview of what capabilities the application has before new components are created. To see the storybook, run
```bash
npm run storybook
```

## Todos
There are still several things left to do. Here's a non-inclusive list:
1. Update ```sets/set``` to be structured like ```sets```
2. Incorporate ```sets/set``` data needs into proper redux format instead of in UI component
3. Enhance testing
4. Add more samples to the storybook
