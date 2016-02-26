# breakout-floats
A clunky little plugin for breaking pull-quote-style floats out of their containers. WIP.

[Here is a demo:](https://rawgit.com/chelsiejohnston/breakout-floats/master/index.html)

## what's this?
Let's say you have a two-column layout with some right-floated elements (perhaps pull quotes). You want these right-floated elements to "flow" from the left column into the right, overflowing into the right column to create a visual inset effect. But the elements in the right container don't know the overlapping elements in the left container are there— so they get overlapped or something. Tragic!

![Not good!](/img/without.png)

Let's say you are also using a CMS, so you can't predict how many elements will be in each column, and which (or how many) of them will be floated.

ENTER BREAKOUT-FLOATS (*clunk, clunk*) -This plugin mimics a "float: center;" behavior such that flow content in two parallel columns flows around each floated element.

![Better!](/img/with.png)

Given two columns, .left and .right, this plugin will find all items with class .floated-right and break them out of their containers. It adds each .floated-right element to the .right container so that it becomes flow content in that column.

## things to note

- This is just a prototype. It's being stored here for later implementation into a Drupal project.
- This was generated using Bootstrap, but it's basically framework agnostic.
- This uses Gilmore Davidson's "Jquery Nearest" plugin - http://gilmoreorless.github.io/jquery-nearest/

## things to do

@todo: Unset vars so this can fire on debounced resize

@todo: On mobile, none of this should happen and everything's inline

@todo: If Javascript is disabled (use Modernizr to detect .js class on HTML element), don't break the floats out

@todo: De-bloat everything
