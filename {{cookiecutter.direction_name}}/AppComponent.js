import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { View } from 'react-native';
import { FlagsProvider } from 'flag';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SET_TOP_NAVIGATION_COMPLETE } from './reducers';
import AppNavigator from './screens';
import Themes from './common/theme';
import NavigationService from './common/NavigationService';
import { getFlags } from './reducers/flags';

const AppContainer = styled.View`
  flex: 1;
`;

const App = ({ flags, dispatch }) => (
  <FlagsProvider flags={flags}>
    <ThemeProvider theme={Themes}>
      <AppContainer>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
            dispatch({ type: SET_TOP_NAVIGATION_COMPLETE });
          }}
        />
      </AppContainer>
    </ThemeProvider>
  </FlagsProvider>
);

App.propTypes = {
  flags: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  flags: getFlags(state),
});
export default connect(mapStateToProps)(App);
