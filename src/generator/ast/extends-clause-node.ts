import type { ExpressionNode } from './expression-node.js';
import { NodeType } from './node-type.js';

export class ExtendsClauseNode {
  readonly alternate: ExpressionNode;
  readonly consequent: ExpressionNode;
  readonly name: string;
  readonly test: ExpressionNode;
  readonly type = NodeType.EXTENDS_CLAUSE;

  constructor(
    name: string,
    test: ExpressionNode,
    consequent: ExpressionNode,
    alternate: ExpressionNode,
  ) {
    this.name = name;
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}