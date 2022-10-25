import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export default function Widget({type }){
    let data;
    //Temporary numbers
    const amount = 100;
    const diff = 20;
    switch(type){
        case "user":
            data ={
                title: "USERS",
                isMoney: false,
                link :  "See all users",
                icon : <PersonOutlinedIcon className="icon"  style={ {color : "crimson" , backgroundColor : "rgba(255,0,0,0.25)" }}/>
            };
            break;
        case "order":
            data ={
                title: "ORDERS",
                isMoney: false,
                link :  "See all orders",
                icon : <ShoppingCartOutlinedIcon className="icon"  style={ {color : "goldenrod" , backgroundColor : "rgba(255,255,0,0.1)" }}/>
            };
            break;
        case "earnings":
            data ={
                title: "EARNINGS",
                isMoney:true,
                link :  "See net earnings",
                icon : <MonetizationOnOutlinedIcon className="icon"  style={ {color : "green" , backgroundColor : "rgba(0, 255, 0,0.25)" }}/>
            };
            break;
        case "balance":
            data ={
                title: "BALANCE",
                isMoney: true,
                link :  "See balance",
                icon : <AccountBalanceWalletOutlinedIcon className="icon"  style={ {color : "purple" , backgroundColor : "rgba(255,0,255,0.25)" }}/>
            };
            break;
        default :
            break;
    }

    return(
        <>
            <div className="widget">
                <div className="left">
                   <span className="title">{data.title}</span>
                    <span className="counter">{data.isMoney && "$"}{amount}</span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpIcon/>
                        {diff}%
                    </div>
                    {data.icon}
                </div>

            </div>
        </>
    )
}