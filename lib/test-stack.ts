import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { Stack } from './stack';


export class TestStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps
  ) {
    super(scope, id, props);

    // const context = this.tryMergeContexts('app:config', `stack:${id}`);
    console.log("Console from TestStack")
  }
}
