module.exports = {
  globals: {
    context: {},
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    'lib/',
    'node_modules/',
  ],
  testMatch: [
    '**/?(*.)spec.ts',
  ],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: true,
  testURL: 'http://localhost/',
};
