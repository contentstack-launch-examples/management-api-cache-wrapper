async function fetchContentTypes() {
  try {
    const response = await fetch(`${process.env.HOST}/api/content-types`);
    return response.json();
  } catch (error) {
    console.error("Error fetching content types:", error);
  } finally {
  }
}

export default async function Home() {
  const contentTypes = await fetchContentTypes();

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Contentstack Content Types</h1>
      <ul className="list-disc pl-6">
        {contentTypes.map((type: any) => (
          <li key={type.uid}>{type.title}</li>
        ))}
      </ul>
    </main>
  );
}

export const revalidate = 0;
