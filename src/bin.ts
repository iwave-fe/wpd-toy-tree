#!/usr/bin/env node
// const { main } = require('./');
import { main } from './';

const code = main(
    process.argv.slice(2),
    console.log,
    console.error,
);

process.exit(code);