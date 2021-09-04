#! /usr/bin/env node

import fetch from 'node-fetch';
import yargs from 'yargs';
import open from 'open';

const { argv } = yargs(process.argv)
// console.log(process.argv);

const res = await fetch('https://reddit.com/.json')
const data = await res.json()

console.log(data);

const children = data.data.children
const randomIndex = children[Math.floor(Math.random() * children.length)]
const link = `http://reddit.com${randomIndex.data.permalink}`

if (argv.print){
    console.log(`
    title: ${randomIndex.data.title}
    link: ${link}
    `)
    }
    else{
        open(link)
}