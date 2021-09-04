# practice-node.js-CLI
>This CLI application pull random post from Reddit and open it in your default browser

## Creating your own package
To consume a package, we must first turn our app into a package. We can do this with a simple file called ***package.json*** on the root of our app
By using ***npm init -y*** we can install our package

we must install our own package locally so we can test out the CLI. We could just execute the file with the node runtime, but we want to see the CLI actually work.

***npm install -g***

We can simply install with no args which tells npm to install the current director. The -g flag means we want to globally install this package vs in a local node_modules.

We have to import some more module that will be used during fetching links and creating objects in bin

### open - *will open our browser with a URL*
### node-fetch - *is a fetch client that we can use to hit the reddit API*
### yargs - *will allow us to process any flags or arguments passed to the CLI*
