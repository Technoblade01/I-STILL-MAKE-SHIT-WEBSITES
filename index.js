Students = [];

function submit() {
   var name1 = document.getElementById("1").value;
   var name2 = document.getElementById("2").value;
   var name3 = document.getElementById("3").value;
   var name4 = document.getElementById("4").value;

   Students.push(name1);
   Students.push(name2);
   Students.push(name3);
   Students.push(name4);

   console.log(Students);

   document.getElementById("displayName").innerHTML = Students;
   document.getElementById("submit_btn").style.display = "none";
   document.getElementById("Sorting_btn").style.display = "inline-block";
}

function sort() {
    Students.sort();
    console.log(Students);
    document.getElementById("displayName").innerHTML = Students;
}