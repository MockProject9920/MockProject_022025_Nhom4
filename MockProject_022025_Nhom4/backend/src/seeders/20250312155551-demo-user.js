"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        id: 2001,
        name: "John Doe",
        email: "john.doe@email.com",
        role: "Admin",
        member_since: "2020-01-15",
      },
      {
        id: 2002,
        name: "Jane Smith",
        email: "jane.smith@email.com",
        role: "Manager",
        member_since: "2019-06-10",
      },
      {
        id: 2003,
        name: "Mike Johnson",
        email: "mike.j@email.com",
        role: "Staff",
        member_since: "2021-03-22",
      },
      {
        id: 2004,
        name: "Emily Davis",
        email: "emily.d@email.com",
        role: "Staff",
        member_since: "2022-07-18",
      },
      {
        id: 2005,
        name: "Robert Brown",
        email: "robert.b@email.com",
        role: "Admin",
        member_since: "2018-11-05",
      },
      {
        id: 2006,
        name: "Olivia Green",
        email: "olivia.g@email.com",
        role: "Manager",
        member_since: "2020-09-14",
      },
      {
        id: 2007,
        name: "David White",
        email: "david.w@email.com",
        role: "Staff",
        member_since: "2021-12-30",
      },
      {
        id: 2008,
        name: "Sophia Hall",
        email: "sophia.h@email.com",
        role: "Staff",
        member_since: "2019-02-25",
      },
      {
        id: 2009,
        name: "William King",
        email: "william.k@email.com",
        role: "Admin",
        member_since: "2017-08-07",
      },
      {
        id: 2010,
        name: "Ava Scott",
        email: "ava.s@email.com",
        role: "Manager",
        member_since: "2023-01-05",
      },
      {
        id: 2011,
        name: "Lucas Allen",
        email: "lucas.a@email.com",
        role: "Staff",
        member_since: "2020-05-21",
      },
      {
        id: 2012,
        name: "Mia Carter",
        email: "mia.c@email.com",
        role: "Staff",
        member_since: "2021-09-09",
      },
      {
        id: 2013,
        name: "James Baker",
        email: "james.b@email.com",
        role: "Admin",
        member_since: "2016-12-01",
      },
      {
        id: 2014,
        name: "Charlotte Lee",
        email: "charlotte.l@email.com",
        role: "Manager",
        member_since: "2019-04-03",
      },
      {
        id: 2015,
        name: "Daniel Hill",
        email: "daniel.h@email.com",
        role: "Staff",
        member_since: "2022-06-15",
      },
      {
        id: 2016,
        name: "Ella Adams",
        email: "ella.a@email.com",
        role: "Staff",
        member_since: "2023-03-28",
      },
      {
        id: 2017,
        name: "Henry Young",
        email: "henry.y@email.com",
        role: "Admin",
        member_since: "2017-10-19",
      },
      {
        id: 2018,
        name: "Grace Turner",
        email: "grace.t@email.com",
        role: "Manager",
        member_since: "2021-07-12",
      },
      {
        id: 2019,
        name: "Samuel Perez",
        email: "samuel.p@email.com",
        role: "Staff",
        member_since: "2019-11-23",
      },
      {
        id: 2020,
        name: "Lily Torres",
        email: "lily.t@email.com",
        role: "Staff",
        member_since: "2020-02-17",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
