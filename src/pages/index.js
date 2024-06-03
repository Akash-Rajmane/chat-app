//import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";


//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const isAuthenticated = false; 

  useEffect(() => {
   
    if (isAuthenticated) {
      router.push('/main'); 
    } else {
      router.push('/auth/sign-up'); 
    }
  }, [isAuthenticated, router]);

 
  return null;

  // return (
  //   <main
  //     className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  //   >
      
  //   </main>
  // );
}
