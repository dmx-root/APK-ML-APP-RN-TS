import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';

//  Doc
//  Icono de candado 
//  Este elemento recibe como pararametros de entrada el color, el tamaño y el ancho del elemento 

export function LockIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return <Svg
    width={size}//28
    height={size}//28
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={width}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
    <Path d="M7 11V7a5 5 0 0110 0v4" />
  </Svg>
}