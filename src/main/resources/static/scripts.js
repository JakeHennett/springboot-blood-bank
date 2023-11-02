async function submit() {
    var donorgroup = document.getElementById("donor-group").value;
    var donorrh = document.getElementById("donor-rh-factor").value;
    var patientgroup = document.getElementById("patient-group").value;
    var patientrh = document.getElementById("patient-rh-factor").value;
    var log = 
    "log: "
    + " \ndonor group " + donorgroup
    + " \ndonor rh factor " + donorrh
    + " \npatient group " + patientgroup
    + " \npatinet rh factor " + patientrh
    + ".";
    console.log(log);
    //alert(log);
    var group = await groupCheck(donorgroup, patientgroup);
    var rh = await rhCheck(donorrh, patientrh);
    //alert("group " + group + "\nrh " + rh);
    var decision = await donationCheck(group, rh);
    alert(decision);
}

async function groupCheck(donor, patient) {
    console.log("group: donor: " + donor + "\npatient: " + patient);
    var group = false;

    if (donor == "o")
        group = true;
    else if (patient == "ab")
        group = true;
    else if (donor == "a" && patient == "a")
        group = true;
    else if (donor == "b" && patient == "b")
        group = true;

    return group;
}

async function rhCheck(donor, patient) {
    console.log("rh: donor: " + donor + "\npatient: " + patient);
    var rh = false;

    if (donor == "negative")
        rh = true;
    else if (patient == "positive")
        rh = true;

    return rh;
}

async function donationCheck(group, rh) {
    decision = "";

    if (group && rh)
        decision = "Safe donation.";
    if (!group)
        decision = "Blood group conflict.";
    if (!rh)
        decision = "Rh factor conflict.";

    return decision;
}