import { Svg, Path, Circle } from 'react-native-svg'

export function CreateOcrIcon({color,size,width}:{
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
    <Path d="M12 8L12 16" />
    <Path d="M8 12L16 12" />
  </Svg>
}