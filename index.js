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

  const reg_url = new RegExp(`^((?:${opt.schemes.join('|')}):\\/\\/)?([^\\?]+)(\\?.*)?$`);

  let [, scheme, path, query] = url.match(reg_url);

  if (opt.backslash) {
    path = path.replace(/^[\/\\]*|[\/\\]*$/g, '').replace(/[\/\\]{2,}/g, '/');
  } else {
    path = path.replace(/^\/*|\/*$/g, '').replace(/\/{2,}/g, '/');
  }

  return safeConcatStr(scheme, path, query);
};

// module.exports.default = module.exports;
