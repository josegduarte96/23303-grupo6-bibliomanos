import Toastify from "toastify-js"

export const notify = (text = "") => {
  return Toastify({
    text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(90deg, #ffcc2f, #ef5734)",
      color: "#000",
      fontWeight: "bold",
    },
  }).showToast()
}
