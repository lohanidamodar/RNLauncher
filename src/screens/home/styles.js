import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        padding: '$containerPadding'
    },
    text: {
        color: '$textColor',
        fontSize: '$titleFontSize'
    },
    icon: {
        marginRight: 16,
        width: 50,
        height: 50
    },
    appListItem: {
        padding: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: EStyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    }
})