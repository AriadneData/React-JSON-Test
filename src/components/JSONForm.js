import React, {useContext} from 'react';
import Form from 'react-jsonschema-form';
import {JSONSchemaContext} from '../App';

const JSONForm = () => {
    const JSONSchemaContextData = useContext(JSONSchemaContext)

    console.log(JSONSchemaContextData)

    return (
        <Form schema={JSONSchemaContextData} />
    )
}

export default JSONForm;