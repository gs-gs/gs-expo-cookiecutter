import { NavigationActions, StackActions, DrawerActions } from 'react-navigation';

let navigator = null;
const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const getNavigator = () => navigator;

const isNavigating = () => !!navigator.state.nav.isTransitioning;

// ========== Stack Action ============

const pop = (n = 1) => {
  navigator.dispatch(StackActions.pop({ n }));
};

const replace = (routeName, params) => {
  navigator.dispatch(StackActions.replace({
    routeName,
    params,
  }));
};

const reset = (index, actions) => {
  navigator.dispatch(StackActions.reset({
    index,
    actions,
  }));
};

// ======================

const goBack = (n = 1) => {
  pop(n);
};

const navigate = (routeName, params) => {
  navigator.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
};

const push = (routeName, params) => {
  navigator.dispatch(StackActions.push({
    routeName,
    params,
  }));
};

const goToHome = () => {
  NavigationActions.navigate({ routeName: 'Home' });
};

const gotoLogin = () => {
  NavigationActions.navigate({ routeName: 'Login' });
};

const toggleDrawer = () => {
  navigator.dispatch(DrawerActions.toggleDrawer());
};


const closeDrawer = () => {
  navigator.dispatch(DrawerActions.closeDrawer());
};

const navigationServices = {
  setTopLevelNavigator,
  isNavigating,
  navigate,
  replace,
  reset,
  pop,
  push,
  goToHome,
  gotoLogin,
  toggleDrawer,
  closeDrawer,
  goBack,
  getNavigator,
};
export default navigationServices;
