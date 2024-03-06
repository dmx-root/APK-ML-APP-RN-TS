import { OcrProcessesInterface }            from "../../interfaces/services/ml_api/ocrInterfaces";
import { InformationOcrEventsComponent }    from "../../components/informationOcrEventsComponent";
import { InformationOcrCheckComponent }     from "../../components/informationOcrCheckComponent";
import { InformationOcrComponent }          from "../../components/informationOcrComponent";
import { FlatList, GestureResponderEvent }  from "react-native";

export const handlerOcrRenderList = (data:Array<OcrProcessesInterface>, handlerClick:(event:GestureResponderEvent)=>void)=> {
    return <FlatList 
            renderItem={(item)=>
                item.item.revisadoFecha?
                <InformationOcrCheckComponent
                key={item.item.ocrId} 
                data={item.item} 
                handlerClick={handlerClick}/>:
                item.item.anormalidadCodigo?
                <InformationOcrEventsComponent
                key={item.item.ocrId} 
                data={item.item} 
                handlerClick={handlerClick}/>:
                <InformationOcrComponent
                key={item.item.ocrId} 
                data={item.item} 
                handlerClick={handlerClick}/>
            }
            data={data}/>
}