import React, { useState } from 'react';
import Form from 'react-jsonschema-form';
import { schema, uiSchema, chkboxExampleSchema, 
  chkboxExampleUISchema, dependencySchema,
  dynamicSchema, customWidgetschema,
  customWidgetuiSchema, CustomCheckbox, customWidgetwidgets } from '../schemas/textAreaExample';

import { sampleJSON } from '../schemas/simple';
import { UISchema } from '../schemas/simple';

import GeoPosition, {MyCustomCheckbox} from '../widgets/YesNoText';



export const JSONEntry = (props) => {
      
    const [jsonSchemaData, setJsonSchemaData ] = useState(dynamicSchema);
    // setJsonSchemaData(JSON.stringify(JSON.parse(jsonSchemaData),null,'\t'));

    const updateJSON = event => {
        setJsonSchemaData(JSON.parse(event.target.value));
        console.log(JSON.parse(event.target.value));
    };

    const chkschema = {
        type: "object",
        properties: {
            "answer": {type: "boolean"}
        }
      };
      
    const chkuiSchema = {
        "ui:field": "myCustomCheckbox",
        "ui:title": "myCustomCheckbox title",
        "ui:description": "myCustomCheckbox description"
    };

    const chkfields = {
        myCustomCheckbox: MyCustomCheckbox 
      };


    return (
        <div>
            <textarea onChange={updateJSON} value={JSON.stringify(jsonSchemaData)} cols = "150" rows = "5" ></textarea>
            <br />
            <div className="col-md-offset-3 col-md-6">               
                <Form schema={chkschema} uiSchema={chkuiSchema} fields={chkfields}/>
            </div> 
        </div>      
    );
};

export default JSONEntry;