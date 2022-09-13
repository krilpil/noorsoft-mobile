import React, {useEffect} from 'react';
import {
  Avatar,
  InformationView,
  InfoView,
  Name,
  Status,
} from './style-components';
import TouchableIcon from '../../touchable-icon/touchable-icon';
import {LogoutIcon} from '../../icons/styled-components';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {userLogout} from '../../../redux/slices/auth-slice';
import {getAvatarLabel} from '../../../helpers/avatar-label';
import {fetchDialog} from '../../../redux/slices/dialog-slice';

const ChatInfo = () => {
  const dispatch = useAppDispatch();
  const uid = useAppSelector(state => state.auth.uid);
  const {name, surname, status} = useAppSelector(state => state.dialog);

  useEffect(() => {
    dispatch(fetchDialog(uid));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <InfoView>
      <Avatar label={getAvatarLabel({name, surname})} />
      <InformationView>
        <Name>
          {name} {surname}
        </Name>
        <Status>Dialog status: {status}</Status>
      </InformationView>
      <TouchableIcon
        onPress={() => dispatch(userLogout())}
        icon={<LogoutIcon />}
      />
    </InfoView>
  );
};

export default ChatInfo;
