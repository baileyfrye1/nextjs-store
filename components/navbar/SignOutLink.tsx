'use client';

import Link from 'next/link';
import { useToast } from '../ui/use-toast';
import { SignOutButton } from '@clerk/nextjs';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'Logout Successful' });
  };
  return (
    <SignOutButton>
      <Link href='/' className='w-full text-left' onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};
export default SignOutLink;
