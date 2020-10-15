export const sampleJSON = {
  "type": "object",
  title: "My Example Form",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 10,
      "maximum": 100
    },
    "married": {
      "type": "boolean",
      "default": false
    },
    "Dropdown Example" : {
      "type":"string",
      "enum": ["one","two","three"]
    }
  },

  "required": [
    "name",
    "age",
    "married"
  ]
}



export const UISchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:autocomplete": "family-name"
  },
  "lastName": {
    "ui:emptyValue": "",
    "ui:autocomplete": "given-name"
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
}

