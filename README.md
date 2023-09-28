# React Todo App

A simple todo application built with React.

## Description
This React Todo App allows you to manage your tasks by adding, completing, and resetting them. It also uses local storage to persist your tasks even after refreshing the page.

## Installation
1. Clone the repository to your local machine:   git clone https://github.com/your-username/react-todo-app.git
2. Navigate to the project directory: cd react-todo-app
3. Install dependencies:  npm install

## Usage
1. Start the development server:  npm start
2. Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
3. The page will reload when you make changes.\
   You may also see any lint errors in the console.

## Features
1. Add new todo items.
2. Mark todo items as completed.
3. Reset all todos.
4. Persistent storage using local storage.

## Documentation
### Adding a New Todo
To add a new todo item, enter your task in the input field and press Enter or click the "Add Todo" button. The new item will be added to the list of active todos.

### Completing a Todo
Click on an active todo item to mark it as completed. It will then appear in the "Completed Todos" section.

### Resetting Todos
Click the "Reset" button to clear all todos, including both active and completed items.

## Assumptions
1. The app assumes that the user's browser supports local storage for data persistence.
2. The app allows adding empty todo items; further validation could be added to prevent this if desired.

## Unhandled Edge Cases
1. Error Handling: Error handling for cases such as local storage not being available or failing to save data is not fully implemented in this app. You can add more robust error handling as needed for your use case.
2. Cross-device Compatibility: App is not responsive for tablet and mobile.






