import encode from "./encode"

export default function tracker(content) {
  console.log(content);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "tracker",
      data: content
    })
  })
}
