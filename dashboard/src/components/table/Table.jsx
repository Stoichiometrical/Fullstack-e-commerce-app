import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List(){
    const rows =[
        {
            id: 11234 ,
            product : "Samsung A23",
            img : "https://images.pexels.com/photos/6147118/pexels-photo-6147118.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            customer : "John Doe",
            date : "1 March",
            amount :400,
            method : "Cash on Delivery",
            status : "Pending",
        },
        {
            id: 11234 ,
            product : "Samsung A87",
            img : "https://images.pexels.com/photos/5376880/pexels-photo-5376880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            customer : "John Doe",
            date : "2 March",
            amount :500,
            method : "Online Payement",
            status : "Approved",
        },
        {
            id: 11234 ,
            product : "Samsung A03",
            img : "https://images.pexels.com/photos/5626159/pexels-photo-5626159.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            customer : "Miriam Doe",
            date : "4 March",
            amount :480,
            method : "Cash On Delivery",
            status : "Pending",
        },
        {
            id: 11568234 ,
            product : "Samsung A20",
            img : "https://images.pexels.com/photos/5444894/pexels-photo-5444894.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            customer : "Pete Doe",
            date : "1 March",
            amount :200,
            method : "Credit",
            status : "Approved",
        },
        {
            id: 11267,
            product : "Samsung A43",
            img : "https://images.pexels.com/photos/4126784/pexels-photo-4126784.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            customer : "Mary Doe",
            date : "5 March",
            amount :700,
            method : "Paypal",
            status : "Approved",
        },
    ]
    return(
        <>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">TrackingID</TableCell>
                            <TableCell className="tableCell">Product</TableCell>
                            <TableCell className="tableCell">Customer</TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Payment Method</TableCell>
                            <TableCell className="tableCell">Status</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="tableCell" >{row.id}</TableCell>
                                <TableCell className="tableCell">
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="Missing" className="image"/>
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">{row.customer}</TableCell>
                                <TableCell className="tableCell">{row.date}</TableCell>
                                <TableCell className="tableCell">{row.amount}</TableCell>
                                <TableCell className="tableCell">{row.method}</TableCell>
                                <TableCell className="tableCell"><span className={`status ${row.status}`}> {row.status}</span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}