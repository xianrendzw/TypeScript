//// [functionCall13.ts]
function foo(a:string, ...b:number[]){}
foo('foo', 1); 
foo('foo'); 
foo();
foo(1, 'bar');
foo('foo', 1, 3);


//// [functionCall13.js]
function foo(a) { }
foo('foo', 1);
foo('foo');
foo();
foo(1, 'bar');
foo('foo', 1, 3);
