import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
        <Title>Videos</Title>
        <video width="320" height="240" controls>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
    </React.Fragment>
  );
}