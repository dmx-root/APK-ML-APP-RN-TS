import { Svg, Path } from 'react-native-svg';

export function FilterIcon({color,size,width}:{
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
        <Path d="M22 3L2 3 10 12.46 10 19 14 21 14 12.46 22 3z" />
    </Svg>
}