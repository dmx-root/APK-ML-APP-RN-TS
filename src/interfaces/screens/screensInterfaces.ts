import { StackScreenProps }         from '@react-navigation/stack';

export type RootStackParamList = {
    HomeOp:undefined,
    HomeOcr:undefined,
    HomeEmployeer:undefined,
    HomeModulos:undefined,
    InformationDetailOp:undefined,
    InformationModulo:undefined,
    InformationUser:undefined,
    Production:undefined,
    Profile:undefined,
    Login:undefined,
};

export type HomeOcrScreenProps = StackScreenProps<
    RootStackParamList,
    "HomeOcr"
>;

export type HomeOpScreenProps = StackScreenProps<
    RootStackParamList,
    "HomeOp"
>;

export type HomeEmployeerScreenProps = StackScreenProps<
    RootStackParamList,
    "HomeEmployeer"
>;

export type HomeModulosScreenProps = StackScreenProps<
    RootStackParamList,
    "HomeModulos"
>;

export type InformationDetailOpScreenProps = StackScreenProps<
    RootStackParamList,
    "InformationDetailOp"
>;

export type InformationModuloScreenProps = StackScreenProps<
    RootStackParamList,
    "InformationModulo"
>;

export type InformationUserScreenProps = StackScreenProps<
    RootStackParamList,
    "InformationUser"
>;

export type ProductionScreenProps = StackScreenProps<
    RootStackParamList,
    "Production"
>;

export type ProfileScreenProps = StackScreenProps<
    RootStackParamList,
    "Profile"
>;
export type LoginScreenProps = StackScreenProps<
    RootStackParamList,
    "Login"
>;


