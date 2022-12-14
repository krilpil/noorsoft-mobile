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
import {useFormik} from 'formik';
import {signupFormikConfig} from './signup-formik-config';
import {navigationType, ScreenList} from '../../navigation/stack-list';
import {Input} from '../../components/input/style-components';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {userSignup} from '../../redux/slices/auth-slice';
import {setErrors} from '../../redux/slices/main-sclice';

interface SignupScreenProps {
  navigation: navigationType;
}

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const stateErrors = useAppSelector(state => state.main.error);
  const {handleSubmit, handleBlur, handleChange, values, errors} = useFormik({
    ...signupFormikConfig,
    onSubmit: signupValue => {
      dispatch(userSignup(signupValue));
    },
  });

  useEffect(() => {
    dispatch(setErrors(''));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FormWrapper>
      <Form>
        <Title>Signup</Title>
        <Description
          initialText={'Enter your email and password to sign up'}
          errors={stateErrors ? stateErrors : errors}
        />
        <Combined offset>
          <Input
            combined
            placeholder={'Your name...'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <Input
            combined
            placeholder={'Your surname...'}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            value={values.surname}
          />
        </Combined>
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
            text={'Login'}
            onPress={() => navigation.navigate(ScreenList.LOGIN)}
          />
        </Combined>
        <AppButton onPress={() => handleSubmit()} title={'Sign up'} />
      </Form>
    </FormWrapper>
  );
};

export default SignupScreen;
