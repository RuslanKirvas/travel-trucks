import { fetchCampers } from "@/app/services/campers";

export default async function HomePage() {
  // Робимо запит до бекенду
  const data = await fetchCampers({ page: 1, perPage: 5 });

  console.log("Отримано кемперів:", data.campers.length); // Виведе 5
  console.log("Всього кемперів:", data.total); // Виведе 60

  return (
    <div>
      <h1>Головна сторінка</h1>
      <p>Кемперів на першій сторінці: {data.campers.length}</p>
    </div>
  );
}
