import React, {useRef, useEffect} from 'react';
import {Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Loader = props => {
  return (
    <Spinner
      {...props}
      customIndicator={
        <Image
          source={require('../../assets/loading.gif')}
          style={{width: 50, height: 50}}
        />
      }
    />
  );
};

export default Loader;
