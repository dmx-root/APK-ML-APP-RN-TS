import {Svg, Path} from 'react-native-svg'

export function EditICon({color,size,width}:{
    color: string,
    size: number,
    width: number
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
    <Path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </Svg>
}

