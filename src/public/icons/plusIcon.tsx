import {Svg, Path} from 'react-native-svg';

//  Doc 
//  

export function PlusIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return     <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
    >

    <Path d="M12 8L12 16" />
    <Path d="M8 12L16 12" />
  </Svg>
}