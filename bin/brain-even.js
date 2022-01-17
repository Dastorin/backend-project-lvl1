#!/usr/bin/env node
import evenAndOdd from '../src/games/even-and-odd.js';
import games from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
games(rules, evenAndOdd);
