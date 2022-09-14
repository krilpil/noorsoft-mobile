import React from 'react';
import {FormDescription} from './styled-components';
import {FormikErrors, FormikValues} from 'formik';

type DescriptionProps = {
  initialText: string;
  errors: FormikErrors<FormikValues> | string;
};

const Description: React.FC<DescriptionProps> = ({initialText, errors}) => {
  const error = typeof errors === 'string' ? errors : Object.values(errors)[0];
  return <FormDescription>{error || initialText}</FormDescription>;
};

export default Description;
