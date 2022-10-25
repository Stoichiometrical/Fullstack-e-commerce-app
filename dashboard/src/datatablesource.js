export const userColumns =[
    {  field: 'id', headerName: 'ID', width: 70},
    {
        field : "username" , headerName: "User" ,width: 230,renderCell: (params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="Missing"/>
                    {params.row.username}
                </div>
            )
}

    },
    { field : "email", headerName: "Email", width:230},
    { field : "age",headerName : "Age" ,width: 100 },
    { field: "status", headerName : "Status" , width :160 ,renderCell :(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
        } }

]

export const userRows =[
    {
        id :1,
        username : "Don Joe",
        img : "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "pending",
        email : "dj@gmail.com",
        age : 40
    },
    {
        id :2,
        username : "Bary Joe",
        img : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "bj@gmail.com",
        age : 20
    },
    {
        id :3,
        username : "Mel89",
        img : "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "dj@gmail.com",
        age : 20
    },
    {
        id :4,
        username : "Wangari Buiona",
        img : "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "wangaz@gmail.com",
        age : 20
    },
    {
        id :5,
        username : "Diana Keys",
        img : "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "dkeys@gmail.com",
        age : 28
    },
    {
        id :6,
        username : "Sully Rachelson",
        img : "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "suracheal@gmail.com",
        age : 32
    },
    {
        id :7,
        username : "James Enrico",
        img : "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "passive",
        email : "enricoforever@gmail.com",
        age : 26
    },
    {
        id :8,
        username : "Greg Micheals",
        img : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "gregma@gmail.com",
        age : 45
    },
    {
        id :9,
        username : "Lani678",
        img : "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "pending",
        email : "lani@gmail.com",
        age : 35
    },
    {
        id :10,
        username : "Pete Reno",
        img : "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=600",
        status : "active",
        email : "pr@gmail.com",
        age : 34
    },
]