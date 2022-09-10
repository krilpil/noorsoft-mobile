import {FormikConfig} from 'formik';
import {loginValidationSchema} from './login-validation-schema';

type initialValuesType = {
  email: string;
  password: string;
};

export const loginFormikConfig: FormikConfig<initialValuesType> = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: loginValidationSchema,
  onSubmit: _values => {},
};
