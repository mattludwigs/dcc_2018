const tryParse = (res, parser) => {
  try {
    return parser(res);
  }

  catch(error) {
    return null;
  }
}

class Response {
  static parseOneOf(res, parsers) {
    for (let parser of parsers) {
      const result = tryParse(res, parser);

      if (result) {
        return result;
      } 
    }
  }

  constructor({headers, status, data}) {
    this.headers = headers;
    this.status = status;
    this.data = data;
  }
}


module.exports = Response;

