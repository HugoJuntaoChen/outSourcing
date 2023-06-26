const pkg = require("./package.json");

exports.name = `[${pkg.name}]本地环境配置`;
exports.rules = `
^//test.com/  127.0.0.1:8888 excludeFilter:///api
`;
