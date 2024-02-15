import {Svg, Rect} from 'react-native-svg'

//  Doc
//  Icono check
//  Este elemento recibe como pararametros de entrada el color, el tamaño y el ancho del elemento 


export function CheckBoxEmpty({color,size,width}:{
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
        <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    </Svg>
}