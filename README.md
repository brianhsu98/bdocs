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





