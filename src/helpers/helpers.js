import Swal from "sweetalert2";

// Sweet Alert Helpers
function toastSuccess(title, text) {
  Swal.fire({
    toast: true,
    timer: 2000,
    timerProgressBar: true,
    position: "top-end",
    showConfirmButton: false,

    icon: "success",
    title,
    text,
  });
}

function alertError(title, text) {
  Swal.fire({
    icon: "error",
    title,
    text,
  });
}

function alertSuccess(title, text) {
  Swal.fire({
    icon: "error",
    title,
    text,
  });
}

function toastError(title, text) {
  Swal.fire({
    toast: true,
    timer: 2000,
    timerProgressBar: true,
    position: "top-end",
    showConfirmButton: false,

    icon: "error",
    title,
    text,
  });
}
// End Sweet Alert Helpers

export { toastSuccess, toastError, alertSuccess, alertError };
