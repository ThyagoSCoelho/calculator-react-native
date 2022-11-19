import  React from 'react'

import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width /4,
        width: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#DEF5E5',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 7
    },
    operationButton: {
        color: '#fff',
        backgroundColor:'#9ED5C5'
    },
    buttomDouble: {
        width: (Dimensions.get('window').width /4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width /4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double)  stylesButton.push(styles.buttomDouble)
    if (props.triple)   stylesButton.push(styles.buttonTriple)
    if (props.operation)   stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label) }>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}