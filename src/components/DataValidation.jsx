
export function CheckPostcode(postcode, id) {
  const valid = postcodeValidation(postcode);     
  if (valid === "none") {
    redBorder(id);    
    return "none"
  } else if (valid === false) {
    redBorder(id);
    return false;
  } else {      
    greenBorder(id);
    return true;    
  }
}


function postcodeValidation(postcode) {
  if (postcode === "") {
    return "none";
  } else {
    const areas = [
      "DA",
      "EN",
      "HA",
      "IG",
      "RM",
      "BR",
      "N",
      "NW",
      "SE",
      "SW",
      "TW",
      "W"
    ];
    const index = postcode.search(/\d/);
    const half = postcode.slice(0, index).toUpperCase();
    const postcodeValid = areas.includes(half);
    return postcodeValid;
  }
}

export function CheckData(contact) {
  // console.log(contact)
  if (contact.name === "") {
    redBorder("inputName");
    return false
  } else {
    greenBorder("inputName");
  }
  if (contact.email.search("@") === -1) {
    redBorder("inputEmail");
    return false
  } else {
    greenBorder("inputEmail");
  }
  if (contact.phone === "") {
    redBorder("inputPhone");
    return false
  } else {
    greenBorder("inputPhone");
  }
  if (contact.postcode === "") {
    redBorder("inputPhone");
    return false
  } else {
    // CheckPostcode(contact.postcode)
    greenBorder("inputPhone");
  }
}

export function webValidation(id, link) {
  if (link.search("www") > 0 || link.search("http") > 0) {
    greenBorder(id);
  } else {
    redBorder(id);
  }
}  

export function redBorder(id){
  if (document.getElementById(id) != null){
    document.getElementById(id).style.border = "medium solid #dc3545";
    document.getElementById(id).scrollIntoView();
  }
};

export function greenBorder(id){
  if (document.getElementById(id) != null){
    document.getElementById(id).style.border = "medium solid #28a745";
  }  
};

