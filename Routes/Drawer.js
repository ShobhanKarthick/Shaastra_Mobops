import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import FrontEndStack from './FrontEndStack';
import BackEndStack from './BackEndStack';

const drawers = createDrawerNavigator({
  Home: {
    screen: FrontEndStack,
  },
  Backend: {
    screen: BackEndStack,
  },
});

export default createAppContainer(drawers);
