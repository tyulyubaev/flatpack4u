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
    const areas = [
      "SW",
      "EN",
      "WD",
      "HA",
      "N",
      "NW",
      "W",
      "AL",
      "SG",
      "CM",
      "E",
      "WC",
      "EC",
      "IG",
      "RM",
      "UB",
    ];
    const index = postcode.search(/\d/);
    const half = postcode.slice(0, index).toUpperCase();
    const postcodeValid = areas.includes(half);
    return postcodeValid;
  }
}

export function phoneValidation(contact) {
  if (contact.tel.length >= 10) {
    greenBorder("tel");
  }
}

export function emailValidation(contact) {
  if (contact.email.indexOf("@") > 0) {
    greenBorder("email");
  }
}

export function CheckData(contact) {
  if (contact.phone === "" || contact.email === "" || contact.postcode === "") {
    if (contact.postcode === "") {
      redBorder("postcodeValue");
    }
    if (contact.phone === "") {
      redBorder("tel");
    }
    if (contact.email === "") {
      redBorder("email");
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
