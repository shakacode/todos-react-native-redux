import { StyleSheet } from 'react-native';
import { $darkGray, $white } from './colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: $darkGray,
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  inputText: {
    color: $white,
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
});

export default styles;
