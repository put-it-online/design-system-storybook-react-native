import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {
  Image,
  TokenProvider,
  whiteLabelTokens,
} from 'design-system-react-native';
import CenterView from '../CenterView';

storiesOf('Image', module)
  .addDecorator(getStory => (
    <CenterView>
      <TokenProvider value={whiteLabelTokens}>{getStory()}</TokenProvider>
    </CenterView>
  ))
  .add('Primary', () => (
    <Image
      source={{
        uri: 'https://www.ubabelgium.be/l/nl/library/download/urn:uuid:6a22a4a8-b36e-4155-9f23-0bd7eb8dc1f0/vrt.png?scaleType=1&width=596&height=370',
      }}
    />
  ));
