import React, {useEffect} from 'react';
import {
  Form,
  FormWrapper,
  Title,
} from '../../components/form/styled-components';
import Description from '../../components/form/description/description';
import Combined from '../../components/combined/combined';
import TouchableText from '../../components/touchable-text/touchable-text';
import AppButton from '../../components/button/button';
import {loginFormikConfig} from './login-formik-config';
import {navigationType, ScreenList} from '../../navigation/stack-list';
import {useFormik} from 'formik';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {userLogin} from '../../redux/slices/auth-slice';
import {Input} from '../../components/input/style-components';
import {setErrors} from '../../redux/slices/main-sclice';

interface LoginScreenProps {
  navigation: navigationType;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const stateErrors = useAppSelector(state => state.main.error);
  const {handleSubmit, handleBlur, handleChange, values, errors} = useFormik({
    ...loginFormikConfig,
    onSubmit: ({email, password}) => {
      dispatch(userLogin({email, password}));
    },
  });

  useEffect(() => {
    dispatch(setErrors(''));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormWrapper>
      <Form>
        <Title>Login</Title>
        <Description
          initialText={'Enter your email and password to log in'}
          errors={stateErrors ? stateErrors : errors}
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
        </Combined>
        <AppButton onPress={() => handleSubmit()} title={'Log in'} />
      </Form>
    </FormWrapper>
  );
};

export default LoginScreen;
