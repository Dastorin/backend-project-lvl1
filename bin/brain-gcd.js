#!/usr/bin/env node
import gcd from '../src/games/gcd.js';
import games from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
games(rules, gcd);
