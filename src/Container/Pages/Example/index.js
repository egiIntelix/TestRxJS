import React, { memo, useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    getCategory,
} from '../../../Config/Redux/actions';
export default memo(({ navigation: { navigate } }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory({ test: 'ini params' }))
    })
    return (
        <View>
            <Text>OK</Text>
        </View>
    )
})