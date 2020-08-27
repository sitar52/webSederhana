'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * public bulkInsert(tableName: string, records: Array, options: Object, attributes: Object): Promise
    */
    let objLogin = [
      {
        username: 'John Doe',
        password: 'johndoe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user',
        password: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Logins',objLogin, {} )

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('Logins', null, {})
  }
};
