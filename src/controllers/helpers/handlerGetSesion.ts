import { accountNavigators } from "../../app/navigators/accountNavigators";


export const handlerGetSesion = (accountId:number) => {
    const findValue= Object.keys(accountNavigators).filter(element=>accountNavigators[element].id===accountId);
    if(findValue.length!==0)return accountNavigators[findValue[0]];
    return accountNavigators['auth'];
}