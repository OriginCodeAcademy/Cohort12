---
theme: beige
highlightTheme: github
---

<style>
img {
    border: 0 !important;
    box-shadow: none !important;
}

code {
    padding: 1em !important;
}
</style>

<img src="images/mysql.png" height="200px" />

### DB100 - MySQL Fundamentals

---

## Objectives

- NoSQL vs SQL
- The Relational Landscape
- Why Relational?
- Data Manipulation Language (DML)
- Data Definition Language (DDL)
- Normalization
- SQL in NodeJS
- Full Stack App - CoffeeHaus

---

## NoSQL vs SQL

NOTE:

- Recap what we've learned.
- Explain NoSQL is a marketing term for schemaless SQL
- NoSQL is primarily used in situations where you have a vast amount of data you need to quickly read/write
- SQL is also for vast amounts of data, but you don't mind about read/write speeds.

---

## The Relational Landscape

- MySQL.. MSSQL.. PostgreSQL..

- These are all SQL databases.

- SQL is the language.

- MySQL/MSSQL/PostgreSQL are dialects.

- Standards: ANSI

NOTE:

- SQL vs MySQL, MSSL

---

## Why Relational?

- NoSQL: Performance > Data Integrity

- SQL: Data Integrity ~ Performance

Note:

Atomicity       -   Requires that each transaction is "all or nothing". an atomic system must guarantee atomicity given any "Bad Situation".
Consistency     -   Ensures that any transaction will bring the database from one valid state to another.
Isolation       -   Ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed sequentially.
Durability      -   Ensures that once a transaction has been committed, it will remain so, even in the event of a "Bad Situation".

NoSQL: Emphasizes performance over data integrity. Use for non-crucial/statistical data where fractional percentages are not such a big deal.
SQL: Emphasizes data integrity and ACID compliance. Use for data where fractional percentages are kind of a big deal. (Amazon, Facebook, Twitter, Wikipedia)

---

## Two types of operations

- Data Manipulation Language (DML)
- Data Definition Language (DDL)

---

## Data Manipulation Language (DML)

- select
- distinct
- where
- and
- or
- limit
- in
- between
- like

---

## Exercises

https://rebrand.ly/db100-mysql-ex

Complete the first 10 exercises<br />
Slack me when you get to 10

---

## Data Manipulation Language (DML)

- order by
- inner join
- left join
- group by
- having
- insert
- update
- delete

---

## Exercises

https://rebrand.ly/db100-mysql-ex

Complete the next 10 exercises<br />
Slack me when you get to 10

---

## Data Definition Language (DDL)

- Table Types
- Data Types
- CREATE TABLE
- Primary Key
- Foreign Key

---

## Exercises

https://rebrand.ly/db100-mysql-ex

Complete the 10 exercises under `02-ddl` (1 hour)

---

## Normalization