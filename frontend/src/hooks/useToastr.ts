import { toast, ToastOptions, ToastPosition } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

type TToastrType = 'success' | 'error' | 'warn' | 'info';

export const useToastr = (
  type: TToastrType,
  textContent: string, 
  position: ToastPosition
) => 
  type === 'success' 
  ? toast.success(textContent, { position: position })
  : type === 'error'
  ? toast.error(textContent, { position: position })
  : type === 'warn'
  ? toast.warn(textContent, { position: position })
  : toast.info(textContent, { position: position });