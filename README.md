# bDocs

Online, accountless, password-protected collaborative document editor/storage

## Setup

### .env File

Your `.env` file should be in the root of the repository, and should contain two values. First, `REACT_APP_FIREBASE_CONFIG` should contain the stringified JSON object of a firebase config. Secondly, `REACT_APP_BASE_URL` should contain the base URL of the web app. See the `.env` file in the repository for an example.

- `yarn start` will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn build` will build the app

## Deploying

Currently, the app is hosted on Google App Engine.
Using the Google Cloud SDK, run - `gcloud init`, and create a configuration using the desired project - `gcloud app deploy` to deploy to web.

To update an already deployed app, run `gcloud app deploy` again

## To-Do

- Refactor code editor settings bar to a centralized separate component
- Add accounts, and keep track of each account's documents.
- Add password protection

## Roadmap

1. Get a single collaborative document working locally
   - Using React for frontend
   - Firepad for the actual document
   - Backed by Google Firebase
2. Figure out how to host multiple firepads at different URL endpoints
   - Again, using react and random hashes to query a database and see if a document exists
3. Password-protect URL endpoints
   - Probably just something basic, like storing a salted+hashed password in the firebase database that we verify against before populating the text editor
4. Add accounts support.
