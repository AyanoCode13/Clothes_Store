export const clothes = [
    {
        id:"1",
        name:"Polo T-Shirt",
        subcategory:"tops",
        category:"man",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"2",
        name:"Cotton T-Shirt",
        subcategory:"tops",
        category:"man",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"3",
        name:"V-Neck T-Shirt",
        subcategory:"tops",
        category:"man",
        price:1,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:4,
        name:"Barbie T-Shirt",
        subcategory:"tops",
        category:"woman",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:5,
        name:"Crop Top",
        subcategory:"tops",
        category:"woman",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:6,
        name:"Slim Fit Jeans",
        subcategory:"bottoms",
        category:"woman",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:7,
        name:"Skinny Jeans",
        subcategory:"bottoms",
        category:"woman",
        price:25,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:8,
        name:"Straight Jeans",
        subcategory:"bottoms",
        category:"man",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    }

]

export const getClothes = async ({subcategory, category}:{subcategory:string, category:string}) =>{
  
    return clothes.filter(c => c.subcategory === subcategory && c.category === category);
}