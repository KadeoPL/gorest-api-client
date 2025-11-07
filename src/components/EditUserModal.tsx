import type { userProps } from "@/types/userProps";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditUserForm from "./EditUserForm";

interface EditUserModalProps {
  open: boolean;
  user: userProps | null;
  onOpenChange: (open: boolean) => void;
  onSucess: (open: boolean) => void;
}

export default function EditUserModal({
  open,
  user,
  onOpenChange,
}: EditUserModalProps) {
  return (
    user && (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
            <DialogDescription>
              Modify user details and save the changes.
            </DialogDescription>
          </DialogHeader>
          <div>
            <EditUserForm {...user} />
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}
