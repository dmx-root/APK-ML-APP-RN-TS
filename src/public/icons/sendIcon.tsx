import { Svg, Path} from 'react-native-svg'

export function SendIcon({color,size,width}:{
    color:string,
    size:number,
    width:number
}){
    return<Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Path d="M22 2L11 13" />
            <Path d="M22 2L15 22 11 13 2 9 22 2z" />
        </Svg>
}