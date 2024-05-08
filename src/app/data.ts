const clothes = [
    {
        id:"1",
        name:"Polo T-Shirt",
        category:"T-Shirts",
        gender:"Male",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"2",
        name:"Cotton T-Shirt",
        category:"T-Shirts",
        gender:"Male",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"3",
        name:"V-Neck T-Shirt",
        category:"T-Shirts",
        gender:"Male",
        price:25,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:4,
        name:"Barbie T-Shirt",
        category:"T-Shirts",
        gender:"Female",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:5,
        name:"Crop Top",
        category:"T-Shirts",
        gender:"Female",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:6,
        name:"Slim Fit Jeans",
        category:"Bottoms",
        gender:"Female",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:7,
        name:"Skinny Jeans",
        category:"Bottoms",
        gender:"Female",
        price:25,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:8,
        name:"Straight Jeans",
        category:"Bottoms",
        gender:"Male",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    }

]

export const getClothes = async ({category, gender}:{category:string, gender:string}) =>{
  
    return clothes.filter(c => c.category === category && c.gender === gender);
}