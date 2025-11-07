import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditUserForm from "./EditUserForm";
import { useModal } from "@/context/ModalContext";

export default function EditUserModal() {
  const { isOpen, closeModal, userToEdit } = useModal();
  return (
    userToEdit && (
      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit user</DialogTitle>
            <DialogDescription>
              Modify user details and save the changes.
            </DialogDescription>
          </DialogHeader>
          <div>
            <EditUserForm user={userToEdit} />
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}
