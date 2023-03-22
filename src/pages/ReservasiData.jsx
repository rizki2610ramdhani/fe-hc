import { Container, Table } from "react-bootstrap";

export default function ReservasiData() {
    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Reservasi Data</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Subject</th>
                        <th>Date of complaint</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Sakit Hati</td>
                        <td>18 april 2022</td>
                        <td>Waiting Live Consultant</td>
                        <td>
                            <img src={process.env.PUBLIC_URL + "/images/searc.png"} alt="search" style={{width:"20px"}} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}