// import our json data
import { InternetCompanies } from "./myjson/main.js"; 
window.addEventListener('DOMContentLoaded', ()=>{
  ourOutput(InternetCompanies);
  filterReturn();
})
function filterReturn(){
 //get the buttons 
const filter_btns = document.querySelectorAll('.filter-btns');
    //loop through the btns 
    filter_btns.forEach(btns=>{
      btns.addEventListener('click',(e)=>{
        const data_id = e.currentTarget.dataset.id;
        //filter the indutry
        const filterRanks = InternetCompanies.filter((ranks)=>{
          if(ranks.industry === data_id){
            return ranks;
          }
        });
        if(data_id === 'all'){
          ourOutput(InternetCompanies);
        }else{
          ourOutput(filterRanks);
        }
     
    });
    })
}

//get the table content div
const table = document.querySelector('#table');

//function for our output
function ourOutput(output){
 const displayContent =  output.map((companies)=>{
   console.log(companies.industry)
   //remove the last character from the revenue strting
   const rev = companies.revenue;
   const removedLastChar =rev.substring(0, rev.length-1);
      return  `
        <tr>
            <td>${companies.rank}</td>
            <td>${companies.company}</td>
            <td>${removedLastChar}</td>
            <td>${companies.employees}</td>
            <td>${companies.founded}</td>
            <td>${companies.industry}</td>
        </tr>
        `;
  });
  const contentJoined = displayContent.join("");
  table.innerHTML += contentJoined;
}



// console.log(filterRanks)


