/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
 
 (function ($, Drupal, window, document, undefined) {

// Place your code here.

  //SLIDESHOW CODE FOR HOMEPAGE
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

  //Current Code that generates wraps and caption areas for each image. Captions should be pulled from alt="" field
  Drupal.behaviors.captionappend = {
    attach: function (context, settings) {
      $('img.media-image').each(function(){
        $(this).wrap('<div class="imgcaptionwrap" style="' + $(this).attr('style') + '"/>');
        $(this).after('<span class="imgcaption clear">' + $(this).attr('alt') + '</span>');
      });

    }
  };
  //END IMAGE CAPTION JQUERY

  
  //CUSTOMIZE THE JPLAYER INTERFACE
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