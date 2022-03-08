# React blog

This is a React blog that created with a custom API. We serve the API in our system and run blog with it.

### Goals of this project

In this project we learned how to use API CRUDs.

- POST -> Creat a new blog
- FETCH -> Read a blog or blogs
- UPDATE -> **UPDATE is not completed**
- DELETE -> Delete a blog

### How to run this app

- First clone it and go into the folder.

```shell
$ git clone https://github.com/BlackIQ/React-Blog && cd React-Blog
```

- Now open a tmux or a nother terminal and cd into it again. I mean have 2 terminals. First of run API and second for running application.

In first terminal, run API server. I run it in port 8000 and app use 8000. If you change the port, change app to.

```shell
$ npx json-server --watch data/db.json --port 8000
```

Now seconds terminal, run app.

```shell
$ npm start
```

- Open a browser and go to `localhost:3000`.

You should see blog index.

### Preview

Yes preview video or images will be added soon.