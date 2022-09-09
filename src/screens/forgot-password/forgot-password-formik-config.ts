import {FormikConfig, FormikValues} from 'formik';
import {Alert} from 'react-native';
import {forgotPasswordValidationSchema} from './forgot-password-validation-schema';

export const forgotPasswordFormikConfig: FormikConfig<FormikValues> = {
  initialValues: {
    email: '',
  },
  validationSchema: forgotPasswordValidationSchema,
  onSubmit: values => {
    Alert.alert(`Email: ${values.email}`);
  },
};
