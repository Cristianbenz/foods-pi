import Card from "../card";

export default function CardsList() {
  return (
    <section>
      <Card
        id
        name="Pasta Frola"
        image="https://d320djwtwnl5uo.cloudfront.net/recetas/cover/pasta_KDw02RFfquAGvZ8hYx9tLbNWcnslCT.png"
        healthScore={90}
        diets={["Vegetariano", "Carnivoro", "Taloquito"]}
      />
    </section>
  );
}
