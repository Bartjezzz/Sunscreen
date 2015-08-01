/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'Sunscreen',
  icon: 'images/menu_icon.png',
  subtitle: 'Control screen',
  body: 'Press a button to control'
});

main.show();

main.on('click', 'up', function(e) 
{
  main.body('Sending command...');
  ajax(
  {
    url: 'http://sunscreener.herokuapp.com/index',
    method:'post',
    type: 'json',
    data: {action:'open',token:'1234'}
  },
  function(data, status, request) {
    console.log('Status: ' + data.message);
    main.subtitle('Opening');
    main.body('Screen is '+ data.message  + '...');
  },
  function(error, status, request) {
    console.log('Error: ' + error);
  }
);
});

main.on('click', 'select', function(e) 
{
  main.body('Sending command...');
 ajax(
  {
    url: 'http://sunscreener.herokuapp.com/index',
    method:'post',
    type: 'json',
    data: {action:'stop',token:'1234'}
  },
  function(data, status, request) {
    main.subtitle('Stopped');
    console.log('Status: ' + data.message);
    main.body('Screen is '+ data.message  + '...');
  },
  function(error, status, request) {
    console.log('Error: ' + error);
  }
);
});

main.on('click', 'down', function(e) 
{
  main.body('Sending command...');
 ajax(
  {
    url: 'http://sunscreener.herokuapp.com/index',
    method:'post',
    type: 'json',
    data: {action:'close',token:'1234'}
  },
  function(data, status, request) {
    main.subtitle('Closing');
    console.log('Status: ' + data.message);
    main.body('Screen is '+ data.message + '...');
  },
  function(error, status, request) {
    console.log('Error: ' + error);
  }
); 
});
