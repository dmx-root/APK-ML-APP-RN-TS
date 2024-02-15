import { Svg, Path} from 'react-native-svg';

//  Doc
//  Icono check 
//  Este elemento recibe como pararametros de entrada el color, el tamaño y el ancho del elemento 

export function CheckBoxFill({color,size,width}:{
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
        <Path d="M9 11L12 14 22 4" />
        <Path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </Svg>
}