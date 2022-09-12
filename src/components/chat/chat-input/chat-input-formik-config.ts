import {FormikConfig} from 'formik';
import {chatInputValidationSchema} from './chat-input-validation-schema';

type initialValuesType = {
  message: string;
};

export const chatInputFormikConfig: FormikConfig<initialValuesType> = {
  initialValues: {
    message: '',
  },
  validationSchema: chatInputValidationSchema,
  onSubmit: _values => {},
};
