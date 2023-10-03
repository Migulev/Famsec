import React from 'react';
import OnViewWrapper, { OnViewWrapperProps } from './OnViewWrapper';

type Props = {} & OnViewWrapperProps;

const OnLoadWrapper = (props: Props) => {
  return (
    <OnViewWrapper variants={props.variants} delay={props.delay} baseDelay={0}>
      {props.children}
    </OnViewWrapper>
  );
};

export default OnLoadWrapper;
