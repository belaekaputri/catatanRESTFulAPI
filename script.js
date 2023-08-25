let biodata={
    nama:"sarula",
    age: 60,
    email:"sarula@gmail.com"
}
//console.log(JSON.stringify(biodata));

//manipulasi json dengan vanila js
let xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 & xhr.status==200){
       // let bio=this.responseText;  // data dalam bentuk json
        let bio = JSON.parse(this.responseText) //ubah json menjadi objek
        console.log(bio);
    }
}
xhr.open('GET','latihan.json',true); //true dieksekusi secara asycronus
xhr.send();
