let total = 0;
const submitButton = document.getElementById("submit");
const notes = document.getElementById("notes");
const donationValue = document.getElementById("donation-value");
donationValue.innerHTML = "<span>$</span>"+total;

submitButton.onclick = (e) => {
    e.preventDefault(); 
    const { name, donation, message } = getFormInputs();
    console.log(name,donation);
    total += Number.parseInt(donation);
    const div = document.createElement("div");
    div.append(document.createElement("h3"));
    div.getElementsByTagName("h3")[0].innerHTML = name;
    div.append(document.createElement("h4"));
    div.getElementsByTagName("h4")[0].innerHTML = donation;
    div.append(document.createElement("h5"));
    div.getElementsByTagName("h5")[0].innerHTML = message;
    div.style = "margin-left:35px";
    notes.append(div);
    donationValue.innerText = total;
}

function getFormInputs() {
    
    const data = document.getElementById("form-tag");
    const formTags = data.getElementsByTagName("input")
    for(let i = 0 ; i < formTags.length; i++) {
        console.log(formTags[i].value);
    }
    return {
        name:formTags[0].value, 
        donation:formTags[1].value,
        message:formTags[2].value
    }      
}
