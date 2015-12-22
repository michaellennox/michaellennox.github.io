---
layout: posts
title: Python Package Structure is Fascinating
category: devramble
---

```
.
├── README.md
├── app
│   ├── __init__.py
│   ├── __init__.pyc
│   ├── fizzbuzz.py
│   └── fizzbuzz.pyc
├── requirements.txt
└── tests
    ├── __init__.py
    ├── __init__.pyc
    ├── test_fizzbuzz.py
    └── test_fizzbuzz.pyc
```

Above is the file structure for my first play with Test Driven python, the (very conceptually basic) kata Makers' first introduced us to TDD with. I'm currently quickly running through it to get a bit of a grasp on Python's inbuilt unittest library (which is remarkably brilliant), the virtualenv concept and python's package structure. Those `__init__.py` files are completely blank files which just tell python 'this is a package' and thus let me import them somewhere. Looking at it I probably didn't need to make the tests a package.

One thing that first struck me when I started looking at python as a language is how minimalist the core API is, the docs for it might be god awful but that doesn't matter too much because they are documenting something that is so short and 'easy' to memorise, compared to the Ruby core API which is... let's just say incredibly long and extensive... it feels like a bit of a breath of fresh air.

Because Python is built around this very minimalist API which you're expected to continuously extend on with various packages the code for each file is also absolutely beautiful and self documenting. There's no points where you might look at something and just go 'eh? Where'd that come from' like you may in Ruby or JS, everything explicitly tells you where it's from.

Let's just say I'm really liking how python seems to work... if only it had some more of Ruby's sugar.
