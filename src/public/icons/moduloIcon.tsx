import {Svg, Path,Rect } from 'react-native-svg'


export function ModuloIcon({color,size,width}:{
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
        <Rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
        <Path d="M8 21L16 21" />
        <Path d="M12 17L12 21" />
    </Svg>
}