'use strict';

const safeConcatStr = (...args) => {
  return args.reduce((pre, next) => {
    if (next !== null && next !== undefined) {
      return pre + next;
    }
    return pre;
  }, '');
};

module.exports = (url, opt) => {
  if (typeof url !== 'string') {
    throw new TypeError(`Expected \`url\` to be of type \`string\`, but \`${typeof url}\``);
  }

  url = url.trim();

  opt = {
    schemes: ['https?'],
    ...opt,
  };

  const slash = opt.backslash ? `\\\\\/` : `\\/`;
  const reg_url = new RegExp(`^((?:${opt.schemes.join('|')}):[${slash}]{2,})?([^\\?]+)(\\?.*)?$`);

  let [, scheme, path, query] = url.match(reg_url);

  if (scheme) {
    scheme = scheme.replace(new RegExp(`[${slash}]{3,}`), '//');
  }

  path = path
    .replace(new RegExp(`[${slash}]*$`), '')
    .replace(new RegExp(`[${slash}]{2,}`, 'g'), '/');

  return safeConcatStr(scheme, path, query);
};

// module.exports.default = module.exports;
