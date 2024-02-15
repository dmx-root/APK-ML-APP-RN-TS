import {Svg, Path} from 'react-native-svg';

export function OcrIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return<Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <Path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <Path d="M3.27 6.96L12 12.01 20.73 6.96" />
        <Path d="M12 22.08L12 12" />
    </Svg>
}