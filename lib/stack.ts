import { Stack as SuperStack } from 'aws-cdk-lib';

export class Stack extends SuperStack {
  tryMergeContexts(...keys: string[]): any {
    return keys.reduce((prev, curr) => {
      return { ...prev, ...this.node.tryGetContext(curr) };
    }, {});
  }
}
