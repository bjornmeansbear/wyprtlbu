/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */


// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth


jQuery(document).ready(function($) {
 
  /*** Your custom code goes here ***/
  $('#block-views-frontpage-slideshow-block-1 .view-display-id-block_1 .view-content')
        .after('<div id="slidenav">')
        .cycle({ 
          fx:     'fade', 
          speed:  'fast', 
          timeout: 0,
          pager:  '#slidenav'
      });
  
});