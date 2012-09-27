/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
 
 (function ($, Drupal, window, document, undefined) {

// Place your code here.
  Drupal.behaviors.kbslideshow = {
    attach: function (context, settings) {
      $('#block-views-frontpage-slideshow-block-1 .view-display-id-block_1 .view-content')
        .after('<div id="slidenav">')
        .cycle({ 
          fx:     'fade', 
          speed:  'fast', 
          timeout: 0,
          pager:  '#slidenav'
      });
    
    }
  };

  Drupal.behaviors.addtexttojp = {
    attach: function (context, settings) {
      $('.jp-interface').append('<p id="listen">Listen Now</p>');
    }
  };

})(jQuery, Drupal, this, this.document);







/** Okay, this will work if the upper stuff doesnt **/
 /* I commented out the original code here as I could not figure out how to use it... */
 /* I found this actually helpful: http://www.digett.com/blog/02/15/2012/how-add-presentational-javascript-your-drupal-7-site */

/*
jQuery(document).ready(function($) {
   $('#block-views-frontpage-slideshow-block-1 .view-display-id-block_1 .view-content')
        .after('<div id="slidenav">')
        .cycle({ 
          fx:     'fade', 
          speed:  'fast', 
          timeout: 0,
          pager:  '#slidenav'
      });
    });
*/