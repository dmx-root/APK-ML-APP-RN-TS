import { Svg, Path } from 'react-native-svg'

export function LogoutIcon({color,size,width}:{
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
        <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
        <Path d="M16 17L21 12 16 7" />
        <Path d="M21 12L9 12" />
    </Svg>
}