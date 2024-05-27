
// const dummyData = [
//     { "id": 1, "name": "John Doe", "email": "john.doe@example.com", "number": 1234567890 },
//     { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com", "number": 2345678901 },
//     { "id": 3, "name": "Alice Johnson", "email": "alice.johnson@example.com", "number": 3456789012 },
//     { "id": 4, "name": "Bob Brown", "email": "bob.brown@example.com", "number": 4567890123 },
//     { "id": 5, "name": "Charlie Davis", "email": "charlie.davis@example.com", "number": 5678901234 },
//     { "id": 6, "name": "Diana Clark", "email": "diana.clark@example.com", "number": 6789012345 },
//     { "id": 7, "name": "Edward Evans", "email": "edward.evans@example.com", "number": 7890123456 },
//     { "id": 8, "name": "Fiona Hill", "email": "fiona.hill@example.com", "number": 8901234567 },
//     { "id": 9, "name": "George Wilson", "email": "george.wilson@example.com", "number": 9012345678 },
//     { "id": 10, "name": "Hannah Moore", "email": "hannah.moore@example.com", "number": 1234509876 },
//     { "id": 11, "name": "Ian Taylor", "email": "ian.taylor@example.com", "number": 2345609876 },
//     { "id": 12, "name": "Julia Anderson", "email": "julia.anderson@example.com", "number": 3456709876 },
//     { "id": 13, "name": "Kevin Thomas", "email": "kevin.thomas@example.com", "number": 4567809876 },
//     { "id": 14, "name": "Laura Martinez", "email": "laura.martinez@example.com", "number": 5678909876 },
//     { "id": 15, "name": "Michael Garcia", "email": "michael.garcia@example.com", "number": 6789009876 },
//     { "id": 16, "name": "Natalie Martinez", "email": "natalie.martinez@example.com", "number": 7890109876 },
//     { "id": 17, "name": "Oliver Lee", "email": "oliver.lee@example.com", "number": 8901209876 },
//     { "id": 18, "name": "Paul White", "email": "paul.white@example.com", "number": 9012309876 },
//     { "id": 19, "name": "Quincy Harris", "email": "quincy.harris@example.com", "number": 1234519876 },
//     { "id": 20, "name": "Rachel Martin", "email": "rachel.martin@example.com", "number": 2345619876 },
//     { "id": 21, "name": "Steve Lewis", "email": "steve.lewis@example.com", "number": 3456719876 },
//     { "id": 22, "name": "Tina Walker", "email": "tina.walker@example.com", "number": 4567819876 },
//     { "id": 23, "name": "Uma King", "email": "uma.king@example.com", "number": 5678919876 },
//     { "id": 24, "name": "Victor Scott", "email": "victor.scott@example.com", "number": 6789019876 },
//     { "id": 25, "name": "Wendy Green", "email": "wendy.green@example.com", "number": 7890119876 }
// ]


import "../styles/userlist.css"
import axois from "axios"
import { useState, useEffect } from "react"

const url = "http://localhost:8080/api/v1/getnext";

export default function UserList() {

    const [nextData, setNextData] = useState([]);

    useEffect(() => {
        axois.get(url).then((response) => {
            setNextData(response.data);
        })
    }, [])

    return (
        <div className="root">
            <h1>User List</h1>
            {nextData ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            nextData.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                        <td><button className="edit">Edit</button></td>
                                        <td><button className="delete">Delete</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}
            <div className="buttonwrapper">
                <button className="prevbutton">&lt;</button>
                <button className="nextbutton">&gt;</button>
            </div>
        </div>
    )
}
