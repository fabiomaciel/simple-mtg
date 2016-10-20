#Simple MTG

>    Magic The Gathering Battle Application


### Requirements:

- node
- npm
- mongodb

### Usage:

First, you will need to run the install on npm:

```sh
npm install
```
Then, you got to download all MTG json:

```sh
npm run load
```

After all sets being downloaded, you have to import it to the mongo database:

```sh
npm run import
```

Then, all you have to do is start npm:

```sh
npm start
```


Your server will be set up at: http://localhost:8000/

the API documentation is located at apidoc :smile: