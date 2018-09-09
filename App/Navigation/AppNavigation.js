import { StackNavigator } from 'react-navigation'
// import LaunchScreen from '../Containers/LaunchScreen'
import LoginPage from '../Containers/LoginPage'
import AdminPage from '../Containers/AdminPage'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginPage: { screen: LoginPage },
  AdminPage: { screen: AdminPage }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginPage',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
