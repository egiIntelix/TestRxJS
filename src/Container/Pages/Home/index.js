import React, { memo } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    getCategory,
} from '../../../Config/Redux/actions';
export default memo(({ navigation: { navigate } }) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.value);
    const _getAndClearData = () => {
        dispatch(getCategory({ test: 'ini params' }, true))
    }
    return (
        <View>
            <ScrollView>
                {category.map((item, key) => <Text key={key}>{`${item.name}` || 'NONE'}</Text>)}
                <Button title="NAVIGATE" onPress={() => navigate('Example')} />
                <Button title="Get And Clear Data" onPress={() => _getAndClearData()} />
            </ScrollView>
        </View>
    )
})