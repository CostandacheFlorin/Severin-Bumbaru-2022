import React from 'react';
import BusinessList from '../../components/Business/BusinessList/BusinessList';


const DUMMY_BUSINESSES = [{
    id: "id6",
    name: "firma fantoma 1",
    description: "Ceva descriere 1",
    address: "strada campilor nr1",
    status: "in asteptare"
},
{
    id: "id3",
    name: "firma fantoma 2",
    description: "Ceva descriere 2",
    address: "strada campilor nr3",
    status: "acceptat"
},
{
    id: "id1",
    name: "firma fantoma 3",
    description: "Ceva descriere 3",
    address: "strada campilor nr3",
    status: "in asteptare"
},
{
    id: "id24",
    name: "firma fantoma 4",
    description: "Ceva descriere 4",
    address: "strada campilor nr4",
    status: "acceptat"
},
{
    id: "id5353",
    name: "firma fantoma 5",
    description: "Ceva descriere 5",
    address: "strada campilor nr5",
    status: "in asteptare"
},
{
    id: "id684128",
    name: "firma fantoma 6",
    description: "Ceva descriere 6",
    address: "strada campilor nr6",
    status: "acceptat"
},

]


const ManageBusinesses = () => {

    return <BusinessList businesses={DUMMY_BUSINESSES}/>

}



export default ManageBusinesses;