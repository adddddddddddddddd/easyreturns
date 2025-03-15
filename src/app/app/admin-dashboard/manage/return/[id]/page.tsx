import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IterationCcw, User, Notebook, Quote, Camera } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { TimelineItemSmallText } from "@/components/ui/timeline";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TimelinePropsItem {
  title: string;
  bullet: React.ReactNode;
  children: React.ReactNode;
}

interface Return {
  id: string;
  amount: number;
  status: "success" | "failed" | "pending" | "processing";
  email: string;
  dateOfRequest: string;
}

const returns: Return[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    dateOfRequest: "2025-02-01",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    dateOfRequest: "2025-02-01",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    dateOfRequest: "2025-02-02",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    dateOfRequest: "2025-02-03",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    dateOfRequest: "2025-02-06",
  },
  {
    id: "a1b2c3d4",
    amount: 150,
    status: "success",
    email: "julien.dupont@gmail.com",
    dateOfRequest: "2025-01-15",
  },
  {
    id: "e5f6g7h8",
    amount: 980,
    status: "failed",
    email: "sophie.leroy@yahoo.fr",
    dateOfRequest: "2025-02-20",
  },
  {
    id: "i9j1k2l3",
    amount: 300,
    status: "pending",
    email: "marc.tremblay@outlook.com",
    dateOfRequest: "2025-03-05",
  },
  {
    id: "m4n5o6p7",
    amount: 1200,
    status: "success",
    email: "emma.bernard@hotmail.fr",
    dateOfRequest: "2025-01-28",
  },
  {
    id: "q8r9s1t2",
    amount: 75,
    status: "failed",
    email: "alexandre.rossi@gmail.com",
    dateOfRequest: "2025-02-10",
  },
  {
    id: "u3v4w5x6",
    amount: 450,
    status: "pending",
    email: "laura.moreau@yahoo.com",
    dateOfRequest: "2025-03-01",
  },
  {
    id: "y7z8a9b1",
    amount: 650,
    status: "success",
    email: "nicolas.martin@outlook.fr",
    dateOfRequest: "2025-02-18",
  },
  {
    id: "c2d3e4f5",
    amount: 275,
    status: "failed",
    email: "claire.dubois@gmail.com",
    dateOfRequest: "2025-01-30",
  },
  {
    id: "g6h7i8j9",
    amount: 820,
    status: "pending",
    email: "thomas.leclercq@hotmail.com",
    dateOfRequest: "2025-02-25",
  },
  {
    id: "k1l2m3n4",
    amount: 999,
    status: "success",
    email: "amelie.perrot@yahoo.fr",
    dateOfRequest: "2025-03-10",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "success":
      return (
        <Badge className="bg-emerald-600/10 dark:bg-emerald-600/20 hover:bg-emerald-600/10 text-emerald-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />{" "}
          Success
        </Badge>
      );
    case "pending":
      return (
        <Badge className="bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2" /> Pending
        </Badge>
      );
    case "processing":
      return (
        <Badge className="bg-amber-600/10 dark:bg-amber-600/20 hover:bg-amber-600/10 text-amber-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2" />{" "}
          Processing
        </Badge>
      );
    case "failed":
      return (
        <Badge className="bg-red-600/10 dark:bg-red-600/20 hover:bg-red-600/10 text-red-500 shadow-none rounded-full">
          <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2" /> Failed
        </Badge>
      );
    default:
      return null;
  }
};

const items: TimelinePropsItem[] = [
  {
    title: "Step 1 : Return process started",
    bullet: 1,
    children: (
      <>
        {" "}
        {/* <p>You have successfully started the return process.</p>{" "} */}
        <TimelineItemSmallText>01 Janvier 2024</TimelineItemSmallText>
      </>
    ),
  },
  {
    title: "Step 2 : Drop of the item",
    bullet: 2,
    children: (
      <>
        {" "}
        {/* <p>You have sent your article for return.</p>{" "} */}
        <TimelineItemSmallText>01 Janvier 2024</TimelineItemSmallText>
      </>
    ),
  },
  {
    title: "Step 3 : Item received",
    bullet: 3,
    children: (
      <>
        {" "}
        {/* <p>The store received your item</p>{" "} */}
        <TimelineItemSmallText>01 Janvier 2024</TimelineItemSmallText>
      </>
    ),
  },
  {
    title: "Step 4 : return issued",
    bullet: 4,
    children: (
      <>
        {" "}
        {/* <p>The store issued your return.</p>{" "} */}
        <TimelineItemSmallText>01 Janvier 2024</TimelineItemSmallText>
      </>
    ),
  },
  {
    title: "Step 5 : return credited",
    bullet: 5,
    children: (
      <>
        {" "}
        {/* <p>
          You returned the product to the store and you had your money back.
        </p>{" "} */}
        <TimelineItemSmallText>01 Janvier 2024</TimelineItemSmallText>
      </>
    ),
  },
];
const userMockData = {
  nom: "Dupont",
  prenom: "Jean",
  adresse: "12 rue des Lilas",
  ville: "Paris",
  code_postal: "75015",
  pays: "France",
  telephone_mobile: "+33 6 12 34 56 78",
  date_creation_compte: "2023-05-14T10:30:00Z",
};

