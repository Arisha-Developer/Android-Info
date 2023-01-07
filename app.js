const array=[
    {
      catergory:"iphone",
      model:[
        {
         name:"a30",
         ram:60,
        },
        {
          name:"a31",
          ram:4,
         },
         {
          name:"a32",
          ram:60,
         },
      ]
    },
    {
      catergory:"samsung",
      model:[
        {
         name:"a33",
         ram:4,
        },
        {
          name:"a34",
          ram:32,
         },
         {
          name:"a35",
          ram:32,
         },
      ]
    },
    {
      catergory:"xiomi",
      model:[
        {
         name:"a36",
         ram:4,
        },
        {
          name:"a37",
          ram:4,
         },
         {
          name:"a38",
          ram:64,
         },
      ]
    },
  ]

var option = document.getElementById('option')
var text = document.getElementById('text')



array.map((x)=>{
let opt=document.createElement('option')
opt.innerHTML=x.catergory;
opt.setAttribute("value",x.catergory)
// console.log(x.catergory,opt)
option.append(opt)
})

function submit(){
var txt =text.value;
var cate =option.value;
array.map((x)=>{
if(x.catergory==cate){
  x.model.filter((a) => {
    if(a.ram == parseInt(txt)){
     
      console.log(a,parseInt(txt))
     
    }
  })
}
})
// console.log(a)
console.log(text.value)
console.log(option.value)
}