import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import{useState} from "react";
import "./topbar.css";



export default function Topbar() {

    const products = [
        {
            id: "1",
            image: "https://m.media-amazon.com/images/I/51rUtfhO5wL.jpg",
            name: "SHIRTS",
            gender: "Male",
            brand: "7th Heaven",
            price: 600 ,
    
        },
        {
            id: "2",
            image: "https://m.media-amazon.com/images/I/61om8PDUY2L._UL1244_.jpg",
            name: "T-SHIRTS",
            gender: "female",
            brand: "7th Heaven",
            price: 400 ,
    
        },
        {
            id: "3",
            image: "https://m.media-amazon.com/images/I/81J+S+zI5JL._UL1500_.jpg",
            name: "SHIRTS",
            gender: "Male",
            brand: "Allen cooper",
            price: 700 
    
        },
        {
            id: "4",
            image: "https://m.media-amazon.com/images/I/61kO870biyL._UL1080_.jpg",
            name: "T-SHIRTS",
            gender: "Male",
            brand: "Allen cooper",
            price: 800 
    
        },
        {
            id: "5",
            image: "https://m.media-amazon.com/images/I/71tWSx1As2L._UL1500_.jpg",
            name: "Kurti",
            gender: "female",
            brand: "7th Heaven",
            price: 900 
    
        },
        {
            id: "6",
            image: "https://m.media-amazon.com/images/I/71Oez7QKdHL._UL1500_.jpg",
            name: "SHIRTS",
            gender: "female",
            brand: "612-IVY-league",
            price: 399 
    
        },
        {
            id: "7",
            image: "https://m.media-amazon.com/images/I/61LBnKyEa1L._UL1500_.jpg",
            name: "SHOES",
            gender: "Male",
            brand: "9 teen again",
            price: 590 
    
        },
        {
            id: "8",
            image: "https://m.media-amazon.com/images/I/61qcnAHZP3L._UL1500_.jpg",
            name: "SHIRTS",
            gender: "Male",
            brand: "7th Heaven",
            price: 699, 
    
        },
        {
            id: "9",
            image: "https://m.media-amazon.com/images/I/81XAuy-IRRL._UL1500_.jpg",
            name: "Palazzos",
            gender: "female",
            brand: "a litte fable",
            price: 899 
    
        },
        {
            id: "10",
            image: "https://m.media-amazon.com/images/I/71OI+RfuxfL._UL1500_.jpg",
            name: "Palazzos",
            gender: "female",
            brand: "7th Heaven",
            price: 999, 
    
        },
        {
            id: "11",
            image: "https://m.media-amazon.com/images/I/712TwGzkawL._UL1500_.jpg",
            name: "SHOES",
            gender: "female",
            brand: "9 teen again",
            price: 1299, 
    
        },
        {
            id: "12",
            image: "https://m.media-amazon.com/images/I/61H2e9jvkwL._UL1440_.jpg",
            name: "SHOES",
            gender: "female",
            brand: "9 teen again",
            price: 1299, 
    
        },
        
    ]
    
    
   

    


    
    return (
        
            <div className="top">
             <div className="topleft">
             <Button  variant="text">MEN</Button>
             <Button variant="text">WOMEN</Button>
             <Button variant="text">KIDS</Button>  
             <Button variant="text">Electronics</Button> 
             </div>
             <div className="topcenter">
                 <ul className="toplist">
                 <TextField className="textfield" id="standard-basic" label="Search" variant="standard" />
                 <IconButton aria-label="delete">
                    <SearchIcon />
                    </IconButton>
                 </ul>
             </div>
             <div className="topright">
               
                     <ul className="toplist">
                     <Button variant="text">Login</Button>
                     <Button variant="text">REGISTER</Button>
                 </ul>
                 

                 <i className="searchicon fa-solid fa-magnifying-glass"> </i>
             </div>
               
            </div>
            
       
    )
}
