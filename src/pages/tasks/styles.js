import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingRight: 80,
    paddingLeft: 80,
  },

  scrollView: {
    width: metrics.screenWidth,
  },

  title: {
    ...general.title,
    color: colors.darker,
    alignSelf: 'flex-start',
    marginLeft: -metrics.baseMargin * 4,
    fontSize: 15,
    marginTop: metrics.baseMargin,
    marginBottom: -metrics.baseMargin,
  },

  scrollViewContentContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    paddingHorizontal: 33,
    justifyContent: 'center',
  },

  addButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    position: 'absolute',                                          
    bottom: 15,                                                    
    right: 15,
    height: 60,
    backgroundColor: colors.primary,
    borderRadius: 100,
  },

});

export default styles;
