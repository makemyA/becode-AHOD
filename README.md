# Fichier template perso
## Structure du dossier
### Dossier
* index.html
* config.rb
* assets
     * sass
              
        * screen.scss
        * BASE
        * LAYOUT
        * MODULE
        * THEME
     * stylesheets
     * img
     * js

## Règles appliquées
#### SMACSS 
* Base rules
   * heading sizes
   * default link styles
   * default font sizes
   * body backgrounds
   * CSS resets

* Layout rules
   * sections (header, main, footer)
   * sidebar
   * menu
use #id   
* Modules rules
   * navigation bar
   * carousel
   * card
   * widgets
   * ...
use .class. Each Module should be designed to exist as a standalone component. In doing so, the page will be more flexible. If done right, Modules can easily be moved to different parts of the layout without breaking.   

* State rules 
   * media queries
  1. State styles can apply to layout and/or module styles
  2. State styles indicate a JavaScript dependency.

* Theme rules
    * colors
    * font rules
    * Styles 
    * icons
    * vendors templates
    * vendors icons
    * vendor mixin

example:
 ``` html
// in module-name.css
.mod {
    border: 1px solid;
}
// in theme.css
.mod {
    border-color: blue;
}
```

A state is something that augments and overrides all other styles. For example, an accordion section may be in a collapsed or expanded state. A message may be in a success or error state.
* BEM
   * Block
   * Elements
   * Modifiers