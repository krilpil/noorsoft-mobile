import React from 'react';
import {ChatButtonView, ChatInputView} from './style-components';
import {Input} from '../../input/style-components';
import Combined from '../../combined/combined';
import TouchableIcon from '../../touchable-icon/touchable-icon';
import {SendIcon} from '../../icons/styled-components';
import {useFormik} from 'formik';
import {chatInputFormikConfig} from './chat-input-formik-config';
import {userSendMessage} from '../../../api/dialog/send-message';
import {useAppSelector} from '../../../hooks/redux';

const ChatInput = () => {
  const uid = useAppSelector(state => state.auth.uid);

  const {handleSubmit, handleBlur, handleChange, values} = useFormik({
    ...chatInputFormikConfig,
    onSubmit: ({message}, actions) => {
      userSendMessage({
        questionId: uid,
        writtenBy: 'client',
        content: message,
      });
      values.message = '';
      actions.setSubmitting(false);
    },
  });

  return (
    <ChatInputView>
      <Combined>
        <Input
          combined
          unOffset
          placeholder={'Enter your message...'}
          onChangeText={handleChange('message')}
          onBlur={handleBlur('message')}
          value={values.message}
        />
        <ChatButtonView>
          <TouchableIcon onPress={() => handleSubmit()} icon={<SendIcon />} />
        </ChatButtonView>
      </Combined>
    </ChatInputView>
  );
};

export default ChatInput;
