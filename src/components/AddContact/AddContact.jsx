import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

const AddContact = ({ onAddNewContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      // .min(3, 'Your name must be more than 3 symbols!')
      // .max(50, 'Your name is too long')
      .required('Please write your name'),
    phone: Yup.number()
      // .min(5, 'Your phone must be more than 5 numbers!')
      .positive()
      // .integer()
      .required('Please write your phone'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      // validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        values.id = nanoid();
        onAddNewContact(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage name="name" component="span" />
        <label htmlFor="phone">Phone</label>
        <Field id="phone" name="phone" type="tel" />
        <ErrorMessage name="phone" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.array,
// }

export default AddContact;
