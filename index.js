
const searchInput = document.getElementById("Search");
const searchBtn = document.getElementById("btn");
const input = document.getElementById("input");
const url = "./index.json";

async function display(data){

    input.innerText = "";
      data.forEach((item)=>{
        const trow = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerText = `${item.id}`;
        trow.appendChild(td1);
        const td2 = document.createElement('td');
        td2.innerText = `${item.first_name} ${item.last_name}`;
        trow.appendChild(td2);
        const td3 = document.createElement('td');
        td3.innerText = `${item.gender}`;
        trow.appendChild(td3);
        const td4 = document.createElement('td');
        td4.innerText = `${item.class}`;
        trow.appendChild(td4);
        const td5 = document.createElement('td');
        td5.innerText = `${item.marks}`;
        trow.appendChild(td5);
        const td6 = document.createElement('td');
        td6.innerText = item.passing ? "Passed" : "Failed";
        trow.appendChild(td6);
        const td7 = document.createElement('td');
        td7.innerText = `${item.email}`;
        trow.appendChild(td7);
        input.appendChild(trow); 
    })
}
const btn = document.querySelectorAll('button');
const link = url;
btn[1].addEventListener('click', async () => {
  const response = await fetch(link);
  const data = await response.json();
  data.sort((a, b) => {
    const nameA = a.first_name.toLowerCase() + a.last_name.toLowerCase();
    const nameB = b.first_name.toLowerCase() + b.last_name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  display(data);
});
btn[2].addEventListener('click', async () => {
    const response = await fetch(link);
    const data = await response.json();
    data.sort((a, b) => {
      const nameA = a.first_name.toLowerCase() + a.last_name.toLowerCase();
      const nameB = b.first_name.toLowerCase() + b.last_name.toLowerCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    display(data);
  });
  btn[3].addEventListener('click', async () => {
    const response = await fetch(link);
    const data = await response.json();
    data.sort((a, b) => {
      return a.marks -b.marks;
    });
    display(data);
  });
  btn[5].addEventListener('click', async () => {
    const response = await fetch(link);
    const data = await response.json();
    data.sort((a, b) => {
      return a.class-b.class;
    });
    display(data);
  });
  btn[4].addEventListener('click', async () => {
    const response = await fetch(link);
    const data = await response.json();
    const passingStudents = data.filter(student => student.passing);
    display(passingStudents);
  });
  btn[0].addEventListener('click',async () =>{
    const response = await fetch(link);
    const data = await response.json();
      display(data,searchInput.value);
  })
  async function alwayson(url){
    const link = url;
    const response = await fetch(link);
    const data = await response.json();
   display(data);
  }
  alwayson(url);
  



