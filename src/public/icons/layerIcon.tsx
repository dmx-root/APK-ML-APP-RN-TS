import {Svg, Path} from 'react-native-svg';

export function LayerIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <Path d="M12 2L2 7 12 12 22 7 12 2z" />
        <Path d="M2 17L12 22 22 17" />
        <Path d="M2 12L12 17 22 12" />
    </Svg>
}