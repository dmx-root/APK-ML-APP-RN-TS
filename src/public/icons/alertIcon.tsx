import { Svg, Path } from 'react-native-svg'

export function AlertIcon({color,size,width}:{
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
            <Path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <Path d="M12 9L12 13" />
            <Path d="M12 17L12.01 17" />
          </Svg>
        
}