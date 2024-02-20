import {Svg, Path} from 'react-native-svg'

export function CloseIcon({color,size,width}:{
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
            <Path d="M18 6L6 18" />
            <Path d="M6 6L18 18" />
          </Svg>
}