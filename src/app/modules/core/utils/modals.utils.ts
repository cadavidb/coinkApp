import { SweetAlertOptions } from "sweetalert2"
export const SwalClass:any={
  icon: 'sweet-icon',
  title:'sweet-title',
  confirmButtonText:'Cerrar',
  confirmButton:'sweet-btn-ok',
  htmlContainer: 'sweet-html-container',
  popup:'sweet-modal-popup',
}


export const Loading:SweetAlertOptions<any, any> = {
  title:'Cargando...',
  showConfirmButton:false,
  allowOutsideClick:false,
  allowEscapeKey:false,
  allowEnterKey:false,
  showCancelButton:false,
  iconHtml:'<img src="/assets/images/login2.png">',
  customClass: SwalClass,
}


