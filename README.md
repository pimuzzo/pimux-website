# pimux-website

This is the source code for the Pimux website at [pimux.it](https://pimux.it).

## Build
### Docker

1. Install Docker on your machine. Follow documentation from [Docker](https://docs.docker.com/get-docker/) site
2. Run a Docker container with `jekyll/jekyll` image and serve the site

```
export JEKYLL_VERSION=3.8.6
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll jekyll/jekyll:$JEKYLL_VERSION jekyll serve
```

## Deploy
Every PR merged on master will deploy on [pimux.it](https://pimux.it) with GitHub Pages.
