/**Pratimas su Fetch metodu ir duomenų filtravimu
Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
Pridėkite prie lentelės (tarp id ir name) nuotrauką.
Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname contains search string). Capitalizacija turėtų būti nesvarbi. 

*/

const table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
document.body.append(table);

const tr = document.createElement('tr');
tr.style.border = '1px solid black';
tr.style.borderCollapse = 'collapse';
table.append(tr);

const th1 = document.createElement('th');
th1.style.border = '1px solid black';
th1.style.width = '100px'
th1.textContent = 'id';
tr.append(th1);

const th6 = document.createElement('th');
th6.style.border = '1px solid black';
th6.style.width = '200px'
th6.textContent = 'picture';
tr.append(th6);

const th2 = document.createElement('th');
th2.style.border = '1px solid black';
th2.style.width = '200px'
th2.textContent = 'name';
tr.append(th2);

const th5 = document.createElement('th');
th5.style.border = '1px solid black';
th5.style.width = '200px'
th5.textContent = 'surname';
tr.append(th5);

const th3 = document.createElement('th');
th3.style.border = '1px solid black';
th3.style.width = '200px'
th3.textContent = 'city';
tr.append(th3);

const th4 = document.createElement('th');
th4.style.border = '1px solid black';
th4.style.width = '200px'
th4.textContent = 'fav_color';
tr.append(th4);

const checkbox = document.createElement('input');
checkbox.setAttribute("type", "checkbox");
document.body.prepend(checkbox);

async function getISS(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    checkbox.addEventListener('change', function() {

        if (this.checked) {

            printOnlyVip();

        }
        else{

            printAllUsers();
        }
      });

      // const deletePreviousData = () => {

        // for (let i = 0; i < data.length; i++) {
            // tr.remove();
            // td1.remove();
            // td6.remove();
            // image.remove();
            // td2.remove();
            // td5.remove();
            // td3.remove();
            // td4.remove();
            // table.clear();        
        //   }
      // };

    const printAllUsers = () => {
        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            td1.style.border = '1px solid black';
            const td6 = document.createElement("td");
            td6.style.border = '1px solid black';
    
            const image = document.createElement('img');
            image.style.width = '50px';
            image.style.height = '50px';
    
    
            const td2 = document.createElement("td");
            td2.style.border = '1px solid black';
            const td5 = document.createElement("td");
            td5.style.border = '1px solid black';
            const td3 = document.createElement("td");
            td3.style.border = '1px solid black';
            const td4 = document.createElement("td");
            td4.style.border = '1px solid black';
            table.append(tr);
        
            td1.textContent = data[i].id;
            tr.append(td1);
    
            let pictureUrl = data[i].image
            image.src = pictureUrl;
            td6.append(image);
            tr.append(td6);
    
            td2.textContent = data[i].name.split(" ")[0];
            tr.append(td2);
            
            td5.textContent = data[i].name.split(" ")[1].slice(0);
            tr.append(td5);
    
            td3.textContent = data[i].city;
            tr.append(td3);
            td4.textContent = data[i].fav_color;
            tr.append(td4);
          }
      }

    printAllUsers();


    const printOnlyVip = () => {
        for (let i = 0; i < data.length; i++) {

            if(data[i].vip) {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            td1.style.border = '1px solid black';
            const td6 = document.createElement("td");
            td6.style.border = '1px solid black';
    
            const image = document.createElement('img');
            image.style.width = '50px';
            image.style.height = '50px';
    
    
            const td2 = document.createElement("td");
            td2.style.border = '1px solid black';
            const td5 = document.createElement("td");
            td5.style.border = '1px solid black';
            const td3 = document.createElement("td");
            td3.style.border = '1px solid black';
            const td4 = document.createElement("td");
            td4.style.border = '1px solid black';
            table.append(tr);
        
            td1.textContent = data[i].id;
            tr.append(td1);
    
            let pictureUrl = data[i].image
            image.src = pictureUrl;
            td6.append(image);
            tr.append(td6);
    
            td2.textContent = data[i].name.split(" ")[0];
            tr.append(td2);
            
            td5.textContent = data[i].name.split(" ")[1].slice(0);
            tr.append(td5);
    
            td3.textContent = data[i].city;
            tr.append(td3);
            td4.textContent = data[i].fav_color;
            tr.append(td4);
          }
        }
      }
    



      
}

getISS("https://magnetic-melon-yam.glitch.me");