import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TestStack } from './Test-Stack';

export class TestStage extends Stage {
  constructor(
    scope: Construct,
    id: string,
    props: StageProps
  ) {
    super(scope, id, props);

    console.log("Test Stage Output");
    new TestStack(
      this,
      `TestStack`,
      {
        ...props,
      }
    );
  }
}
