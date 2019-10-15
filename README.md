# de-slash

> Useful when dealing with path(url)-like strings with redundant slash and back-slash.

## usage

```bash
npm install de-slash
```

```javscript
const deSlash = require('de-slash');

deSlash('/user//user-info')
//  '/user/user-info'

deSlash('https:///domain.com/A//b/?')
//  'https://domain.com/A/b?'

deSlash(`ftp://domain.com\\\\A//b?who=you%2Fme`, {
  backslash: true,
  schemes: ['https?', 'ftp']
})
//  'ftp://domain.com/A/b?who=you%2Fme'
```
