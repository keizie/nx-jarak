import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from '@nextui-org/react';
import { SearchIcon } from 'lucide-react';

interface GlobalNavBarProps {
  isLoggedIn: boolean;
}

const GlobalNavBar: React.FC<GlobalNavBarProps> = ({ isLoggedIn }) => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <p className="font-bold text-inherit">Home</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {isLoggedIn ? (
          <>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                My Page
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button color="danger" variant="flat">
                Logout
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Login
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default GlobalNavBar;
