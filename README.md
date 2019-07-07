# Notices

In this project, you'll design and implement an application-wide solution for user notifications. Ideally, you will utilize the existing Redux setup (and tweak it at your discretion) to achieve the desired result.

## Getting Started
1. Clone the repo to your machine (`git clone https://github.com/tylerclearmetal/notices.git`) and `cd notices`
1. Install dependencies using `yarn install` or `npm install`
1. Run API & client app concurrently using `yarn start`
1. The app should automatically open in a new browser window. If not, visit the app at `localhost:3000`. Hot reloading is enabled.

## About the App
You are working in a Redux-backed multi-screen app that consists of 3 pages:
  - Homepage (`/`)
  - Lowercase Tool (`/lowercase`)
  - Uppercase Tool (`/uppercase`)

The uppercase and lowercase pages both take a string input and submit an XHR call to an API. Sometimes these calls may fail, other times they will succeed and provide the expected output. Let's build a user notification system that will notify the user based on events that occur within these 2 pages.

- API calls are made using `POST` to `/api/lowercase` and `/api/uppercase` with a body containing an `input` property.
- When successful, the endpoint will respond with a 200 status code and a JSON payload (e.g. `{ output: "STRINGVALUE" }`
- In the case of an error, the server will respond with a generic 500 status code and a JSON payload (e.g. `{ message: "There was an error."`

## Challenge Requirements
The Redux logic for sending input to the server and handling the responses is already in place. Your solution should live as a set of side effects that may be used alongside existing code.

Create a new reducer & Redux logic that generates notification action creators. These actions should be able to be dispatched as a side effect from within an existing reducer/set of actions (`textTransform` in this case). You can use `redux-thunk` for this (already in place), or feel free to use a different approach for side effects if you wish.

### Notes & Nice to Haves
Your solution should be capable of displaying any type of notification message (toast) to the user, but for this challenge we'll focus on success and failure notices. At a minimum, the notice should be user dismissable. Automatic dismissal after a set timeout is a nice to have. Style is also great to see, but not a hard requirement.

### Example Notification
Here are some UI examples from a solution to this challenge:
![Notification Example](https://cdn.rawgit.com/tylerclearmetal/notices/abf2791e/example.gif)

# Create React App
This project is based of the [Create React App](https://github.com/facebook/create-react-app) project

