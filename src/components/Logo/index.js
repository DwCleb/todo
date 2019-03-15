import React from 'react';

import { View, Text } from 'react-native';
import Svg,{
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

const Logo = () => {
  return (
    <View>
      <Svg width="130" height="142" viewBox="0 0 130 142">
        <G id="Agrupar_66" data-name="Agrupar 66" transform="translate(-111 -127)">
          <G id="Agrupar_65" data-name="Agrupar 65">
            <G id="Agrupar_2" data-name="Agrupar 2" transform="translate(0 -12)">
              <Path id="Retângulo_3" data-name="Retângulo 3" d="M30,0H67A30,30,0,0,1,97,30V68A30,30,0,0,1,67,98H10A10,10,0,0,1,0,88V30A30,30,0,0,1,30,0Z" transform="translate(127 139)" fill="#fff"/>
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};

export default Logo;
