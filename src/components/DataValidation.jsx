export function CheckPostcode(postcode, id) {
  const valid = postcodeValidation(postcode);
  if (valid === "none") {
    redBorder(id);
    return "none";
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
    const areas = ["EN", "WD", "HA", "N", "NW", "E", "WC", "EC"];
    const index = postcode.search(/\d/);
    const half = postcode.slice(0, index).toUpperCase();
    const postcodeValid = areas.includes(half);
    return postcodeValid;
  }
}

export function phoneValidation(contact) {
  if (contact.phone.length >= 10) {
    greenBorder("inputPhone");
  }
}

export function CheckData(contact) {
  if (contact.phone === "" || contact.postcode === "") {
    if (contact.postcode === "") {
      redBorder("postcodeValue");
    }
    if (contact.phone === "") {
      redBorder("inputPhone");
    }
    return false;
  }
}

export function webValidation(id, link) {
  if (link.search("www") > 0 || link.search("http") > 0) {
    greenBorder(id);
  } else {
    redBorder(id);
  }
}

export function redBorder(id) {
  if (document.getElementById(id) != null) {
    document.getElementById(id).style.border = "medium solid #dc3545";
    document.getElementById(id).scrollIntoView();
  }
}

export function greenBorder(id) {
  if (document.getElementById(id) != null) {
    document.getElementById(id).style.border = "medium solid #28a745";
  }
}
