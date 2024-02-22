const data=require('./data');

// const filterbycategory=(category)=>{
//     return data.filter((item)=>item.category===category)
// }

// const sorting= (key)=>{
// return data.filter(function(item){
//     return item[key]<100;
// // })}
// const sorting=(key,order)=>{
//     if (order==='asc'){
//         console.log(data.sort((a,b)=>a[key]-b[key]))
//     }
//     if (order==='desc'){
//         console.log(data.sort((a,b)=>b[key]-a[key]))
//     }
// }
const sorting=(key)=>{
  console.log(data.sort((a,b)=>a[key]-b[key]))
}
sorting('protiens');