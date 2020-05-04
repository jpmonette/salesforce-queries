export default class SOQL {
  fromText: string;
  fieldList: Set<string>;
  numberOfRows: number | undefined;
  conditions: { field: string; operator: string; value: string | boolean | number }[];
  numberOfRowsToSkip: number | undefined;

  constructor(sobject: string) {
    this.fromText = sobject;
    this.fieldList = new Set();
    this.conditions = [];
  }

  public select = (fields: string[]): SOQL => {
    this.fieldList = new Set([...this.fieldList, ...fields]);
    return this;
  };

  public limit = (limit: number): SOQL => {
    this.numberOfRows = limit;
    return this;
  };

  public where = (field: string, operator: string, value: string | boolean | number): SOQL => {
    this.conditions.push({ field, operator, value });
    return this;
  };

  public buildSelect = (): string => {
    if (this.fieldList.size !== 0) {
      const fields = Array.from(this.fieldList).join(', ');
      return `SELECT ${fields}`;
    } else {
      return 'SELECT Id';
    }
  };

  public buildConditions = (): string => {
    const condList: string[] = [];

    this.conditions.map(({ field, operator, value }) => {
      let valueString: string;
      if (typeof value === 'string') {
        valueString = `'${value}'`;
      } else {
        valueString = value.toString();
      }
      condList.push(`${field} ${operator} ${valueString}`);
    });

    if (this.conditions.length !== 0) {
      return `WHERE ${condList.join(' AND ')}`;
    } else {
      return '';
    }
  };

  public build = (): string => {
    const queryParts: string[] = [];

    queryParts.push(this.buildSelect());
    queryParts.push(`FROM ${this.fromText}`);

    if (this.conditions.length !== 0) {
      queryParts.push(this.buildConditions());
    }

    if (this.numberOfRows) {
      queryParts.push(`LIMIT ${this.numberOfRows}`);
    }

    return queryParts.join(' ');
  };
}
