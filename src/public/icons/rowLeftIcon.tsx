import { Svg, Path} from 'react-native-svg';

export function RowLeftIcon({color,size,width}:{
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
        <Path d="M19 12L5 12" />
        <Path d="M12 19L5 12 12 5" />
    </Svg>
}