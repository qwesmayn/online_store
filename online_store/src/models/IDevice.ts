export interface IInfo {
    title : string,
    description : string
}

export interface IDevice {
    id : number,
    name : string,
    price : number,
    raiting : number,
    img : string,
    info : IInfo
}