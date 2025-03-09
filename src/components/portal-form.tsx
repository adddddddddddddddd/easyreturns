"use client";

import { z } from "zod";
import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Store, House, CircleCheck } from "lucide-react";

const ReturnMethod = {
  dropOff: { label: "Déposer en magasin", Icon: Store },
  pickup: { label: "Ramasser à domicile", Icon: House },
} as const;
const formSchema = z.object({
  productId: z.string().min(1, "Veuillez sélectionner un produit."),
  reason: z.string().min(1, "Veuillez sélectionner un motif."),
  returnMethod: z.enum(
    [ReturnMethod.dropOff.label, ReturnMethod.pickup.label],
    {
      errorMap: () => ({ message: "Veuillez choisir un mode de retour." }),
    }
  ),
  additionalDetails: z
    .string()
    .max(500, "Le message ne peut pas dépasser 500 caractères.")
    .optional(),
});

type FormType = z.infer<typeof formSchema>;

const products = [
  { id: "1", name: "Produit A" },
  { id: "2", name: "Produit B" },
  { id: "3", name: "Produit C" },
];
const reasons = [
  { id: "1", name: "Produit défectueux" },
  { id: "2", name: "Mauvaise taille" },
  { id: "3", name: "Couleur incorrecte" },
  { id: "4", name: "Autre" },
];

export function PortalForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: "",
      reason: "",
      returnMethod: undefined,
      additionalDetails: "",
    },
  });

  const onSubmit = (data: FormType) => {
    console.log("Données validées ✅", data);
  };

  return (
    <>
      <Card className="w-[350px] m-auto">
        <CardHeader>
          <CardTitle>Retournez votre produit</CardTitle>
          <CardDescription>
            Validez les options pour retourner votre produit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="productId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Produit</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sélectionner un produit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Produits</SelectLabel>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Produit que vous voulez retourner.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motif</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sélectionner le motif de votre retour " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Motifs</SelectLabel>
                            {reasons.map((reason) => (
                              <SelectItem key={reason.id} value={reason.id}>
                                {reason.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Raison pour laquelle vous retourner le
                      produit.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="returnMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mode de retour</FormLabel>
                    <FormControl>
                      <RadioGroup.Root
                        onValueChange={field.onChange}
                        value={field.value}
                        className="max-w-md w-full grid grid-cols-2 gap-4"
                      >
                        {Object.values(ReturnMethod).map((method) => (
                          <RadioGroup.Item
                            key={method.label}
                            value={method.label}
                            className={cn(
                              "relative group ring-[1px] ring-border rounded py-2 px-3 text-start",
                              "data-[state=checked]:ring-2 data-[state=checked]:ring-blue-500"
                            )}
                          >
                            <CircleCheck className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-6 w-6 text-primary fill-blue-500 stroke-white group-data-[state=unchecked]:hidden" />

                            <method.Icon className="mb-2.5 text-muted-foreground" />
                            <span className="font-semibold tracking-tight">
                              {method.label}
                            </span>
                            {/* <p className="text-xs">{method.description}</p> */}
                          </RadioGroup.Item>
                        ))}
                      </RadioGroup.Root>
                    </FormControl>
                    <FormDescription>
                      Mode de retour que vous préférez.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Détails supplémentaires</FormLabel>
                    <FormControl>
                        <Textarea placeholder="J'aurais aimé..." {...field}/>
                    </FormControl>
                    <FormDescription>
                      Épliquez-nous votre décision.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="flex justify-center">
                <Button type="submit">Valider le retour</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
