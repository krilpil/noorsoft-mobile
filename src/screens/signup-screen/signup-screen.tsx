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
import {signupFormikConfig} from './signup-formik-config';
import {navigationType, ScreenList} from '../../navigation/stack-list';

interface SignupScreenProps {
  navigation: navigationType;
}

const SignupScreen: React.FC<SignupScreenProps> = ({navigation}) => {
  const {handleSubmit, handleBlur, handleChange, values, errors} =
    useFormik(signupFormikConfig);

  return (
    <FormWrapper>
      <Form>
        <Title>Signup</Title>
        <Description
          initialText={'Enter your email and password to sign up'}
          errors={errors}
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
          <TouchableText
            text={'Forgot password?'}
            onPress={() => navigation.navigate(ScreenList.FORGOT)}
          />
        </Combined>
        <FormButton onPress={() => handleSubmit()} title={'Sign up'} />
      </Form>
    </FormWrapper>
  );
};

export default SignupScreen;
