// let x = "Nisha";
// let y = 30; 

//  function test1(){
//      // Lets create child function
//      function childfn(){
//          console.log("hello"+' '+ x +' '+" your age is "+ y);
//      }
//      childfn()
//  }
//  test1();

function header(){
    // Declear variables
    let header, container, row, col1;

    // Assign Values in variables

    // Create Elements for HTML
    header = document.createElement('header');
    container = document.createElement('div');
    row = document.createElement('div');
    col1 = document.createElement('div');

    // Append Element to each parent node.
    document.body.appendChild(header);
    header.appendChild(container);
    container.appendChild(row);
    row.appendChild(col1);

    // Addign attriubutes in elements
    container.setAttribute('class', 'container');
    row.setAttribute('class', 'row');
    col1.setAttribute('class', 'col-md-12');   
    header.setAttribute('class', 'p-3 bg-success');

    // Adding content in html elenents
    col1.innerHTML = `
    <h1 class="text-light">
        <i class="fa-brands fa-facebook"></i> 
        facebook
    </h1>`;

    // Set Styling in html content
    // header.style.backgroundColor = "red";
    // header.style.color = "white";

}
header();


// function nav(){
//     let nav = document.createElement('nav');
//     document.body.appendChild(nav);
// }
// nav();


// function section(){
//     let section = document.createElement('section');
//     document.body.appendChild(section);
// }
// section();


// Arrow function

x = (a , b)=> console.log(a + b);
x(30, 30);
x(40, 30);
x(50, 30);