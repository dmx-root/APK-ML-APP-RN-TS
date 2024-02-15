import {Svg, Path, Ellipse } from 'react-native-svg'


// Doc 
// icono OP
// Este elemento recibe como parámetros de entrada el color del icono, el tamaño y el ancho 


export function OpIcon({color,size,width}:{
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
            <Ellipse cx={12} cy={5} rx={9} ry={3} />
            <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </Svg>
}