var tape = require('tape');

tape('check h1 element exists', function (t) {
  fixture.base = 'public';
  fixture.load('index.html');
  t.equal(
    document.getElementsByTagName('h1').length,
    1
  );
  fixture.cleanup();
  t.end();
});

tape('check h1 element contents', function (t) {
  fixture.base = 'public';
  fixture.load('index.html');
  t.equal(
    document.getElementsByTagName('h1')[0].innerHTML,
    'Hello World'
  );
  t.end();
});
