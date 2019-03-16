import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  
  content:{
    height: 360,
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.white,
  },

  contentView: {
    width: '100%',
    height: 72,
    padding: metrics.basePadding,
    alignItems: 'flex-start',
    borderBottomWidth: 0.6,
    borderBottomColor: colors.blackTransparent,
  },
  
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.dark,
  },

  taskTitle: {
    textAlign: 'left',
    color: colors.dark,
    fontFamily: 'Montserrat-Regular',
    marginTop: -(metrics.baseMargin - 5),
    marginBottom: metrics.baseMargin,
    fontSize: 12,
  },
  
  taskText: {
    textAlign: 'left',
    color: colors.darker,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '600',
    marginTop: -(metrics.baseMargin - 10),
    marginBottom: metrics.baseMargin,
    fontSize: 19,
  },
  
  memberTitle: {
    fontSize: 12,
    textAlign: 'left',
    color: colors.dark,
    fontFamily: 'Montserrat-Regular',
    marginTop: -(metrics.baseMargin),
    marginBottom: (metrics.baseMargin - 5),
  },
 
  addMemberButton: {
    alignItems: 'flex-end',
    borderWidth: 0.4, 
    padding: 7,
    borderRadius: 14,
    width: 90,
    borderColor: colors.secondary,
  },
  
  addMemberText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  
  deadlineTitle: {
    fontSize: 12,
    textAlign: 'left',
    color: colors.dark,
    fontFamily: 'Montserrat-Regular',
    marginTop: -(metrics.baseMargin),
    marginBottom: (metrics.baseMargin - 5),
  },
  
  contentFooterView: {
    width: '100%',
    height: 72,
    padding: metrics.basePadding,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    borderBottomWidth: 0.6,
    borderBottomColor: colors.darkTransparent,
  },
  
  cancelButton: {
    backgroundColor: colors.transparent,
    alignSelf: 'center',
    marginHorizontal: metrics.baseMargin,
  },

  cancelText: {
    textAlign: 'center',
    color: colors.dark,
    fontFamily: 'Montserrat-Regular',
  },
  
  confirmButton: {
    backgroundColor: colors.secondary,
    width: 95,
    height: 35,
    justifyContent: 'center',
  },
  
  confirmText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
