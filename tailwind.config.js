module.exports = {
  presets: [
    require('.'),
  ],
  purge: {
    content: [
      './example/index.html',
    ],
  },
};