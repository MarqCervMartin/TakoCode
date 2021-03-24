import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Tile } from 'react-native-elements';

const MenuImage = ( {name}) => {
    /*
<Image
            source={{ uri: "https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/dELTACOEPICBURRITOCHICKEN.png" }}
            style={{ width: 150, height: 200, borderRadius: 10 }}
            PlaceholderContent={<ActivityIndicator />}
            /> 
    */
    return (
        <Tile
                imageSrc={{ uri: "https://thumbs.dreamstime.com/t/tacos-con-el-pollo-tomate-y-verduras-frescas-salsa-de-t%C3%A1rtaro-en-fondo-negro-107740183.jpg" }}
                title={name}
                featured
                caption="SI hay wero"

        />
    )
}

export default MenuImage
