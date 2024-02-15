import { Svg, Circle, Path} from 'react-native-svg';

export function SearchIcon({color,size,width}:{
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
            <Circle cx={11} cy={11} r={8} />
            <Path d="M21 21L16.65 16.65" />
        </Svg>
}