import React from "react";
import {TouchableOpacity} from 'react-native';
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const MyHeaderButton = (props) => {
  return (
        <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Platform.OS==="android" ? "white" : Colors.primaryColor}
        />
  );
};

export default MyHeaderButton;
