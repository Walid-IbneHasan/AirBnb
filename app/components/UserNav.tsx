import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { HiBars3 } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function UserNav() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center space-x-2">
          <HiBars3 />
          {(await isAuthenticated()) ? (
            <Image
              src={user?.picture}
              alt={user?.given_name}
              height={32}
              width={32}
            />
          ) : (
            <Image
              src="/blank-profile-picture-973460_1280.png"
              height={32}
              width={32}
              alt="profileImage"
              className="w-8 h-8 rounded-full"
            />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {(await isAuthenticated()) ? (
            <DropdownMenuItem>
              <DropdownMenuLabel>
                <LogoutLink>LogOut</LogoutLink>{" "}
              </DropdownMenuLabel>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem>
                <DropdownMenuLabel>
                  <RegisterLink>Register</RegisterLink>{" "}
                </DropdownMenuLabel>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DropdownMenuLabel>
                  <LoginLink>Login</LoginLink>{" "}
                </DropdownMenuLabel>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
