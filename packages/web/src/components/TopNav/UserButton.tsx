import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

export function UserButton() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Menu</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <NavigationMenu.Link asChild>
            <Link to="/dashboard">Dashboard</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
}
