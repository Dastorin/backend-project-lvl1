#!/usr/bin/env node

import games from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
games(rules, 'evenAndOdd');
