"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        id: "823fbe44-5d91-11eb-ae93-0242ac130002",
        email: "test1@mail.ru",
        password: "12345",
        amountMoney: "0",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "823fc178-5d91-11eb-ae93-0242ac130002",
        email: "test2@mail.ru",
        password: "12345",
        amountMoney: "100",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "823fc2e0-5d91-11eb-ae93-0242ac130002",
        email: "test3@mail.ru",
        password: "12345",
        amountMoney: "10000",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
