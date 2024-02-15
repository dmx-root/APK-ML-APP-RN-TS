import {Svg, Path} from 'react-native-svg'

export function AnalitycsIcon({color,size,width}:{
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
        <Path d="M18 20L18 10" />
        <Path d="M12 20L12 4" />
        <Path d="M6 20L6 14" />
    </Svg>
}