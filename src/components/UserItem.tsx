import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Badge } from "./ui/badge";
import { Edit } from "lucide-react";
import type { userProps } from "@/types/userProps";
import { useModal } from "@/context/ModalContext";

export default function UserItem(props: userProps) {
  const { id, name, email, gender, status } = props;
  const { openModal } = useModal();

  return (
    <Item key={id} variant="outline">
      <ItemContent>
        <ItemTitle>{name}</ItemTitle>
        <ItemDescription>{email}</ItemDescription>
      </ItemContent>
      <ItemContent>
        <ItemTitle>
          <span className="font-light">Gender:</span>
          {gender}
        </ItemTitle>
      </ItemContent>
      <ItemContent>
        <ItemTitle>
          <Badge variant="secondary" className="uppercase">
            <span
              className={`${
                status === "active" ? "bg-green-500" : "bg-red-500"
              } w-1 h-1 rounded-full`}
            ></span>
            {status}
          </Badge>
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <button
          className="flex items-center gap-1 hover:text-muted-foreground"
          onClick={() => openModal(props)}
        >
          <Edit size={16} /> Edit
        </button>
      </ItemActions>
    </Item>
  );
}
