import React from 'react';
import {Avatar, InfoView, Name} from './style-components';
import TouchableIcon from '../../touchable-icon/touchable-icon';
import {LogoutIcon} from '../../icons/styled-components';
import {useAppDispatch} from '../../../hooks/redux';
import {userLogout} from '../../../redux/slices/auth-slice';

const ChatInfo = () => {
  const dispatch = useAppDispatch();

  return (
    <InfoView>
      <Avatar label="KB" />
      <Name>Kirill Bespalov</Name>
      <TouchableIcon
        onPress={() => dispatch(userLogout())}
        icon={<LogoutIcon />}
      />
    </InfoView>
  );
};

export default ChatInfo;
