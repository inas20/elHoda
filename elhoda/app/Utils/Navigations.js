import { CommonActions, StackActions } from '@react-navigation/native';

const resetNavigationTo = routeName =>
  // StackActions.replace({
  //   index: 0,
  //   actions: [CommonActions.navigate({name: routeName})],
  //   key: null,
  // });

  CommonActions.reset({
    index: 0,
    routes: [
      { name: routeName }
    ],
    key: null,
  })

export { resetNavigationTo };
