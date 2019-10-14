# un-slash

> Useful when dealing with path(url)-like strings with redundant slash and back-slash.

## usage

```bash
npm install un-slash
```

```javscript
const unSlash = require('un-slash');

unSlash('/user//user-info/')
//  'user/user-info'

unSlash('https:///domain.com/A//b?')
//  'https://domain.com/A/b'

unSlash(`ftp://domain.com\\\\A//b?who=you%2Fme`, {
  backslash: true,
  schemes: ['https?', 'ftp']
})
//  'ftp://domain.com/A/b?who=you%2Fme'
```
