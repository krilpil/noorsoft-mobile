import React from 'react';
import {CombinedWrap} from './styled-components';

type FormNavigationProps = {
  children: JSX.Element | JSX.Element[];
  offset?: boolean;
};

const Combined: React.FC<FormNavigationProps> = ({offset, children}) => {
  return <CombinedWrap offset={offset}>{children}</CombinedWrap>;
};

export default Combined;
