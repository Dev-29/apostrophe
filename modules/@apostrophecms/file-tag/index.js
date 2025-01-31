module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'apostrophe:fileTag',
    pluralLabel: 'apostrophe:fileTags',
    quickCreate: false,
    autopublish: true,
    editRole: 'editor',
    publishRole: 'editor',
    shortcut: 'G,g'
  },
  fields: {
    remove: [ 'visibility' ]
  }
};
