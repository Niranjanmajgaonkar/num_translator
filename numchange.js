let MtoE = {
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9',
  '०': '0'
}

let EtoM = {
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९',
  '0': '०'
}

function english_to_marathi(number) {
  let str = '';
  let arr = Array.from(number);
  arr.forEach((n) => {
    str += EtoM[n];
  });
  console.log(str);
  return str;
}

function marathi_to_english(number) {
  let str = '';
  let arr = Array.from(number);
  arr.forEach((n) => {
    str += MtoE[n];
  });
  console.log(str);
  return str;
}



let cnf = confirm('OK -> for English to Marathi number translator\nCANCEL -> for Marathi to English');

if (cnf) {
  setTimeout(() => {
    document.querySelector("#first").innerText = 'feaching Your Response......';

    setTimeout(() => {
      document.querySelector("#second").innerText = "ENGLISH TO MARATHI";

      setTimeout(() => {
        document.querySelector("#input").innerText = "displaying Input Box...."

        setTimeout(() => {
          document.querySelector("#languge").innerText = "enter english No";

          setTimeout(() => {
            const num = prompt("Enter English number");
            document.querySelector("#origin").innerText = `Your Response: ${num}`;

            setTimeout(() => {
              let k = english_to_marathi(num);
              document.querySelector("#nir").innerText = `In Marathi: ${k}`;
            }, 1000);
          }, 500);
        },2000)
      }, 1000)
    }, 2000);
  }, 1000);
}
else {
  setTimeout(() => {
    document.querySelector("#first").innerText = 'feaching Your Response......';

    setTimeout(() => {
      document.querySelector("#second").innerText = "MARATHI To ENGLISH";

      setTimeout(() => {
        document.querySelector("#input").innerText = "displaying Input Box...."

        setTimeout(() => {
          document.querySelector("#languge").innerText = "enter Marathi No";

          setTimeout(() => {
            const num = prompt("Enter Marathi number");
            document.querySelector("#origin").innerText = `Your Response: ${num}`;

            setTimeout(() => {
              let k = marathi_to_english(num);
              document.querySelector("#nir").innerText = `In English: ${k}`;
            }, 1000);
          }, 500);
        }, 2000)
      }, 1000)
    }, 2000);
  }, 1000);
}




