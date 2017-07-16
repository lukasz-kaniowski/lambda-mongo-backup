# AWS Lambda for mongo backups

This a [serverless](https://serverless.com) setup for aws lambda function for mongodb backups.

Backups are created daily and stored in s3 bucket specified in `env.yml`

## Usage

Go to [serverless](https://serverless.com) for instructions how to setup your environment.
Once serverless is ready then:

1. `yarn install`
2. You need to parametrized deployment by creating `env.yml`. Use [env.example.yml](env.example.yml) and change 
   parameters.
3. Deploy `serverless deploy`
4. Test your function `serverless invoke -f backup -l`
