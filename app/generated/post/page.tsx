export default function POSTPage({
  children,
  }: {
  children: React.ReactNode;
  }) {
  return (
  <div className="px-8 py-12 sm:py-16 md:px-20">
    <h1 className="text-3xl font-semibold text-black">
      POST
    </h1>
    <div className=" mt-8 lg:grid-cols-3">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  </div>
  );
  }