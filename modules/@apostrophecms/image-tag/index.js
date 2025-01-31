module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'apostrophe:imageTag',
    pluralLabel: 'apostrophe:imageTags',
    quickCreate: false,
    autopublish: true,
    editRole: 'editor',
    publishRole: 'editor',
    shortcut: 'G,o'
  },
  fields: {
    remove: [ 'visibility' ]
  }
};
