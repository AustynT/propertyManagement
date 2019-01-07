import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import FormInput from "../formFields";

import { FormTitle } from "../formTitle";
class SigninForm extends Component {
  render() {
    return (
      <form className="sign-in-form">
        <FormTitle className="sign-in-form__title" text="Login" />
        <Field
          className="sign-in-form__email"
          component={FormInput}
          name="email"
          type="email"
        />
      </form>
    );
  }
}

SigninForm = reduxForm({
  form: "signin"
})(SigninForm);

export default SigninForm;
