import { StyleSheet } from 'react-native';
import { $gray, $white, $whiteSemiTransparent, $whiteTransparent } from './colors';

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: $gray,
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderText: {
    color: $whiteSemiTransparent,
    fontSize: 16,
  },
  row: {
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    color: $white,
    fontSize: 16,
  },
  separator: {
    borderColor: $whiteTransparent,
    borderWidth: 1,
    marginLeft: 16,
  },
});

export default styles;
