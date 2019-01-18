#!/usr/bin/env node

/* eslint-env es6 */

const path = require('path');

const eslint = require('eslint');
const conf = require('../index.js');

const test = require('tape');
const tapSpec = require('tap-spec');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);


const passFiles = [
  'index.js',
  'test/test.js',
  'test/pass-syntax.js'
];

const failFiles = [
  'test/fail-syntax.js'
];

const eslintOpts = {
  useEslintrc: false,
  envs: ['node', 'es7'],
  parserOptions: {ecmaVersion: 2018},
  rules: conf.rules,
};


// test all pass cases
const passReport = new eslint.CLIEngine(eslintOpts).executeOnFiles(passFiles);

test('Pass files all checked', t => {
  passFiles.forEach((file, index) => {
    const result = passReport.results[index];
    t.equal(path.resolve(result.filePath), path.resolve(file), file);
  });

  t.end();
});

test('Pass cases count', t => {
  t.equal(passReport.warningCount, 0, 'Warnings === 0');
  t.equal(passReport.errorCount, 0, 'Errors === 0');
  passReport.results.forEach((r, i1) => {
    const filePath = r.filePath.replace(process.cwd(), '');
    r.messages.forEach((m, i2) => {
      t.fail(
        `Err: (${i1+i2+1}) ${m.message} (${m.ruleId}) \
        (${filePath})[${m.line}, ${m.column}]`
      );
    });
  });
  t.end();
});


// test all fail cases
const failReport = new eslint.CLIEngine(eslintOpts).executeOnFiles(failFiles);

test('Fail files all checked', t => {
  failFiles.forEach((file, index) => {
    const result = failReport.results[index];
    t.equal(path.resolve(result.filePath), path.resolve(file), file);
  });

  t.end();
});

test('Fail cases count', t => {
  // keeps changing
  const expectingErrors = 18;

  t.equal(failReport.warningCount, 0, 'Warnings === 0');
  t.equal(failReport.errorCount, expectingErrors, `Errors === ${expectingErrors}`);

  failReport.results.forEach((r, i1) => {
    const filePath = r.filePath.replace(process.cwd(), '');
    r.messages.forEach((m, i2) => {
      t.pass(
        `Err: (${i1+i2+1}) ${m.message} (${m.ruleId}) \
        (${filePath})[${m.line}, ${m.column}]`
      );
    });
  });

  t.end();
});
