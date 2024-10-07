// import { app_color_primary } from "@/constants/shared/color";
import Swal from "sweetalert2";

export function SweetAlertSuccess(text) {
    return Swal.fire({
        title: "Success",
        icon: "success",
        text,
        // confirmButtonColor: app_color_primary
    })
}

export function SweetAlertError(text) {
    return Swal.fire({
        title: "Error",
        icon: "error",
        text,
        // confirmButtonColor: app_color_primary
    })
}


export function SweetAlertPending({
    title = 'Loading',
    icon = 'info',
    text = 'Please wait...',
}){
    Swal.fire({
        title,
        icon,
        text,
        showConfirmButton: false,
        allowOutsideClick: false,
    });
}

export function SweetAlertConfirmation({
    title,
    text,
    confirmButtonText = "Yes",
    cancelButtonText = "No",
    onConfirm = () => {},
    onCancel = () => {},
}) {
    return Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: app_color_primary,
        cancelButtonColor: "",
        confirmButtonText,
        cancelButtonText,
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            onCancel();
        }
    });
}