import { Svg, Path, Circle } from 'react-native-svg'

export function EmployeerIcon({color,size,width}:{
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
        <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M20 8L20 14" />
        <Path d="M23 11L17 11" />
    </Svg>
}