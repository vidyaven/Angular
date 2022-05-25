export interface product {
    id:number
    name:string
    Price:number
    description:string
}
export const products:product[]=[
    {
        id:1,
        name:'Phone XL',
        Price:1000,
        description:'A Large Phone With One Of The Best Screens'
    },
    {
        id:2,
        name:'Phone Mini',
        Price:500,
        description:'A Great Phone With One Of The Best Cameras'
    },
    {
        id:3,
        name:'Phone Standard',
        Price:400,
        description:'Small Phone With best battery'
    }
]
