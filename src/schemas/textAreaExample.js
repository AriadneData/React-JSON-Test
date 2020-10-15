import React from 'react';

export const schema = {
    type: "array",
    items: {
      type: "string"
    }
  };
  
export const uiSchema = {
    items: {
      "ui:widget": "textarea"
    }
  };


export const chkboxExampleSchema  = {
    type: "array",
    minItems: 2,
    title: "A multiple-choice list",
    items: {
      type: "string",
      enum: ["foo", "bar", "fuzz", "qux"],
    },
    uniqueItems: true
  };
  
export  const chkboxExampleUISchema = {
    "ui:widget": "checkboxes",
    "ui:options": {
      inline: false
    },
    "ui:id": 999
  };

export const dependencySchema = {
    "type": "object",
  
    "properties": {
      "name": { "type": "string" },
      "credit_card": { "type": "number" },
      "billing_address": { "type": "string" }
    },
  
    "required": ["name"],
  
    "dependencies": {
      "credit_card": ["billing_address"]
    }
  };


export const dynamicSchema = {
  "title": "Person",
  "type": "object",
  "properties": {
    "Do you have any pets?": {
      "id": "pet-question",
      "type": "string",
      "enum": [
        "No",
        "Yes: One",
        "Yes: More than one"
      ],
      "default": "No"
    }
  },
  "required": [
    "Do you have any pets?"
  ],
  "dependencies": {
    "Do you have any pets?": {
      "oneOf": [
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "No"
              ]
            }
          }
        },
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "Yes: One"
              ]
            },
            "How old is your pet?": {
              "type": "number"
            }
          },
          "required": [
            "How old is your pet?"
          ]
        },
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "Yes: More than one"
              ]
            },
            "Do you want to get rid of any?": {
              "type": "boolean"
            }
          },
          "required": [
            "Do you want to get rid of any?"
          ]
        }
      ]
    }
  }
};

export const customWidgetschema = {
    type: "boolean",
    default: true
};
  
export const customWidgetuiSchema = {
    "ui:widget": "checkbox"
};

export const CustomCheckbox = function(props) {
    return (
        <button id="custom" className={props.value ? "checked" : "unchecked"} onClick={() => props.onChange(!props.value)}>
            {String(props.value)}
        </button>
    );
};

export const customWidgetwidgets = {
    CheckboxWidget: CustomCheckbox
};
  