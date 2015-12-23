---
layout: posts
title: A Good Rubyist Assumes Everyone is a Moron, a Good Pythonista Assumes Everyone is a Genius
category: devramble
---

So yesterday I introduced myself to TDD in Python (along with the basics of venv & pip) through the [fizzbuzz kata](https://github.com/michaellennox/fizzbuzz-python). It was very enjoyable - the tests are less 'English' than you'd write with something like RSpec but they make logical sense, explicit return also makes functions slightly easier to understand.

Now I'm currently working through the [boris bikes challenge](https://github.com/michaellennox/boris-bikes-python) in python to dive much deeper into OOP and TDD with Python. One thing that's feeling very weird having learnt ruby first is that in python I'm meant to be assuming everyone who comes along later and picks up my codebase is smart, I should be designing code for 'good users' and assuming everyone will treat the code 'right'. Ruby code should be written for a moron and should make breaking it very difficult, even when doing stupid things to it.

Some of the big differences that come up in assuming you're writing code for good users:

* Getter / setter methods do not need defining in python (and it feels really really weird). You assume that if someone is trying to get or set an object's instance variable then they know how to do that safely and without screwing anything up. In Ruby you're meant to hide these as much as physically possible
* Things like explicitly stating an error shouldn't be raised in a test (RSpec's) `expect(...).not_to raise_error` are not used in python unit tests instead opting to just write code, if it doesn't fail on running then the not_raise_error test was effectively done anyway
* Defining blocks purely by indentation also feels slightly odd - but at the same time makes sense, why should someone need an end at the end of their block to realise it's finished? It should be easily displayed anyway.
* Your user will probably want to be able to easily reference things - the package structure and self-documenting code provides this very nicely in python. In Ruby there's almost a sense of 'just write the line in english to explain it' instead of showing people how to easily delve into it deeper.
* Document everything with docstrings, this one feels particularly weird having come from the Ruby idiom of code explaining itself and that comments are a sin. But I can see how it has a place.

ALl in all - I'm liking this language, it has many of the great things Ruby does while at the same time providing a bit more structure and logic to your codebase.
