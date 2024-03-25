import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type ModalType = {
  modalTrigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function ModalLayout({ modalTrigger, className, children }: ModalType) {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className={cn("border-none", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
