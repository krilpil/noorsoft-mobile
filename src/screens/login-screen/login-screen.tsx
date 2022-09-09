import React from 'react';
import {
  Form,
  FormWrapper,
  Input,
  Title,
} from '../../components/form/styled-components';
import Description from '../../components/form/description/description';
import Combined from '../../components/form/combined/combined';
import TouchableText from '../../components/touchable-text/touchable-text';
import FormButton from '../../components/form/button/button';
import {useFormik} from 'formik';
import {loginFormikConfig} from './login-formik-config';
import {navigationType, ScreenList} from '../../navigation/stack-list';

interface LoginScreenProps {
  navigation: navigationType;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {handleSubmit, handleBlur, handleChange, values, errors} =
    useFormik(loginFormikConfig);

  return (
    <FormWrapper>
      <Form>
        <Title>Login</Title>
        <Description
          initialText={'Enter your email and password to log in'}
          errors={errors}
        />
        <Input
          placeholder={'Your email...'}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Input
          placeholder={'Your password...'}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry={true}
        />
        <Combined>
          <TouchableText
            text={'Signup'}
            onPress={() => navigation.navigate(ScreenList.SIGNUP)}
          />
          <TouchableText
            text={'Forgot password?'}
            onPress={() => navigation.navigate(ScreenList.FORGOT)}
          />
        </Combined>
        <FormButton onPress={() => handleSubmit()} title={'Log in'} />
      </Form>
    </FormWrapper>
  );
};

export default LoginScreen;
