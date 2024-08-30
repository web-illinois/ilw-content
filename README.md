# ilw-content

## Overview

This component is used to wrap sections of generic HTML content in order to apply a standard set of formatting, including fonts, colors, and sizes. It helps to ensure a visual consistency among diverse pieces of content and within different components.

This component provides styling for the following HTML elements:

  * Paragraphs
  * Headings
  * Lists
  * Inline formatting, such as emphasis and hyperlinks

The version 2 equivalent is a combination of the "il-formatted" class, the "il-introduction" component, and "il-lede" component. 

There are no slots in the ilw-content component, and the ilw-content component isn't intended to house other components. If a design does contain slots or different types of styles, consider using another component for this design. 

Left/right and top/bottom padding is not handled inside this component unless specified with the padding attribute. 

Attributes include:

  * mode: for determining the mode of the content. See below for options.
  * theme: the theme/background of the content. Options are *blue*, *orange*, *gray*, *blue-gradient*, *orange-gradient*
  * width: whether or not this is contained in the parent, if it will expand to full width (*full*), or if it will expand to full width but keep the text in a margin (*auto*), or if it will restrict it to a page margin (*page*).
  * align: whether or not the text is left-aligned, centered, or right-aligned (*left*, *center*, *right*)
  * padding: shorthand for padding around the object

### Modes

  * introduction: an introduction area that is used to start a news story or block of text
  * lede: a single line within a story
  * inset: a block of content that has normalized the heading, used to be put into a call to action or image feature. The inset will always have a transparent background, but you can still assign the theme to ensure color contrast. 


## Code Examples

```
<ilw-content>
  <h2>Programs</h2>
  
  <p>The College of Simulation, renowned for its cutting-edge research in virtual reality and artificial intelligence, offers students an innovative and immersive learning experience. Programs of study include:</p>
  
  <ul>
    <li><a href="#">Virtual Reality</a></li>
    <li><a href="#">Machine Learning</a></li>
    <li><a href="#">Game Theory</a></li>
  </ul>
</ilw-content>
```

```
<ilw-content mode="lede">
    <p>
        Sodium is an essential micronutrient, but the amount we need is small. Three slices of bread or one teaspoon of table salt will do it, and chances are your daily sodium intake is far greater.
    </p>
</ilw-content>
```

```
<ilw-content mode="introduction">
    <p><em>Discover your path, define your future.</em></p>
    <p>No matter what path brought you to ACES, we're glad you're here. A strong education is just a stepping stone to all of the incredible opportunities that await you.</p>
    <p>Join us in changing your future and the world when you accept your ACES admission.</p>
    <ul class="ilw-buttons">
        <li><a href="#">Apply</a></li>
        <li><a href="#">Request Information</a></li>
    </ul>
</ilw-content>
```

## Upgrade Process

* Change the "il-content", "il-introduction" and "il-lede" to "ilw-content". 
* Add the mode if you changed from the old "il-introduction" and "il-lede" components. 
* Update classes to attributes.
* If you have a paragraph that you want to look like a heading, you can use `<p class="ilw-heading">`

## Accessibility Notes and Use

Color contrast. Be aware that if you want to change colors, make sure you have correct color contrast. 

This does not automatically include your content in a ``<section>`` tag. This is because the section tag is a semantic area that usually includes headings, and it's not expected that these content items will have headings. 

You can include buttons using the `ilw-buttons` or `ilw-button` class. 

There is a `<p class="ilw-heading">` helper that will make a paragraph look like a header, but it will not be part of the accessibility tree as a header. 

## External references

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#usage_notes
https://usability.yale.edu/web-accessibility/articles/headings 
https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/
https://developer.mozilla.org/en-US/docs/Web/CSS/padding