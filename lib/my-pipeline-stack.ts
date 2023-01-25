import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, CodeBuildStep } from 'aws-cdk-lib/pipelines';
import { TestStage } from './server-stage';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //The basic pipeline delcaration,
    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: id,
      selfMutation: false,
      synth: new CodeBuildStep('SynthStep', {
        input: CodePipelineSource.connection(
          'AmwayACS/creators-bff-pipelines-poc',
          'main',
          { connectionArn: 'arn:aws:codestar-connections:ap-southeast-1:369309302198:connection/91dd1348-d0e8-4ae4-a6a6-0f5243b9758d' }
        ),
        installCommands: ['npm install -g aws-cdk'],
        commands: ["echo 'CreatorsDevTest'"],
      }),
    });

    const testStage = new TestStage(this, 'TestServer', {});
    pipeline.addStage(testStage);
  }
}