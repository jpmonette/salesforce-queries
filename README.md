<p align="center">
  <img src="./assets/title.png" alt="salesforce-queries">
</p>
<p align="center">
  <a href="https://travis-ci.org/jpmonette/queries-queries"><img src="https://travis-ci.org/jpmonette/salesforce-queries.svg?branch=master" alt="Build Status"></a> <a href='https://coveralls.io/github/jpmonette/salesforce-queries?branch=master'><img src='https://coveralls.io/repos/github/jpmonette/salesforce-queries/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

<p align="center">
  <code>salesforce-queries</code> - A Javascript <strong>SOQL/SOSL</strong> Query Builder for the <strong>Force.com Platform</strong></strong>
</p>

## Installation

```sh
$ yarn add salesforce-queries
```

## Example

```ts
import { SOQL } from 'salesforce-queries';

const query = new SOQL('Account')
  .select(['Id', 'Name', 'BillingCountry'])
  .where('Id', '=', '001E000001KnMkTIAV')
  .limit(10)
  .build();

console.log(query);
// SELECT Id, Name, BillingCountry FROM Account WHERE Id = '001E000001KnMkTIAV' LIMIT 10

console.log(new SOQL('Account').build());
// SELECT Id FROM Account
```

## References

* [SOQL and SOSL Reference on Salesforce Developer](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm)

<p align="center">
  <br/>
  Looking for <a href="https://mavens.com/careers/">new opportunities</a>? Have a look at <a href="https://mavens.com/careers/">Mavens</a> website!<br/>
  👩🏻‍⚕️👨🏾‍⚕️
</p>
