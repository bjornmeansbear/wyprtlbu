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
      $('div.region-glider')
        .after('<div id="slidenav">')
        .cycle({ 
          fx:     'fade', 
          speed:  'fast', 
          timeout: 0,
          pager:  '#slidenav'
      });
    }
  };

/* old IMAGE CAPTION CODE THAT WASN'T QUITE WORKING
  Drupal.behaviors.captionappend = {
    attach: function (context, settings) {
      var imgcaption = $('.node .field-name-body img.media-image').attr('alt');
      var wrapstyle = $('.node .field-name-body img.media-image').attr('style');
      $('.node .field-name-body img.media-image').wrap('<div class="imgcaptionwrap" style="' + wrapstyle + '"/>');
      $('.node .field-name-body img.media-image').after('<span class="imgcaption clear" />');
      $('span.imgcaption').text(imgcaption);
    }
  };
*/

  Drupal.behaviors.captionappend = {
    attach: function (context, settings) {
      $('.node .field-name-body img.media-image').wrap(function(){
        return '<div class="imgcaptionwrap" style="' + $(this).attr('style') + '"/>';
      });
      
      $('.node .field-name-body img.media-image').after(function(){
        return '<p class="imgcaption clear">' + $(this).attr('alt') + '</p>';
      });

    }
  };
  
  
  

  Drupal.behaviors.addlistennow = {
    attach: function (context, settings) {
      $('.jp-interface').after('<p id="listen">Listen Now</p>');
    }
  };
  
  Drupal.behaviors.addinstruct = {
    attach: function (context, settings) {
      $('.jp-playlist').after('<p id="instruct">(Right Click &amp; Save As)</p>');
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