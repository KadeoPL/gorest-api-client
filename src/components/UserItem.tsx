import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Badge } from "./ui/badge";

import type { userProps } from "@/types/userProps";

export default function UserItem(props: userProps) {
  return (
    <Item key={props.id} variant="outline">
      <ItemContent>
        <ItemTitle>{props.name}</ItemTitle>
        <ItemDescription>{props.email}</ItemDescription>
      </ItemContent>
      <ItemContent>
        <ItemTitle>
          <span className="font-light">Gender:</span>
          {props.gender}
        </ItemTitle>
      </ItemContent>
      <ItemContent>
        <ItemTitle>
          <Badge variant="secondary">{props.status}</Badge>
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <button>Action</button>
      </ItemActions>
    </Item>
  );
}
