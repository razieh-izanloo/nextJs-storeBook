const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  dir: './',
});

const config = {
  coverageProvider: 'v8', 
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(config);