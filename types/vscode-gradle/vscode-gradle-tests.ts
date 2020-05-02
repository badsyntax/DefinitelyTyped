import * as vscodeGradle from 'vscode-gradle';

// $ExpectType Promise<void>
vscodeGradle.runTask('/some/folder', 'build', ['arg1'], (output: vscodeGradle.Output) => {});

// $ExpectType Promise<void>
vscodeGradle.runTask('/some/folder', 'build', [], (output: vscodeGradle.Output) => {});

// $ExpectType Promise<void>
vscodeGradle.runTask('/some/folder', 'build', ['arg1']);

// $ExpectType Promise<void>
vscodeGradle.runTask('/some/folder', 'build');
