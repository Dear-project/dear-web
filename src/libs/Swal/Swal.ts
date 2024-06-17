import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

class DearToast {
  public sucessToast(title: string) {
    Toast.fire({
      icon: "success",
      title: title,
    });
  }

  public errorToast(title: string) {
    Toast.fire({
      icon: "error",
      title: title,
    });
  }

  public infoToast(title: string) {
    Toast.fire({
      icon: "info",
      title: title,
    });
  }
}

const dearToast = new DearToast();

export default dearToast;