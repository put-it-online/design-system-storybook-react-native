import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {
  Text,
  TokenProvider,
  whiteLabelTokens,
} from 'design-system-react-native';
import CenterView from '../CenterView';

storiesOf('Text', module)
  .addDecorator(getStory => (
    <CenterView>
      <TokenProvider value={whiteLabelTokens}>{getStory()}</TokenProvider>
    </CenterView>
  ))
  .add('Primary', () => <Text>Dit is een tekst</Text>)
  .add('Small', () => <Text size="small">Dit is een tekst</Text>)
  .add('Medium', () => <Text size="medium">Dit is een tekst</Text>)
  .add('Large', () => <Text size="large">Dit is een tekst</Text>);