export default async function ReturnPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const customerReturn = returns.find((p) => p.id === id);

  if (!customerReturn) {
    notFound();
  }

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-12 grid-rows-13 w-full p-4 ">
      <section className="col-span-12 grid grid-cols-12 row-span-1">
        <Card className="shadow-none border-none col-span-9 ">
          <CardHeader>
            <CardTitle>
              <CardTitle className=" text-xl flex justify-between items-center">
                <span className="flex flex-col justify-center font-bold">
                  <div className="flex items-center">
                    <p className="">Retour {customerReturn.id} </p>
                    <div className="ml-4 pb-1.5">
                      {" "}
                      {getStatusBadge(customerReturn.status)}
                    </div>
                  </div>
                  <Label className="font-medium opacity-50">
                    {" "}
                    Demandé le {customerReturn.dateOfRequest}
                  </Label>
                </span>
                <span className="flex flex-col justify-center">
                  <p className="font-bold ml-auto pb-0.5">
                    {customerReturn.amount}€
                  </p>
                  <Label className="ml-auto font-medium opacity-50">
                    Return cost
                  </Label>
                </span>
              </CardTitle>
              <CardDescription className=""></CardDescription>
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="col-span-3 shadow-none border-none">
          <CardHeader>
            <CardTitle className="font-bold text-xl">Activity</CardTitle>
          </CardHeader>
        </Card>
      </section>

      <section className="w-full grid grid-cols-12 col-span-12 row-span-12 gap-4">
        <div className="col-span-9 grid grid-cols-9 gap-4">
          <Card className="col-span-9">
            <CardHeader>
              <CardTitle className="flex font-bold items-center">
                <User className="mr-2" />
                Applicant Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 grid-row-1">
              <div className="grid-cols-3 row-span-1 grid-rows-5 grid col-span-1 gap-4">
                <div className="grid col-span-1 row-span-1">
                  <div className="opacity-66 font-medium">LAST NAME</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.nom}</div>
                </div>

                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">FIRST NAME</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.prenom}</div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">EMAIL</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{customerReturn.email}</div>
                </div>

                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">PHONE</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">
                    {userMockData.telephone_mobile}
                  </div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">CREATED</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">
                    {userMockData.date_creation_compte}
                  </div>
                </div>
              </div>
              <div className="grid-cols-3 row-span-1 grid-rows-5 grid col-span-1 gap-4">
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">ADRESS</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.adresse}</div>
                </div>

                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">CITY</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.ville}</div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">CODE POSTAL</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.code_postal}</div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">COUNTRY</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">{userMockData.pays}</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-9">
            <CardHeader>
              <CardTitle className="flex font-bold items-center">
                <IterationCcw className="mr-2" />
                Informations on the Return
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 grid-row-1">
              <div className="grid-cols-3 row-span-1 grid-rows-3 grid col-span-1 gap-4">
                <div className="grid col-span-1 row-span-1">
                  <div className="opacity-66 font-medium">AMOUNT</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-bold">{customerReturn.amount}€</div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">PRODUCT</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">PRODUCT A</div>
                </div>
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66 over">REASON</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">Taille inappropriée</div>
                </div>
              </div>
              <div className="grid-cols-3 row-span-1 grid-rows-3 grid col-span-1 gap-4">
                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">CARRIER</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">CHRONOPOST</div>
                </div>

                <div className="grid col-span-1 row-span-1">
                  <div className="font-medium opacity-66">REF</div>
                </div>
                <div className="grid col-span-2">
                  <div className="font-medium">
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-9">
            <CardHeader>
              <CardTitle className="flex font-bold items-center">
                <Camera className="mr-2" />
                Photos
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 grid-row-1">
              <div className="grid col-span-2 grid-cols-3 gap-4">
                <Card className="border-none shadow-none p-0">
                  <CardContent className="aspect-square p-0  border-2 rounded-xl">
                    {" "}
                    <Image
                      src="https://placehold.co/600x400"
                      width={600}
                      height={400}
                      alt="Image 2"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
                <Card className="border-none shadow-none p-0">
                  <CardContent className="aspect-square p-0 border-2 rounded-xl">
                    {" "}
                    <Image
                      src="https://placehold.co/600x400"
                      width={600}
                      height={400}
                      alt="Image 2"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>{" "}
                <Card className="border-none shadow-none p-0">
                  <CardContent className="aspect-square p-0 border-2 rounded-xl">
                    {" "}
                    <Image
                      src="https://placehold.co/600x400"
                      width={600}
                      height={400}
                      alt="Image 2"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-9">
            <CardHeader>
              <CardTitle className="flex font-bold items-center">
                <Camera className="mr-2" />
                User comment
              </CardTitle>
            </CardHeader>
            <CardContent className="">
              <Card className="relative w-full max-w-md m-auto bg-muted/70 shadow-none border-none">
                <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
                <CardHeader className="py-5">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1">
                      <span className="text-[15px] leading-none font-semibold">
                        shadcn
                      </span>
                      <span className="text-sm leading-none text-muted-foreground">
                        @shadcn
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ullamcorper, augue at commodo interdum, erat dolor
                    egestas eros, eu finibus turpis nunc at purus. Sed elementum
                    rutrum nibh, a egestas turpis porttitor eu.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-3 flex flex-col items-center">
          <Timeline
            items={items}
            activeItem={2}
            bulletSize={15}
            lineSize={2}
          ></Timeline>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex font-bold items-center">
                <Notebook className="mr-2" />
                Notes
              </CardTitle>
              <CardDescription>
                Enter your notes about this client
              </CardDescription>
            </CardHeader>
            <CardContent>
              {" "}
              <Textarea></Textarea>
            </CardContent>
            <CardFooter className="flex">
              
              <Button className="ml-auto">Enregistrer</Button>
            </CardFooter>{" "}
          </Card>
        </div>
      </section>
      <Link href="/dashboard/manage">
                <Button variant="outline" className="mt-4">Retour</Button>
              </Link>
    </div>
  );
}
