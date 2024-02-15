import { Svg, Path} from 'react-native-svg'

export function MenuIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return  <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M8 6L21 6" />
            <Path d="M8 12L21 12" />
            <Path d="M8 18L21 18" />
            <Path d="M3 6L3.01 6" />
            <Path d="M3 12L3.01 12" />
            <Path d="M3 18L3.01 18" />
        </Svg>
}