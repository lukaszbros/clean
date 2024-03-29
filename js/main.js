// Generated by CoffeeScript 1.4.0
(function() {

  $(document).ready(function() {
    var showDialog;
    $('body').on('mouseenter ', '.purpose:not(.selected-purpose)', function() {
      return $(this).find('.icon').attr('class', function(i, c) {
        return c.replace(/_icon/, '_icon_hover');
      });
    });
    $('body').on('mouseleave ', '.purpose:not(.selected-purpose)', function() {
      return $(this).find('.icon').attr('class', function(i, c) {
        return c.replace(/_hover/g, '');
      });
    });
    $('body').on('click', '.purpose', function() {
      $('.purpose').removeClass('selected-purpose');
      $('.icon').attr('class', function(i, c) {
        return c.replace(/_hover/g, '');
      });
      $(this).addClass('selected-purpose');
      $(this).find('.icon').attr('class', function(i, c) {
        return c.replace(/_icon/, '_icon_hover');
      });
      console.log($(this).attr('id'));
      return $('#purpose').val($(this).attr('id'));
    });
    showDialog = function(message) {
      $("#contact_message").fadeOut('fast', function() {
        $(this).html(message);
        return $(this).fadeIn('fast');
      });
      return $('#contact_form_container').fadeOut('fast');
    };
    return $('body').on('submit', '#contact_form_form', function(event) {
      event.preventDefault();
      return $.post('mailing.php', $(this).serialize(), function(data) {
        if (data === 'success') {
          return showDialog('Thank You! Your Conversation has Begun.<h2>Your message was sent successfully. We will be in touch with you shortly.</h2>');
        } else {
          return showDialog('Sorry, there was a problem sending your message, please email us at <a href="mailto:office@tribity.com">office@tribity.com</a>');
        }
      });
    });
  });

  $(document).ready(function() {
    var cl, forward, getParameterByName, highlightMenu, loadContent, runHistory;
    cl = new CanvasLoader('canvasloader-container');
    cl.setColor('#dddddd');
    cl.setShape('spiral');
    cl.setDiameter(121);
    cl.setDensity(21);
    cl.setSpeed(1);
    getParameterByName = function(name) {
      var regex, regexS, results;
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      regexS = "[\\?&]" + name + "=([^&#]*)";
      regex = new RegExp(regexS);
      results = regex.exec(window.location.search);
      if (results === null) {
        return "";
      } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    };
    runHistory = function(window) {
      var history;
      history = window.History;
      if (!history.enabled) {
        return false;
      }
      return history.Adapter.bind(window, 'statechange', function() {
        var forward, state;
        state = History.getState();
        forward = getParameterByName('forward');
        if (forward && forward !== "") {
          History.pushState(null, null, forward);
          return;
        }
        return $('#main_content').load(state.url, function() {
          var address, urlArray;
          cl.hide();
          $(this).fadeIn('fast');
          urlArray = state.url.split("/");
          address = urlArray[urlArray.length - 1];
          _gaq.push(['_trackPageview', address]);
          highlightMenu(address);
          return $('footer').fadeIn('fast');
        });
      });
    };
    runHistory(window);
    forward = getParameterByName('forward');
    if (forward && forward !== "") {
      History.pushState(null, null, forward);
    } else {
      History.pushState(null, null, 'home.html');
    }
    highlightMenu = function(address) {
      $('#menu a').removeAttr('style');
      switch (address) {
        case 'home.html':
          break;
        case 'work.html':
          return $('#menu a#work').stop().animate({
            color: "#e62799"
          });
        case 'company.html':
          return $('#menu a#company').stop().animate({
            color: "#00aed9"
          });
        case 'contact.html':
          return $('#menu a#contact').stop().animate({
            color: "#00c376"
          });
        default:
          return $('#menu a#work').stop().animate({
            color: "#e62799"
          });
      }
    };
    loadContent = function(address) {
      var state, urlArray;
      state = History.getState();
      urlArray = state.url.split("/");
      if (urlArray[urlArray.length - 1] === address) {
        return;
      }
      $('footer').fadeOut('fast', function() {});
      return $('#main_content').fadeOut('fast', function() {
        cl.show();
        return History.pushState(null, null, address);
      });
    };
    $('#logo').click(function() {
      return loadContent('home.html');
    });
    $('body').on('click', 'a:not(.direct)', function(event) {
      var href;
      event.preventDefault();
      href = $(this).attr("href");
      return loadContent(href);
    });
    $('body').on('click', '.project', function() {
      return loadContent('work-' + $(this).attr('id') + '.html');
    });
    $('body').on('mouseenter ', '#logo .absolut-center', function() {
      return $(this).stop().animate({
        color: "#cccccc"
      });
    });
    return $('body').on('mouseleave ', '#logo .absolut-center', function() {
      return $(this).stop().animate({
        color: '#333333'
      });
    });
  });

  $(document).ready(function() {
    $('body').on('mouseenter ', '.project', function() {
      return $(this).stop().animate({
        backgroundColor: "#eeeeee"
      });
    });
    return $('body').on('mouseleave ', '.project', function() {
      return $(this).stop().animate({
        backgroundColor: '#ffffff'
      });
    });
  });

}).call(this);
