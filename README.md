# Movie DB Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Requirements

```bash
NodeJS >= 14.xx.xx
Yarn >= 1.22.xxx
```

## Getting Started

1. clone repo `git clone https://github.com/Hashamjoiya/movie-db-demo.git`
2. change directory, `cd movie-db-demo`
3. install dependencies, `yarn install`
4. under `src/enivronments`, duplicate/rename the file `environment.sample.ts` as `environment.ts` and add your **movieDB** **apikey** there.

- It should have following code:

```ts
  const environment = {
    movieDB: {
        apiURL: 'https://api.themoviedb.org/3/',
        apiKey: 'YOUR_API_ACCESS_KEY'
    }
  }

  export default environment
```

5. run, `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Screenshots

![image](https://user-images.githubusercontent.com/46652365/174793562-e182f712-76ae-48fb-a62e-fc8c1dc85bff.png)
![image](https://user-images.githubusercontent.com/46652365/174793681-48a5d36b-a7e1-4920-8c99-5b421adcb18a.png)
![image](https://user-images.githubusercontent.com/46652365/174793768-47f99fc4-859a-467b-8b70-f2f84d8550e6.png)
![image](https://user-images.githubusercontent.com/46652365/174793884-d9a309c0-694a-4078-b24c-a86139b0fd0f.png)
