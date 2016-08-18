import 'core-js/es6';
import 'core-js/es7/reflect';


if(!ENV) {
  var ENV = 'development';
}

if(ENV === 'production') {
  // Production
} else {
  // Development


  Error.stackTraceLimit = Infinity;
}
