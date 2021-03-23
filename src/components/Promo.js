import React from 'react'
import { Text } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

const Promo = () => {
    return (
        <Card>
            <Card.Title>Promo Tako Code!</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri:"https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/dELTACOEPICBURRITOCHICKEN.png"}}/>
            <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
        </Card>
    )
}

export default Promo
