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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { User } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { TimelineItemSmallText } from "@/components/ui/timeline";

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
    <div className="max-w-screen-lg mx-auto w-full p-4 grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <Card>
          <CardHeader className="">
            <CardTitle className="flex font-bold items-center">
              <User className="mx-2" />
              Applicant Details
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="w-full">
          {/* En-tête */}
          <CardHeader>
            <CardTitle className="">Retour {customerReturn.id}</CardTitle>
            <CardDescription className="text-center">
              {getStatusBadge(customerReturn.status)}
              <p>Demandé le {customerReturn.dateOfRequest}</p>
            </CardDescription>
          </CardHeader>
          <Separator />
          {/* Informations Principales */}
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center w-full">
                <Label>Email :</Label>
                <p className="opacity-75">{customerReturn.email}</p>
              </div>
              <div className="flex flex-col items-center w-full">
                <Label>Montant :</Label>
                <p className="opacity-75">{customerReturn.amount}€</p>
              </div>
            </div>
            <Separator className="my-4" />
            {/* Détails du Produit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center w-full">
                <Label>Produit concerné :</Label>
                <p className="opacity-75">Produit A</p>
              </div>
              <div className="flex flex-col items-center w-full">
                <Label>Référence :</Label>
                <p className="opacity-75">
                  {Math.random().toString(36).substring(2, 10).toUpperCase()}
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            {/* Motif et Commentaire */}
            <div className="flex flex-col items-center w-full">
              <Label>Motif du retour :</Label>
              <p className="opacity-75">Taille inappropriée</p>
            </div>
            <div className="flex flex-col mt-4 items-center w-full">
              <Label>Commentaire :</Label>
              <p className="opacity-50 text-sm">
                Trop petit, souhaité plus grand
              </p>
            </div>
            <Separator className="my-4" />
            {/* Historique / Timeline */}
            <div className="flex flex-col items-center w-full">
              <div>
                <Label>Historique / Timeline :</Label>
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  <li>01/02/2025 : Demande créée</li>
                  <li>02/02/2025 : Notification envoyée</li>
                  <li>03/02/2025 : Retour en cours de traitement</li>
                </ul>
              </div>
            </div>
            <Separator className="my-4" />
            {/* Pièces Jointes */}
            <div className="flex flex-col items-center w-full">
              <Label>Pièces Jointes :</Label>
              <div className="flex gap-2 mt-2">
                <Image
                  src="https://placehold.co/600x400"
                  alt="Image 1"
                  width={600}
                  height={400}
                  className="h-16 w-16 object-cover rounded-md"
                />
                <Image
                  src="https://placehold.co/600x400"
                  width={600}
                  height={400}
                  alt="Image 2"
                  className="h-16 w-16 object-cover rounded-md"
                />
              </div>
            </div>
            <Separator className="my-4" />
            {/* Notes Internes */}
            <div className="flex flex-col">
              <Label>Notes Internes :</Label>
              <p className="text-sm text-muted-foreground">
                Vérifier la conformité du produit retourné.
              </p>
            </div>
          </CardContent>
          {/* Footer / Actions */}
          <CardFooter className="flex justify-between">
            <Link href="/dashboard/manage">
              <Button variant="outline">Retour</Button>
            </Link>
            <Button>Modifier</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-3">
        <Timeline
          items={items}
          activeItem={2}
          bulletSize={15}
          lineSize={2}
        ></Timeline>
      </div>
    </div>
  );
}
