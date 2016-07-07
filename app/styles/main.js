import { StyleSheet } from 'react-native';
import { $gray, $darkGray } from './colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: $gray,
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    backgroundColor: $darkGray,
  },
});

export default styles;
