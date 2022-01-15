#!/usr/bin/env node
import games from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
games(rules, 'prime');
