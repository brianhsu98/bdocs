# bDocs

Online, accountless, password-protected collaborative document editor/storage

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

### To-Dos

- Figure out routing through react-routing
- Add an interactive prompt that either sends you to a specified document with a hash or creates a new one for you.

- Design:
  - The /editor/ endpoint will throw you to a screen where you have two options: a text box where you can input a past generated shortID to recover a document, or a button to create a new document
    - If you create a new document, you'll be generated a new random shortID and sent to that URL endpoint `editor/NEW_SHORTID`, which should be associated with a Firepad
    - Otherwise, you'll be thrown to `editor/ID`, and shown the contents.

### Progress So Far

- Firebase + Firepad integrated
- Added URL endpoint `/editor/HASH`
