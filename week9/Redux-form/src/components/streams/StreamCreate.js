import React from 'react';
import { Field, reduxForm } from 'redux-form'; 

const StreamCreate = (props) => {
  // console.log(props);

  const renderError = ({error, touched}) => {
    if(error && touched) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  const renderInput = (formInput) => {

    const { input, label, meta } = formInput; 

    const className = `field {${meta.error} && ${meta.touched} ? "error" : ""}`;

    return (
      <div className={className}> 
        <label>{label}</label>
        <input value={input.value} onChange={input.onChange}/>
        {/* {meta.touched && <div>{meta.error}</div>} */}
        {renderError(meta)}
      </div>
    )
  }

  const onSubmit = (formValues) => {
    console.log(formValues);
  }

  return (
    <form className='ui form error' onSubmit={props.handleSubmit(onSubmit)} >
      <Field name='title' component={renderInput} label="Enter title" /> 
      <Field name='description' component={renderInput} label="Enter Description" />
      <button className='ui button primary' >Submit</button>
    </form>
  );
};

const validateForm = formValues => {
  const errors = {};

  if(!formValues.title){
    errors.title = "You must enter a title";  
  }

  if(!formValues.description){
    errors.description = "You must enter a description";  
  }

  return errors;
}

export default reduxForm({
  form: "StremCreate",
  validate: validateForm
})(StreamCreate);

