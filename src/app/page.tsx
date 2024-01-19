import { redirect } from "next/navigation";

async function Page() {
  redirect("/dashboard");
}

export default Page;


// "redirect" feature introduced to Next 13
//All protected routes will be under "/dasboard" route