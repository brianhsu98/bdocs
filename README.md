# bDocs

Online, accountless, password-protected collaborative document editor/storage

## Setup

The Firebase config should be stored as a stringified JSON object in an .env file in the root of the repository. See the current .env file for an example.

- `yarn start` will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn build` will build the app

## Deploying

Currently, the app is hosted on Google App Engine.
Using the Google Cloud SDK, run - `gcloud init`, and create a configuration using the desired project - `gcloud app deploy` to deploy to web.

To update an already deployed app, run `gcloud app deploy` again

## To-Do

    - Refactor the components into folders, grouped by page
    - Delete unused code
    - Add accounts, and keep track of each account's documents.
    - Add password protection
    - Add more language syntaxes
    -

## Roadmap

1. Get a single collaborative document working locally
   - Using React for frontend
   - Firepad for the actual document
   - Backed by Google Firebase
2. Figure out how to host multiple firepads at different URL endpoints
   - Again, using react and random hashes to query a database and see if a document exists
3. Password-protect URL endpoints
   - Probably just something basic, like storing a salted+hashed password in the firebase database
     that we verify against before populating the text editor
