# Meg Foundation

Plan Builder for Meg Foundation

**Project Manager/Technical Lead:** Matthew Dong, Daniel Barra

**Team Members:**

- David Feng
- Eric Chen
- Subin Lee
- Ian Pedroza
- Rose Wang
- Samantha Su
- Santiago Garcia Santos
- Sarah Hilado
- Taha Boty

## Setting Up

#### Recommended Tools Checklist

- Git Clone this repository
- Create a [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
- Create a [Heroku account](https://www.heroku.com/)
- Install [Node.JS](https://nodejs.org/en/download/)
- Install [Yarn Package Manager](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

##### Configuring Enviromental Variable

Create file called ".env.development" in a "config" folder in the root directory (you may have to create a new config folder). Please refer to slack for replacing the connection string placeholder.

It should look like the following:

```
ATLAS_URI=mongodb-connection-string-placeholder
JWT_SECRET=my-secret-jwt-key-placeholder
```

Then, create another file called ".env" in "src/client", it should look like the following:

```
REACT_APP_API_URL="http://localhost:5000"
```

Finally, create another file called ".env.development.local" in "src/client", it should look like the following:

```
REACT_APP_MAPBOX_TOKEN=mapbox-access-token-placeholder
```

#### Running Project

For the first time after cloning only:

```bash
$ # setup yarn
$ yarn setup
```

To run the project:

```bash
$ # run both server and client
$ yarn dev
$ # run server only
$ yarn server
$ # run client only
$ yarn client
```
