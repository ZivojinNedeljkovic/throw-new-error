import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Logo from '@/components/logo'
import AppLink from '@/components/app-link'
import AppPage from '@/lib/app-pages'

function MobileNavMenu() {
  const pageLinks = [AppPage.homePage, AppPage.signIn, AppPage.registerPage]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon />
          <span className="sr-only ">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-4">
          <menu className="flex flex-col gap-2">
            {pageLinks.map(({ name, href }) => (
              <li key={name}>
                <SheetClose asChild>
                  <AppLink
                    href={href}
                    activeClassNames="font-semibold underline"
                  >
                    {name}
                  </AppLink>
                </SheetClose>
              </li>
            ))}
          </menu>
        </nav>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavMenu
