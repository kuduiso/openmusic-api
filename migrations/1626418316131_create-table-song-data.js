/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('song_data', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'int',
      notNull: true,
    },
    performer: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    genre: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    duration: {
      type: 'int',
      notNull: true,
    },
    inserted_at: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
    updated_at: {
      type: 'VARCHAR(255)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('song_data');
};
