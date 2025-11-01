import { WhatsAppIcon } from "../icons";
import { Button } from "../ui/button";

export function WhatsAppBtn() {
  return (
    <Button
      href="https://api.whatsapp.com/send?phone=5547991350567"
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      className="gap-2"
    >
      <WhatsAppIcon className="text-white" />
      WhatsApp
    </Button>
  );
}
