import { StyleSheet } from 'react-native';
import { $darkGray, $lightBlue, $white } from './colors';

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: $darkGray,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: $lightBlue,
    borderRadius: 5,
    marginBottom: 16,
    marginHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: $white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
