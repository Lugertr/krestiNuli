const Field = [
    {id: 0, state:false,player: null},{id:1,state:false,player: null},{id:2,state:false,player: null},
    {id: 3, state:false,player: null},{id:4,state:false,player: null},{id:5,state:false,player: null},
    {id: 6, state:false,player: null},{id:7,state:false,player: null},{id:8,state:false,player: null},
]

function FieldState() {
    return Field.map((el)=>{
        if (typeof(el)==='object')
            return {...el}
        return el
    })
}

export default FieldState;