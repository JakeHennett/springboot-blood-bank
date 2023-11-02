async function submit() {
    //alert("test");
    var donorgroup = document.getElementById("donor-group").value;
    //alert(donorgroup);
    var donorrh = document.getElementById("donor-rh-factor").value;
    //alert(donorrh);
    var patientgroup = document.getElementById("patient-group").value;
    var patientrh = document.getElementById("patient-rh-factor").value;
    var log = 
    "log: "
    + " \ndonor group " + donorgroup
    + " \ndonor rh factor " + donorrh
    + " \npatient group " + patientgroup
    + " \npatinet rh factor " + patientrh
    + ".";
    //alert(log);
    var group = await groupCheck(donorgroup, patientgroup);
    var rh = await rhCheck(donorrh, patientrh);
    alert("group " + group +
    "\nrh " + rh);
    // response = "results: " + group
    // alert(response);
}

async function groupCheck(donor, patient) {
    console.log("group: donor: " + donor + "\npatient: " + patient);
    //alert("group function");
    //alert(donor + " " + patient);
    var group = false;
    if (donor == "o")
        group = true;
    else if (patient == "ab")
        group = true;

    return group;
}

async function rhCheck(donor, patient) {
    console.log("rh: donor: " + donor + "\npatient: " + patient);
    var rh = false;

    return rh;
}