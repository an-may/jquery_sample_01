// buttonSet1
$( function() {

  $( '#buttonHeader' ).click( function() {
    $( 'h1' ).text( 'Hello jQuery!' );
  });

  $( '#buttonArticle' ).click( function() {
    $( 'article' ).css({
      'color': '#e5e0dc',
      'background-color': '#b9b0b0'
    });
  });

  $( '#buttonFooter' ).click( function() {
    $( 'footer' ).html('<p><a href="https://www.google.co.jp">Google</a></p>' );
    $( 'footer a' ).css( 'color','#dadde3' );
  });

});

// buttonSet2
$( function() {

  $( '#buttonNormal' ).click( function() {
    $('main').css( 'flex-direction','row' );
  });

  $( '#buttonReverse' ).click( function() {
    $('main').css( 'flex-direction','row-reverse' );
  });

  $( '#buttonVertical' ).click( function() {
    $('main').css( 'flex-direction','column' );
  });



});
