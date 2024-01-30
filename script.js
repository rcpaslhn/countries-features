const btn =document.getElementById("btn")
const container=document.querySelector(".container")
const title =document.getElementById("title")
const keys=document.querySelector(".keys")

console.log(keys)

let sorted_countries= countries_data.sort((a,b)=>b.population-a.population)


btn.addEventListener("click",()=>{

    if(keys.classList.contains("display")){
        keys.classList.remove("display")
    
    sorted_countries.forEach(country =>{
        const div=document.createElement("div")
        const name =document.createElement("h2")
        const flag=document.createElement("img")
        const population=document.createElement("h3")
        const capital = document.createElement("h3")
        const percent = document.createElement("p")
        percent.style.fontSize="1.2rem"
        percent.style.fontWeight="bold"

        let oran = Number(((country.population/calcWorld())*100).toFixed(5))
        console.log(typeof oran)

        name.textContent=country.name
        capital.textContent=country.capital
        population.textContent=country.population
        flag.style.width="20%"
        flag.setAttribute("src",country.flag)
        percent.textContent=`Bu ülkenin dünya nüfusuna oranı: ${oran} `

        if(oran>= 3 ){
            percent.style.color=" rgb(240, 240, 42)"
        }else{
            percent.style.color="blue"
        }


        title.style.fontSize="25px"    
        title.textContent= `Toplamda  ${countries_data.length} tane ülke vardır. Toplam nüfus : ${calcWorld()} `


        div.style.border="1px solid black"
        div.style.margin="5px 2px"
        div.style.textAlign="center"

        div.appendChild(name)
        div.appendChild(flag)
        div.appendChild(population)
        div.appendChild(capital)
        div.appendChild(percent)

        container.appendChild(div)
    })}else{
        keys.classList.add("display")
    }
        
      
           
        
       
 


})

function calcWorld() {

    let toplam=0
sorted_countries.forEach(item=>{
    toplam += item.population
  
})
return toplam
  }

