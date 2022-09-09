import React from 'react';
import {FormDescription} from './styled-components';
import {FormikErrors, FormikValues} from 'formik';

type DescriptionProps = {
  initialText: string;
  errors: FormikErrors<FormikValues>;
};

const Description: React.FC<DescriptionProps> = ({initialText, errors}) => {
  return (
    <FormDescription>{Object.values(errors)[0] || initialText}</FormDescription>
  );
};

export default Description;
