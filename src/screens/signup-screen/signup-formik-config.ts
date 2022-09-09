import {FormikConfig, FormikValues} from 'formik';
import {Alert} from 'react-native';
import {signupValidationSchema} from './signup-validation-schema';

export const signupFormikConfig: FormikConfig<FormikValues> = {
  initialValues: {
    name: '',
    surname: '',
    email: '',
    password: '',
  },
  validationSchema: signupValidationSchema,
  onSubmit: values => {
    Alert.alert(
      `Name: ${values.name}${'\n\n'}Surname: ${values.surname}${'\n\n'}Email: ${
        values.email
      }${'\n\n'}Password: ${values.password}`,
    );
  },
};
