import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import classNames from 'classnames';

import {
  Field,
  reduxForm,
  SubmissionError,
  propTypes as formPropTypes,
} from 'redux-form';
import { toastr } from 'react-redux-toastr';

import './styles.scss';

class CustomInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.input.value,
    };
  }


  onChangeDebounced = _.debounce(this.props.input.onChange, 400);

  onChange = event => {
    event.persist()
    this.setState({ value: event.target.value })
    this.onChangeDebounced(event)
  };

  render() {
    const { input: { value, onChange, ...input }, meta, label, ...restProps } = this.props;
    console.log('CUSTOM META: ', meta);
    console.log('CUSTOM restProps: ', restProps);
    console.log('CUSTOM input: ', input);

    const { error, touched, active } = meta;
    const blockClassNames = classNames({
      error: touched && error,
      active,
    });


    return (
      <div className={blockClassNames}>
        <pre>{JSON.stringify(meta, 0, 2)}</pre>
        <label htmlFor={input.name}>{label}</label>
        <input
          {...{
            ...input,
            ...restProps,
            value: this.state.value,
            onChange: this.onChange,
          }}
        />
        {error && touched && (
          <span>{error}</span>
        )}
      </div>
    );
  }
};

const validate = values => {
  const fields = [
    'firstName',
  ];
  console.error('VALIDATION:', values)
  const errors = fields
    .reduce((errors, fieldName) => {
      if (!values[fieldName]) {
        errors[fieldName] = 'Required';
      } else if (values[fieldName].length < 5) {
        errors[fieldName] = 'has to be min 5 symbols';
      }

      console.error(errors);
      return errors;
    }, {});

  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
      throw { firstName: 'That username is taken' }
    }
  })
};

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log('PROPS: ', props);
  console.log('is any touched: ', props.anyTouched);
  const onSubmit = event => {
    // event.preventDefault();
    console.log(event);
    toastr.success('Test submit');

    // throw new SubmissionError('Submitssion error test');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="firstName"
        id="firstName"
        label="First Name"
        component={CustomInput}
        type="text"
        placeholder="First Name"
        // format={(value = '') => value.toUpperCase()}
      />
      <div>
        <label htmlFor="lastName">Last Name</label>
        <div>
          <Field
            id="lastName"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

SimpleForm.propTypes = {
  ...formPropTypes,
};

export default compose(
  connect(
    () => ({
      initialValues: {
        // firstName: 'testing1',
      },
    })
  ),
  reduxForm({
    // a unique identifier for this form
    form: 'simple',
    validate,
    asyncValidate,
    asyncChangeFields: ['firstName'],
  }),
)(SimpleForm);
