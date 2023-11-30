import COLORS from '../constants/colors';
import { View, Text, TextInput } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


export default function PropertyEntity(props) {
    return (
        <View style={{ marginBottom: 12 }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8
            }}>{props.label}</Text>

            {props.type == "string" &&
                <View style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22
                }}>
                    <TextInput
                        placeholder=''
                        placeholderTextColor={COLORS.black}
                        keyboardType='code'
                        style={{
                            width: "100%"
                        }}
                        onChange={(e) => { props.onChangeFunction(e) }}
                    />
                </View>
            }
            {props.type == "select" &&
                <SelectDropdown 
                    defaultButtonText={props.data[props.defaultValueByIndex]}
                    buttonStyle={{width: "100%"}}
                    data={props.data}
                    onSelect={props.onChangeFunction}
                    defaultValueByIndex={props.defaultValueByIndex}
                    
                />
            }
        </View>
    )
}