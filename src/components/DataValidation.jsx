export function CheckPostcode(postcode) {
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
  if (contact.name === "") {
    redBorder("inputName");
  } else {
    greenBorder("inputName");
  }
  if (contact.email.search("@") === -1) {
    redBorder("inputEmail");
  } else {
    greenBorder("inputEmail");
  }
  if (contact.phone === "") {
    redBorder("inputPhone");
  } else {
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

const redBorder = id => {
  if (document.getElementById(id) != null){
    document.getElementById(id).style.border = "medium solid #dc3545";
    document.getElementById(id).scrollIntoView();
  }
};

const greenBorder = id => {
  if (document.getElementById(id) != null){
    document.getElementById(id).style.border = "medium solid #28a745";
  }
  
};
