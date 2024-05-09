export const clothes = [
    {
        id:"1",
        name:"Polo T-Shirt",
        subcategory:"Tops",
        category:"Man",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"2",
        name:"Cotton T-Shirt",
        subcategory:"Tops",
        category:"Man",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:"3",
        name:"V-Neck T-Shirt",
        subcategory:"Tops",
        category:"Man",
        price:25,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:4,
        name:"Barbie T-Shirt",
        subcategory:"Tops",
        category:"Woman",
        price:20,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:5,
        name:"Crop Top",
        subcategory:"Tops",
        category:"Woman",
        price:15,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:6,
        name:"Slim Fit Jeans",
        subcategory:"Bottoms",
        category:"Woman",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:7,
        name:"Skinny Jeans",
        subcategory:"Bottoms",
        category:"Woman",
        price:25,
        sizes:["S","M","L","XL","XXL"],
    },
    {
        id:8,
        name:"Straight Jeans",
        subcategory:"Bottoms",
        category:"Man",
        price:30,
        sizes:["S","M","L","XL","XXL"],
    }

]

export const getClothes = async ({subcategory, category}:{subcategory:string, category:string}) =>{
  
    return clothes.filter(c => c.subcategory === subcategory && c.category === category);
}