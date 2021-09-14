# Cosuno homework

To run project

first start mock api server

```
cd server
yarn
yarn start
```
then from run frontend part from root folder

```
yarn
yarn start
```

Open in browser

http://localhost:3000   <= frontend

http://localhost:8090   <= backend

### What I would add if I had more time:

- pagination / virtualization
- more generic approach for filters (filter build dynamically based on config)
- use GraphQL over HTTP GET API
- use hook for "async data", which will encapsulate (isLoading, isError, etc) (like react-query or similar)