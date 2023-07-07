---
id: atomic-design
title: Atomic Design
---

<!-- [![docs-source](https://img.shields.io/badge/SRC-UX%20Companion-blue)](https://play.google.com/store/apps/details?id=com.cyberduck.uxcompanion) -->

#### Define

**A methodology for designing Interfaces by designing elements and their combinations rather than pages**

Introduced by Brad Frost in 2013, Atomic Design is an approach to designing interfaces by creating systems Of components instead Of pages. It involves designing small, standalone, reusable elements and combining them to create the whole. This enables rapid production of scalable and consistent interfaces that are easier to maintain.

In Atomic Design, there are five components of an interface:

* Atoms: the smallest, most basic building blocks, that can't be broken down (e.g. buttons, input fields, checkboxes, links). They can also be abstract (e.g. colors, fonts).
* Molecules: bonded atoms that function as a unit (e.g. an input field and button can combine to create a search box). Molecules can be simple or complex, built for reuse or one-off use.
* Organisms: groups of similar or different molecules (and possibly atoms) joined to form a distinct section of an interface (e.g. a page header can be formed from a logo, navigation and search box).
* Templates: organisms combined together to form pages. They are client facing and begin to demonstrate the page layout and flow.
* Pages. specific instances of templates. They test how the templates work with real content, enabling designers to go back to modify the molecules, organisms, and templates if required.

#### Resources

* 📃 [An introduction into Atomic Design, a super-clean way to style web applications](https://www.dev-metal.com/introduction-atomic-design) - Dev Metal
* 📃 [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) - Brad Frost
* 📃 [The "Other" Interface: Atomic Design With Sass](https://www.smashingmagazine.com/2013/08/other-interface-atomic-design-sass/) - Robin Rendle