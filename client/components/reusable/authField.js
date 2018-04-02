import React, {Fragment} from 'react';


export default function renderField(field) {console.log(field);return (
  <Fragment>
    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"/></span>
    <input {...field.input} placeholder={field.placeholder} className="form-control"/>
    {field.meta.touched && field.meta.error &&
    <span className="error">{field.meta.error}</span>}
  </Fragment>
)};