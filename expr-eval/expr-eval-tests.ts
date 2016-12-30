import { Parser, Expression } from 'expr-eval';

const expr = Parser.parse('2^2');
Parser.evaluate('2^2');
Parser.evaluate('2^x', { x: 2 });

expr.evaluate({ x: 3 });
expr.simplify();
expr.simplify({ x: 2 });
expr.variables().forEach(str => str.toUpperCase());
expr.symbols().forEach(str => str.toUpperCase());
expr.toJSFunction('y, x');
expr.toJSFunction('y, z', { x: 2 })(1, 2);
