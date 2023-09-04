import { AlertCircle } from "lucide-react";
import SuccessIcon from "@/assets/icons/SuccessIcon";
import SuccessIconLock from "@/assets/icons/SuccessIconLock";
import DeleteIcon from "@/assets/icons/DeleteIcon";

const ICON_LIST = {
    success_icon: <SuccessIcon />,
    success_lock_icon: <SuccessIconLock />,
    delete_icon: <DeleteIcon />,
    warning_icon: <AlertCircle size={60} className="text-amber-500" />,
};

export default ICON_LIST;
