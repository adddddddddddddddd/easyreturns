import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LabelGenerator() {
  return (
    <div className="h-svh flex justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
            <CardTitle>Generate label</CardTitle>
            <CardDescription>Generate a label to stick on your package</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center m-4">
        
          <Button>Generate label</Button>{" "}
        </CardContent>{" "}
        <CardFooter className="flex justify-between">
          <Link href="/portal/photos">
            {" "}
            <Button variant={"secondary"}>Retour</Button>
          </Link>
          <Link href="/portal/photos/label-generator">
            <Button type="submit">Accéder à votre Dashboard</Button>
          </Link>
        </CardFooter>
      </Card>{" "}
    </div>
  );
}
