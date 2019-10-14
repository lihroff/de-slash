// const unSlash = require('.');
import unSlash from '.';

test('test redundant slash', () => {
  expect(unSlash('https:////abc.com/pathA/pathB')).toEqual('https://abc.com/pathA/pathB');

  expect(unSlash('https://abc.com/pathA//pathB///')).toEqual('https://abc.com/pathA/pathB');

  expect(unSlash('abc.com/pathA/pathB?title=my%2Fdear')).toEqual(
    'abc.com/pathA/pathB?title=my%2Fdear',
  );
});

test('test schemes option', () => {
  const opt = {
    schemes: ['https?', 'ftp'],
  };

  expect(unSlash('ftp://public.ftp-servers.com//directory///file.txt', opt)).toEqual(
    'ftp://public.ftp-servers.com/directory/file.txt',
  );
});

test('test backslash option', () => {
  const opt = {
    backslash: true,
  };

  expect(unSlash('https:///\\abc.com\\\\pathA\\\\\\pathB', opt)).toEqual(
    'https://abc.com/pathA/pathB',
  );
});
