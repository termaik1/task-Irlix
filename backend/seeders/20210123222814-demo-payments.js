"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("payments", [
      {
        id: "1300c358-5da9-11eb-ae93-0242ac130002",
        userId: "823fbe44-5d91-11eb-ae93-0242ac130002",
        name: "Котик",
        description: "Пушистый",
        status: "Ожидание",
        sum: "5500",
        recipientDetails: "Иванов",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "1300c7c2-5da9-11eb-ae93-0242ac130002",
        userId: "823fbe44-5d91-11eb-ae93-0242ac130002",
        name: "Кирпич",
        description: "Утка",
        status: "Ошибка",
        sum: "-500",
        recipientDetails: "Кря",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "1300c9fc-5da9-11eb-ae93-0242ac130002",
        userId: "823fbe44-5d91-11eb-ae93-0242ac130002",
        name: "test2",
        description: "",
        status: "Оплачено",
        sum: "10",
        recipientDetails: "i7-7700k",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "1300cbfa-5da9-11eb-ae93-0242ac130002",
        userId: "823fc2e0-5d91-11eb-ae93-0242ac130002",
        name: "test3",
        description: "мм",
        status: "Ожидание",
        sum: "10000",
        recipientDetails: "Торпеде",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
      {
        id: "40e29322-5daa-11eb-ae93-0242ac130002",
        userId: "823fc2e0-5d91-11eb-ae93-0242ac130002",
        name: "ЖКХ",
        description: "мм",
        status: "Оплачено",
        sum: "1500",
        recipientDetails: "ЖКХ",
        createdAt: new Date(),
        updatedAt: "2021-01-23 15:43:34.813 +00:00",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments", null, {});
  },
};
