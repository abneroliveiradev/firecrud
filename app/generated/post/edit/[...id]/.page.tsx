export default function PostEditPage({ params }: { params: { id: string } }) {
  console.log(params);
  return <p>Form de Edição ID: {params.id}</p>;
  }