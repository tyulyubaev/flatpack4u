export default function encode(data) {
    const message = Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
      // console.log(message)
    return message;
  };