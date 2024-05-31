# Sample README

## Overview

This component is used to wrap sections of generic HTML content in order to apply a standard set of formatting, including fonts, colors, and sized. It helps to ensure a visual consistency among diverse pieces of content and within different components.

This component provides styling for the following HTML elements:

  * Paragraphs
  * Headings
  * Lists
  * Inline formatting, such as emphasis and hyperlinks

The version 2 equivalent is a combination of the "il-formatted" class, the "il-introduction" component, and "il-lede" component. 

There are no slots in the ilw-content component, and the ilw-content component isn't intended to house other components. 

Attributes include:

  * mode: for determining the mode of the content -- starting with introduction and lede, but others may appear. 
  * theme: the theme/background of the content
  * width: whether or not this is contained in the parent, or if it will expand to full width
  * align: whether or not the text is left-aligned, centered, or right-aligned

## Contact Team

jonker@illinois.edu

## NPM Install

None yet, still in alpha.

## Files

None yet, still in alpha.

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

## Accessibility Notes and Use

Color contrast. Be aware that if you want to change colors, make sure you have correct color contrast. 

This does not automatically include your content in a ``<section>`` tag. This is because the section tag is a semantic area that usually includes headings, and it's not expected that these content items will have headings. 

You can include buttons using the ilw-buttons class or ilw-button class. 

## External references

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#usage_notes
https://usability.yale.edu/web-accessibility/articles/headings 
https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/