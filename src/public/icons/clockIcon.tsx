import { Svg, Circle, Path} from 'react-native-svg';

export function ClockIcon({color,size,width}:{
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
            <Circle cx={12} cy={12} r={10} />
            <Path d="M12 6L12 12 16 14" />
          </Svg>
}