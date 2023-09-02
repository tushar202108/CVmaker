function create() {
    let newNode = document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.setAttribute("placeholder","Now Enter here..!!");

    let we=document.getElementById("we");
    // let addbtn=document.getElementById("addbtn");

   we.appendChild(newNode);
    
}
function Aq()
{
    let Newrow=document.createElement("textarea")
    Newrow.classList.add("form-control")
    Newrow.classList.add("AQ")
    Newrow.setAttribute("placeholder","Now Enter here..!!");
    let aq=document.getElementById('aq');
    aq.appendChild(Newrow);

}
function Ea()
{
    let newEaa=document.createElement("textarea")
    newEaa.classList.add("form-control")
    newEaa.classList.add("activityfield")
    newEaa.setAttribute("placeholder","Now Enter here..!!")
    let ea=document.getElementById("ea");
    ea.appendChild(newEaa);
}

// Generating CV 
function generate()
{
    // Name 
    console.log("Hogya kya?")
    let namefield = document.getElementById("namefield").value;
    let nameT=document.getElementById("nameT");
    let name2T=document.getElementById("name2T");
    nameT.innerHTML=namefield;
    name2T.innerHTML=namefield;

    // Conatct 

    let phonefield= document.getElementById("phonefield").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=phonefield;

    // Address 
     
    let addressfield=document.getElementById("addressfield").value;
    let addressT= document.getElementById("addressT");
    addressT.innerHTML=addressfield;

    // Important Link 

        // E-Mail 
    let emailfeild=document.getElementById("emailfeild").value;
    let emailT=document.getElementById("emailT");
    emailT.innerHTML=emailfeild;

        // Github 
    let githubfield=document.getElementById('githubfield').value;
    let githubT=document.getElementById('githubT');
    githubT.innerHTML=githubfield;

        // linkedin 
    let linkfield=document.getElementById('linkfield').value;
    let linkedT=document.getElementById('linkedT');
    linkedT.innerHTML=linkfield;

        // Objective 
    
    let objectivefield= document.getElementById("objectivefield").value;
    let objectiveT=document.getElementById("objectiveT");
    objectiveT.innerHTML=objectivefield;

    // Work Experience 

    let wes=document.getElementsByClassName('wefield');
    let str='';
    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // Academic Experience 

    let ae=document.getElementsByClassName('AQ');
    let string='';
    for(let a of ae)
    {
        string=string+`<li>${a.value}</li>`;
    }
    document.getElementById('aqT').innerHTML=string;

    // Extra-Activity 

    let ea=document.getElementsByClassName('activityfield');
    let strin='';
    for(let e of ea)
    {
        strin=strin+`<li>${e.value}</li>`;
    }
    document.getElementById('eaT').innerHTML=strin;

    // Image 
    let file=document.getElementById('inputGroupFile02').files[0];
    console.log(file);
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

  reader.onloadend=function()
  {
    document.getElementById('imag').src=reader.result;
  }

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}
