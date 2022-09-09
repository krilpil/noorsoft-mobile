import React from 'react';
import {
  Form,
  FormWrapper,
  Input,
  Title,
} from '../../components/form/styled-components';
import Description from '../../components/form/description/description';
import TouchableText from '../../components/touchable-text/touchable-text';
import Combined from '../../components/form/combined/combined';
import FormButton from '../../components/form/button/button';
import {useFormik} from 'formik';
import {forgotPasswordFormikConfig} from './forgot-password-formik-config';
import {navigationType, ScreenList} from '../../navigation/stack-list';

interface ForgotScreenProps {
  navigation: navigationType;
}

const ForgotPassword: React.FC<ForgotScreenProps> = ({navigation}) => {
  const {handleSubmit, handleBlur, handleChange, values, errors} = useFormik(
    forgotPasswordFormikConfig,
  );

  return (
    <FormWrapper>
      <Form>
        <Title>Recovery</Title>
        <Description initialText={'Enter the recovery email'} errors={errors} />
        <Input
          placeholder={'Your email...'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Combined>
          <TouchableText
            text={'Login'}
            onPress={() => navigation.navigate(ScreenList.LOGIN)}
          />
          <TouchableText
            text={'Signup'}
            onPress={() => navigation.navigate(ScreenList.SIGNUP)}
          />
        </Combined>
        <FormButton onPress={() => handleSubmit()} title={'Log in'} />
      </Form>
    </FormWrapper>
  );
};

export default ForgotPassword;