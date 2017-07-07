---
theme: white
---

<style>
  body,h1,h2,h3,h4,h5,h6 {
    color: #399af3 !important;
  }
  img {
    border: 0 !important;
    box-shadow: none !important;
  }
</style>

<img src="http://docs.sequelizejs.com/manual/asset/logo-small.png" />

#### Sequelize
<p><a href="https://travis-ci.org/sequelize/sequelize"><img src="https://img.shields.io/travis/sequelize/sequelize/master.svg?style=flat-square" alt="Travis build"></a>
<a href="https://npmjs.org/package/sequelize"><img src="https://img.shields.io/npm/dm/sequelize.svg?style=flat-square" alt="npm"></a>
<a href="https://github.com/sequelize/sequelize/releases"><img src="https://img.shields.io/npm/v/sequelize.svg?style=flat-square" alt="npm"></a></p>

> A promise-based ORM for Node.js

---

## Objectives

- Learn about relationships
- Understand Object Relational Mappers
- See Sequelize in action

---

#### What are relationships?

<img src="images/relationships.png" height="540" />

---

#### What is an Object Relational Mapper?

Allows you to communicate with a relational database within your program.

Provides tooling to help maintain a database.

---

#### How does an ORM work?

<span style="color: orange;">Object</span> `<----->` <span style="color: #399af3;">Relational</span>

<span style="color: orange;">JavaScript</span> represents associated data as <span style="color: orange;">objects</span>

<span style="color: #399af3;">MySQL</span> represents associated data as <span style="color: #399af3;">relations</span>

---

#### ORM Providers

- **JavaScript**: sequelize, bookshelf.js
- **C&#35;**: Entity Framework, NHibernate
- **Python**: peewee, PonyORM
- **Ruby**: Sequel, ROM

---

#### An ORM - Visualized

<img src="images/orm.png" />

---

### What are Migrations?

A migration is a way of "versioning" the structure of your database.

```js
module.exports = {

  up: function(dbBuilder) {
    dbBuilder.createTable('student');
  },

  down: function(dbBuilder) {
    dbBuilder.dropTable('student');
  }
  
}
```

---

### What are Migrations?

<img src="images/1-migration.png" />

---

### What are Migrations?

<img src="images/2-migration.png" />

---

### What are Migrations?

<img src="images/3-migration.png" />

---

### Summary: ORM

Use ORMs to connect to databases in code.

Use migrations to manage the state of your database.

---

#### What is Sequelize?

<iframe src="http://docs.sequelizejs.com/" style="width: 100%; height: 540px;"></iframe>

---

#### See Sequelize In Action

<img src="images/code-funny.gif" height="540" />
