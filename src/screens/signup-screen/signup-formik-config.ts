import {FormikConfig} from 'formik';
import {Alert} from 'react-native';
import {signupValidationSchema} from './signup-validation-schema';
import {UserSignupData} from '../../types/form-type';

export const signupFormikConfig: FormikConfig<UserSignupData> = {
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
