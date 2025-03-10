import { notFound } from "next/navigation";

interface Return {
  id: string;
  amount: number;
  status: "success" | "failed" | "pending" | "processing";
  email: string;
  dateOfRequest: string;
}

const returns: Return[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com", dateOfRequest: "2025-02-01" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@gmail.com", dateOfRequest: "2025-02-01" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@gmail.com", dateOfRequest: "2025-02-02" },
  { id: "5kma53ae", amount: 874, status: "success", email: "Silas22@gmail.com", dateOfRequest: "2025-02-03" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com", dateOfRequest: "2025-02-06" },
];

export default async function ReturnPage({ params }: { params: { id: string } }) {
  // Awaiting `params` before using
  const customerReturn = returns.find((p) => p.id === params.id);

  if (!customerReturn) {
    notFound(); // 🔥 Redirige vers une page 404 si le retour n'est pas trouvé
  }

  return (
    <div>
      <h1>Détails du retour</h1>
      <p><strong>ID :</strong> {customerReturn.id}</p>
      <p><strong>Montant :</strong> {customerReturn.amount} €</p>
      <p><strong>Statut :</strong> {customerReturn.status}</p>
      <p><strong>Email :</strong> {customerReturn.email}</p>
      <p><strong>Date :</strong> {customerReturn.dateOfRequest}</p>
    </div>
  );
}
