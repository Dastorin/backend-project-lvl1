#!/usr/bin/env node
import games from '../src/index.js';
import progression from '../src/games/progression.js';

const rules = 'What number is missing in the progression?';
games(rules, progression);
