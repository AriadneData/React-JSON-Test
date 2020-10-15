import React, { useState } from 'react';
import Form from 'react-jsonschema-form';
import { schema, uiSchema, chkboxExampleSchema, 
  chkboxExampleUISchema, dependencySchema,
  dynamicSchema, customWidgetschema,
  customWidgetuiSchema, CustomCheckbox, customWidgetwidgets } from '../schemas/textAreaExample';

import { sampleJSON } from '../schemas/simple'
import { UISchema } from '../schemas/simple'


export const JSONEntry = (props) => {
      
    const [jsonSchemaData, setJsonSchemaData ] = useState(dynamicSchema);
    // setJsonSchemaData(JSON.stringify(JSON.parse(jsonSchemaData),null,'\t'));

    const updateJSON = event => {
        setJsonSchemaData(JSON.parse(event.target.value));
        console.log(JSON.parse(event.target.value));
    };

    return (
        <div>
            <textarea onChange={updateJSON} value={JSON.stringify(jsonSchemaData)} cols = "150" rows = "5" ></textarea>
            <br />
            <div className="col-md-offset-3 col-md-6">               
                <Form schema={dynamicSchema} uiSchema={customWidgetuiSchema} widgets={customWidgetwidgets}/>
                <Form schema={dependencySchema} />
            </div> 
        </div>      
    );
};

export default JSONEntry;