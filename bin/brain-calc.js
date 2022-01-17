#!/usr/bin/env node
import calc from '../src/games/calc.js';
import games from '../src/index.js';

const rules = 'What is the result of the expression?';
games(rules, calc);
