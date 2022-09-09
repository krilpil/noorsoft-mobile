import {FormikConfig, FormikValues} from 'formik';
import {loginValidationSchema} from './login-validation-schema';
import {Alert} from 'react-native';

export const loginFormikConfig: FormikConfig<FormikValues> = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: loginValidationSchema,
  onSubmit: values => {
    Alert.alert(
      `Email: ${values.email} ${'\n\n'} Password: ${values.password}`,
    );
  },
};
