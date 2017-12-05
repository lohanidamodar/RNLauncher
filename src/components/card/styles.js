import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
      backgroundColor: '$cardBackgroundColor',
      borderColor: '$cardBorderColor',
      borderWidth: '$cardBorderWidth',
      padding: '$cardPadding',
      margin: '$cardMargin',
      marginBottom: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0,0,0, .2)',
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 1,
          shadowRadius: 1,
        },
        android: {
          elevation: 1,
        },
      }),
    },
    featuredTitle: {
      fontSize: '$cardFeaturedTitleFontSize',
      marginBottom: '$cardFeaturedTitleBottomMargin',
      color: '$cardFeaturedTitleColor',
      fontWeight: '$cardFeaturedTitleFontWeight',
      
    },
    featuredSubtitle: {
      fontSize: '$cardFeaturedSubtitleFontSize',
      marginBottom: '$cardFeaturedTitleBottomMargin',
      color: '$cardFeaturedSubtitleColor',
      fontWeight: '$cardFeaturedSubtitleFontWeight',
    },
    wrapper: {
      backgroundColor: 'transparent',
    },
    divider: {
      marginBottom: '$cardDividerBottomMargin',
    },
    cardTitle: {
      fontSize: '$cardTitleFontSize',
      fontWeight: '$cardTitleFontWeight',
      textAlign: 'center',
      marginBottom: '$cardTitleBottomMargin',
      color: '$cardTitleColor',
    },
    imageCardTitle: {
      marginTop: '$imageCardTitleTopMargin',
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });