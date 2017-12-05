import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        padding: '$containerPadding'
    },
    text: {
        color: '$textColor',
        fontSize: '$titleFontSize'
    },
    appListItem: {
        padding: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: EStyleSheet.hairlineWidth
    }
})