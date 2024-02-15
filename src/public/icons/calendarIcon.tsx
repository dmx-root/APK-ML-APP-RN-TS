import { Svg, Path, Rect } from 'react-native-svg';

export function CalendarIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}) {
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
        <Path d="M16 2L16 6" />
        <Path d="M8 2L8 6" />
        <Path d="M3 10L21 10" />
      </Svg>
    )
}