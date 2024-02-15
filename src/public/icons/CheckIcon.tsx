import Svg, { Path }  from "react-native-svg"

// Doc 
// icono check
// Este elemento recibe como parámetros de entrada el color del icono, el tamaño y el ancho 

export function CheckIcon({color,size,width}:{
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
    <Path d="M20 6L9 17 4 12" />
  </Svg>
}