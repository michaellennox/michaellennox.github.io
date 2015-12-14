---
layout: posts
title: Databases Databases Databases
category: devramble
tag: makers
---

So here's a blog post about databases... We've just started looking at them in our fourth week of Makers and we've even [got a challenge to write a post on them!](https://github.com/makersacademy/course/blob/master/bookmark_manager/02_understanding_databases.md).

So here it goes...

## We would want to make use of databases in web applications because:

* Let's us persist data for longer than a single session
* Let's us get rid of those ugly global variables! (sin sin sin)
* Can store very large quantities of data
* Can share data between different users and service providers
* Let's us bring things back into memory without the use of a persistent Operating system
* Allows more effective use of available memory by storing unused data

## Different types of DB

There's two main categories of database - [RDBMS](https://en.wikipedia.org/wiki/Relational_database) and [NoSQL](https://en.wikipedia.org/wiki/NoSQL) (which includes many subcategories such as [document](https://en.wikipedia.org/wiki/Document-oriented_database), [columnar](https://en.wikipedia.org/wiki/Column_(data_store)) and [graph](https://en.wikipedia.org/wiki/Graph_database)).

NoSQL DBs are a relatively new technology which have evolved to meet the needs of modern technology companies which require faster processing speeds and much more customisability than traditional RDBMSs allow. For now - we're focusing mainly on getting to grips with an relational database.

## So what is an RDBMS?

A type of database which allows us to query in a single way. The database is a collection of different tables, each containing a column&row structure which is predefined when creating the table. Each row is a unique id which contains one or more columns each of which corresponds to a piece of data.

Some examples of common RDBMSs include PostgreSQL, MySQL and SQL-server.
