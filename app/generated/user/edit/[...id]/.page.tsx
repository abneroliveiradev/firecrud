export default function UserEditPage({ params }: { params: { id: string } }) {
  console.log(params);
  return <p>Form de Edição ID: {params.id}</p>;
  }