import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PhoneNumberValidateController} from './features/phone-number-validate/controllers/phone-number-validate.controller';
import {LocationListViewController} from './features/locations/controllers/locations.controller';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <LocationListViewController /> */}
      <PhoneNumberValidateController />
    </SafeAreaView>
  );
};

export default App;
