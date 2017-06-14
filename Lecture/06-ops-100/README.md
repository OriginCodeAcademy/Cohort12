---
theme: white
highlightTheme: arta
revealOptions:
    transition: 'fade'
---

<img src="images/iTerm.png" height="300" style="border: 0; box-shadow: none;" />

### OPS100 - Working with the CLI

---

## Objectives

- **Introduction to the CLI**
- Navigation
- Git and GitHub
- Common Git Commands

----

## Introduction to the Command Line Interface (CLI)

<img style="border: 0; box-shadow: none;" src="images/terminal.gif" height="400" />

----

## CLI

> Think of the CLI as a new phone.

- It's tricky at first.
- Seems counter-intuitive to what you already know.
- Gets better with practice.
- CLI "apps"

Note:
"Think of the CLI as your new phone" refers to the feeling people get with new phones. They're a little hard to use at first because they're different, but eventually you find out how it works.. you download a few apps.. and before you know it, you're fluent with it.

----

## CLI

- GUI => graphical user interface (Clicks)
- TSI => touch screen interface (Touches)
- CLI => command line interface (Commands)

Note:
GUI/TSI/CLI are used to spread knowledge of these concepts, while also giving context surrounding the CLI.

---

## Objectives

- **Introduction to the CLI**
- **Navigation**
- Git and GitHub
- Common Git Commands

----

## Navigation

* File System Organization
* The `pwd` command
* The `cd` command

----

### File System Organization

* Every operating system organizes files on a hard drive differently.
* We will focus on macOS and Windows.

----

### macOS File System

* You should strive to become familiar with this file system over time.

* It's very similar to the Linux file system, used commonly for web servers.

----

### macOS File System

<img src="images/file-system.png" />

----

### macOS File System

<img src="images/file-system-2.png" />

----

### Windows File System

<img src="images/windows-file-system.png" />

----

### The `pwd` command

> Print Working Directory - Tells you which folder you are currently in.

```sh
$ pwd
/Users/cameronwilby
```

----

### The `cd` command

> Change Directory - changes which folder you are currently in.

```sh
$ cd Documents
$ pwd
/Users/cameronwilby/Documents
```

----

### The `ls` command

> List Directory - lists the contents of the folder you are currently in.

```sh
$ cd Pictures
$ pwd
/Users/cameronwilby/Pictures
$ ls
Wallpapers      Logos       Vacation
$ cd Logos
$ ls
logo.jpg        logo-2.jpg
```

----

### Demo

----

## Navigation: Recap

```
pwd     - Print Working Directory
cd      - Change Directory
ls      - List Directory
mkdir   - Make Directory
.       - Alias for current directory
..      - Alias for parent directory
~       - Alias for home directory (macOS/Linux)
```

---

## Objectives

- **Introduction to the CLI**
- **Navigation**
- **Git and GitHub**
- Common Git Commands

----

## Git and GitHub

- Git and GitHub help teams share code with eachother.
- This practice is known as Version Control.
- Git `!==` GitHub
- Git is a Version Control System (VCS)
- GitHub is a VCS Hosting Provider.

----

## VCS and Warehouses

<img style="border: 0; box-shadow: none;" src="images/warehouse1.png" height="300" />

Note:
Disclaimer: Analogies are not always a 1-to-1 match with reality, but they help us understand the what, why and how of topics when we're brand new to it. Students should "throw away" these crutches as quickly as possible.

This analogy requires a lot of detail to pull off.

Repository == Warehouse
Staging Area == Shipping Department
Commits == Shipping Labels
Remotes == Other Warehouses
Branches == Warehouse Sections

----

<img style="border: 0; box-shadow: none;" src="images/warehouse2.png"  />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3a.png" height="540"/>

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3b.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3c.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3d.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3e.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3f.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3g.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3h.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3i.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3j.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3k.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3l.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3m.png" height="540" />

----

<img style="border: 0; box-shadow: none;" src="images/warehouse3n.png" height="540" />

----

## Why do it this way?

* Everybody has a copy of the code.
* Nobody can deny access to anybody.
* Allows developers to experiment in isolation.
* Keeps track of history.

----

## Key Git Terms

- Micro: Focusing on a single repository.
- Macro: Focusing on several repositories working together.

----

## Micro: Repository

* Where code is stored.
* Each developer has their own local repository.
* An origin repository exists to act implicitly as a central repository.

----

## Micro: Branch

* Branches were the working areas we saw.
* They allow us to organize our coding efforts on a micro level.
* "I wanna go in a different direction with this feature"
* "Break up the work into tickets, take a ticket, create a branch"

----

## Micro: Working Area

* Holds work in progress since the last commit. 
* Not branch specific.

----

## Micro: Staging Area

* A place for finished work that is ready to commit.

----

## Micro: Committing

* Giving the work in the staging area a label for future reference.

----

## Macro: Remotes

* Each repository maintains a list of "remotes" - other places this repository exists.
* The "origin" remote is the central repository.

----

## Macro: Push

* Push your code in the staging area to another repository.

----

## Macro: Clone

* Used to clone an existing repository.
* Usually happens when you join a software team for the first time.
* "Clone our repo".

----

## Summary

- There is always more to learn with Git.
- We will revisit Git throughout the course.
- Get good at the basics.
- Practice by doing.

---

## Objectives

- **Introduction to the CLI**
- **Navigation**
- **Git and GitHub**
- **Common Git Commands**

----

## Common Git Commands

* Creating a repository
* Linking to GitHub
* Committing your work
* Pushing to GitHub
* Undoing work

----

### Creating a repository

> When starting a project for the first time

```sh
$ cd ~/dev/astro-weight
$ git init
Initialized empty Git repository in /Users/cameronwilby/dev/astro-weight
```

----

### Linking to GitHub

> After creating a repository, link it with GitHub

* Create a repository on GitHub

```sh
$ git remote add origin https://github.com/cameronwilby/astro-weight.git
```

----

### Committing your work

> Commit often enough that you can go back if things go wrong.

[Watch this Video](https://www.youtube.com/watch?v=9kS6fSczcZs&t=31m15s)

----

### Committing your work

* Commit at the end of each day
* Commit when you get something working
* Break the project into chunks ahead of time, commit each chunk of work as you go.

----

### Committing your work

```sh
$ git status                    # gives hints of what to do next
$ git add .                     # adds work to staging area
$ git commit -m "some label"    # labels work in staging area
```

----

### Pushing to GitHub

* Before each push to GitHub, check:

```sh
# Have you added work to staging area? 
$ git add .

# Have you committed outstanding work? 
git commit -m ""

# Have you added a remote? 
git remote add origin https://github.com/cameronwilby/astro-weight.git
```

----

### Pushing to GitHub

> git push <remote> <branch>

```sh
# First push
# (-u sets the default remote/branch to push to)
# (in this case, the origin/master remote/branch)
$ git push -u origin master

# Subsequent pushes
$ git push
```

----

### Exercise: Complete this online tutorial

[https://try.github.io/levels/1/challenges/1](https://try.github.io/levels/1/challenges/1)