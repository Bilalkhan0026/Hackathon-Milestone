window.addEventListener("load", () => {});
let myName = localStorage.getItem("name");
let desig = localStorage.getItem("desig");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let add = localStorage.getItem("add");
let pass1 = localStorage.getItem("pass1");
let deg = localStorage.getItem("deg");
let uni = localStorage.getItem("uni");
let pass2 = localStorage.getItem("pass2");
let deg2 = localStorage.getItem("deg2");
let uni2 = localStorage.getItem("uni2");
let skill1 = localStorage.getItem("skill1");
let skill2 = localStorage.getItem("skill2");
let skill3 = localStorage.getItem("skill3");
let lang = localStorage.getItem("lang");
let lang2 = localStorage.getItem("lang2");
let styear = localStorage.getItem("styear");
let endyear = localStorage.getItem("endyear");
let company = localStorage.getItem("company");
let comlocation = localStorage.getItem("comlocation");
let jobTitle = localStorage.getItem("jobTitle");
let achv1 = localStorage.getItem("achv1");
let achv2 = localStorage.getItem("achv2");
let achv3 = localStorage.getItem("achv3");
let picture = localStorage.getItem('Profile_pic');

let resName: any = document.getElementById("resName");
resName.textContent = myName;
let resDesig: any = document.getElementById("resDesig");
resDesig.textContent = desig;
let resPhone: any = document.getElementById("resPhone");
resPhone.textContent = phone;
let resEmail: any = document.getElementById("resEmail");
resEmail.textContent = email;
let resAddress: any = document.getElementById("resDesig");
resAddress.textContent = add;
let resPass: any = document.getElementById("resPass");
resPass.textContent = pass1;
let resDeg: any = document.getElementById("resDeg");
resDeg.textContent = deg;
let resIns: any = document.getElementById("resIns");
resIns.textContent = uni;
let resPass2: any = document.getElementById("resPass2");
resPass2.textContent = pass2;
let resdeg2: any = document.getElementById("resdeg2");
resdeg2.textContent = deg2;
let resIns2: any = document.getElementById("resIns2");
resdeg2.textContent = uni2;
let resSkill1: any = document.getElementById("resSkill1");
resSkill1.textContent = skill1;
let resSkill2: any = document.getElementById("resSkill2");
resSkill2.textContent = skill2;
let resSkill3: any = document.getElementById("resSkill3");
resSkill3.textContent = skill3;
let resLan1: any = document.getElementById("resLan1");
resLan1.textContent = lang;
let resLan2: any = document.getElementById("resLan2");
resLan2.textContent = lang2;
let resStartYear: any = document.getElementById("resStartYear");
resStartYear.textContent = styear;
let resEndYear: any = document.getElementById("resEndYear");
resEndYear.textContent = endyear;
let resCompoany: any = document.getElementById("resCompoany");
resLan1.textContent = company;
let resComLocation: any = document.getElementById("resComLocation");
resLan1.textContent = comlocation;
let resJobTitle: any = document.getElementById("resJobTitle");
resJobTitle.textContent = jobTitle;
let resAch1: any = document.getElementById("resAch1");
resAch1.textContent = achv1;
let resAch2: any = document.getElementById("resAch2");
resLan2.textContent = achv2;
let resAch3: any = document.getElementById("resAch3");
resAch3.textContent = achv3;
let resImg: any = document.getElementById("resImg");
resImg.src = picture;

// ________print btn ______

let print_btn = document.getElementById("print_btn");

print_btn?.addEventListener("click", () => {
  window.print();
});


// ________edit btn ______

let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener('click', ()=>{
  window.history.back()
})